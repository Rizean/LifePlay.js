// noinspection JSUnusedGlobalSymbols

const LPObject = require('./LPObject')
const LPFloat = require('./LPFloat')
const LPBoolean = require('./LPBoolean')
const LPString = require('./LPString')

class LPBuilding extends LPObject {
    constructor({context, lpMod, name, expression}) {
        super({context, lpMod, name, expression})
    }

    /**
     * Add objective to a building alias, objective is simply a lpaction file with SCENE_ALWAYS
     * @param lpaction
     */
    addObjective(lpaction) {
        this.context.writeLine(`${this.name}.addObjective(${lpaction})`)
    }

    /**
     * Calculate the expenses for the current building.
     * @return {LPFloat}
     */
    calculateExpenses = (name) => {
        const expression = 'calculateExpenses()'
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPFloat({context: this.context, lpMod: this.lpMod, name, expression})
    }

    /**
     * Calculate the rent for the current building.
     * @return {LPFloat}
     */
    calculateRent = (name) => {
        const expression = 'calculateRent()'
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPFloat({context: this.context, lpMod: this.lpMod, name, expression})
    }

    /**
     * Calculate the revenue for the current building.
     * @example
     * var revenue = float('rent', scene.building.calculateRevenue())
     * var revenueC = revenue.convertToLocalCurrency(true)
     * scene.narration("Estimated gross revenue for this month is <revenueC>.")
     * @return {LPFloat}
     */
    calculateRevenue = (name) => {
        const expression = 'calculateRevenue()'
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPFloat({context: this.context, lpMod: this.lpMod, name, expression})
    }

    /**
     * Calculate the wages for the current building.
     * @return {LPFloat}
     */
    calculateWages = (name) => {
        const expression = 'calculateWages()'
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPFloat({context: this.context, lpMod: this.lpMod, name, expression})
    }

    /**
     * Used for quest, building alias is a location that a quest objective can be at, used with addObjective()
     * @param alias
     * @param buildingType
     */
    generateBuildingAlias(alias, buildingType) {
        this.context.writeLine(`${alias}.generateBuildingAlias(${buildingType})`)
        return new LPBuilding({context: this.context, name: alias})
    }

    /**
     * Used with getBuilding() and isString("") for lpai files
     * @return {LPString}
     */
    getBuildingType = (name) => {
        const expression = `${this.name}.getBuildingType()`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPString({context: this.context, lpMod: this.lpMod, name, expression})
    }

    isBuildingValid = (name) => {
        const expression = `${this.name}.isBuildingValid()`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPBoolean({context: this.context, lpMod: this.lpMod, name, expression})
    }

    /**
     * Check if a building type is open at the current hour
     * @param type
     * @return {LPBoolean}
     */
    isOpen = (type, name) => {
        const expression = `isOpen(${type})`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPBoolean({context: this.context, lpMod: this.lpMod, name, expression})
    }

    /**
     * Check if two building variables refer to the same building
     * @param otherBuilding
     * @return {LPBoolean}
     */
    isSameBuilding = (otherBuilding, name) => {
        const expression = `${this.name}.otherBuilding(${otherBuilding})`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPBoolean({context: this.context, lpMod: this.lpMod, name, expression})
    }

    /**
     * Change the local reputation of this business
     * @param {LPFloat|number} value
     * @return {LPBuilding} "this" LPBuilding for chaining
     */
    modifyReputation = (value) => {
        const isValid = (typeof value === 'number' || value instanceof LPFloat)
        if (!isValid) throw new Error('Expected type of "number" or "LPFloat"!')
        const expression = `modifyReputation(${value.expression || value})`
        this.context.writeLine(`${expression}`)
        return this
    }

    /**
     * Remove objective from a building alias, objective is simply a lpaction file with SCENE_ALWAYS
     * @param lpActionFilename
     * @return {LPBuilding} "this" LPBuilding for chaining
     */
    removeObjective = (lpActionFilename) => {
        this.context.writeLine(`${this.name}.removeObjective(${lpActionFilename})`)
        return this
    }

    /**
     * Set a specific building as your SO's home
     */
    setHomeDating = () => {
        this.context.writeLine(`${this.name}.setHomeDating()`)
    }
}

module.exports = LPBuilding