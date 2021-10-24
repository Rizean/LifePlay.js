const LPBoolean = require('./LPBoolean')
const LPVariable = require('./LPVariable')

class LPString extends LPVariable {

    /**
     * Assigns the value of rhs to this
     * @param {string|LPString} rhs
     * @return {LPString}
     */
    assign(rhs) {
        // this._noChain('assign')
        if (rhs instanceof LPString) {
            // noinspection JSValidateTypes
            return super.assign(rhs.expression, 'string', LPString)
        }
        // noinspection JSValidateTypes
        return super.assign(`"${rhs}"`, 'string', LPString)
    }

    /**
     * Check if two string variables are the same, case insensitive
     * @param {string|LPString} otherString
     * @param {string=} name optional name handled by parser
     * @return {LPBoolean}
     */
    isSameString = (otherString, name) => {
        // this._noChain('isSameString')
        const rhs = otherString.expression || `"${otherString}"`
        const expression = `${this.name}.isSameString(${rhs})`
        if (name) {
            this.context.writeLine(`${name} = ${expression}`)
            return new LPBoolean({context: this.context, lpMod: this.lpMod, name, expression: name})
        }
        return new LPBoolean({context: this.context, lpMod: this.lpMod, name, expression})
    }

    /**
     * Check the value of a string, case insensitive
     * @param {LPString|string} str
     * @param {string=} name optional name handled by parser
     * @return {LPBoolean}
     */
    isString = (str, name) => {
        // this._noChain('isString')
        const rhs = str.expression || str
        const expression = `${this.name}.isString("${rhs}")`
        if (name) {
            this.context.writeLine(`${name} = ${expression}`)
            return new LPBoolean({context: this.context, lpMod: this.lpMod, name, expression: name})
        }
        return new LPBoolean({context: this.context, lpMod: this.lpMod, name, expression})
    }
}

module.exports = LPString