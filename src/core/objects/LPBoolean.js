const LPVariable = require('./LPVariable')
module.exports = class LPBoolean extends LPVariable {
    /**
     * Assigns the value of rhs to this
     * @param {boolean|LPBoolean} rhs
     * @return {LPBoolean}
     */
    assign(rhs) {
        // noinspection JSValidateTypes
        return super.assign(rhs, 'boolean', LPBoolean)
    }

    /**
     * Logical and
     * @param {boolean|LPBoolean} rhs
     * @param {string=} name optional name handled by parser
     * @return {LPBoolean}
     */
    and = (rhs, name) => {
        rhs = rhs.expression || rhs
        if (name) {
            this.context.writeLine(`${name} = ${this.expression} && ${rhs}`)
            return new LPBoolean({context: this.context, name, expression: name})
        }
        return new LPBoolean({context: this.context, name: this.name, expression: `${this.expression} && ${rhs}`})
    }

    /**
     * Logical or
     * @param rhs
     * @param {string=} name optional name handled by parser
     * @return {LPBoolean}
     */
    or = (rhs, name) => {
        rhs = rhs.expression || rhs
        if (name) {
            this.context.writeLine(`${name} = ${this.expression} || ${rhs}`)
            return new LPBoolean({context: this.context, name, expression: name})
        }
        return new LPBoolean({context: this.context, name: this.name, expression: `${this.expression} || ${rhs}`})
    }

    /**
     * Logical not
     * @param {string=} name optional name handled by parser
     * @return {LPBoolean}
     */
    not = (name) => {
        return this._enclose('!(', ')', name)
        // return this._enclose('!', '')
    }

    write() {
        this.context.writeLine(`${this.expression}`)
        return this
        // this._expression = this.name
    }
}