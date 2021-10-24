// noinspection DuplicatedCode

const setupMod = require('../../tools/setupMod')
const Scene = require('../../../src/core/Scene')
const LB = '\r\n'
const paramScriptMapper = (params) => {
    return `${params.map(ele => {
        if (Array.isArray(ele)) return JSON.stringify(ele)
        return `"${ele}"`
    }).join(', ')}`
}

const paramExpectedMapper = (params) => {
    return `${params?.flat()?.join(', ') || ''}`
}

async function simpleScene(func, hasResult, testName, ...params) {
    testName = testName || `simpleScene_${func}`
    const script = `module.exports = (()=>{
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: '${testName}'}, (scene) => {
        scene.start(() => {
            ${hasResult ? 'var result = ' : ''}scene.${func}(${paramScriptMapper(params)})
        })
    })
    return scene
    })()
`
    const scene = eval(script)
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        `  ${hasResult ? 'result = ' : ''}${func}(${paramExpectedMapper(params)})`,
        'sceneEnd()'
    ].join(LB))
}

async function simpleSceneOneActor(func, ...params) {
    const script = `module.exports = (()=>{
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'simpleSceneOneActor_${func}'}, (scene) => {
        scene.start(() => {
            var ActorA = scene.getPerson()
            scene["${func}"](ActorA)
        })
    })
    return scene
    })()
`
    const scene = eval(script)
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getPerson()',
        `  ${func}(ActorA)`,
        'sceneEnd()'
    ].join(LB))
}

async function simpleSceneTwoActor(func, ...params) {
    const script = `module.exports = (()=>{
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'simpleSceneTwoActor_${func}'}, (scene) => {
        scene.start(() => {
            var ActorA = scene.getPerson()
            var ActorB = scene.getPerson()
            scene["${func}"](ActorA, ActorB)
        })
    })
    return scene
    })()
`
    const scene = eval(script)
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getPerson()',
        '  ActorB = getPerson()',
        `  ${func}(ActorA, ActorB)`,
        'sceneEnd()'
    ].join(LB))
}

test('WHAT / WHERE / WHEN / WHO', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'WHAT_WHERE_WHEN_WHO'}, (scene) => {
        const {random, paren, Player, actionDuration} = scene;
        scene.WHAT(['all', '-sleep', '-nap'])
        scene.WHERE(['home'])
        scene.WHEN(['0', '24'])
        scene.WHO(() => {

            var Employee1 = scene.getSpecific('Employee')
            var Employee2 = scene.getSpecific('Employee')
            // condition(
            $IF(
                !Employee1.isDating() && !Employee2.isDating()
                && Employee1.isInterestedIn(Employee2) && Employee2.isInterestedIn(Employee1)
                && Employee1.perversion + Employee2.perversion > random(75, 150)
            )
            // )
        })
        scene.OTHER((scene, condition) => {
            $IF(Player.isAtHome() && Player.intelligence < random(0, 1) * random(0, 1) * random(0, 1) * 30 * actionDuration)
        })
        scene.start(() => {
            let a = 1
        })
    })

    expect((await scene.toString()).trim()).toBe([
        'WHAT: all, -sleep, -nap',
        'WHERE: home',
        'WHEN: 0 - 24',
        'WHO: Employee1 = getSpecific(Employee); Employee2 = getSpecific(Employee); If !(Employee1.isDating()) && !(Employee2.isDating()) && Employee1.isInterestedIn(Employee2) && Employee2.isInterestedIn(Employee1) && Employee1:perversion + Employee2:perversion > Random(75, 150); ',
        'OTHER: If isAtHome() && Player:intelligence < Random(0, 1) * Random(0, 1) * Random(0, 1) * 30 * actionDuration;',
        '',
        'sceneStart()',
        '  a = 1',
        'sceneEnd()'
    ].join(LB))

})

test('addNpcRelationship', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'addNpcRelationship'}, (scene) => {
        scene.start(() => {
            var ActorA = scene.getSpecific('Criminal')
            var ActorB = scene.getSpecific('Boss')
            scene.addNpcRelationship('BossEmployee', [ActorA, ActorB])
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        `  ActorA = getSpecific(Criminal)`,
        `  ActorB = getSpecific(Boss)`,
        `  addNpcRelationship(BossEmployee, ActorA, ActorB)`,
        'sceneEnd()'
    ].join(LB))
})

