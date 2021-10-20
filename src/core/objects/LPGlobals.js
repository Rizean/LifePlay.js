const LPObject = require('./LPObject')
const LPString = require('./LPString')
module.exports = class LPGlobals extends LPObject {
    constructor({context}) {
        super({context});
    }

    hookSandbox(sandbox) {
        sandbox.enterString = (...params) => this.enterString(...params)
        sandbox.setHomeCity = (...params) => this.setHomeCity(...params)
    }

    /**
     * Allow the player text input to make a new string variable which you can then use
     * @return {LPString}
     */
    enterString() {
        const [name] = arguments
        if (!name) throw new Error(`Must call enterString() as an assignment! Example: var myStr = enterString()`)
        this.context.writeLine(`${name} = enterString()`)
        return new LPString({context: this.context, name})
    }

    /**
     * Not a clue what this does :D
     */
    setHomeCity() {
        this.context.writeLine(`setHomeCity()`)
    }
}