// noinspection DuplicatedCode

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

function simpleScene(func, hasResult, ...params) {
    const script = `(scene) => {
    ${hasResult ? 'var result = ' : ''}scene.${func}(${paramScriptMapper(params)})
}`

    let scene = new Scene()
    scene.start(eval(script))
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        `  ${hasResult ? 'result = ' : ''}${func}(${paramExpectedMapper(params)})`,
        'sceneEnd()'
    ].join(LB))
}

function simpleSceneOneActor(func, ...params) {
    const script = `(scene) => {
    var ActorA = scene.getPerson()
    scene.${func}(ActorA)
}`

    let scene = new Scene()
    scene.start(eval(script))
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getPerson()',
        `  ${func}(ActorA)`,
        'sceneEnd()'
    ].join(LB))
}

function simpleSceneTwoActor(func, ...params) {
    const script = `(scene) => {
    var ActorA = scene.getPerson()
    var ActorB = scene.getPerson()
    scene.${func}(ActorA, ActorB)
}`

    let scene = new Scene()
    scene.start(eval(script))
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getPerson()',
        '  ActorB = getPerson()',
        `  ${func}(ActorA, ActorB)`,
        'sceneEnd()'
    ].join(LB))
}

test('WHAT / WHERE / WHEN / WHO', async () => {
    let scene = new Scene()
    scene.WHAT(['all', '-sleep', '-nap'])
    scene.WHERE(['home'])
    scene.WHEN(['0', '24'])
    scene.WHO((scene, condition, $IF) => {
        const {random, paren} = scene;
        var Employee1 = scene.getSpecific('Employee')
        var Employee2 = scene.getSpecific('Employee')
        condition(
            $IF(
                !Employee1.isDating() && !Employee2.isDating()
                && Employee1.isInterestedIn(Employee2) && Employee2.isInterestedIn(Employee1)
                && Employee1.perversion + Employee2.perversion > random(75, 150)
            )
        )
    })
    scene.OTHER((scene, condition) => {
        const {Player, random, actionDuration} = scene
        condition(Player.isAtHome() && Player.intelligence < random(0, 1) * random(0, 1) * random(0, 1) * 30 * actionDuration)
    })
    scene.start((scene) => {
        let a = 1
    })
    expect(scene._code.trim()).toBe([
        'WHAT: all, -sleep, -nap',
        'WHERE: home',
        'WHEN: 0 - 24',
        'WHO: Employee1 = getSpecific(Employee); Employee2 = getSpecific(Employee); If !(Employee1.isDating()) && !(Employee2.isDating()) && Employee1.isInterestedIn(Employee2) && Employee2.isInterestedIn(Employee1) && Employee1:perversion + Employee2:perversion > Random(75, 150); ',
        'OTHER: isAtHome() && Player:intelligence < Random(0, 1) * Random(0, 1) * Random(0, 1) * 30 * actionDuration;',
        '',
        'sceneStart()',
        '  a = 1',
        'sceneEnd()'
    ].join(LB))

})