test('assignHome', () => simpleScene('assignHome', false))
test('assignResidents', () => simpleScene('assignResidents', false))
test('blockPregnancy', () => simpleScene('blockPregnancy', false))
test('cameraFocus', () => simpleSceneOneActor('cameraFocus'))
test('cameraLock', () => simpleScene('cameraLock', false))
test('cameraMove 3 params', () => simpleScene('cameraMove', false, 'cameraMove_3_params', 0, 0, 800))
test('cameraMove 4 params', () => simpleScene('cameraMove', false, 'cameraMove_4_params', 0, 0, 800, 90))
test('cameraMove 5 params', () => simpleScene('cameraMove', false, 'cameraMove_5_params', 0, 0, 800, 90, 90))
test('cameraMove 6 params', () => simpleScene('cameraMove', false, 'cameraMove_6_params', 0, 0, 800, 90, 90, 90))
test('cameraUnlock', () => simpleScene('cameraUnlock', false))
test('clearBackground3d', () => simpleScene('clearBackground3d', false))
test('clearGetList', () => simpleScene('clearGetList', false))
test('dressFormal', () => simpleScene('dressFormal', false))
test('faceEachOther', () => simpleSceneTwoActor('faceEachOther'))
test('filterDesc', () => simpleScene('filterDesc', false, 'filterDesc', 'FilenameofLpdescfile'))
test('filterTalk', () => simpleScene('filterTalk', false, 'filterTalk', 'FilenameofLptalkfile'))
test('filter', () => simpleScene('filter', false, 'filter', 'Handjob'))
test('findNearbyBuilding', () => simpleScene('findNearbyBuilding', true, 'findNearbyBuilding', ['restaurant', 'nightclub']))
test('followUp', () => simpleScene('followUp', false, 'followUp', 'death'))
test('forcedTrigger', () => simpleScene('forcedTrigger', true, 'forcedTrigger'))
test('generateCreature', () => simpleScene('generateCreature', true, 'generateCreature', 'Dogs'))
test('generateCreatureTemporary', () => simpleScene('generateCreatureTemporary', true, 'generateCreatureTemporary', 'Dogs'))
test('generatePerson', () => simpleScene('generatePerson', true, 'generatePerson', ["easterneuropean", "twenties", "fitness_model"]))
test('generatePersonTemporary', () => simpleScene('generatePersonTemporary', true, 'generatePersonTemporary', ["easterneuropean", "twenties", "fitness_model"]))

test('getActorAlias', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'getActorAlias'}, (scene) => {
        scene.start((scene) => {
            var Amy = scene.getActorAlias('AmyA')
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  Amy = AmyA.getActorAlias()',
        'sceneEnd()'
    ].join(LB))
})

test('getAssignee', () => simpleScene('getAssignee', true, 'getAssignee', "living room"))
test('getCreature', () => simpleScene('getCreature', true))

test('getPerson', () => simpleScene('getPerson', true, 'getPerson', true))

test('getPersonHere', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'Scene_getPersonHere'}, (scene) => {
        scene.start((scene) => {
            var anyNpc = scene.getPersonHere()
            var onlyPermanent = scene.getPersonHere(true)
            var onlyTemp = scene.getPersonHere(false)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  anyNpc = getPersonHere()',
        '  onlyPermanent = getPersonHere(true)',
        '  onlyTemp = getPersonHere(false)',
        'sceneEnd()',
    ].join(LB))
})

test('getRelatedPeople', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'getRelatedPeople'}, (scene) => {
        scene.start((scene) => {
            var related = scene.getRelatedPeople(['Dating', 'Spouses'])
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  related = getRelatedPeople(Dating, Spouses)',
        'sceneEnd()',
    ].join(LB))

})

test('isModEnabled', () => simpleScene('isModEnabled', true, 'isModEnabled', 'vin_NTR'))
test('isQuestCompleted', () => simpleScene('isQuestCompleted', true, 'isQuestCompleted', 'legalized'))
test('isTimingOut', () => simpleScene('isTimingOut', true, 'isTimingOut', 'recommend_for_promotion'))

test('narrative', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        scene.narrative("some text")
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  "some text"',
        'sceneEnd()'
    ].join(LB))
})

test('openMenu', () => simpleScene('openMenu', false))
test('passTime', () => simpleScene('passTime', false, 'passTime', 0.2, 1))
test('preciseModify', () => simpleScene('preciseModify', false))
test('questEnd', () => simpleScene('questEnd', false))


