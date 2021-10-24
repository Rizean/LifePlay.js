const fs = require('fs/promises')
const path = require('path')
const assert = require('assert')
const ensureDirectory = require('../libs/ensureDirectory')
const LPStat = require('./LPStat')
const LPAction = require('./LPAction')

class LPMod {
    /**
     * @classdesc Class representing a LifePlay Mod.
     * @param MODULE_UNIQUEID
     * @param MODULE_NAME
     * @param MODULE_AUTHOR
     * @param MODULE_LINK
     * @param MODULE_DESCRIPTION
     * @param MODULE_REQUIREMENTS
     * @param modsDir
     */
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
        this._scenes = new Map()
        this._functions = new Map()
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
        const funcDir = path.resolve(this.modsDir, 'functions')

        await ensureDirectory(this.modsDir)
        await ensureDirectory(funcDir)
        const modFile = path.resolve(this.modsDir, `${this.MODULE_UNIQUEID}.lpmod`)

        const promises = [
            fs.writeFile(modFile, this.toString())
        ]
        this._functions.forEach((func, key) => {
            const funcFile = path.resolve(funcDir, `${key}.intermediate.js`)
            promises.push(fs.writeFile(funcFile, '' + func))
        })
        this._stats.forEach((stat) => promises.push(stat.write()))
        this._actions.forEach((action) => promises.push(action.write()))
        this._scenes.forEach((scene) => promises.push(scene.write()))
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

    deleteGlobal(key) {
        return this._globals.delete(key)
    }

    addStat(stat) {
        assert.ok(stat instanceof LPStat)
        if (this._stats.has(stat.STAT_ID)) {
            console.warn(`OVERWRITING STAT! ${stat.STAT_ID}`)
        }
        stat.modsDir = this.modsDir
        this._stats.set(stat.STAT_ID, stat)
    }

    removeStat(key) {
        this._stats.delete(key)
    }

    addAction(action) {
        assert.ok(action instanceof LPAction)
        if (this._actions.has(action.ACTION_UNIQUEID)) {
            console.warn(`OVERWRITING ACTION! ${action.ACTION_UNIQUEID}`)
        }
        action.modsDir = this.modsDir
        this._actions.set(action.ACTION_UNIQUEID, action)
    }

    removeAction(key) {
        this._actions.delete(key)
    }

    addScene(scene) {
        const Scene = require('./LPScene')
        // assert.ok(scene instanceof Scene) // fixme
        scene._lpMod = this
        if (this._scenes.has(scene.name)) {
            console.warn(`OVERWRITING SCENE! ${scene.name}`)
        }
        scene.modsDir = this.modsDir
        this._scenes.set(scene.name, scene)
    }

    removeScene(key) {
        this._scenes.delete(key)
    }

    addFunction(key, func) {
        if (this._functions.has(key)) {
            console.warn(`OVERWRITING FUNCTION! ${key}`)
        }
        const parser = require('./parser')
        const {intermediate, parsed, logs} = parser('' + func)
        this._functions.set(key, eval(`(${intermediate})`))
    }

    getFunction(key) {
        return this._functions.get(key)
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