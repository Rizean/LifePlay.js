const setupMod = require('../../tools/setupMod')
const Scene = require('../../../src/core/Scene')
const LB = '\r\n'
test('LPString.assign', async () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        let a = 'test'
        a = 'test2'
        a = a
    })
    await scene.writeFiles({buildPath: 'build', filePath: 'test/core/objects/LPString', fileName: `LPString_assign`, type: 'scene', debug: true})
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = "test"',
        '  a = "test2"',
        '  a = a',
        'sceneEnd()'
    ].join(LB))
})


test('LPString.isSameString', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        let a = 'test'
        let b = 'test'
        var c = a.isSameString(b)
        c = a.isSameString('test')
    })

    expect(scene._code.trim()).toBe([
        'sceneStart()',
        `  a = "test"`,
        `  b = "test"`,
        `  c = a.isSameString(b)`,
        `  c = a.isSameString("test")`,
        'sceneEnd()'
    ].join(LB))
})

test('LPString.isString', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        let a = 'test'
        let c = a.isString('test')
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        `  a = "test"`,
        `  c = a.isString("test")`,
        'sceneEnd()'
    ].join(LB))
})