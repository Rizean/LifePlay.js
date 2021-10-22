const assert = require('assert')
const fs = require('fs/promises')
const path = require('path')
const LPMod = require('../LPMod')

const ensureDirectory = async (dirPath) => fs.mkdir(dirPath, {recursive: true})

const SPACE = ' '
const LINE_ENDDING = '\r\n'

const LPFloat = require('./objects/LPFloat')
const LPBoolean = require('./objects/LPBoolean')
const LPString = require('./objects/LPString')
const LPObject = require('./objects/LPObject')
const LPGlobals = require('./objects/LPGlobals')
const {NodeVM} = require("vm2")
const parser = require('./parser')

module.exports = class Context {
    constructor({lpMod}) {
        this._code = ''
        this._codeDepth = 0
        this._inline = false
        this._build = {}
        assert.ok(lpMod instanceof LPMod, 'Expected lpMod to be instanceof LPMod')
        this._lpMod = lpMod
    }

    require = require

    writeLine(line) {
        let padding = ''.padStart(this._codeDepth, SPACE)
        const isEmpty = line.trim() === ''
        if (this._inline) this._code += `${line}; `
        else if (isEmpty) this._code += LINE_ENDDING
        else this._code += `${padding}${line}${LINE_ENDDING}`
    }

    $if = (condition, script) => {
        condition = (condition instanceof LPObject) ? condition.expression : condition
        this.writeLine(`If ${condition}`)
        if (!script) return
        this.codeDepth += 2
        script()
        this.codeDepth -= 2

        const $endIf = () => this.writeLine('EndIf')

        const $else = (script) => {
            this.writeLine(`Else`)
            this.codeDepth += 2
            script.call(this)
            this.codeDepth -= 2
            return {$endIf}
        }
        const $elseIf = (condition, script) => {
            condition = (condition instanceof LPObject) ? condition.expression : condition
            this.writeLine(`ElseIf ${condition}`)
            this.codeDepth += 2
            script()
            this.codeDepth -= 2
            return {$else, $elseIf, $else$if: $elseIf, $endIf}
        }

        return {$else, $elseIf, $else$if: $elseIf, $endIf}
    }

    $while = (condition, script) => {
        this.writeLine(`While ${condition.expression || condition}`)
        this.codeDepth += 2
        script()
        this.codeDepth -= 2
        this.writeLine('EndWhile')
    }
    option = (options) => {
        options.map(({condition, text}, i) => {
            this.writeLine(`${i}:: ${condition ? `${condition.expression}:: ` : ''}"${text}"`)
        })
        // add empty line after last choice as the docs say "not entirely sure why, but an empty line here is crucial"
        this.writeLine(``)
    }
    choice = (n) => {
        if (parseInt(n) > -1) return `choice == ${n}`
        else return `choice`
    }
    /**
     * returns a random float number between the entered float parameters. Commonly used to influence the chance a condition is true based on an actor stat.
     * @param {number} min random value
     * @param {number} max random value
     * @param {string=} name of variable, defaults to lpjs_random_min_max
     * @return {LPFloat}
     */
    random = (min, max, name) => {
        const expression = `Random(${min}, ${max})`
        if (name) this.writeLine(`${name} = ${expression}`)
        return new LPFloat({context: this, lpMod: this.lpMod, name, expression})
    }
    $random = (script) => {
        this.writeLine(`Random`)
        this.codeDepth += 2
        script()
        this.codeDepth -= 2
        this.writeLine('EndRandom')
    }
    $not = (lpBoolean) => {
        return new LPBoolean({context: this, lpMod: this.lpMod, name: lpBoolean.name, expression: `!${lpBoolean.expression}`})
    }
    not = (lhs, name) => lhs.not(name)
    and = (lhs, rhs) => lhs.and(rhs)
    or = (lhs, rhs) => lhs.or(rhs)
    gt = (lhs, rhs) => lhs.gt(rhs)
    lt = (lhs, rhs) => lhs.lt(rhs)

    // $lb = () => this.writeLine('')

    float = (expression, name) => {
        if (typeof expression === 'number') {
            this.writeLine(`${name} = ${expression}`)
            return new LPFloat({context: this, lpMod: this.lpMod, name, expression: name})
        }
        if (expression instanceof LPFloat) {
            if (name) this.writeLine(`${name} = ${expression}`)
            return expression
        }
        return new LPFloat({context: this, lpMod: this.lpMod, name, expression: expression})
    }

    boolean = (expression, name) => {
        if (typeof expression === 'boolean') {
            this.writeLine(`${name} = ${expression}`)
            return new LPBoolean({context: this, lpMod: this.lpMod, name, expression: name})
        }
        if (expression instanceof LPBoolean) {
            if (name) this.writeLine(`${name} = ${expression}`)
            return expression
        }

        return new LPBoolean({context: this, lpMod: this.lpMod, name, expression: expression})
    }
    // _boolean = (expression, name) => {
    //     throw new Error('deprecated')
    //     return this.boolean(expression, name)
    //
    //     return new LPBoolean({context: this, name, expression})
    // }
    string = (expression, name) => {
        if (typeof expression === 'string') {
            this.writeLine(`${name} = "${expression}"`)
            return new LPString({context: this, lpMod: this.lpMod, name, expression: name})
        }
        if (expression instanceof LPString) {
            if (name) this.writeLine(`${name} = ${expression}`)
            return expression
        }

        return new LPString({context: this, lpMod: this.lpMod, name, expression: expression})
    }

    _enclose = (LPObject, a, b) => {
        return new LPObject.constructor({context: LPObject.context, lpMod: this.lpMod, name: LPObject.name, expression: `${a}${LPObject.expression}${b}`})
    }
    paren = (LPObject) => {
        return this._enclose(LPObject, '(', ')')
    }

    squareBrackets = (LPObject) => {
        return this._enclose(LPObject, '[', ']')
    }

    buildV2(sandbox = {}, script, context) {
        this._build = {}
        sandbox.globals = {}
        const globals = new LPGlobals({context, lpMod: this._lpMod})
        globals.hookSandbox(sandbox.globals)


        // console.log('buildV2 - sandbox', sandbox)
        const vm = new NodeVM({
            timeout: 10 * 1000,
            console: 'inherit',
            require: {
                // external: {modules: this.modules},
                // builtin: ['fs', 'path'],
                root: "./",
            },
            sandbox,
        })

        // console.log('buildV2 script', script)
        // const _script = `module.exports = ${preprocessor('' + script)}`



        const _script = [
            `Object.keys(globals).forEach((k) => global[k] = globals[k])`,
            `module.exports = ${'' + script}`
        ].join('\n')
        this._build.script = _script
        const {intermediate, parsed, logs} = parser(_script)
        this._build.intermediate = intermediate
        this._build.parsed = parsed
        this._build.logs = logs
        console.log('intermediate', intermediate)
        const functionInSandbox = vm.run(intermediate, __filename)

        // console.log(functionInSandbox)
        const condition = (rhs) => rhs.write()
        const $IF = (rhs) => ({
            write: () => this.writeLine(`If ${rhs.expression || rhs}`)
        })

        functionInSandbox(context, condition, $IF)
        this._build.lpcode = this._code
        return this._build.lpcode
    }


    async writeFiles({buildPath, filePath, fileName, type, debug = false}) {
        if (type !== 'scene') throw new Error(`Unsupported type! ${type}`)
        buildPath = path.resolve(__dirname, '../../', buildPath)
        const filePathDir = path.resolve(buildPath, filePath)
        await ensureDirectory(filePathDir)
        filePath = path.resolve(filePathDir, `${fileName}.lpscene`)
        const debugPath = path.resolve(filePathDir, `${fileName}.debug.json`)
        const promises = []
        promises.push(fs.writeFile(filePath, this._build.lpcode, 'utf-8'))
        const debugOut = {
            script: this._build.script.split(/\r?\n/),
            intermediate: this._build.intermediate.split(/\r?\n/),
            logs: this._build.logs,
            lpcode: this._build.lpcode.split(/\r?\n/),
            parsed: this._build.parsed,
        }
        if (debug) promises.push(fs.writeFile(debugPath, JSON.stringify(debugOut, null, 2), 'utf-8'))
        return Promise.all(promises)
    }

    get codeDepth() {
        return this._codeDepth
    }

    set codeDepth(depth) {
        return this._codeDepth = depth
    }

    get code() {
        return this._code
    }

    // get localVariable() {
    //     return this._localVariable
    // }
    //
    // get localVariableIndex() {
    //     return this._localVariableIndex
    // }

    get lpMod() {
        return this._lpMod
    }
}