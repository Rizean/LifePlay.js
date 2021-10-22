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
     * @return {LPBoolean}
     */
    and(rhs) {
        const [, name] = arguments
        rhs = rhs.expression || rhs
        if (name) {
            this.context.writeLine(`${name} = ${this.expression} && ${rhs}`)
            return new LPBoolean({context: this.context, lpMod: this.lpMod, name, expression: name})
        }
        return new LPBoolean({context: this.context, lpMod: this.lpMod, name: this.name, expression: `${this.expression} && ${rhs}`})
    }

    /**
     * Logical or
     * @param rhs
     * @return {LPBoolean}
     */
    or(rhs) {
        const [, name] = arguments
        rhs = rhs.expression || rhs
        if (name) {
            this.context.writeLine(`${name} = ${this.expression} || ${rhs}`)
            return new LPBoolean({context: this.context, lpMod: this.lpMod, name, expression: name})
        }
        return new LPBoolean({context: this.context, lpMod: this.lpMod, name: this.name, expression: `${this.expression} || ${rhs}`})
    }

    /**
     * Logical not
     * @return {LPBoolean}
     */
    not() {
        const [name] = arguments
        return this._enclose('!(', ')', name)
    }
}