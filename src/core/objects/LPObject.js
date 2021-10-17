module.exports = class LPObject {
    constructor({context, name, expression}) {
        if (context == null) throw new Error(`Invalid context!`)
        this._context = context
        this._name = name
        this._expression = expression || name
    }

    /**
     * Assigns the value of rhs to this
     * @param {boolean|string|number|LPObject} rhs
     * @return {LPObject|*}
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

        const newThis = new this.constructor({context: this.context, name: name || this.name, expression: name})

        // this.context.writeLine(`${this.name} = ${rhs._expression || rhs}`)
        this.context.writeLine(`${newThis.name} = ${rhs._expression || rhs}`)
        // return this
        return newThis
    }

    _noChain = (func) => {
        if (this._expression !== this.name) throw new Error(`${this.constructor.name}.${func} cannot be chained!`)
    }

    get expression() {
        return this._expression
    }

    get context() {
        return this._context
    }

    get name() {
        return this._name
    }

    // set name(value) {
    //     this._name = value
    // }

    // get codeStr() {
    //     return this._codeStr
    // }
    // set codeStr(val) {
    //     this._codeStr = val
    // }
    // toJSON() {
    //     return {name: this.name, expression: this._expression}
    // }
    // var(name) {
    //     this.context.writeLine(`${this.name || name} = ${this.expression}`)
    //     return this
    // }
}