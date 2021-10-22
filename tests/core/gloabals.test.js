const Scene = require('../../src/core/Scene')
const setupMod = require('../tools/setupMod')
const LB = '\r\n'

test('Globals enterString()', async () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        var myStr = enterString()
    })
    await scene.writeFiles({buildPath: 'build', filePath: 'test/core', fileName: 'while', type: 'scene', debug: true})
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  myStr = enterString()',
        'sceneEnd()',
    ].join(LB))
})

test('Globals setHomeCity()', async () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        setHomeCity()
    })
    await scene.writeFiles({buildPath: 'build', filePath: 'test/core', fileName: 'while', type: 'scene', debug: true})
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  setHomeCity()',
        'sceneEnd()',
    ].join(LB))
})

test('Globals setGlobal(key, value) and getGlobal(key)', () => {
    const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation()
    const lpMod = setupMod()
    let scene = new Scene({lpMod})
    scene.start((scene) => {
        var gf2 = 2
        setGlobal('globalF1', 1)
        setGlobal('globalF2', gf2)
        setGlobalString('globalF3', "Not a float.")
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  gf2 = 2',
        '  globalF1.setGlobal(1)',
        '  globalF2.setGlobal(gf2)',
        '  globalF3.setGlobalString("Not a float.")',
        'sceneEnd()'
    ].join(LB))

    scene.reset()

    scene.start((scene) => {
        var gf1 = getGlobal('globalF1')
        var gf2 = getGlobal('globalF2')
        var gf3 = getGlobal('globalF3')
        var gf4 = getGlobal('globalF4')
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  gf1 = globalF1.getGlobal()',
        '  gf2 = globalF2.getGlobal()',
        '  // Expected global globalF3 to be a float but found a string!',
        '  gf3 = globalF3.getGlobal()',
        '  // Unknown global globalF4!',
        '  gf4 = globalF4.getGlobal()',
        'sceneEnd()'
    ].join(LB))

    expect(consoleWarnMock.mock.calls).toEqual([
        [`Expected global globalF3 to be a float but found a string!`],
        [`Unknown global globalF4!`]
    ])
    // expect(console.warn).toHaveBeenLastCalledWith(`Unknown global globalF4!`)
    consoleWarnMock.mockRestore()
})

test('Globals setGlobalString(key, value) and getGlobalString(key)', () => {
    const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation()
    const lpMod = setupMod()
    let scene = new Scene({lpMod})
    scene.start((scene) => {
        var gs2 = 'String 2'
        setGlobalString('globalS1', 'String 1')
        setGlobalString('globalS2', gs2)
        setGlobal('globalS3', 1337)
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  gs2 = "String 2"',
        '  globalS1.setGlobalString("String 1")',
        '  globalS2.setGlobalString(gs2)',
        '  globalS3.setGlobal(1337)',
        'sceneEnd()'
    ].join(LB))

    scene.reset()

    scene.start((scene) => {
        var gs1 = getGlobalString('globalS1')
        var gs2 = getGlobalString('globalS2')
        var gs3 = getGlobalString('globalS3')
        var gs4 = getGlobalString('globalS4')
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  gs1 = globalS1.getGlobalString()',
        '  gs2 = globalS2.getGlobalString()',
        '  // Expected global globalS3 to be a string but found a float!',
        '  gs3 = globalS3.getGlobalString()',
        '  // Unknown global globalS4!',
        '  gs4 = globalS4.getGlobalString()',
        'sceneEnd()'
    ].join(LB))

    expect(consoleWarnMock.mock.calls).toEqual([
        [`Expected global globalS3 to be a string but found a float!`],
        [`Unknown global globalS4!`]
    ])
    consoleWarnMock.mockRestore()
})