test('removeNpcRelationship', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'removeNpcRelationship'}, (scene) => {
        scene.start((scene) => {
            var ActorA = scene.getSpecific('Criminal')
            var ActorB = scene.getSpecific('Boss')
            scene.removeNpcRelationship([ActorA, ActorB])
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorB = getSpecific(Boss)',
        '  removeNpcRelationship(ActorA, ActorB)',
        'sceneEnd()',
    ].join(LB))
})

test('resetTutorials', () => simpleScene('resetTutorials', false))
test('saveOldPlayer', () => simpleScene('saveOldPlayer', false))
test('sceneEndLoadLastSave', () => simpleScene('sceneEndLoadLastSave', false))

test('secondScreen', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'secondScreen'}, (scene) => {
        scene.start((scene) => {
            var ActorA = scene.getSpecific('Criminal')
            scene.secondScreen(ActorA)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  secondScreen(ActorA)',
        'sceneEnd()',
    ].join(LB))
})

test('secondScreenIfHidden', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'secondScreenIfHidden'}, (scene) => {
        scene.start((scene) => {
            var ActorA = scene.getSpecific('Criminal')
            scene.secondScreenIfHidden(ActorA)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  secondScreenIfHidden(ActorA)',
        'sceneEnd()',
    ].join(LB))
})

test('setBackground', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        scene.setBackground('street')
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  setBackground(street)',
        'sceneEnd()'
    ].join(LB))

    const main = () => scene.start((scene) => {
        scene.setBackground('invalid')
    })
    expect(main).toThrowError('Invalid location!')
})

test('setBackground3D', () => simpleScene('setBackground3D', false, 'setBackground3D', 'Modules/nn_PornEmpire/Rooms/nn_pe_office_1.lpworld'))
test('setBackgroundCustom', () => simpleScene('setBackgroundCustom', false, 'setBackgroundCustom', 'livingroom'))

test('sex', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'sex'}, (scene) => {
        scene.start((scene) => {
            var ActorA = scene.getSpecific('Criminal')
            var ActorB = scene.getSpecific('Boss')
            scene.sex([ActorA, ActorB])
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorB = getSpecific(Boss)',
        '  sex(ActorA, ActorB)',
        'sceneEnd()',
    ].join(LB))
})

test('sexAtPoint', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'sexAtPoint'}, (scene) => {
        scene.start((scene) => {
            var ActorA = scene.getSpecific('Criminal')
            var ActorB = scene.getSpecific('Boss')
            scene.sexAtPoint(150, 50, 200)
            scene.sexAtPoint(150, 50, 200, 90)
            scene.sex([ActorA, ActorB])
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorB = getSpecific(Boss)',
        '  sexAtPoint(150, 50, 200)',
        '  sexAtPoint(150, 50, 200, 90)',
        '  sex(ActorA, ActorB)',
        'sceneEnd()',
    ].join(LB))

})

test('sexNoAffair', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'sexNoAffair'}, (scene) => {
        scene.start((scene) => {
            var ActorA = scene.getSpecific('Criminal')
            var ActorB = scene.getSpecific('Boss')
            scene.sexNoAffair([ActorA, ActorB])
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorB = getSpecific(Boss)',
        '  sexNoAffair(ActorA, ActorB)',
        'sceneEnd()',
    ].join(LB))
})

test('sneakGame', () => simpleScene('sneakGame', false))
test('talkNonConsensual', () => simpleScene('talkNonConsensual', false))
test('wasCondomUsedDuringLastSex', () => simpleScene('wasCondomUsedDuringLastSex', true))
test('timeoutPrecise', () => simpleScene('timeoutPrecise', false, 'timeoutPrecise', 8760, ['birthday']))

test('timeoutActorPrecise', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'timeoutActorPrecise'}, (scene) => {
        scene.start((scene) => {
            var ActorA = scene.getSpecific('Criminal')
            scene.timeoutActorPrecise(156, 'call_invite', [ActorA])
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  timeoutActorPrecise(156, call_invite, ActorA)',
        'sceneEnd()',
    ].join(LB))
})

test('timeoutActor', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'timeoutActor'}, (scene) => {
        scene.start((scene) => {
            var ActorA = scene.getSpecific('Criminal')
            scene.timeoutActor(24, 'call_invite', [ActorA])
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  timeoutActor(24, call_invite, ActorA)',
        'sceneEnd()',
    ].join(LB))
})