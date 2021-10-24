const LPObject = require('./objects/LPObject')
const LPString = require('./objects/LPString')
const LPFloat = require('./objects/LPFloat')

/**
 * Class representing a LifePlay Talk.
 * @type {LPTalk}
 */
class LPTalk extends LPObject {
    tag(tags) {
        throw new Error('TODO')
    }

    isIncest() {
        throw new Error('TODO')
    }
}

module.exports = LPTalk