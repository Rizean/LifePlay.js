const LPObject = require('./LPObject')
module.exports = class LPVariable extends LPObject {
    _enclose = (a, b, name) => {
        const expression = `${a}${this.expression}${b}`
        if (name) {
            this.context.writeLine(`${name} = ${expression}`)
            return new this.constructor({context: this.context, name: this.name, expression: this.name})
        }
        return new this.constructor({context: this.context, name: this.name, expression: `${a}${this.expression}${b}`})
    }

    paren = (name) => {
        return this._enclose('(', ')', name)
    }

    squareBrackets = (name) => {
        return this._enclose('[', ']', name)
    }
}