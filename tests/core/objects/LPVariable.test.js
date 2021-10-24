const Context = require('../../../src/core/Context')
const setupMod = require('../../tools/setupMod')
const Scene = require('../../../src/core/Scene')


test('LPVariable.assigment error type and iType', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPVariable_assigment_error_type_iType'}, (scene) => {
        scene.start(() => {
            const path = require('path')
            const LPVariable = require(path.resolve(process.cwd(), 'src/core/objects/LPVariable'))
            const LPFloat = require(path.resolve(process.cwd(), 'src/core/objects/LPFloat'))
            const a = new LPVariable({context: scene})
            a.assign('g', 'number', LPFloat)
        })
    })
    await expect(async () => await scene.toString()).rejects.toThrowError('Expected rhs to be typeof number or instanceof LPFloat!')
})

test('LPVariable.assigment error type', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPVariable_assigment_error_type'}, (scene) => {
        scene.start(() => {
            const path = require('path')
            const LPVariable = require(path.resolve(process.cwd(), 'src/core/objects/LPVariable'))
            const LPFloat = require(path.resolve(process.cwd(), 'src/core/objects/LPFloat'))
            const a = new LPVariable({context: scene})
            a.assign('g', 'number')
        })
    })
    await expect(async () => await scene.toString()).rejects.toThrowError('Expected rhs to be typeof number but found string!')
})

test('LPVariable.assigment error iType', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPVariable_assigment_error_iType'}, (scene) => {
        scene.start(() => {
            const path = require('path')
            const LPVariable = require(path.resolve(process.cwd(), 'src/core/objects/LPVariable'))
            const LPFloat = require(path.resolve(process.cwd(), 'src/core/objects/LPFloat'))
            const a = new LPVariable({context: scene})
            a.assign('g', null, LPFloat)
        })
    })
    await expect(async () => await scene.toString()).rejects.toThrowError('Expected rhs to be instanceof LPFloat but found String!')
})

test('LPVariable.assigment error using LPFloat', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPObject_noChain'}, (scene) => {
        scene.start(() => {
            const a = "some string"
            let b = 5
            b = a
        })
    })
    await expect(async () => await scene.toString()).rejects.toThrowError('Expected rhs to be typeof number or instanceof LPFloat!')
})