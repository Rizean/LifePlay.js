// noinspection JSUnusedLocalSymbols,ES6ConvertVarToLetConst,JSUnresolvedVariable
const setupMod = require('../../tools/setupMod')
const {STATS} = require('../../../src/core/constants')
const Scene = require('../../../src/core/Scene')
// const LPMod = require('../../../src/LPMod')
const LB = '\r\n'

// *** Helpers ***
const paramScriptMapper = (params) => {
    return `${params.map(ele => {
        if (Array.isArray(ele)) return JSON.stringify(ele)
        return `"${ele}"`
    }).join(', ')}`
}

const paramExpectedMapper = (params) => {
    return `${params?.flat()?.join(', ') || ''}`
}

function playerIsScene(func, ...params) {
    const varName = `player_${func}`
    const script = `(scene) => {
    const {Player} = scene;
    var ${varName} = Player.${func}(${params.map(ele => `"${ele}"`).join(', ')})
}`

    let scene = new Scene({lpMod: setupMod()})
    scene.start(eval(script))
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        `  ${varName} = Player.${func}(${params.join(', ')})`,
        'sceneEnd()'
    ].join(LB))
}

function actorIsScene(func, ...params) {
    const varName = `actor_${func}`
    const script = `(scene) => {
    const {Player} = scene;
    var ActorA = scene.getSpecific('Criminal')
    var ${varName} = ActorA.${func}(${params.map(ele => `"${ele}"`).join(', ')})
}`

    let scene = new Scene({lpMod: setupMod()})
    scene.start(eval(script))
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        `  ActorA = getSpecific(Criminal)`,
        `  ${varName} = ActorA.${func}(${params.join(', ')})`,
        'sceneEnd()'
    ].join(LB))
}

function oneActorSceneWithVar(func, ...params) {
    const varName = `actor_${func}`
    const script = `(scene) => {
    var randomActor = scene.getPerson()
    var result = randomActor.${func}(${params.map(ele => {
        if (Array.isArray(ele)) return JSON.stringify(ele)
        return `"${ele}"`
    }).join(', ')})
}`
    // console.log('script', script)
    let scene = new Scene({lpMod: setupMod()})
    scene.start(eval(script))
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        `  randomActor = getPerson()`,
        `  result = randomActor.${func}(${params?.flat()?.join(', ') || ''})`,
        'sceneEnd()'
    ].join(LB))
}

function twoActorSceneWithVar(func, ...params) {
    const varName = `twoActor_${func}`
    const script = `(scene) => {
    var ActorA = scene.getSpecific('Criminal')
    var ActorB = scene.getSpecific('Boss')
    var result = ActorA.${func}(ActorB)
}`

    let scene = new Scene({lpMod: setupMod()})
    scene.start(eval(script))
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        `  ActorA = getSpecific(Criminal)`,
        `  ActorB = getSpecific(Boss)`,
        `  result = ActorA.${func}(ActorB)`,
        'sceneEnd()'
    ].join(LB))
}

function twoActorIsScene(func, ...params) {
    const varName = `twoActor_${func}`
    const script = `(scene) => {
    var ActorA = scene.getSpecific('Criminal')
    var ActorB = scene.getSpecific('Boss')
    var ${varName} = ActorA.${func}(ActorB)
}`

    let scene = new Scene({lpMod: setupMod()})
    scene.start(eval(script))
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        `  ActorA = getSpecific(Criminal)`,
        `  ActorB = getSpecific(Boss)`,
        `  ${varName} = ActorA.${func}(ActorB)`,
        'sceneEnd()'
    ].join(LB))
}

function actorPlayerScene(func, ...params) {
    const varName = `twoActor_${func}`
    const script = `(scene) => {
    const {Player} = scene
    var ActorA = scene.getSpecific('Criminal')
    ActorA.${func}(Player)
}`

    let scene = new Scene({lpMod: setupMod()})
    scene.start(eval(script))
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        `  ActorA = getSpecific(Criminal)`,
        `  ActorA.${func}(Player)`,
        'sceneEnd()'
    ].join(LB))
}

