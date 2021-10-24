const Scene = require('../../src/core/LPScene')
const setupMod = require('../tools/setupMod')
const LB = '\r\n'

test('while', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'while'}, (scene) => {
        const {WHAT, WHERE, WHEN, WHO, OTHER, narrative} = scene
        WHAT(['all', '-sleep', '-nap'])
        WHERE(['home'])
        WHEN(['0', '24'])
        WHO(() => {
        })
        OTHER(() => {
        })
        scene.start(() => {
            let count =  0
            while (count < 10) {
                count += 1 // without this line, the loop will continue forever i.e. count will remain less than 10 forever
                narrative("The count is <count>")
            }
        })
    })
    expect((await scene.toString()).trim()).toBe([
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