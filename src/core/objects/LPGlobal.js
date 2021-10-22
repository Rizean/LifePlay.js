const LPObject = require('./LPObject')
const LPString = require('./LPString')
const LPFloat = require('./LPFloat')

module.exports = class LPGlobal extends LPObject {
    /**
     * Delete this global variable completely.
     */
    clearGlobal() {
        this.context.writeLine(`${this.name}.clearGlobal()`)
    }

    /**
     * Set (add if it doesn't already exist) a global variable to a certain number.
     * @param {number|LPFloat} float
     */
    setGlobal(float) {
        this.context.writeLine(`${this.name}.setGlobal(${float.name || float})`)
    }

    /**
     * Same as setGlobal(), just string instead of float
     * @param str
     */
    setGlobalString(str) {
        this.context.writeLine(`${this.name}.setGlobal(${str.name || str})`)
    }


}