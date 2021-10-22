const Scene = require('../../src/core/Scene')
const setupMod = require('../tools/setupMod')
const LB = '\r\n'

test('Globals Test', async () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        var myStr = enterString()
        setHomeCity()
    })
    await scene.writeFiles({buildPath: 'build', filePath: 'test/core', fileName: 'while', type: 'scene', debug: true})
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  myStr = enterString()',
        '  setHomeCity()',
        'sceneEnd()',
    ].join(LB))
})

test('getGlobal', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        var SugarParent = getGlobal('SugarParent')
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  SugarParent = SugarParent.getGlobal()',
        'sceneEnd()'
    ].join(LB))
})

test('getGlobalString', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        var someGlobalString = getGlobalString('someGlobalString')
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  someGlobalString = someGlobalString.getGlobalString()',
        'sceneEnd()'
    ].join(LB))
})