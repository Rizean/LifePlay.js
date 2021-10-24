const fs = require('fs/promises')
const path = require('path')
const assert = require('assert')
const ensureDirectory = require('../libs/ensureDirectory')

class LPAction {
    /**
     * @classdesc Class representing a LifePlay Action.
     * @param ACTION_UNIQUEID
     * @param ACTION_NAME
     * @param WHERE
     * @param WHEN
     * @param MINUTES
     * @param TIMEOUT_MINUTES
     * @param ALSO_TIMEOUT
     * @param EFFECTS
     * @param CONDITIONS
     * @param MOVE_FIRST
     * @param SCENE_ALWAYS
     * @param ANIMATION
     * @param WHO
     * @param modsDir
     * @param filePath
     */
    constructor({ACTION_UNIQUEID, ACTION_NAME, WHERE, WHEN, MINUTES, TIMEOUT_MINUTES, ALSO_TIMEOUT, EFFECTS = '', CONDITIONS = '', MOVE_FIRST, SCENE_ALWAYS, ANIMATION, WHO = '', modsDir, filePath = 'actions'}) {
        MOVE_FIRST = MOVE_FIRST.toString()
        const isNumber = (n) => Number.parseInt(n).toString() === n.toString()
        const isFloat = (n) => Number.parseFloat(n).toString() === n.toString()
        const isHourRange = (n) => {
            throw new Error('FIXME')
        }
        const isMinuteRange = (n) => {
            throw new Error('FIXME')
        }
        const isArrayOfStrings = (arr) => {
            if (arr.length === 0) return true
            try {
                return arr.every(ele => assert.match(ele, /\w+/))
            } catch (e) {
                return false
            }
        }

        assert.match(ACTION_UNIQUEID, /\w+/)
        assert.match(ACTION_NAME, /\w+/)
        assert.match(WHERE, /\w+/)
        // assert.ok(isHourRange(WHEN)) // todo
        // assert.ok(isMinuteRange(MINUTES)) // todo
        assert.ok(isNumber(TIMEOUT_MINUTES), `Expected STAT_MIN to be a number but received: ${TIMEOUT_MINUTES}`)
        assert.ok(isArrayOfStrings(ALSO_TIMEOUT), `Expected ALSO_TIMEOUT to be an array of strings but received: ${ALSO_TIMEOUT}`)
        // TODO EFFECTS
        // TODO CONDITIONS
        assert.match(MOVE_FIRST, /true|false/)
        assert.match(SCENE_ALWAYS, /\w*/)
        assert.match(ANIMATION, /\w*/)
        assert.match(WHO, /\w*/)

        assert.ok(!(filePath == null))
        this._ACTION_UNIQUEID = ACTION_UNIQUEID
        this._ACTION_NAME = ACTION_NAME
        this._WHERE = WHERE
        this._WHEN = WHEN
        this._MINUTES = MINUTES
        this._TIMEOUT_MINUTES = TIMEOUT_MINUTES
        this._ALSO_TIMEOUT = ALSO_TIMEOUT
        this._EFFECTS = EFFECTS
        this._CONDITIONS = CONDITIONS
        this._MOVE_FIRST = MOVE_FIRST
        this._SCENE_ALWAYS = SCENE_ALWAYS
        this._ANIMATION = ANIMATION
        this._WHO = WHO
        this._modsDir = modsDir
        this._filePath = filePath

    }

    toString() {
        return [
            `ACTION_UNIQUEID: ${this.ACTION_UNIQUEID}`,
            `ACTION_NAME: ${this.ACTION_NAME}`,
            `WHERE: ${this.WHERE}`,
            `WHEN: ${this.WHEN}`,
            `MINUTES: ${this.MINUTES}`,
            `TIMEOUT_MINUTES: ${this.TIMEOUT_MINUTES}`,
            `ALSO_TIMEOUT: ${this.ALSO_TIMEOUT}`,
            `EFFECTS: ${this.EFFECTS}`,
            `CONDITIONS: ${this.CONDITIONS}`,
            `MOVE_FIRST: ${this.MOVE_FIRST}`,
            `SCENE_ALWAYS: ${this.SCENE_ALWAYS}`,
            `ANIMATION: ${this.ANIMATION}`,
            `WHO: ${this.WHO}`,
        ].join('\r\n')
    }

    async write() {
        assert.ok(!(this.modsDir == null))
        const statDir = path.resolve(this.modsDir, this.filePath)
        await ensureDirectory(statDir)
        const fileName = `${this.ACTION_UNIQUEID}.lpaction`
        const statFile = path.resolve(statDir, fileName)
        console.log(`Writing ${fileName} to "${statFile}"`)
        return fs.writeFile(statFile, this.toString())
    }

    load(filePath) {

    }

    get ACTION_UNIQUEID() {
        return this._ACTION_UNIQUEID
    }

    set ACTION_UNIQUEID(value) {
        this._ACTION_UNIQUEID = value
    }

    get ACTION_NAME() {
        return this._ACTION_NAME
    }

    set ACTION_NAME(value) {
        this._ACTION_NAME = value
    }

    get WHERE() {
        return this._WHERE
    }

    set WHERE(value) {
        this._WHERE = value
    }

    get WHEN() {
        return this._WHEN
    }

    set WHEN(value) {
        this._WHEN = value
    }

    get MINUTES() {
        return this._MINUTES
    }

    set MINUTES(value) {
        this._MINUTES = value
    }

    get TIMEOUT_MINUTES() {
        return this._TIMEOUT_MINUTES
    }

    set TIMEOUT_MINUTES(value) {
        this._TIMEOUT_MINUTES = value
    }

    get ALSO_TIMEOUT() {
        return this._ALSO_TIMEOUT
    }

    set ALSO_TIMEOUT(value) {
        this._ALSO_TIMEOUT = value
    }

    get EFFECTS() {
        return this._EFFECTS
    }

    set EFFECTS(value) {
        this._EFFECTS = value
    }

    get CONDITIONS() {
        return this._CONDITIONS
    }

    set CONDITIONS(value) {
        this._CONDITIONS = value
    }

    get MOVE_FIRST() {
        return this._MOVE_FIRST
    }

    set MOVE_FIRST(value) {
        this._MOVE_FIRST = value
    }

    get SCENE_ALWAYS() {
        return this._SCENE_ALWAYS
    }

    set SCENE_ALWAYS(value) {
        this._SCENE_ALWAYS = value
    }

    get ANIMATION() {
        return this._ANIMATION
    }

    set ANIMATION(value) {
        this._ANIMATION = value
    }

    get WHO() {
        return this._WHO
    }

    set WHO(value) {
        this._WHO = value
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

module.exports = LPAction

