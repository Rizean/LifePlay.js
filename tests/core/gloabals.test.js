const Scene = require('../../src/core/Scene')
const LB = '\r\n'

test('Globals Test', async () => {
    let scene = new Scene()
    scene.start((scene) => {
        console.log(this)
        var myStr = enterSting()
        setHomeCity()
    })
    await scene.writeFiles({buildPath: 'build', filePath: 'test/core', fileName: 'while', type: 'scene', debug: true})
    expect(scene._code.trim()).toBe([
        'WHAT: all, -sleep, -nap',
        'WHERE: home',
        'WHEN: 0 - 24',
        'WHO: ',
        'OTHER:',
        '',
        'sceneStart()',
        '  myStr = enterSting()',
        '  setHomeCity()',
        'sceneEnd()',
    ].join(LB))
})