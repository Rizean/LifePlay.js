const fs = require('fs/promises')
const path = require('path')
const assert = require('assert')
const ensureDirectory = require('../libs/ensureDirectory')

/**
 * Class representing a LifePlay Stat.
 * @type {LPStat}
 */
class LPStat {
    constructor({STAT_ID, STAT_NAME, PLAYER_ONLY, HIGHER_BETTER, STAT_MIN, STAT_MAX, DAILY_CHANGE, DEFAULT_VALUE, NPC_ONLY, modsDir, filePath = 'stats'}) {
        PLAYER_ONLY = PLAYER_ONLY.toString()
        NPC_ONLY = NPC_ONLY.toString()
        HIGHER_BETTER = HIGHER_BETTER.toString()
        const isNumber = (n) => Number.parseInt(n).toString() === n.toString()
        const isFloat = (n) => Number.parseFloat(n).toString() === n.toString()

        assert.match(STAT_ID, /\w+/)
        assert.match(STAT_ID, /\w+/)
        assert.match(PLAYER_ONLY, /true|false/)
        assert.match(HIGHER_BETTER, /true|no_difficulty_adjustment/)
        assert.ok(isNumber(STAT_MIN), `Expected STAT_MIN to be a number but received: ${STAT_MIN}`)
        assert.ok(isNumber(STAT_MAX), `Expected STAT_MAX to be a number but received: ${STAT_MAX}`)
        assert.ok(isFloat(DAILY_CHANGE), `Expected DAILY_CHANGE to be a float but received: ${DAILY_CHANGE}`)
        assert.ok(isNumber(DEFAULT_VALUE), `Expected DEFAULT_VALUE to be a number but received: ${DEFAULT_VALUE}`)
        assert.match(NPC_ONLY, /true|false/)
        assert.ok(!(filePath == null))

        this._STAT_ID = STAT_ID
        this._STAT_NAME = STAT_NAME
        this._PLAYER_ONLY = PLAYER_ONLY
        this._HIGHER_BETTER = HIGHER_BETTER
        this._STAT_MIN = STAT_MIN
        this._STAT_MAX = STAT_MAX
        this._DAILY_CHANGE = DAILY_CHANGE
        this._DEFAULT_VALUE = DEFAULT_VALUE
        this._NPC_ONLY = NPC_ONLY
        this._modsDir = modsDir
        this._filePath = filePath
    }

    toString() {
        return [
            `STAT_ID: ${this.STAT_ID}`,
            `STAT_NAME: ${this.STAT_NAME}`,
            `PLAYER_ONLY: ${this.PLAYER_ONLY}`,
            `HIGHER_BETTER: ${this.HIGHER_BETTER}`,
            `STAT_MIN: ${this.STAT_MIN}`,
            `STAT_MAX: ${this.STAT_MAX}`,
            `DAILY_CHANGE: ${this.DAILY_CHANGE}`,
            `DEFAULT_VALUE: ${this.DEFAULT_VALUE}`,
            `NPC_ONLY: ${this.NPC_ONLY}`,
        ].join('\r\n')
    }

    async write() {
        assert.ok(!(this.modsDir == null))
        const statDir = path.resolve(this.modsDir, this.filePath)
        await ensureDirectory(statDir)
        const statFile = path.resolve(statDir, `${this.STAT_ID}.lpstat`)
        console.log(`Writing ${this.STAT_ID}.lpstat to "${statFile}"`)
        return fs.writeFile(statFile, this.toString())
    }

    load(filePath) {

    }

    get STAT_ID() {
        return this._STAT_ID
    }

    set STAT_ID(value) {
        this._STAT_ID = value
    }

    get STAT_NAME() {
        return this._STAT_NAME
    }

    set STAT_NAME(value) {
        this._STAT_NAME = value
    }

    get PLAYER_ONLY() {
        return this._PLAYER_ONLY
    }

    set PLAYER_ONLY(value) {
        this._PLAYER_ONLY = value
    }

    get HIGHER_BETTER() {
        return this._HIGHER_BETTER
    }

    set HIGHER_BETTER(value) {
        this._HIGHER_BETTER = value
    }

    get STAT_MIN() {
        return this._STAT_MIN
    }

    set STAT_MIN(value) {
        this._STAT_MIN = value
    }

    get STAT_MAX() {
        return this._STAT_MAX
    }

    set STAT_MAX(value) {
        this._STAT_MAX = value
    }

    get DAILY_CHANGE() {
        return this._DAILY_CHANGE
    }

    set DAILY_CHANGE(value) {
        this._DAILY_CHANGE = value
    }

    get DEFAULT_VALUE() {
        return this._DEFAULT_VALUE
    }

    set DEFAULT_VALUE(value) {
        this._DEFAULT_VALUE = value
    }

    get NPC_ONLY() {
        return this._NPC_ONLY
    }

    set NPC_ONLY(value) {
        this._NPC_ONLY = value
    }

    get modsDir() {
        return this._modsDir
    }

    set modsDir(value) {
        this._modsDir = value
    }

    get filePath() {
        return this._filePath
    }

    set filePath(value) {
        this._filePath = value
    }
}

module.exports = LPStat