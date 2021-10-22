const LPObject = require('./LPObject')
const LPString = require('./LPString')
const LPFloat = require('./LPFloat')

module.exports = class LPGlobals extends LPObject {
    constructor({context, lpMod}) {
        super({context, lpMod});
    }

    hookSandbox(sandbox) {
        sandbox.enterString = (...params) => this.enterString(...params)
        sandbox.getGlobal = (...params) => this.getGlobal(...params)
        sandbox.getGlobalString = (...params) => this.getGlobalString(...params)
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
        return new LPString({context: this.context, lpMod: this.lpMod, name})
    }

    /**
     * Get the float value of a global variable. If there's no global variable under such name, returns 0.
     * @param key global variable key name
     * @return {LPFloat}
     */
    getGlobal(key) {
        const [name] = arguments
        // todo track global variables
        const expression = `${key}.getGlobal()`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPFloat({context: this,lpMod: this.lpMod, name, expression})
    }

    /**
     * Get the string value of a global variable. If there's no global variable under such name, returns ?.
     * @param key global variable key name
     * @return {LPString}
     */
    getGlobalString(key) {
        const [name] = arguments
        // todo track global variables
        const expression = `${key}.getGlobalString()`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPString({context: this,lpMod: this.lpMod, name, expression})
    }

    /**
     * Not a clue what this does :D
     */
    setHomeCity() {
        this.context.writeLine(`setHomeCity()`)
    }
}