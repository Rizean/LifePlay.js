const LPObject = require('./LPObject')

/**
 * Class representing a LifePlay building alias.
 * @type {LPBuildingAlias}
 */
class LPBuildingAlias extends LPObject {
    /**
     * Add objective to a building alias, objective is simply a LPAction file with SCENE_ALWAYS
     * @param LPAction
     */
    addObjective(LPAction) {
        this.context.writeLine(`${this.name}.addObjective(${LPAction})`)
    }
}

module.exports = LPBuildingAlias