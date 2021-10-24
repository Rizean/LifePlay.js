const setupMod = require('../../tools/setupMod')
const Scene = require('../../../src/core/LPScene')
const LB = '\r\n'

async function playerFunctionTest(func, ...params) {
    const script = `module.exports = (()=>{
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPPlayer_${func}'}, (scene) => {
        scene.start(() => {
            scene.Player.${func}(${params.map(ele => `"${ele}"`).join(', ')})
        })
    })
    return scene
    })()
`
    const scene = eval(script)
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        `  ${func}(${params.join(', ')})`,
        'sceneEnd()'
    ].join(LB))
}

async function playerFunctionTestWithReturn(func, ...params) {
    const script = `module.exports = (()=>{
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPPlayer_${func}'}, (scene) => {
        scene.start(() => {
            var result = scene.Player.${func}(${params.map(ele => {
                if (Array.isArray(ele)) return JSON.stringify(ele)
                return `"${ele}"`
            }).join(', ')})
        })
    })
    return scene
    })()
`
    const scene = eval(script)
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        `  result = ${func}(${params?.flat()?.join(', ') || ''})`,
        'sceneEnd()'
    ].join(LB))
}

async function playerFunctionTestWithActor(func, ...params) {
    const script = `
module.exports = (()=>{
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPPlayer_${func}'}, (scene) => {
        scene.start(() => {
            var ActorA = scene.getPerson()
            scene.Player.${func}(ActorA)
        })
    })
    return scene
})()
`
    const scene = eval(script)
    expect((await scene.toString()).trim()).toBe([
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
// test('LPPlayer.moveTo', () => playerFunctionTest('moveTo', 'Home_Dating'))

test('LPPlayer.moveTo', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPPlayer_moveTo'}, (scene) => {
        scene.start((scene) => {
            scene.Player.moveTo('Home_Dating')
            var location = scene.Player.getBuilding("work")
            scene.Player.moveTo(location)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  moveTo(Home_Dating)',
        '  location = Player.getBuilding(work)',
        '  moveTo(work)',
        'sceneEnd()',
    ].join(LB))
})

test('LPPlayer.openRelationship', () => playerFunctionTest('openRelationship'))
test('LPPlayer.playerHasHome', () => playerFunctionTestWithReturn('playerHasHome'))
test('LPPlayer.quitCrime', () => playerFunctionTest('quitCrime'))
test('LPPlayer.quitFraternity', () => playerFunctionTest('quitFraternity'))
test('LPPlayer.quitLecturing', () => playerFunctionTest('quitLecturing'))
test('LPPlayer.quitMedical', () => playerFunctionTest('quitMedical'))
test('LPPlayer.quitSchool', () => playerFunctionTest('quitSchool'))
test('LPPlayer.removeAddedClothes', () => playerFunctionTest('removeAddedClothes'))
test('LPPlayer.selectNPC', () => playerFunctionTestWithReturn('selectNPC'))

test('LPPlayer.setFraternityFees', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPPlayer_setFraternityFees'}, (scene) => {
        scene.start((scene) => {
            const money = 1500
            scene.Player.setFraternityFees(money)
            scene.Player.setFraternityFees(1000)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  money = 1500',
        '  money.setFraternityFees()',
        '  lpjs_fratFee = 1000',
        '  lpjs_fratFee.setFraternityFees()',
        'sceneEnd()',
    ].join(LB))
})

test('LPPlayer.setMajor', () => playerFunctionTest('setMajor'))

test('LPPlayer.setRent', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPPlayer_setRent'}, (scene) => {
        scene.start((scene) => {
            const money = 1500
            scene.Player.setRent(money)
            scene.Player.setRent(1000)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  money = 1500',
        '  money.setRent()',
        '  lpjs_rent = 1000',
        '  lpjs_rent.setRent()',
        'sceneEnd()',
    ].join(LB))
})

test('LPPlayer.setSalary', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPPlayer_setSalary'}, (scene) => {
        scene.start((scene) => {
            const money = 1500
            scene.Player.setSalary(money)
            scene.Player.setSalary(1000)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  money = 1500',
        '  money.setSalary()',
        '  lpjs_salary = 1000',
        '  lpjs_salary.setSalary()',
        'sceneEnd()',
    ].join(LB))
})
test('LPPlayer.setTuition', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPPlayer_setTuition'}, (scene) => {
        scene.start((scene) => {
            const money = 1500
            scene.Player.setTuition(money)
            scene.Player.setTuition(1000)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  money = 1500',
        '  money.setTuition()',
        '  lpjs_tuition = 1000',
        '  lpjs_tuition.setTuition()',
        'sceneEnd()',
    ].join(LB))
})

test('LPPlayer.startBusiness', () => playerFunctionTest('startBusiness'))
test('LPPlayer.startDate', () => playerFunctionTest('startDate'))
test('LPPlayer.startOpenRelationship', () => playerFunctionTest('startOpenRelationship'))
test('LPPlayer.stopBusiness', () => playerFunctionTest('stopBusiness'))
