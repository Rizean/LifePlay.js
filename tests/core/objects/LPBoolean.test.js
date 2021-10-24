const setupMod = require('../../tools/setupMod')
const Scene = require('../../../src/core/LPScene')
const LB = '\r\n'

test('boolean.and with lhs/rhs chaining', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'boolean_and'}, (scene) => {
        scene.start(() => {
            let a = true
            let b = false
            let c = a && b && true && a && b
            let d = a && true
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = true',
        '  b = false',
        '  c = a && b && true && a && b',
        '  d = a && true',
        'sceneEnd()',
    ].join(LB))
})

test('boolean.or with lhs/rhs chaining', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'boolean_or'}, (scene) => {
        scene.start(() => {
            let a = true
            let b = false
            let c = a || b || true || (a && b)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = true',
        '  b = false',
        '  c = a || b || true || a && b',
        'sceneEnd()',
    ].join(LB))
})

test('boolean.not with chaining', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'boolean_not'}, (scene) => {
        scene.start(() => {
            let a = true
            let b = false
            let c = !(a || b || true || a && !b)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = true',
        '  b = false',
        '  c = !(a || b || true || a && !(b))',
        'sceneEnd()',
    ].join(LB))

})

test('boolean.paren/squareBrackets with lhs/rhs chaining', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'boolean_paren_squareBrackets'}, (scene) => {
        scene.start(() => {
            const {paren, squareBrackets} = scene;
            let a = true
            let b = false
            let c = !paren(a || b && true) || squareBrackets(a && !b)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = true',
        '  b = false',
        '  c = !((a || b && true)) || [a && !(b)]',
        'sceneEnd()',
    ].join(LB))
})
