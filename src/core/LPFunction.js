// noinspection JSUnusedGlobalSymbols,JSValidateTypes
// const preprocessor = require('./preprocessor')

const Context = require('./Context')

const fs = require('fs/promises')
const path = require('path')
const assert = require('assert')
const ensureDirectory = require('../libs/ensureDirectory')

module.exports = class LPFunction {
    constructor(params, script) {
        this._params = params
        this._script = script
    }

    get params() {
        return this._params
    }

    set params(value) {
        this._params = value
    }

    get script() {
        return this._script
    }

    set script(value) {
        this._script = value
    }

// constructor({lpMod, name, modsDir, filePath = 'functions'}) {
    //     super({lpMod})
    //     this._lpMod = lpMod
    //     this._name = name
    //     this._modsDir = modsDir
    //     this._filePath = filePath
    // }
    //
    // get lpMod() {
    //     return this._lpMod
    // }
    //
    // get name() {
    //     return this._name
    // }
    //
    // get modsDir() {
    //     return this._modsDir
    // }
    //
    // set modsDir(value) {
    //     this._modsDir = value
    // }
    //
    // get filePath() {
    //     return this._filePath
    // }
    //
    // set filePath(value) {
    //     this._filePath = value
    // }
    //
    // toString() {
    //     return this._code
    // }
    //
    // async write() {
    //     console.debug(`Writing ${this.name}.lpscene`)
    //     assert.ok(!(this.modsDir == null))
    //     const dirPath = path.resolve(this.modsDir, this.filePath)
    //     await ensureDirectory(dirPath)
    //     const filename = path.resolve(dirPath, `${this.name}.lpscene`)
    //     console.log(`Writing ${this.name}.lpscene to "${filename}"`)
    //     return fs.writeFile(filename, this.toString())
    // }
}