function oneActorScene(func, ...params) {
    const varName = `twoActor_${func}`
    const script = `(scene) => {
    var ActorA = scene.getSpecific('Criminal')
    ActorA.${func}(${params.map(ele => {
        if (Array.isArray(ele)) return JSON.stringify(ele)
        return `"${ele}"`
    }).join(', ')})
}`
    // console.log(script)
    let scene = new Scene({lpMod: setupMod()})
    scene.start(eval(script))

    expect(scene._code.trim()).toBe([
        'sceneStart()',
        `  ActorA = getSpecific(Criminal)`,
        `  ActorA.${func}(${params?.flat()?.join(', ') || ''})`,
        'sceneEnd()'
    ].join(LB))
}

// *** Test ***
test('LPActor.animate', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        const {Player} = scene;
        var Actor = scene.getSpecific('Criminal', 'Actor')
        Player.animate('gun')
        Actor.animate('gun')
        Actor.animate('')
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  Actor = getSpecific(Criminal)',
        '  Player.animate(gun)',
        '  Actor.animate(gun)',
        '  Actor.animate()',
        'sceneEnd()'
    ].join(LB))

    // const scene2 = new Scene(function ({scene}) {
    //     const {float, boolean, Player} = scene
    //     var Actor = scene.getSpecific('Criminal', 'Actor')
    //     Player.animate('invalid')
    //     Actor.animate('gun')
    // })
    const main = () => scene.start((scene) => {
        const {Player} = scene;
        var Actor = scene.getSpecific('Criminal', 'Actor')
        Player.animate('invalid')
        Actor.animate('gun')
    })
    expect(main).toThrowError('Invalid animation!')
})

test('LPActor.animatePair', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        const {Player} = scene;
        var Actor = scene.getSpecific('Criminal', 'Actor')
        Player.animatePair(Actor, 'kissing')
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  Actor = getSpecific(Criminal)',
        '  animatePair(Player, Actor, kissing)',
        'sceneEnd()'
    ].join(LB))
})

test('LPActor.blendAppearanceFrom()', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        const {Player} = scene
        var dating = Player.getRelatedPerson(['Dating'])
        var child = scene.generatePerson()
        child.blendAppearanceFrom(Player, dating)
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  dating = Player.getRelatedPerson(Dating)',
        '  child = generatePerson()',
        '  child.blendAppearanceFrom(Player, dating)',
        'sceneEnd()'
    ].join(LB))
})

// noinspection DuplicatedCode
test('LPActor.blendPreset()', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        const {$random} = scene
        var ActorA = scene.getSpecific('Criminal')
        $random(() => {
            ActorA.loadPreset(["hourglass_F", "hourglass1_F"]) // Just a normal hourglass girl
            ActorA.blendPreset("hourglass_F")                 // There is still signs of the beefcake
        })
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  Random',
        '    ActorA.loadPreset(hourglass_F, hourglass1_F)',
        '    ActorA.blendPreset(hourglass_F)',
        '  EndRandom',
        'sceneEnd()'
    ].join(LB))
})

test('LPActor.changeSex', () => oneActorScene('changeSex'))

test('LPActor.cloneFrom', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        var Actor = scene.getSpecific('Criminal', 'Actor')
        var Actor2 = scene.generatePerson([], 'Actor2')
        Actor2.cloneFrom(Actor)
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  Actor = getSpecific(Criminal)',
        '  Actor2 = generatePerson()',
        '  Actor2.cloneFrom(Actor)',
        'sceneEnd()'
    ].join(LB))
})

test('LPActor.closeEyes()', () => oneActorScene('closeEyes', true))

test('LPActor.countPregnancyDays()', () => oneActorSceneWithVar('countPregnancyDays'))

test('LPActor.dialog()', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        const {Player} = scene
        Player.dialogue("simple dialog")
        Player.dialogue("dialog with a mood", 'Happy')
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  Player:: "simple dialog"',
        '  Player(Happy):: "dialog with a mood"',
        'sceneEnd()'
    ].join(LB))

    const main = () => scene.start((scene) => {
        const {Player} = scene
        Player.dialogue("dialog with invalid mood", 'invalid mood')
    })
    expect(main).toThrowError('Invalid mood!')
})

test('LPActor.dress()', () => oneActorScene('dress', "Casual-Clothes_1_F"))

