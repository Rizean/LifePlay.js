// noinspection JSUnusedLocalSymbols,ES6ConvertVarToLetConst
// noinspection JSUnusedLocalSymbols

const {STATS} = require('../../../src/core/constants')
const Scene = require('../../../src/core/Scene')
const LB = '\r\n'

// *** Helpers ***

function npcSceneOneActor(func, ...params) {
    const varName = `actor_${func}`
    const script = `(scene) => {
    var randomActor = scene.getPerson()
    randomActor.${func}(${params.map(ele => {
        if (Array.isArray(ele)) return JSON.stringify(ele)
        return `"${ele}"`
    }).join(', ')})
}`
    // console.log('script', script)
    let scene = new Scene()
    scene.start(eval(script))
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        `  randomActor = getPerson()`,
        `  randomActor.${func}(${params?.flat()?.join(', ') || ''})`,
        'sceneEnd()'
    ].join(LB))
}

function npcSceneOneActorWithVar(func, ...params) {
    const varName = `actor_${func}`
    const script = `(scene) => {
    var randomActor = scene.getPerson()
    var result = randomActor.${func}(${params.map(ele => {
        if (Array.isArray(ele)) return JSON.stringify(ele)
        return `"${ele}"`
    }).join(', ')})
}`
    // console.log('script', script)
    let scene = new Scene()
    scene.start(eval(script))
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        `  randomActor = getPerson()`,
        `  result = randomActor.${func}(${params?.flat()?.join(', ') || ''})`,
        'sceneEnd()'
    ].join(LB))
}

function npcSceneTwoActor(func) {
    const varName = `actor_${func}`
    const script = `(scene) => {
    var randomActorOne = scene.getPerson()
    var randomActorTwo = scene.getPerson()
    randomActorOne.${func}(randomActorTwo)
}`
    // console.log('script', script)
    let scene = new Scene()
    scene.start(eval(script))
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        `  randomActorOne = getPerson()`,
        `  randomActorTwo = getPerson()`,
        `  randomActorOne.${func}(randomActorTwo)`,
        'sceneEnd()'
    ].join(LB))
}

test('LPNPC.addColleague()', () => npcSceneOneActor('addColleague'))
test('LPNPC.addCriminal()', () => npcSceneOneActor('addCriminal'))
test('LPNPC.addDatingFriend()', () => npcSceneOneActor('addDatingFriend'))
test('LPNPC.addEmployee()', () => npcSceneOneActor('addEmployee'))
test('LPNPC.addNeighbour()', () => npcSceneOneActor('addNeighbour'))
test('LPNPC.addToPeopleHere()', () => npcSceneOneActor('addToPeopleHere'))
test('LPNPC.assignWhat()', () => npcSceneOneActor('assignWhat'))
test('LPNPC.assignWhere()', () => npcSceneOneActor('assignWhere'))
test('LPNPC.blockNPCRelationships()', () => npcSceneTwoActor('blockNPCRelationships'))
test('LPNPC.delete()', () => npcSceneOneActor('delete'))
test('LPNPC.deletePerson()', () => npcSceneOneActor('deletePerson'))
test('LPNPC.favoriteHome()', () => npcSceneOneActor('favoriteHome', true))
test('LPNPC.favoriteHome()', () => npcSceneOneActor('favoriteHome', false))
test('LPNPC.getUntil()', () => npcSceneOneActorWithVar('getUntil'))
test('LPNPC.hadSex()', () => npcSceneOneActorWithVar('hadSex'))

test('LPNPC.hasRelationship()', () => {
    let scene = new Scene()
    scene.start((scene) => {
        var randomActor = scene.getPerson()
        var hasRelationship = randomActor.hasRelationship(['Dating', 'Spouses'])
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        `  randomActor = getPerson()`,
        `  hasRelationship = randomActor.hasRelationship(Dating, Spouses)`,
        'sceneEnd()'
    ].join(LB))
})

