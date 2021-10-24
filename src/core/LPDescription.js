// noinspection JSUnusedGlobalSymbols

const LPObject = require('./objects/LPObject')
const LPFloat = require('./objects/LPFloat')
const LPBoolean = require('./objects/LPBoolean')
const LPString = require('./objects/LPString')

/**
 * Class representing a LifePlay Description.
 * @type {LPAction}
 */
class LPDescription extends LPObject {

    // Fixme
    isIncest = () => this.context.writeLine(`isIncest()`)
}

module.exports = LPDescription