const Scene = require('../../src/core/Scene')
const LB = '\r\n'

test('Globals Test', async () => {
    let scene = new Scene()
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