test('LPNPC.isAffair()', () => npcSceneOneActorWithVar('isAffair'))
test('LPNPC.isBoss()', () => npcSceneOneActorWithVar('isBoss'))
test('LPNPC.isColleague()', () => npcSceneOneActorWithVar('isColleague'))
test('LPNPC.isContactExchanged()', () => npcSceneOneActorWithVar('isContactExchanged'))
test('LPNPC.isCreature()', () => npcSceneOneActorWithVar('isCreature'))
test('LPNPC.isCreatureType()', () => npcSceneOneActorWithVar('isCreatureType', 'dog'))
test('LPNPC.isDatingFriend()', () => npcSceneOneActorWithVar('isDatingFriend'))
test('LPNPC.isDeflowered()', () => npcSceneOneActorWithVar('isDeflowered'))
test('LPNPC.isDeflowerer()', () => npcSceneOneActorWithVar('isDeflowerer'))
test('LPNPC.isEmployee()', () => npcSceneOneActorWithVar('isEmployee'))
test('LPNPC.isLandlord()', () => npcSceneOneActorWithVar('isLandlord'))
test('LPNPC.isMarried()', () => npcSceneOneActorWithVar('isMarried'))
test('LPNPC.isNeighbour()', () => npcSceneOneActorWithVar('isNeighbour'))
// test('LPNPC.isRelationshipWith()', () => npcSceneOneActorWithVar('isRelationshipWith'))
test('LPNPC.isRelationshipWith()', () => {
    let scene = new Scene()
    scene.start((scene) => {
        var randomActorA = scene.getPerson()
        var randomActorB = scene.getPerson()
        var hasRelationship = randomActorA.isRelationshipWith(randomActorB, ['Dating', 'Spouses'])
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        `  randomActorA = getPerson()`,
        `  randomActorB = getPerson()`,
        `  hasRelationship = randomActorA.isRelationshipWith(randomActorB, Dating, Spouses)`,
        'sceneEnd()'
    ].join(LB))
})

test('LPNPC.isRelative()', () => npcSceneOneActorWithVar('isRelative'))
test('LPNPC.isRelativeType()', () => npcSceneOneActorWithVar('isRelativeType', 'Parent'))
test('LPNPC.isTemporary()', () => npcSceneOneActorWithVar('isTemporary'))
test('LPNPC.livesWithPlayer()', () => npcSceneOneActorWithVar('livesWithPlayer'))
test('LPNPC.makePermanent()', () => npcSceneOneActor('makePermanent'))
test('LPNPC.passOn()', () => npcSceneOneActor('passOn'))
test('LPNPC.randomizeFace()', () => npcSceneOneActor('randomizeFace'))
test('LPNPC.randomizeHairs()', () => npcSceneOneActor('randomizeHairs'))
test('LPNPC.randomizeRace()', () => npcSceneOneActor('randomizeRace'))
test('LPNPC.randomizeSexy()', () => npcSceneOneActor('randomizeSexy'))
test('LPNPC.removeColleague()', () => npcSceneOneActor('removeColleague'))
test('LPNPC.removeDatingFriend()', () => npcSceneOneActor('removeDatingFriend'))
test('LPNPC.removeEmployee()', () => npcSceneOneActor('removeEmployee'))
test('LPNPC.removeNeighbour()', () => npcSceneOneActor('removeNeighbour'))
test('LPNPC.removeProstitute()', () => npcSceneOneActor('removeProstitute'))
test('LPNPC.saveAndDelete()', () => npcSceneOneActor('saveAndDelete'))
// test('LPNPC.setActorAlias()', () => npcSceneOneActor('setActorAlias'))
test('LPNPC.setActorAlias()', () => {
    let scene = new Scene()
    scene.start((scene) => {
        var randomActorA = scene.getPerson()
        randomActorA.setActorAlias('Eric')
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        `  randomActorA = getPerson()`,
        `  randomActorA.setActorAlias(Eric)`,
        'sceneEnd()'
    ].join(LB))
})

test('LPNPC.setBoss()', () => npcSceneOneActor('setBoss'))
test('LPNPC.setCrimeBoss()', () => npcSceneOneActor('setCrimeBoss'))
test('LPNPC.setDating()', () => npcSceneOneActor('setDating'))
test('LPNPC.setDatingID()', () => npcSceneOneActor('setDatingID'))
test('LPNPC.setDifferentMajor()', () => npcSceneOneActor('setDifferentMajor'))
test('LPNPC.setLandlord()', () => npcSceneOneActor('setLandlord'))
test('LPNPC.setLivingWithPlayer()', () => npcSceneOneActor('setLivingWithPlayer', true))
test('LPNPC.setPT()', () => npcSceneOneActor('setPT'))
test('LPNPC.setRelativeType()', () => npcSceneOneActor('setRelativeType', 'Child'))
test('LPNPC.setSameMajor()', () => npcSceneOneActor('setSameMajor'))
test('LPNPC.setSubject()', () => npcSceneOneActor('setSubject'))
// test('LPNPC.setUntil()', () => npcSceneOneActor('setUntil'))