test('addNpcRelationship', () => {
    let scene = new Scene()
    scene.start((scene) => {
        var ActorA = scene.getSpecific('Criminal')
        var ActorB = scene.getSpecific('Boss')
        scene.addNpcRelationship('BossEmployee', [ActorA, ActorB])
    })
    expect(scene._code.trim()).toBe([
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
test('cameraMove', () => simpleScene('cameraMove', false, 0, 0, 800))
test('cameraMove', () => simpleScene('cameraMove', false, 0, 0, 800, 90))
test('cameraMove', () => simpleScene('cameraMove', false, 0, 0, 800, 90, 90))
test('cameraMove', () => simpleScene('cameraMove', false, 0, 0, 800, 90, 90, 90))
test('cameraUnlock', () => simpleScene('cameraUnlock', false))
test('clearBackground3d', () => simpleScene('clearBackground3d', false))
test('clearGetList', () => simpleScene('clearGetList', false))
test('dressFormal', () => simpleScene('dressFormal', false))
test('faceEachOther', () => simpleSceneTwoActor('faceEachOther'))
test('filterDesc', () => simpleScene('filterDesc', false, 'FilenameofLpdescfile'))
test('filterTalk', () => simpleScene('filterTalk', false, 'FilenameofLptalkfile'))
test('filter', () => simpleScene('filter', false, 'Handjob'))
test('findNearbyBuilding', () => simpleScene('findNearbyBuilding', true, ['restaurant', 'nightclub']))
test('followUp', () => simpleScene('followUp', false, 'death'))
test('forcedTrigger', () => simpleScene('forcedTrigger', true))
test('generateCreature', () => simpleScene('generateCreature', true, 'Dogs'))
test('generateCreatureTemporary', () => simpleScene('generateCreatureTemporary', true, 'Dogs'))
test('generatePerson', () => simpleScene('generatePerson', true, ["easterneuropean", "twenties", "fitness_model"]))
test('generatePersonTemporary', () => simpleScene('generatePersonTemporary', true, ["easterneuropean", "twenties", "fitness_model"]))

test('getActorAlias', () => {
    let scene = new Scene()
    scene.start((scene) => {
        var Amy = scene.getActorAlias('AmyA')
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  Amy = AmyA.getActorAlias()',
        'sceneEnd()'
    ].join(LB))
})

test('getAssignee', () => simpleScene('getAssignee', true, "living room"))
test('getCreature', () => simpleScene('getCreature', true))

test('getGlobal', () => {
    let scene = new Scene()
    scene.start((scene) => {
        var SugarParent = scene.getGlobal('SugarParent')
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  SugarParent = SugarParent.getGlobal()',
        'sceneEnd()'
    ].join(LB))
})

test('getGlobalString', () => {
    let scene = new Scene()
    scene.start((scene) => {
        var someGlobalString = scene.getGlobalString('someGlobalString')
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  someGlobalString = someGlobalString.getGlobalString()',
        'sceneEnd()'
    ].join(LB))
})

test('getPerson', () => simpleScene('getPerson', true, true))

test('getPersonHere', () => {
    let scene = new Scene()
    scene.start((scene) => {
        var anyNpc = scene.getPersonHere()
        var onlyPermanent = scene.getPersonHere(true)
        var onlyTemp = scene.getPersonHere(false)
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  anyNpc = getPersonHere()',
        '  onlyPermanent = getPersonHere(true)',
        '  onlyTemp = getPersonHere(false)',
        'sceneEnd()'
    ].join(LB))
})

test('getRelatedPeople', () => {
    let scene = new Scene()
    scene.start((scene) => {
        var related = scene.getRelatedPeople(['Dating', 'Spouses'])
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  related = getRelatedPeople(Dating, Spouses)',
        'sceneEnd()'
    ].join(LB))
})

test('isModEnabled', () => simpleScene('isModEnabled', true, 'vin_NTR'))
test('isQuestCompleted', () => simpleScene('isQuestCompleted', true, 'legalized'))
test('isTimingOut', () => simpleScene('isTimingOut', true, 'recommend_for_promotion'))

test('narrative', () => {
    let scene = new Scene()
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
test('passTime', () => simpleScene('passTime', false, 0.2, 1))
test('preciseModify', () => simpleScene('preciseModify', false))
test('questEnd', () => simpleScene('questEnd', false))

test('removeNpcRelationship', () => {
    let scene = new Scene()
    scene.start((scene) => {
        var ActorA = scene.getSpecific('Criminal')
        var ActorB = scene.getSpecific('Boss')
        scene.removeNpcRelationship([ActorA, ActorB])
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorB = getSpecific(Boss)',
        '  removeNpcRelationship(ActorA, ActorB)',
        'sceneEnd()'
    ].join(LB))
})

test('resetTutorials', () => simpleScene('resetTutorials', false))
test('saveOldPlayer', () => simpleScene('saveOldPlayer', false))
test('sceneEndLoadLastSave', () => simpleScene('sceneEndLoadLastSave', false))

test('secondScreen', () => {
    let scene = new Scene()
    scene.start((scene) => {
        var ActorA = scene.getSpecific('Criminal')
        scene.secondScreen(ActorA)
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  secondScreen(ActorA)',
        'sceneEnd()'
    ].join(LB))
})

test('secondScreenIfHidden', () => {
    let scene = new Scene()
    scene.start((scene) => {
        var ActorA = scene.getSpecific('Criminal')
        scene.secondScreenIfHidden(ActorA)
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  secondScreenIfHidden(ActorA)',
        'sceneEnd()'
    ].join(LB))
})

test('setBackground', () => {
    let scene = new Scene()
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

test('setBackground3D', () => simpleScene('setBackground3D', false, 'Modules/nn_PornEmpire/Rooms/nn_pe_office_1.lpworld'))
test('setBackgroundCustom', () => simpleScene('setBackgroundCustom', false, 'livingroom'))

test('sex', () => {
    let scene = new Scene()
    scene.start((scene) => {
        var ActorA = scene.getSpecific('Criminal')
        var ActorB = scene.getSpecific('Boss')
        scene.sex([ActorA, ActorB])
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorB = getSpecific(Boss)',
        '  sex(ActorA, ActorB)',
        'sceneEnd()'
    ].join(LB))
})

test('sexAtPoint', () => {
    let scene = new Scene()
    scene.start((scene) => {
        var ActorA = scene.getSpecific('Criminal')
        var ActorB = scene.getSpecific('Boss')
        scene.sexAtPoint(150, 50, 200)
        scene.sexAtPoint(150, 50, 200, 90)
        scene.sex([ActorA, ActorB])
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorB = getSpecific(Boss)',
        '  sexAtPoint(150, 50, 200)',
        '  sexAtPoint(150, 50, 200, 90)',
        '  sex(ActorA, ActorB)',
        'sceneEnd()'
    ].join(LB))
})

test('sexNoAffair', () => {
    let scene = new Scene()
    scene.start((scene) => {
        var ActorA = scene.getSpecific('Criminal')
        var ActorB = scene.getSpecific('Boss')
        scene.sexNoAffair([ActorA, ActorB])
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorB = getSpecific(Boss)',
        '  sexNoAffair(ActorA, ActorB)',
        'sceneEnd()'
    ].join(LB))
})

test('sneakGame', () => simpleScene('sneakGame', false))
test('talkNonConsensual', () => simpleScene('talkNonConsensual', false))
test('wasCondomUsedDuringLastSex', () => simpleScene('wasCondomUsedDuringLastSex', true))
test('timeoutPrecise', () => simpleScene('timeoutPrecise', false, 8760, ['birthday']))

test('timeoutActorPrecise', () => {
    let scene = new Scene()
    scene.start((scene) => {
        var ActorA = scene.getSpecific('Criminal')
        scene.timeoutActorPrecise(156, 'call_invite', [ActorA])
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  timeoutActorPrecise(156, call_invite, ActorA)',
        'sceneEnd()'
    ].join(LB))
})

test('timeoutActor', () => {
    let scene = new Scene()
    scene.start((scene) => {
        var ActorA = scene.getSpecific('Criminal')
        scene.timeoutActor(24, 'call_invite', [ActorA])
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  timeoutActor(24, call_invite, ActorA)',
        'sceneEnd()'
    ].join(LB))
})