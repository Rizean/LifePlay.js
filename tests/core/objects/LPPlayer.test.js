const setupMod = require('../../tools/setupMod')
const Scene = require('../../../src/core/Scene')
const LB = '\r\n'

function playerFunctionTest(func, ...params) {
    const varName = `actor_${func}`
    const script = `(scene) => {
    scene.Player.${func}(${params.map(ele => `"${ele}"`).join(', ')})
}`

    let scene = new Scene({lpMod: setupMod()})
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

    let scene = new Scene({lpMod: setupMod()})
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

    let scene = new Scene({lpMod: setupMod()})
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
test('LPPlayer.getSelectedNPC', () => playerFunctionTestWithReturn('getSelectedNPC'))
test('LPPlayer.getTarget', () => playerFunctionTestWithReturn('getTarget'))
test('LPPlayer.givePlayerDefaultClothes', () => playerFunctionTest('givePlayerDefaultClothes'))
test('LPPlayer.imprison', () => playerFunctionTest('imprison'))
test('LPPlayer.isAtDatingHome', () => playerFunctionTestWithReturn('isAtDatingHome'))
test('LPPlayer.isAtHome', () => playerFunctionTestWithReturn('isAtHome'))
test('LPPlayer.isPlayerMarried', () => playerFunctionTestWithReturn('isPlayerMarried'))
test('LPPlayer.isStudent', () => playerFunctionTestWithReturn('isStudent'))
test('LPPlayer.isWithCompanion', () => playerFunctionTestWithReturn('isWithCompanion'))
test('LPPlayer.isWithCompanionCreature', () => playerFunctionTestWithReturn('isWithCompanionCreature'))
test('LPPlayer.loseDating', () => playerFunctionTest('loseDating'))
test('LPPlayer.loseHome', () => playerFunctionTest('loseHome'))
test('LPPlayer.loseHomeDating', () => playerFunctionTest('loseHomeDating'))
test('LPPlayer.loseJob', () => playerFunctionTest('loseJob'))
test('LPPlayer.losePT', () => playerFunctionTest('losePT'))
test('LPPlayer.moveFraternity', () => playerFunctionTest('moveFraternity'))
test('LPPlayer.moveHome', () => playerFunctionTest('moveHome'))
test('LPPlayer.moveJobs', () => playerFunctionTest('moveJobs'))
test('LPPlayer.moveSchools', () => playerFunctionTest('moveSchools'))
test('LPPlayer.moveTo', () => playerFunctionTest('moveTo', 'Home_Dating'))
test('LPPlayer.openRelationship', () => playerFunctionTest('openRelationship'))
test('LPPlayer.playerHasHome', () => playerFunctionTestWithReturn('playerHasHome'))
test('LPPlayer.quitCrime', () => playerFunctionTest('quitCrime'))
test('LPPlayer.quitFraternity', () => playerFunctionTest('quitFraternity'))
test('LPPlayer.quitLecturing', () => playerFunctionTest('quitLecturing'))
test('LPPlayer.quitMedical', () => playerFunctionTest('quitMedical'))
test('LPPlayer.quitSchool', () => playerFunctionTest('quitSchool'))
test('LPPlayer.removeAddedClothes', () => playerFunctionTest('removeAddedClothes'))
test('LPPlayer.selectNPC', () => playerFunctionTestWithReturn('selectNPC'))

test('LPPlayer.setFraternityFees', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        scene.Player.setFraternityFees(1000)
    })

    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  lpjs_fratFee = 1000',
        '  lpjs_fratFee.setFraternityFees()',
        'sceneEnd()'
    ].join(LB))

})

test('LPPlayer.setMajor', () => playerFunctionTest('setMajor'))

test('LPPlayer.setRent', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        scene.Player.setRent(1000)
    })

    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  lpjs_rent = 1000',
        '  lpjs_rent.setRent()',
        'sceneEnd()'
    ].join(LB))

})
test('LPPlayer.setSalary', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        scene.Player.setSalary(1000)
    })

    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  lpjs_salary = 1000',
        '  lpjs_salary.setSalary()',
        'sceneEnd()'
    ].join(LB))

})
test('LPPlayer.setTuition', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        scene.Player.setTuition(1000)
    })

    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  lpjs_tuition = 1000',
        '  lpjs_tuition.setTuition()',
        'sceneEnd()'
    ].join(LB))

})

test('LPPlayer.startBusiness', () => playerFunctionTest('startBusiness'))
test('LPPlayer.startDate', () => playerFunctionTest('startDate'))
test('LPPlayer.startOpenRelationship', () => playerFunctionTest('startOpenRelationship'))
test('LPPlayer.stopBusiness', () => playerFunctionTest('stopBusiness'))
