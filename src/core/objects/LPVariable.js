const LPObject = require('./LPObject')

module.exports = class LPVariable extends LPObject {
    /**
     * Assigns the value of rhs to this
     * @param {boolean|string|number|LPObject} rhs
     * @return {LPObject|*}
     * @extends LPObject
     */
    assign(rhs) {
        const [, type, instanceType, name] = arguments
        const rhsType = (typeof rhs).toLowerCase()
        const hasType = !(type == null)
        const hasIType = !(instanceType == null)
        const typeMatched = hasType && rhsType === type
        const iTypeMatched = hasIType && rhs instanceof instanceType

        if ((hasType && hasIType) && !(typeMatched || iTypeMatched)) {
            throw new TypeError(`Expected rhs to be typeof ${type} or instanceof ${instanceType.name}!`)

        } else if (!hasIType && hasType && rhsType !== type) {
            throw new TypeError(`Expected rhs to be typeof ${type} but found ${rhsType}!`)

        } else if (!hasType && hasIType && !iTypeMatched) {
            throw new TypeError(`Expected rhs to be instanceof ${instanceType.name} but found ${rhs.constructor.name}!`)

        }

        const newThis = new this.constructor({context: this.context, lpMod: this.lpMod, name: name || this.name, expression: name})
        this.context.writeLine(`${newThis.name} = ${rhs._expression || rhs}`)
        return newThis
    }

    /**
     *
     * @param a
     * @param b
     * @param name
     * @return {LPVariable}
     * @private
     */
    _enclose = (a, b, name) => {
        const expression = `${a}${this.expression}${b}`
        if (name) {
            this.context.writeLine(`${name} = ${expression}`)
            return new this.constructor({context: this.context, lpMod: this.lpMod, name: this.name, expression: this.name})
        }
        return new this.constructor({context: this.context, lpMod: this.lpMod, name: this.name, expression: `${a}${this.expression}${b}`})
    }

    /**
     *
     * @param prefix
     * @return {LPVariable}
     * @private
     */
    write(prefix = '') {
        this.context.writeLine(`${prefix}${this.expression}`)
        return this
    }
}