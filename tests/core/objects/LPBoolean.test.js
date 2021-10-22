const setupMod = require('../../tools/setupMod')
const Scene = require('../../../src/core/Scene')
const LB = '\r\n'

test('boolean.and with lhs/rhs chaining', async () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        let a = true
        let b = false
        let c = a && b && true && a && b
        let d = a && true
    })
    await scene.writeFiles({buildPath: 'build', filePath: 'test/core/objects/LPBoolean', fileName: 'boolean_and_with_lhs_rhs_chaining', type: 'scene', debug: true})
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = true',
        '  b = false',
        '  c = a && b && true && a && b',
        '  d = a && true',
        'sceneEnd()'
    ].join(LB))
})

test('boolean.or with lhs/rhs chaining', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        let a = true
        let b = false
        let c = a || b || true || (a && b)
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = true',
        '  b = false',
        '  c = a || b || true || a && b',
        'sceneEnd()'
    ].join(LB))
})

test('boolean.not with chaining', async () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        let a = true
        let b = false
        let c = !(a || b || true || a && !b)
    })
    await scene.writeFiles({buildPath: 'build', filePath: 'test/core/objects/LPBoolean', fileName: 'boolean_not_with_chaining', type: 'scene', debug: true})
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = true',
        '  b = false',
        '  c = !(a || b || true || a && !(b))',
        'sceneEnd()'
    ].join(LB))
})

test('boolean.paren/squareBrackets with lhs/rhs chaining', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        const {paren, squareBrackets} = scene;
        let a = true
        let b = false
        let c = !paren(a || b && true) || squareBrackets(a && !b)
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = true',
        '  b = false',
        '  c = !((a || b && true)) || [a && !(b)]',
        'sceneEnd()'
    ].join(LB))
})
