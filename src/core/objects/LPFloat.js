const LPVariable = require('./LPVariable')
const LPBoolean = require('./LPBoolean')

/**
 * Class representing a LifePlay float.
 * @type {LPFloat}
 */
class LPFloat extends LPVariable {
    constructor({context, lpMod, value = Number.NaN, name, expression, isStat = false}) {
        super({context, lpMod, name, expression: expression || name})
        this.value = value
        this._isStat = isStat
    }

    /**
     * Operator helper function
     * @param op
     * @param rhs
     * @param name
     * @param ReturnType
     * @return {LPFloat|*}
     * @private
     */
    _opHelper = ({op, aop, rhs, name, ReturnType = LPFloat, noChain}) => {
        rhs = rhs.expression || rhs
        // if (noChain) this._noChain(noChain)
        if (name) {
            this.context.writeLine(`${name} = ${this.expression} ${op} ${rhs}`)
            return new ReturnType({context: this.context, lpMod: this.lpMod, name, expression: name})
        }
        if (aop) {
            this.context.writeLine(`${this.name} ${aop} ${rhs.expression || rhs}`)
        }
        return new ReturnType({context: this.context, lpMod: this.lpMod, name: this.name, expression: `${this.expression} ${op} ${rhs}`})
    }

    /**
     * Function helper function
     * @param func
     * @param noChain
     * @param name
     * @param params
     * @param ReturnType
     * @return {LPFloat}
     * @private
     */
    _funcHelper = ({func, noChain = false, name, params = '', ReturnType = LPFloat}) => {
        // if (noChain) this._noChain('floor')
        const expression = `${this.expression}.${func}(${params})`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new ReturnType({context: this.context, lpMod: this.lpMod, name: this.name, expression})
    }

    /**
     * this + rhs
     * @param {number|LPObject} rhs
     * @return {LPFloat}
     */
    add(rhs) {
        const [, name] = arguments
        return this._opHelper({op: '+', rhs, name})
    }

    /**
     * this - rhs
     * @param {number|LPObject} rhs
     * @return {LPFloat}
     */
    sub(rhs) {
        const [, name] = arguments
        return this._opHelper({op: '-', rhs, name})
    }


    /**
     * this / rhs
     * @param {number|LPObject} rhs
     * @return {LPFloat}
     */
    div(rhs) {
        const [, name] = arguments
        return this._opHelper({op: '/', rhs, name})
    }

    /**
     * this * rhs
     * @param {number|LPObject} rhs
     * @return {LPFloat}
     */
    mul(rhs) {
        const [, name] = arguments
        return this._opHelper({op: '*', rhs, name})
    }

    /**
     * this += rhs
     * @param {string=} name optional name handled by parser
     * @param {number|LPObject} rhs
     */
    addEq(rhs) {
        return this._opHelper({aop: '+=', rhs, noChain: 'addEq'})
    }

    /**
     * this -= rhs
     * @param {number|LPObject} rhs
     */
    subEq(rhs) {
        return this._opHelper({aop: '-=', rhs, noChain: 'subEq'})
    }

    /**
     * this *= rhs
     * @param {number|LPObject} rhs
     */
    mulEq(rhs) {
        return this._opHelper({aop: '*=', rhs, noChain: 'mulEq'})
    }

    /**
     * this /= rhs
     * @param {number|LPObject} rhs
     */
    divEq(rhs) {
        return this._opHelper({aop: '/=', rhs, noChain: 'divEq'})
    }

    /**
     * Assigns the value of n to this
     * @param {number|LPObject} n
     * @return {LPFloat}
     */
    assign(n) {
        const [, name] = arguments
        // todo can we super.assign here?
        if (this.isStat) {
            this.context.writeLine(`${this.name} => ${n.expression || n}`)
            return this
        }
        return super.assign(n, 'number', LPFloat, name)
    }

    /**
     * this > rhs
     * @param {number|LPObject} rhs
     * @return {LPBoolean}
     */
    gt(rhs) {
        const [, name] = arguments
        return this._opHelper({op: '>', rhs, name, ReturnType: LPBoolean})
    }

    /**
     * this >= rhs
     * @param {number|LPObject} rhs
     * @return {LPBoolean}
     */
    gte(rhs) {
        const [, name] = arguments
        return this._opHelper({op: '>=', rhs, name, ReturnType: LPBoolean})
    }

