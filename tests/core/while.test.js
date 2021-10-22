const Scene = require('../../src/core/Scene')
const setupMod = require('../tools/setupMod')
const LB = '\r\n'

test('while', async () => {
    let scene = new Scene({lpMod: setupMod()})
    const {WHAT, WHERE, WHEN, WHO, OTHER} = scene
    WHAT(['all', '-sleep', '-nap'])
    WHERE(['home'])
    WHEN(['0', '24'])
    WHO((scene) => {
    })
    OTHER((scene) => {
    })
    scene.start((scene) => {
        const {narrative} = scene
        let count =  0
        while (count < 10) {
            count += 1 // without this line, the loop will continue forever i.e. count will remain less than 10 forever
            narrative("The count is <count>")
        }
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
        '  count = 0',
        '  While count < 10',
        '    count += 1',
        '    "The count is <count>"',
        '  EndWhile',
        'sceneEnd()',
    ].join(LB))
})