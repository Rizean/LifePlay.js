const LPVariable = require('./LPVariable')
const LPBoolean = require('./LPBoolean')

class LPFloat extends LPVariable {
    constructor({context, value = Number.NaN, name, expression, isStat = false}) {
        super({context, name, expression: expression || name})
        // if (value !== null) this.isValid(value)
        // todo is this.value needed?
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
    _opHelper = ({op, rhs, name, ReturnType = LPFloat}) => {
        rhs = rhs.expression || rhs
        if (name) {
            this.context.writeLine(`${name} = ${this.expression} ${op} ${rhs}`)
            return new ReturnType({context: this.context, name, expression: name})
        }
        return new ReturnType({context: this.context, name: this.name, expression: `${this.expression} ${op} ${rhs}`})
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
        if (noChain) this._noChain('floor')
        const expression = `${this.expression}.${func}(${params})`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new ReturnType({context: this.context, name: this.name, expression})
    }

    /**
     * this + rhs
     * @param {number|LPObject} rhs
     * @param {string=} name optional name handled by parser
     * @return {LPFloat}
     */
    add = (rhs, name) => this._opHelper({op: '+', rhs, name})

    /**
     * this - rhs
     * @param {number|LPObject} rhs
     * @param {string=} name optional name handled by parser
     * @return {LPFloat}
     */
    sub = (rhs, name) => this._opHelper({op: '-', rhs, name})


    /**
     * this / rhs
     * @param {number|LPObject} rhs
     * @param {string=} name optional name handled by parser
     * @return {LPFloat}
     */
    div = (rhs, name) => this._opHelper({op: '/', rhs, name})

    /**
     * this * rhs
     * @param {number|LPObject} rhs
     * @param {string=} name optional name handled by parser
     * @return {LPFloat}
     */
    mul = (rhs, name) => this._opHelper({op: '*', rhs, name})

    /**
     * this += rhs
     * @param {string=} name optional name handled by parser
     * @param {number|LPObject} rhs
     */
    addEq(rhs, name) {
        this._noChain('addEq')
        // return this._opHelper('+=', rhs, name)
        this.context.writeLine(`${this.name} += ${rhs.expression || rhs}`)
    }

    /**
     * this -= rhs
     * @param {number|LPObject} rhs
     */
    subEq(rhs) {
        this._noChain('subEq')
        this.context.writeLine(`${this.name} -= ${rhs.expression || rhs}`)
    }

    /**
     * this *= rhs
     * @param {number|LPObject} rhs
     */
    mulEq(rhs) {
        this._noChain('mulEq')
        this.context.writeLine(`${this.name} *= ${rhs.expression || rhs}`)
    }

    /**
     * this /= rhs
     * @param {number|LPObject} rhs
     */
    divEq(rhs) {
        this._noChain('divEq')
        this.context.writeLine(`${this.name} /= ${rhs.expression || rhs}`)
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
     * @param {string=} name optional name handled by parser
     * @return {LPBoolean}
     */
    gt = (rhs, name) => this._opHelper({op: '>', rhs, name, ReturnType: LPBoolean})


    /**
     * this >= rhs
     * @param {number|LPObject} rhs
     * @param {string=} name optional name handled by parser
     * @return {LPBoolean}
     */
    gte = (rhs, name) => this._opHelper({op: '>=', rhs, name, ReturnType: LPBoolean})


    /**
     * this < rhs
     * @param {number|LPObject} rhs
     * @param {string=} name optional name handled by parser
     * @return {LPBoolean}
     */
    lt = (rhs, name) => this._opHelper({op: '<', rhs, name, ReturnType: LPBoolean})


    /**
     * this <= rhs
     * @param {number|LPObject} rhs
     * @param {string=} name optional name handled by parser
     * @return {LPBoolean}
     */
    lte = (rhs, name) => this._opHelper({op: '<=', rhs, name, ReturnType: LPBoolean})

    /**
     * this != rhs
     * @param {number|LPObject} rhs
     * @param {string=} name optional name handled by parser
     * @return {LPBoolean}
     */
    ne = (rhs, name) => this._opHelper({op: '!=', rhs, name, ReturnType: LPBoolean})

    /**
     * this == rhs
     * @param {number|LPObject} rhs
     * @param {string=} name optional name handled by parser
     * @return {LPBoolean}
     */
    eq = (rhs, name) => this._opHelper({op: '==', rhs, name, ReturnType: LPBoolean})

    /**
     * Use this function to get the integer value of a float variable.
     * Any value less than x.3 / x.5 / x.8 will be rounded down to "x".
     * @param {string=} name optional name handled by parser
     * @return {LPFloat}
     */
    floor = (name) => this._funcHelper({func: 'floor', noChain: true, name, params: '', ReturnType: LPFloat})


    /**
     * Float raised to the power of rhs.
     * @param {number|LPFloat} rhs
     * @param {string=} name optional name handled by parser
     * @return {LPFloat}
     */
    power = (rhs, name) => this._funcHelper({func: 'power', noChain: true, name, params: `${rhs.expression || rhs}`, ReturnType: LPFloat})


    /**
     * Use this function mathematically round a float variable.
     * Any value less than x.5 will be rounded down to "x" anything larger or equal to
     * x.5 will be rounded up to x+1.
     * @param {string=} name optional name handled by parser
     * @return {LPFloat}
     */
    round = (name) => this._funcHelper({func: 'round', noChain: true, name, params: ``, ReturnType: LPFloat})


    /**
     * Converts a dollar value to the local currency for the home city in string format.
     * @param {string=} name optional name handled by parser
     * @return {LPFloat}
     */
    convertToLocalCurrency = (name) => this._funcHelper({func: 'convertToLocalCurrency', noChain: true, name, params: ``, ReturnType: LPFloat})

    /**
     * Set this as your current monthly fraternity fees.
     * @example
     * var FratFee = float('FratFee', 1000)
     * FratFee.setFraternityFees()
     * scene.narrative("I agreed to pay $1000 per month for fraternity fees")
     * @param {number|LPFloat} fratFee
     * @param {string=} name optional name handled by parser
     * @return {LPFloat} - reference to this for chaining
     */
    setFraternityFees = (fratFee, name) => this._funcHelper({func: 'setFraternityFees', noChain: true, name, params: `${fratFee.expression || fratFee}`, ReturnType: LPFloat})


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
        this._noChain('setRent')
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
        this._noChain('setSalary')
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
        this._noChain('setTuition')
        this.context.writeLine(`${this.name}.setTuition()`)
    }

    get isStat() {
        return this._isStat
    }

    set isStat(value) {
        this._isStat = value
    }

    write() {
        this.context.writeLine(`${this.expression}`)
    }
}

module.exports = LPFloat