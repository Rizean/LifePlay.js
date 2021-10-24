const LPObject = require('./objects/LPObject')
const LPString = require('./objects/LPString')
const LPFloat = require('./objects/LPFloat')


class LPTalk extends LPObject {

    /**
     * @classdesc Class representing a LifePlay Talk.
     */
    constructor() {
        super(...arguments);
    }

    tag(tags) {
        throw new Error('TODO')
    }

    isIncest() {
        throw new Error('TODO')
    }
}

module.exports = LPTalk