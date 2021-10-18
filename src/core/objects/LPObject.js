module.exports = class LPObject {
    constructor({context, name, expression}) {
        if (context == null) throw new Error(`Invalid context!`)
        this._context = context
        this._name = name
        this._expression = expression || name
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
}