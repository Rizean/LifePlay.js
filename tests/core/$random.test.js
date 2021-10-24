const Scene = require('../../src/core/LPScene')
const setupMod = require('../tools/setupMod')
const LB = '\r\n'


test('$random', () => {
    const scene = new Scene({lpMod: setupMod()})
    scene.WHAT(['all', '-sleep', '-nap'])
    scene.WHERE(['home'])
    scene.WHEN(['0', '24'])
    scene.WHO()
    scene.OTHER()
    scene.start((scene)=>{
        const {$while, narrative, $random} = scene
        $random(() => {
            narrative("random 1")
            narrative("random 2")
            narrative("random 3")
            narrative("random 4")
        })
    })

    const result = scene._code
    expect(result).toBe([
        'WHAT: all, -sleep, -nap',
        'WHERE: home',
        'WHEN: 0 - 24',
        'WHO: ',
        'OTHER:',
        '',
        'sceneStart()',
        '  Random',
        '    "random 1"',
        '    "random 2"',
        '    "random 3"',
        '    "random 4"',
        '  EndRandom',
        'sceneEnd()',
        '',
        '',
    ].join(LB))
})