    /**
     * this < rhs
     * @param {number|LPObject} rhs
     * @return {LPBoolean}
     */
    lt(rhs) {
        const [, name] = arguments
        return this._opHelper({op: '<', rhs, name, ReturnType: LPBoolean})
    }


    /**
     * this <= rhs
     * @param {number|LPObject} rhs
     * @return {LPBoolean}
     */
    lte(rhs) {
        const [, name] = arguments
        return this._opHelper({op: '<=', rhs, name, ReturnType: LPBoolean})
    }

    /**
     * this != rhs
     * @param {number|LPObject} rhs
     * @return {LPBoolean}
     */
    ne(rhs) {
        const [, name] = arguments
        return this._opHelper({op: '!=', rhs, name, ReturnType: LPBoolean})
    }

    /**
     * this == rhs
     * @param {number|LPObject} rhs
     * @return {LPBoolean}
     */
    eq(rhs) {
        const [, name] = arguments
        return this._opHelper({op: '==', rhs, name, ReturnType: LPBoolean})
    }

    /**
     * Use this function to get the integer value of a float variable.
     * Any value less than x.3 / x.5 / x.8 will be rounded down to "x".
     * @return {LPFloat}
     */
    floor() {
        const [name] = arguments
        return this._funcHelper({func: 'floor', noChain: true, name, params: '', ReturnType: LPFloat})
    }


    /**
     * Float raised to the power of rhs.
     * @param {number|LPFloat} rhs
     * @return {LPFloat}
     */
    power(rhs) {
        const [, name] = arguments
        return this._funcHelper({func: 'power', noChain: true, name, params: `${rhs.expression || rhs}`, ReturnType: LPFloat})
    }


    /**
     * Use this function mathematically round a float variable.
     * Any value less than x.5 will be rounded down to "x" anything larger or equal to
     * x.5 will be rounded up to x+1.
     * @return {LPFloat}
     */
    round() {
        const [name] = arguments
        this._funcHelper({func: 'round', noChain: true, name, params: ``, ReturnType: LPFloat})
    }


    /**
     * Converts a dollar value to the local currency for the home city in string format.
     * @return {LPFloat}
     */
    convertToLocalCurrency() {
        const [name] = arguments
        this._funcHelper({func: 'convertToLocalCurrency', noChain: true, name, params: ``, ReturnType: LPFloat})
    }

    /**
     * Set this as your current monthly fraternity fees.
     * @example
     * var FratFee = float('FratFee', 1000)
     * FratFee.setFraternityFees()
     * scene.narrative("I agreed to pay $1000 per month for fraternity fees")
     * @param {number|LPFloat} fratFee
     * @return {LPFloat} - reference to this for chaining
     */
    setFraternityFees() {
        // this._noChain('setRent')
        this.context.writeLine(`${this.name}.setFraternityFees()`)
    }

    /**
     * Set this as your current rent.
     * @example
     * var Landlord = scene.generatePerson()
     * Landlord.dress()
     * Landlord.show(2)
     * scene.narrative("I signed the contract.")
     * Player.moveHome()
     * var Rent = float('Rent', 1000)
     * Landlord.setLandlord()
     * Rent.setRent()
     */
    setRent() {
        // this._noChain('setRent')
        this.context.writeLine(`${this.name}.setRent()`)
    }

    /**
     * Set this as your current salary.
     * @example
     * scene.narrative("I signed the contract.")
     * Player.moveJobs()
     * var Salary = float('Salary', 2000)
     * Interviewer.setBoss()
     * Salary.setSalary()
     */
    setSalary() {
        // this._noChain('setSalary')
        this.context.writeLine(`${this.name}.setSalary()`)
    }

    /**
     * Set this as your current monthly tuition fees.
     * @example
     * var Tuition = float('Tuition', 1000)
     * Tuition.setTuition()
     * scene.narrative("I agreed to pay $1000 per month for tuition")
     */
    setTuition() {
        // this._noChain('setTuition')
        this.context.writeLine(`${this.name}.setTuition()`)
    }

    get isStat() {
        return this._isStat
    }

    set isStat(value) {
        this._isStat = value
    }
}

module.exports = LPFloat