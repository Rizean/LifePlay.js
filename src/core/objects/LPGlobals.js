const LPObject = require('./LPObject')
const LPString = require('./LPString')
const LPFloat = require('./LPFloat')

module.exports = class LPGlobals extends LPObject {
    constructor({context, lpMod}) {
        super({context, lpMod});
    }

    /**
     * Internal private function used by parser
     * @private
     * @param sandbox
     */
    hookSandbox() {
        global.comment = (...params) => this.comment(...params)
        global.clearGlobal = (...params) => this.clearGlobal(...params)
        global.enterString = (...params) => this.enterString(...params)
        global.getGlobal = (...params) => this.getGlobal(...params)
        global.getGlobalString = (...params) => this.getGlobalString(...params)
        global.setGlobal = (...params) => this.setGlobal(...params)
        global.setGlobalString = (...params) => this.setGlobalString(...params)
        global.setHomeCity = (...params) => this.setHomeCity(...params)
    }

    /**
     * Delete this global variable completely.
     */
    clearGlobal(key) {
        this.lpMod.deleteGlobal(key)
        this.context.writeLine(`${key}.clearGlobal()`)
    }

    /**
     * Adds a comment to the final code output.
     * @param text
     */
    comment(text) {
        this.context.writeLine(`// ${text}`)
    }

    /**
     * Allow the player text input to make a new string variable which you can then use
     * @return {LPString}
     */
    enterString() {
        const [name] = arguments
        if (!name) throw new Error(`Must call enterString() as an assignment! Example: var myStr = enterString()`)
        this.context.writeLine(`${name} = enterString()`)
        return new LPString({context: this.context, lpMod: this.lpMod, name})
    }

    /**
     * Get the float value of a global variable. If there's no global variable under such name, returns 0.
     * @param key global variable key name
     * @return {LPFloat}
     */
    getGlobal(key) {
        const [, name] = arguments
        const expression = `${key}.getGlobal()`
        const globalType = this.lpMod.getGlobal(key)
        if (!globalType) {
            const text = `Unknown global ${key}!`
            console.warn(text)
            this.comment(text)
        } else if (globalType !== 'float') {
            const text = `Expected global ${key} to be a float but found a ${globalType}!`
            console.warn(text)
            this.comment(text)
        }
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPFloat({context: this, lpMod: this.lpMod, name, expression})
    }

    /**
     * Get the string value of a global variable. If there's no global variable under such name, returns ?.
     * @param key global variable key name
     * @return {LPString}
     */
    getGlobalString(key) {
        const [, name] = arguments
        const expression = `${key}.getGlobalString()`
        const globalType = this.lpMod.getGlobal(key)
        if (!globalType) {
            const text = `Unknown global ${key}!`
            console.warn(text)
            this.comment(text)
        } else if (globalType !== 'string') {
            const text = `Expected global ${key} to be a string but found a ${globalType}!`
            console.warn(text)
            this.comment(text)
        }
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPString({context: this, lpMod: this.lpMod, name, expression})
    }

    /**
     * Set (add if it doesn't already exist) a global variable to a certain number.
     * @param key global variable key name
     * @param {number|LPFloat} float
     */
    setGlobal(key, float) {
        this.lpMod.addGlobal(key, 'float')
        this.context.writeLine(`${key}.setGlobal(${float.name || float})`)
    }

    /**
     * Same as setGlobal(), just string instead of float
     * @param key global variable key name
     * @param str
     */
    setGlobalString(key, str) {
        this.lpMod.addGlobal(key, 'string')
        this.context.writeLine(`${key}.setGlobalString(${str.name || `"${str}"`})`)
    }

    /**
     * Not a clue what this does :D
     */
    setHomeCity() {
        this.context.writeLine(`setHomeCity()`)
    }
}