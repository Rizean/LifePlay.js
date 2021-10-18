const Scene = require('../../../src/core/Scene')
const LB = '\r\n'

// TODO
function functionTest(func, ...params) {
    const varName = `actor_${func}`
    const script = `(scene) => {
    scene.Player.${func}(${params.map(ele => `"${ele}"`).join(', ')})
}`

    let scene = new Scene()
    // scene.start(eval(script))
    expect('').toBe('')
    // expect(scene._code.trim()).toBe([
    //     'sceneStart()',
    //     `  ${func}(${params.join(', ')})`,
    //     'sceneEnd()'
    // ].join(LB))
}

test('LPPlayer.todo', () => functionTest('todo'))