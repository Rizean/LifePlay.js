const setupMod = require('../../tools/setupMod')
const Scene = require('../../../src/core/LPScene')
const LB = '\r\n'
test('LPString.assign', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPString_assign'}, (scene) => {
        scene.start(() => {
            let a = 'test'
            a = 'test2'
            a = a
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = "test"',
        '  a = "test2"',
        '  a = a',
        'sceneEnd()',
    ].join(LB))
})

// fixme?
// test('LPString.add?', async () => {
//     const lpMod = setupMod()
//     let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPObject_noChain'}, (scene) => {
//         scene.start(() => {
//             const a = "some string" + " some other string"
//             // const a = "some string" + " some other string"
//         })
//     })
//     await expect(async () => await scene.toString()).rejects.toThrowError('Expected type of "number" or "LPFloat"!')
// })

test('LPString.isSameString', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPString_isSameString'}, (scene) => {
        scene.start(() => {
            let a = 'test'
            let b = 'test'
            var c = a.isSameString(b)
            c = a.isSameString('test')
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        `  a = "test"`,
        `  b = "test"`,
        `  c = a.isSameString(b)`,
        `  c = a.isSameString("test")`,
        'sceneEnd()',
    ].join(LB))
})

test('LPString.isString', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPString_isString'}, (scene) => {
        scene.start(() => {
            let a = 'test'
            let c = a.isString('test')
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        `  a = "test"`,
        `  c = a.isString("test")`,
        'sceneEnd()',
    ].join(LB))
})