// noinspection JSUnusedGlobalSymbols

const LPObject = require('./LPObject')
const LPFloat = require('./LPFloat')
const LPBoolean = require('./LPBoolean')
const LPString = require('./LPString')

class LPDescription extends LPObject {
    constructor({context, name, expression}) {
        super({context, name, expression})
    }
    // Fixme
    isIncest = () => this.context.writeLine(`isIncest()`)
}

module.exports = LPDescription