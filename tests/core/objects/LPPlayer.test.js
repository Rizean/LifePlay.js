const Scene = require('../../../src/core/Scene')
const LB = '\r\n'

function playerFunctionTest(func, ...params) {
    const varName = `actor_${func}`
    const script = `(scene) => {
    scene.Player.${func}(${params.map(ele => `"${ele}"`).join(', ')})
}`

    let scene = new Scene()
    scene.start(eval(script))
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        `  ${func}(${params.join(', ')})`,
        'sceneEnd()'
    ].join(LB))
}

function playerFunctionTestWithReturn(func, ...params) {
    const varName = `actor_${func}`
    const script = `(scene) => {
    var result = scene.Player.${func}(${params.map(ele => {
        if (Array.isArray(ele)) return JSON.stringify(ele)
        return `"${ele}"`
    }).join(', ')})
}`

    let scene = new Scene()
    scene.start(eval(script))
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        `  result = ${func}(${params?.flat()?.join(', ') || ''})`,
        'sceneEnd()'
    ].join(LB))
}

function playerFunctionTestWithActor(func, ...params) {
    const varName = `actor_${func}`
    const script = `(scene) => {
    var ActorA = scene.getPerson()
    scene.Player.${func}(ActorA)
}`

    let scene = new Scene()
    scene.start(eval(script))
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        `  ActorA = getPerson()`,
        `  ${func}(ActorA)`,
        'sceneEnd()'
    ].join(LB))
}

test('LPPlayer.blockContact', () => playerFunctionTestWithActor('blockContact'))
test('LPPlayer.blockContact', () => playerFunctionTest('chooseContact'))
test('LPPlayer.chooseMajor', () => playerFunctionTest('chooseMajor'))
test('LPPlayer.contractSTD', () => playerFunctionTest('contractSTD'))
test('LPPlayer.datingHasHome', () => playerFunctionTest('datingHasHome'))
test('LPPlayer.divorce', () => playerFunctionTest('divorce'))
test('LPPlayer.endDate', () => playerFunctionTest('endDate'))
test('LPPlayer.endOpenRelationship', () => playerFunctionTest('endOpenRelationship'))
test('LPPlayer.endPrison', () => playerFunctionTest('endPrison'))
test('LPPlayer.enterBusinessName', () => playerFunctionTest('enterBusinessName'))
test('LPPlayer.exchangeContact', () => playerFunctionTestWithActor('exchangeContact'))
test('LPPlayer.forgiveAffairs', () => playerFunctionTest('forgiveAffairs'))
test('LPPlayer.getAnyRelative', () => playerFunctionTestWithReturn('getAnyRelative', 'Child'))
test('LPPlayer.getCompanion', () => playerFunctionTestWithReturn('getCompanion'))
test('LPPlayer.getCompanionAny', () => playerFunctionTestWithReturn('getCompanionAny'))
test('LPPlayer.getCompanionCreature', () => playerFunctionTestWithReturn('getCompanionCreature'))
test('LPPlayer.getMarried', () => playerFunctionTest('getMarried'))
test('LPPlayer.getNumRelatives', () => playerFunctionTestWithReturn('getNumRelatives'))
test('LPPlayer.getRelative', () => playerFunctionTestWithReturn('getRelative', ['Sibling', 'StepSibling']))
test('LPPlayer.getRelativeExcept', () => playerFunctionTestWithReturn('getRelativeExcept', ['Sibling', 'StepSibling']))
test('LPPlayer.getRent', () => playerFunctionTestWithReturn('getRent'))
test('LPPlayer.getSalary', () => playerFunctionTestWithReturn('getSalary'))