test('LPActor.dressBondage()', () => oneActorScene('dressBondage', "Bdg_Blindfold"))

test('LPActor.dressExcept()', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        const {Player} = scene
        Player.dressExcept(["Outerwear", "Top", "Bottom", "Foot", "Headwear", "Eyewear"])
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  Player.dressExcept(Outerwear, Top, Bottom, Foot, Headwear, Eyewear)',
        'sceneEnd()'
    ].join(LB))

    const main = () => scene.start((scene) => {
        const {Player} = scene
        Player.dressExcept(["invalid", "Top", "Bottom", "Foot", "Headwear", "Eyewear"])
    })
    expect(main).toThrowError('Invalid clothing slot!')
})

test('LPActor.dressGuard()', () => oneActorScene('dressGuard'))

test('LPActor.dressPrisoner()', () => oneActorScene('dressPrisoner'))

test('LPActor.dressUniform()', () => oneActorScene('dressUniform'))

test('LPActor.dressWedding()', () => oneActorScene('dressWedding'))

test('LPActor.endPregnancy()', () => oneActorScene('endPregnancy'))

test('LPActor.enterFirstName()', () => oneActorScene('enterFirstName'))

test('LPActor.generatePersonMatchRace()', () => oneActorSceneWithVar('generatePersonMatchRace'))

test('LPActor.generatePersonTemporaryMatchRace()', () => oneActorSceneWithVar('generatePersonTemporaryMatchRace'))

test('LPActor.generateRelativeMatchRace()', () => oneActorSceneWithVar('generateRelativeMatchRace'))

test('LPActor.getActorVar()', () => oneActorSceneWithVar('getActorVar', 'SomeVariable'))

test('LPActor.getBabyDaddy()', () => oneActorSceneWithVar('getBabyDaddy'))

test('LPActor.getBuilding()', () => oneActorSceneWithVar('getBuilding', 'playersHome'))

test('LPActor.getID()', () => oneActorSceneWithVar('getID'))

test('LPActor.getMorphValue()', () => oneActorSceneWithVar('getMorphValue', 'Genesis8Female__Mouth'))

test('LPActor.getPregnancyTag()', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        const {Player, narrative, $if} = scene
        var pregnancyTag = Player.getPregnancyTag('pregnancyTag')
        if (pregnancyTag.isString("Aggressive")) {
            narrative('<Player.name> is pregnant from being raped!')
        }
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  pregnancyTag = Player.getPregnancyTag()',
        '  If pregnancyTag.isString("Aggressive")',
        '    "<Player.name> is pregnant from being raped!"',
        '  EndIf',
        'sceneEnd()'
    ].join(LB))
})

test('LPActor.getRace()', () => oneActorSceneWithVar('getRace'))

test('LPActor.getRelatedPerson()', () => oneActorSceneWithVar('getRelatedPerson', ['Dating', 'Spouses']))

test('LPActor.getRelatedPersonQuick()', () => oneActorSceneWithVar('getRelatedPersonQuick', ['Dating', 'Spouses']))

test('LPActor.hasSameInterestAs()', () => twoActorIsScene('hasSameInterestAs', ['Dating', 'Spouses']))

test('LPActor.hadSex()', () => actorIsScene('hadSex'))

test('LPActor.hide()', () => oneActorScene('hide'))

test('LPActor.impregnate()', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        const {Player, narrative} = scene
        var ActorA = scene.getSpecific('Criminal')
        ActorA.impregnate()
        ActorA.impregnate(Player)
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorA.impregnate()',
        '  ActorA.impregnate(Player)',
        'sceneEnd()'
    ].join(LB))
})

test('LPActor.isAsexual()', () => oneActorSceneWithVar('isAsexual'))

test('LPActor.isAt()', () => oneActorSceneWithVar('isAt', 'work'))

test('LPActor.isBisexual()', () => oneActorSceneWithVar('isBisexual'))

test('LPActor.isBisexualNonTrans()', () => oneActorSceneWithVar('isBisexualNonTrans'))

