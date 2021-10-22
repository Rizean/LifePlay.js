const fs = require('fs/promises')
const path = require('path')
const assert = require('assert')
const ensureDirectory = require('./libs/ensureDirectory')
const LPStat = require('./LPStat')
const LPAction = require('./LPAction')

class LPMod {
    constructor({MODULE_UNIQUEID, MODULE_NAME = '', MODULE_AUTHOR = '', MODULE_LINK = '', MODULE_DESCRIPTION = '', MODULE_REQUIREMENTS = '', modsDir}) {
        assert.match(MODULE_UNIQUEID, /\w+/, `Expected MODULE_UNIQUEID to be a string. Received: ${MODULE_UNIQUEID}`)
        assert.ok(!(modsDir == null))
        // assert.ok(modsDir === path.basename(modsDir))
        this._MODULE_UNIQUEID = MODULE_UNIQUEID
        this._MODULE_NAME = MODULE_NAME
        this._MODULE_AUTHOR = MODULE_AUTHOR
        this._MODULE_LINK = MODULE_LINK
        this._MODULE_DESCRIPTION = MODULE_DESCRIPTION
        this._MODULE_REQUIREMENTS = MODULE_REQUIREMENTS

        this._modsDir = path.resolve(modsDir)
        if (path.basename(modsDir) !== MODULE_UNIQUEID) this._modsDir = path.resolve(this._modsDir, this._MODULE_UNIQUEID)

        this._stats = new Map()
        this._actions = new Map()
        this._globals = new Map()
    }


    toString() {
        return [
            `MODULE_UNIQUEID: ${this.MODULE_UNIQUEID}`,
            `MODULE_NAME: ${this.MODULE_NAME}`,
            `MODULE_AUTHOR: ${this.MODULE_AUTHOR}`,
            `MODULE_LINK: ${this.MODULE_LINK}`,
            `MODULE_DESCRIPTION: ${this.MODULE_DESCRIPTION}`,
            `MODULE_REQUIREMENTS: ${this.MODULE_REQUIREMENTS}`,
        ].join('\r\n')
    }

    async writeMod() {
        await ensureDirectory(this.modsDir)
        const modFile = path.resolve(this.modsDir, `${this.MODULE_UNIQUEID}.lpmod`)
        const promises = [
            fs.writeFile(modFile, this.toString())
        ]
        this._stats.forEach((stat)=>{
            promises.push(stat.write())
        })
        this._actions.forEach((action)=>{
            promises.push(action.write())
        })
        await Promise.all(promises)
    }

    loadMod(modsDir) {

    }

    addGlobal(key, type) {
        this._globals.set(key, type)
    }

    getGlobal(key) {
        return this._globals.get(key)
    }

    addStat(stat) {
        assert.ok(stat instanceof LPStat)
        if (this._stats.has(stat.STAT_ID)) {
            console.warn(`OVERWRITING STAT! ${stat.STAT_ID}`)
        }
        stat.modsDir = this.modsDir
        this._stats.set(stat.STAT_ID, stat)
    }

    addAction(action) {
        assert.ok(action instanceof LPAction)
        if (this._actions.has(action.ACTION_UNIQUEID)) {
            console.warn(`OVERWRITING ACTION! ${action.ACTION_UNIQUEID}`)
        }
        action.modsDir = this.modsDir
        this._actions.set(action.ACTION_UNIQUEID, action)
    }

    removeStat(key) {
        this._stats.delete(key)
    }

    get MODULE_UNIQUEID() {
        return this._MODULE_UNIQUEID
    }

    set MODULE_UNIQUEID(value) {
        this._MODULE_UNIQUEID = value
    }

    get MODULE_NAME() {
        return this._MODULE_NAME
    }

    set MODULE_NAME(value) {
        this._MODULE_NAME = value
    }

    get MODULE_AUTHOR() {
        return this._MODULE_AUTHOR
    }

    set MODULE_AUTHOR(value) {
        this._MODULE_AUTHOR = value
    }

    get MODULE_LINK() {
        return this._MODULE_LINK
    }

    set MODULE_LINK(value) {
        this._MODULE_LINK = value
    }

    get MODULE_DESCRIPTION() {
        return this._MODULE_DESCRIPTION
    }

    set MODULE_DESCRIPTION(value) {
        this._MODULE_DESCRIPTION = value
    }

    get MODULE_REQUIREMENTS() {
        return this._MODULE_REQUIREMENTS
    }

    set MODULE_REQUIREMENTS(value) {
        this._MODULE_REQUIREMENTS = value
    }

    get modsDir() {
        return this._modsDir
    }

    set modsDir(value) {
        this._modsDir = value
    }
}

module.exports = LPMod