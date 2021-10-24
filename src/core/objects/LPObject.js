const assert = require('assert')
const LPMod = require('../LPMod')

module.exports = class LPObject {
    constructor({context, lpMod, name, expression, params}) {
        if (context == null) throw new Error(`Invalid context!`)
        this._context = context
        this._name = name
        this._expression = expression || name
        this._params = params

        // fixme
        // assert.ok(lpMod instanceof LPMod, 'Expected lpMod to be instanceof LPMod')
        this._lpMod = lpMod
    }

    // not sure this has any value so removing for now
    // _noChain = (func) => {
    //     if (this._expression !== this.name) throw new Error(`${this.constructor.name}.${func} cannot be chained!`)
    // }

    get expression() {
        return this._expression
    }

    get context() {
        return this._context
    }

    get name() {
        return this._name
    }

    get lpMod() {
        return this._lpMod
    }

    get params() {
        return this._params
    }
}