// test('LPActor.isBisexualNonTrans()', () => {
//     const scene = new Scene(function ({scene}) {
//         const {float, boolean, Player} = scene
//         var playerIsBisexualNonTrans = Player.isBisexualNonTrans()
//     })
//     const result = scene.build().trim()
//     expect(result).toBe([
//         'WHAT:\r\nWHERE:\r\nWHEN:\r\nWHO:\r\nOTHER:',
//         'playerIsBisexualNonTrans = Player.isBisexualNonTrans()',
//     ].join(LB))
// })

test('LPActor.isDating()', () => oneActorSceneWithVar('isDating'))

test('LPActor.isDominantSex()', () => twoActorSceneWithVar('isDominantSex'))

test('LPActor.isEquipped()', () => oneActorSceneWithVar('isEquipped', 'Bottom_Under'))
test('LPActor.isFemale()', () => oneActorSceneWithVar('isFemale'))
test('LPActor.isGay()', () => oneActorSceneWithVar('isGay'))
test('LPActor.isGayNonTrans()', () => oneActorSceneWithVar('isGayNonTrans'))
test('LPActor.isInterestedIn()', () => twoActorSceneWithVar('isInterestedIn'))
test('LPActor.isInterestedInMen()', () => playerIsScene('isInterestedInMen'))
test('LPActor.isInterestedInTrans()', () => playerIsScene('isInterestedInTrans'))
test('LPActor.isInterestedInWomen()', () => playerIsScene('isInterestedInWomen'))
test('LPActor.isJob()', () => playerIsScene('isJob', 'doctor'))
test('LPActor.isMale()', () => playerIsScene('isMale'))
test('LPActor.isNaked()', () => playerIsScene('isNaked'))
test('LPActor.isNude()', () => playerIsScene('isNude'))
test('LPActor.isPlayer()', () => playerIsScene('isPlayer'))
test('LPActor.isPregnant()', () => playerIsScene('isPregnant'))
test('LPActor.isProstitute()', () => playerIsScene('isProstitute'))
test('LPActor.isRace()', () => playerIsScene('isRace', 'Human'))
test('LPActor.isSameAs()', () => twoActorIsScene('isSameAs'))
test('LPActor.isSameGender()', () => twoActorIsScene('isSameGender'))
test('LPActor.isSameRace()', () => twoActorIsScene('isSameRace'))
test('LPActor.isSlotOccupied()', () => playerIsScene('isSlotOccupied', 'Bottom_Under'))
test('LPActor.isStraight()', () => playerIsScene('isStraight'))
test('LPActor.isStraightNonTrans()', () => playerIsScene('isStraightNonTrans'))
test('LPActor.isTrans()', () => playerIsScene('isTrans'))
test('LPActor.isValid()', () => playerIsScene('isValid'))
test('LPActor.isVirgin()', () => playerIsScene('isVirgin'))
test('LPActor.isVisible()', () => playerIsScene('isVisible', 'Bottom_Under'))

// noinspection DuplicatedCode
test('LPActor.loadPreset()', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        const {$random} = scene
        var ActorA = scene.getSpecific('Criminal')
        $random(() => {
            ActorA.loadPreset(["hourglass_F", "hourglass1_F"]) // Just a normal hourglass girl
            ActorA.blendPreset("hourglass_F")                 // There is still signs of the beefcake
        })
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  Random',
        '    ActorA.loadPreset(hourglass_F, hourglass1_F)',
        '    ActorA.blendPreset(hourglass_F)',
        '  EndRandom',
        'sceneEnd()'
    ].join(LB))
})

test('LPActor.makeInterested()', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        const {Player} = scene
        var ActorA = scene.getSpecific('Criminal')
        ActorA.makeInterested(Player)
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorA.makeInterested(Player)',
        'sceneEnd()'
    ].join(LB))
})

test('LPActor.matchLastName()', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        const {Player} = scene
        var ActorA = scene.getSpecific('Criminal')
        ActorA.matchLastName(Player)
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorA.matchLastName(Player)',
        'sceneEnd()'
    ].join(LB))
})

test('LPActor.modifyActorVar()', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        const {Player} = scene
        var ActorA = scene.getSpecific('Criminal')
        ActorA.modifyActorVar('licenseToKill', 7)
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorA.modifyActorVar(licenseToKill, 7)',
        'sceneEnd()'
    ].join(LB))
})

test('LPActor.modifySalary()', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        const {Player} = scene
        var ActorA = scene.getSpecific('Criminal')
        ActorA.modifySalary(1.1)
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorA.modifySalary(1.1)',
        'sceneEnd()'
    ].join(LB))
})

test('LPActor.moveToPerson()', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        const {Player} = scene
        var ActorA = scene.getSpecific('Criminal')
        ActorA.moveToPerson(Player)
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorA.moveToPerson(Player)',
        'sceneEnd()'
    ].join(LB))
})

test('LPActor.moveToPersonStand()', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        const {Player} = scene
        var ActorA = scene.getSpecific('Criminal')
        ActorA.moveToPersonStand(Player, 70)
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorA.moveToPersonStand(Player, 70)',
        'sceneEnd()'
    ].join(LB))
})

test('LPActor.setActorVar()', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        const {Player} = scene
        var ActorA = scene.getSpecific('Criminal')
        ActorA.setActorVar('licenseToKill', -1)
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorA.setActorVar(licenseToKill, -1)',
        'sceneEnd()'
    ].join(LB))
})

test('LPActor.setCurrentLocation()', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        const {Player} = scene
        var ActorA = scene.getSpecific('Criminal')
        var home = ActorA.getBuilding('home')
        ActorA.setCurrentLocation(home)
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  home = ActorA.getBuilding(home)',
        '  ActorA.setCurrentLocation(home)',
        'sceneEnd()'
    ].join(LB))
})

test('LPActor.setExRelative()', () => actorPlayerScene('setExRelative'))
test('LPActor.setJob()', () => oneActorScene('setJob', 'Doctor'))
test('LPActor.setMorphValue()', () => oneActorScene('setMorphValue', 'Genesis8Female__PBMPregnant', 0.5))
test('LPActor.setNoRedress()', () => oneActorScene('setNoRedress'))
test('LPActor.setWantsBabies() true', () => oneActorScene('setWantsBabies', true))
test('LPActor.setWantsBabies() false', () => oneActorScene('setWantsBabies', false))

test('LPActor.sex()', () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        const {Player} = scene
        var ActorA = scene.getSpecific('Criminal')
        ActorA.sex([Player])
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  sex(ActorA, Player)',
        'sceneEnd()'
    ].join(LB))
})

test('LPActor.show()', () => oneActorScene('show', 2))
test('LPActor.strip()', () => oneActorScene('strip'))
test('LPActor.wantsBabies()', () => playerIsScene('wantsBabies'))

test(`LPActor Stats Math test`, async () => {
    let scene = new Scene({lpMod: setupMod()})
    scene.start((scene) => {
        const {Player} = scene
        var ActorA = scene.getSpecific('Employee')
        ActorA.perversion = 5
        ActorA.perversion += 5
        var sum = Player.perversion + ActorA.perversion
    })
    await scene.writeFiles({buildPath: 'build', filePath: 'test/core/objects/LPActor', fileName: 'LPActor_Stats_Math_test', type: 'scene', debug: true})
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Employee)',
        '  ActorA:perversion => 5',
        '  ActorA:perversion += 5',
        '  sum = Player:perversion + ActorA:perversion',
        'sceneEnd()'
    ].join(LB))
})

// This is not very useful other than for coverage
let runOnce = true
STATS.forEach(stat => {
    test(`LPActor Stats - ${stat}`, async () => {
        let scene = new Scene({lpMod: setupMod()})
        const script = `(scene) => {
            const {Player} = scene
            var ActorA = scene.getSpecific('Employee')
            ActorA.${stat} = 5
            ActorA.${stat} += 5
            var sum = Player.${stat} + ActorA.${stat}
        }`
        scene.start(eval(script))
        if (runOnce) {
            runOnce = false
            await scene.writeFiles({buildPath: 'build', filePath: 'test/core/objects/LPActor', fileName: `LPActor_Stats_${stat}_test`, type: 'scene', debug: true})
        }
        expect(scene._code.trim()).toBe([
            'sceneStart()',
            '  ActorA = getSpecific(Employee)',
            `  ActorA:${stat} => 5`,
            `  ActorA:${stat} += 5`,
            `  sum = Player:${stat} + ActorA:${stat}`,
            'sceneEnd()'
        ].join(LB))
    })
})
