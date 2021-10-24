// noinspection JSUnusedLocalSymbols,ES6ConvertVarToLetConst,JSUnresolvedVariable
const setupMod = require('../../tools/setupMod')
const {STATS} = require('../../../src/core/constants')
const Scene = require('../../../src/core/Scene')
// const LPMod = require('../../../src/LPMod')
const LB = '\r\n'

async function playerIsScene(func, testName, ...params) {
    testName = testName || `LPActor_${func}`

    const script = `module.exports = (()=>{
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: '${testName}'}, (scene) => {
        scene.start(() => {
            var result = scene.Player.${func}(${params.map(ele => `"${ele}"`).join(', ')})
        })
    })
    return scene
    })()
`
    const scene = eval(script)
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        `  result = Player.${func}(${params.join(', ')})`,
        'sceneEnd()'
    ].join(LB))
}

async function actorIsScene(func, testName, ...params) {
    testName = testName || `LPActor_${func}`
    const script = `module.exports = (()=>{
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: '${testName}'}, (scene) => {
        scene.start(() => {
            var ActorA = scene.getSpecific('Criminal')
            var result = ActorA.${func}(${params.map(ele => `"${ele}"`).join(', ')})
        })
    })
    return scene
    })()
`
    const scene = eval(script)
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        `  ActorA = getSpecific(Criminal)`,
        `  result = ActorA.${func}(${params.join(', ')})`,
        'sceneEnd()'
    ].join(LB))
}


async function oneActorSceneWithVar(func, testName, ...params) {
    testName = testName || `LPActor_${func}`
    const script = `module.exports = (()=>{
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: '${testName}'}, (scene) => {
        scene.start(() => {
            var randomActor = scene.getPerson()
            var result = randomActor.${func}(${params.map(ele => {
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
        `  randomActor = getPerson()`,
        `  result = randomActor.${func}(${params?.flat()?.join(', ') || ''})`,
        'sceneEnd()'
    ].join(LB))
}

async function twoActorSceneWithVar(func, testName, ...params) {
    testName = testName || `LPActor_${func}`
    const varName = `player_${func}`
    const script = `module.exports = (()=>{
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: '${testName}'}, (scene) => {
        scene.start(() => {
            var ActorA = scene.getSpecific('Criminal')
            var ActorB = scene.getSpecific('Boss')
            var result = ActorA.${func}(ActorB)
        })
    })
    return scene
    })()
`
    const scene = eval(script)
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        `  ActorA = getSpecific(Criminal)`,
        `  ActorB = getSpecific(Boss)`,
        `  result = ActorA.${func}(ActorB)`,
        'sceneEnd()'
    ].join(LB))
}
const twoActorIsScene = twoActorSceneWithVar

async function actorPlayerScene(func, testName, ...params) {
    testName = testName || `LPActor_${func}`
    const varName = `player_${func}`
    const script = `module.exports = (()=>{
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: '${testName}'}, (scene) => {
        scene.start(() => {
            var ActorA = scene.getSpecific('Criminal')
            ActorA.${func}(scene.Player)
        })
    })
    return scene
    })()
`
    const scene = eval(script)
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        `  ActorA = getSpecific(Criminal)`,
        `  ActorA.${func}(Player)`,
        'sceneEnd()'
    ].join(LB))
}

async function oneActorScene(func, testName, ...params) {
    testName = testName || `LPActor_${func}`
    const varName = `player_${func}`
    const script = `module.exports = (()=>{
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: '${testName}'}, (scene) => {
        scene.start(() => {
            var ActorA = scene.getSpecific('Criminal')
            ActorA.${func}(${params.map(ele => {
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
        `  ActorA = getSpecific(Criminal)`,
        `  ActorA.${func}(${params?.flat()?.join(', ') || ''})`,
        'sceneEnd()'
    ].join(LB))
}


// *** Test ***
test('LPActor.animate', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_animate'}, (scene) => {
        scene.start((scene) => {
            const {Player} = scene;
            var Actor = scene.getSpecific('Criminal', 'Actor')
            Player.animate('gun')
            Actor.animate('gun')
            Actor.animate('')
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  Actor = getSpecific(Criminal)',
        '  Player.animate(gun)',
        '  Actor.animate(gun)',
        '  Actor.animate()',
        'sceneEnd()',
    ].join(LB))
})

test('LPString.animate error', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_animate_error'}, (scene) => {
        scene.start(() => {
            const {Player} = scene;
            var Actor = scene.getSpecific('Criminal', 'Actor')
            Player.animate('invalid')
            Actor.animate('gun')
        })
    })
    await expect(async () => await scene.toString()).rejects.toThrowError('Invalid animation!')
})

test('LPActor.animatePair', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_animatePair'}, (scene) => {
        scene.start((scene) => {
            const {Player} = scene;
            var Actor = scene.getSpecific('Criminal', 'Actor')
            Player.animatePair(Actor, 'kissing')
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  Actor = getSpecific(Criminal)',
        '  animatePair(Player, Actor, kissing)',
        'sceneEnd()',
    ].join(LB))
})

test('LPActor.animateFnt', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_animateFnt'}, (scene) => {
        scene.start((scene) => {
            var Actor = scene.getPerson()
            Actor.animateFnt(5, 10, 5, 'sit')
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  Actor = getPerson()',
        '  Actor.animateFnt(5, 10, 5, sit)',
        'sceneEnd()',
    ].join(LB))
})

test('LPActor.blendAppearanceFrom()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_blendAppearanceFrom'}, (scene) => {
        scene.start((scene) => {
            const {Player} = scene
            var dating = Player.getRelatedPerson(['Dating'])
            var child = scene.generatePerson()
            child.blendAppearanceFrom(Player, dating)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  dating = Player.getRelatedPerson(Dating)',
        '  child = generatePerson()',
        '  child.blendAppearanceFrom(Player, dating)',
        'sceneEnd()',
    ].join(LB))
})

// noinspection DuplicatedCode
test('LPActor.blendPreset()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_blendPreset'}, (scene) => {
        scene.start((scene) => {
            const {$random} = scene
            var ActorA = scene.getSpecific('Criminal')
            $random(() => {
                ActorA.loadPreset(["hourglass_F", "hourglass1_F"]) // Just a normal hourglass girl
                ActorA.blendPreset("hourglass_F")                 // There is still signs of the beefcake
            })
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  Random',
        '    ActorA.loadPreset(hourglass_F, hourglass1_F)',
        '    ActorA.blendPreset(hourglass_F)',
        '  EndRandom',
        'sceneEnd()',
    ].join(LB))
})

test('LPActor.changeSex', () => oneActorScene('changeSex'))

test('LPActor.cloneFrom', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_cloneFrom'}, (scene) => {
        scene.start((scene) => {
            var Actor = scene.getSpecific('Criminal', 'Actor')
            var Actor2 = scene.generatePerson([], 'Actor2')
            Actor2.cloneFrom(Actor)
        })
    })

    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  Actor = getSpecific(Criminal)',
        '  Actor2 = generatePerson()',
        '  Actor2.cloneFrom(Actor)',
        'sceneEnd()'
    ].join(LB))
})

test('LPActor.closeEyes()', () => oneActorScene('closeEyes', 'closeEyes', true))

test('LPActor.clothesContain', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_clothesContain'}, (scene) => {
        scene.start((scene) => {
            const Actor = scene.getPerson()
            if (Actor.clothesContain('Jeans')) {
                scene.narrative("<Actor.name> is wearing some sorts of jeans")
            }
        })
    })

    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  Actor = getPerson()',
        '  If Actor.clothesContain(Jeans)',
        '    "<Actor.name> is wearing some sorts of jeans"',
        '  EndIf',
        'sceneEnd()'
    ].join(LB))
})

test('LPActor.countPregnancyDays()', () => oneActorSceneWithVar('countPregnancyDays'))

test('LPActor.dialog()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_dialog'}, (scene) => {
        scene.start(() => {
            const {Player} = scene
            Player.dialogue("simple dialog")
            Player.dialogue("dialog with a mood", 'Happy')
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  Player:: "simple dialog"',
        '  Player(Happy):: "dialog with a mood"',
        'sceneEnd()',
    ].join(LB))
})
test('LPString.dialog() error', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_dialog_error'}, (scene) => {
        scene.start(() => {
            const {Player} = scene;
            Player.dialogue("dialog with invalid mood", 'invalid mood')
        })
    })
    await expect(async () => await scene.toString()).rejects.toThrowError('Invalid mood!')
})

test('LPActor.dress()', () => oneActorScene('dress', "Casual-Clothes_1_F"))

test('LPActor.dressBondage()', () => oneActorScene('dressBondage', 'dressBondage', "Bdg_Blindfold"))

test('LPActor.dressExcept()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_dressExcept'}, (scene) => {
        scene.start(() => {
            const {Player} = scene
            Player.dressExcept(["Outerwear", "Top", "Bottom", "Foot", "Headwear", "Eyewear"])
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  Player.dressExcept(Outerwear, Top, Bottom, Foot, Headwear, Eyewear)',
        'sceneEnd()',
    ].join(LB))
})
test('LPString.dressExcept() error', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_dressExcept_error'}, (scene) => {
        scene.start(() => {
            const {Player} = scene;
            Player.dressExcept(["invalid", "Top", "Bottom", "Foot", "Headwear", "Eyewear"])
        })
    })
    await expect(async () => await scene.toString()).rejects.toThrowError('Invalid clothing slot!')
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

test('LPActor.getActorVar()', () => oneActorSceneWithVar('getActorVar', 'getActorVar', 'SomeVariable'))

test('LPActor.getBabyDaddy()', () => oneActorSceneWithVar('getBabyDaddy'))

test('LPActor.getBuilding()', () => oneActorSceneWithVar('getBuilding', 'playersHome'))

test('LPActor.getID()', () => oneActorSceneWithVar('getID'))

test('LPActor.getMorphValue()', () => oneActorSceneWithVar('getMorphValue', 'getMorphValue', 'Genesis8Female__Mouth'))

test('LPActor.getPregnancyTag()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_getPregnancyTag'}, (scene) => {
        scene.start((scene) => {
            const {Player, narrative, $if} = scene
            var pregnancyTag = Player.getPregnancyTag('pregnancyTag')
            if (pregnancyTag.isString("Aggressive")) {
                narrative('<Player.name> is pregnant from being raped!')
            }
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  pregnancyTag = Player.getPregnancyTag()',
        '  If pregnancyTag.isString("Aggressive")',
        '    "<Player.name> is pregnant from being raped!"',
        '  EndIf',
        'sceneEnd()',
    ].join(LB))
})

test('LPActor.getRace()', () => oneActorSceneWithVar('getRace'))

test('LPActor.getRelatedPerson()', () => oneActorSceneWithVar('getRelatedPerson', 'getRelatedPerson', ['Dating', 'Spouses']))

test('LPActor.getRelatedPersonQuick()', () => oneActorSceneWithVar('getRelatedPersonQuick', 'getRelatedPersonQuick', ['Dating', 'Spouses']))

test('LPActor.hasSameInterestAs()', () => twoActorIsScene('hasSameInterestAs', 'hasSameInterestAs', ['Dating', 'Spouses']))

test('LPActor.hadSex()', () => actorIsScene('hadSex'))

test('LPActor.hide()', () => oneActorScene('hide'))

test('LPActor.impregnate()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_impregnate'}, (scene) => {
        scene.start((scene) => {
            const {Player, narrative} = scene
            var ActorA = scene.getSpecific('Criminal')
            ActorA.impregnate()
            ActorA.impregnate(Player)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorA.impregnate()',
        '  ActorA.impregnate(Player)',
        'sceneEnd()',
    ].join(LB))
})

test('LPActor.isAsexual()', () => oneActorSceneWithVar('isAsexual'))
test('LPActor.isAt()', () => oneActorSceneWithVar('isAt', 'isAt', 'work'))
test('LPActor.isBisexual()', () => oneActorSceneWithVar('isBisexual'))
test('LPActor.isBisexualNonTrans()', () => oneActorSceneWithVar('isBisexualNonTrans'))
test('LPActor.isDating()', () => oneActorSceneWithVar('isDating'))
test('LPActor.isDominantSex()', () => twoActorSceneWithVar('isDominantSex'))
test('LPActor.isEquipped()', () => oneActorSceneWithVar('isEquipped', 'isEquipped', 'Bottom_Under'))
test('LPActor.isFemale()', () => oneActorSceneWithVar('isFemale'))
test('LPActor.isGay()', () => oneActorSceneWithVar('isGay'))
test('LPActor.isGayNonTrans()', () => oneActorSceneWithVar('isGayNonTrans'))
test('LPActor.isInterestedIn()', () => twoActorSceneWithVar('isInterestedIn'))
test('LPActor.isInterestedInMen()', () => playerIsScene('isInterestedInMen'))
test('LPActor.isInterestedInTrans()', () => playerIsScene('isInterestedInTrans'))
test('LPActor.isInterestedInWomen()', () => playerIsScene('isInterestedInWomen'))
test('LPActor.isJob()', () => playerIsScene('isJob', 'isJob', 'doctor'))
test('LPActor.isMale()', () => playerIsScene('isMale'))
test('LPActor.isNaked()', () => playerIsScene('isNaked'))
test('LPActor.isNude()', () => playerIsScene('isNude'))
test('LPActor.isOnPeriod()', () => playerIsScene('isOnPeriod'))
test('LPActor.isPlayer()', () => playerIsScene('isPlayer'))
test('LPActor.isPregnant()', () => playerIsScene('isPregnant'))
test('LPActor.isProstitute()', () => playerIsScene('isProstitute'))
test('LPActor.isRace()', () => playerIsScene('isRace', 'isRace', 'Human'))
test('LPActor.isSameAs()', () => twoActorIsScene('isSameAs'))
test('LPActor.isSameGender()', () => twoActorIsScene('isSameGender'))
test('LPActor.isSameRace()', () => twoActorIsScene('isSameRace'))
test('LPActor.isSlotOccupied()', () => playerIsScene('isSlotOccupied', 'isSlotOccupied', 'Bottom_Under'))
test('LPActor.isStraight()', () => playerIsScene('isStraight'))
test('LPActor.isStraightNonTrans()', () => playerIsScene('isStraightNonTrans'))
test('LPActor.isTrans()', () => playerIsScene('isTrans'))
test('LPActor.isValid()', () => playerIsScene('isValid'))
test('LPActor.isVirgin()', () => playerIsScene('isVirgin'))
test('LPActor.isVisible()', () => playerIsScene('isVisible', 'isVisible', 'Bottom_Under'))

// noinspection DuplicatedCode
test('LPActor.loadPreset()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_loadPreset'}, (scene) => {
        scene.start((scene) => {
            const {$random} = scene
            var ActorA = scene.getSpecific('Criminal')
            $random(() => {
                ActorA.loadPreset(["hourglass_F", "hourglass1_F"]) // Just a normal hourglass girl
                ActorA.blendPreset("hourglass_F")                 // There is still signs of the beefcake
            })
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  Random',
        '    ActorA.loadPreset(hourglass_F, hourglass1_F)',
        '    ActorA.blendPreset(hourglass_F)',
        '  EndRandom',
        'sceneEnd()',
    ].join(LB))
})

test('LPActor.makeInterested()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_makeInterested'}, (scene) => {
        scene.start((scene) => {
            const {Player} = scene
            var ActorA = scene.getSpecific('Criminal')
            ActorA.makeInterested(Player)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorA.makeInterested(Player)',
        'sceneEnd()',
    ].join(LB))
})

test('LPActor.matchLastName()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_matchLastName'}, (scene) => {
        scene.start((scene) => {
            const {Player} = scene
            var ActorA = scene.getSpecific('Criminal')
            ActorA.matchLastName(Player)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorA.matchLastName(Player)',
        'sceneEnd()',
    ].join(LB))
})

test('LPActor.modifyActorVar()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_modifyActorVar'}, (scene) => {
        scene.start((scene) => {
            const {Player} = scene
            var ActorA = scene.getSpecific('Criminal')
            ActorA.modifyActorVar('licenseToKill', 7)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorA.modifyActorVar(licenseToKill, 7)',
        'sceneEnd()',
    ].join(LB))
})

test('LPActor.modifySalary()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_modifySalary'}, (scene) => {
        scene.start((scene) => {
            const {Player} = scene
            var ActorA = scene.getSpecific('Criminal')
            ActorA.modifySalary(1.1)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorA.modifySalary(1.1)',
        'sceneEnd()',
    ].join(LB))
})

test('LPActor.moveToPerson()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_moveToPerson'}, (scene) => {
        scene.start((scene) => {
            const {Player} = scene
            var ActorA = scene.getSpecific('Criminal')
            ActorA.moveToPerson(Player)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorA.moveToPerson(Player)',
        'sceneEnd()',
    ].join(LB))
})


test('LPActor.moveToPersonStand()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_moveToPersonStand'}, (scene) => {
        scene.start((scene) => {
            const {Player} = scene
            var ActorA = scene.getSpecific('Criminal')
            ActorA.moveToPersonStand(Player, 70)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorA.moveToPersonStand(Player, 70)',
        'sceneEnd()',
    ].join(LB))
})

test('LPActor.setActorVar()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_setActorVar'}, (scene) => {
        scene.start((scene) => {
            var ActorA = scene.getSpecific('Criminal')
            ActorA.setActorVar('licenseToKill', -1)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  ActorA.setActorVar(licenseToKill, -1)',
        'sceneEnd()',
    ].join(LB))
})

test('LPActor.setCurrentLocation()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_setCurrentLocation'}, (scene) => {
        scene.start((scene) => {
            var ActorA = scene.getSpecific('Criminal')
            var home = ActorA.getBuilding('home')
            ActorA.setCurrentLocation(home)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  home = ActorA.getBuilding(home)',
        '  ActorA.setCurrentLocation(home)',
        'sceneEnd()',
    ].join(LB))
})
test('LPActor.setDatingId()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_setDatingId'}, (scene) => {
        scene.start((scene) => {
            var ActorA = scene.getSpecific('Dating')
            ActorA.setDatingId()
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Dating)',
        '  ActorA.setDatingId()',
        'sceneEnd()',
    ].join(LB))
})

test('LPActor.setExRelative()', () => actorPlayerScene('setExRelative'))
test('LPActor.setJob()', () => oneActorScene('setJob', 'setJob', 'Doctor'))
test('LPActor.setMorphValue()', () => oneActorScene('setMorphValue', 'setMorphValue', 'Genesis8Female__PBMPregnant', 0.5))
test('LPActor.setNoRedress()', () => oneActorScene('setNoRedress'))
test('LPActor.setWantsBabies() true', () => oneActorScene('setWantsBabies', 'setWantsBabies_true', true))
test('LPActor.setWantsBabies() false', () => oneActorScene('setWantsBabies', 'setWantsBabies_false', false))

test('LPActor.sex()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_sex'}, (scene) => {
        scene.start((scene) => {
            const {Player} = scene
            var ActorA = scene.getSpecific('Criminal')
            ActorA.sex([Player])
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Criminal)',
        '  sex(ActorA, Player)',
        'sceneEnd()',
    ].join(LB))
})

test('LPActor.show()', () => oneActorScene('show', 'show', 2))
test('LPActor.strip()', () => oneActorScene('strip'))
test('LPActor.stripOne ()', () => oneActorScene('stripOne'))
test('LPActor.wantsBabies()', () => playerIsScene('wantsBabies'))

test(`LPActor Stats Math test`, async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_stats'}, (scene) => {
        scene.start((scene) => {
            const {Player} = scene
            var ActorA = scene.getSpecific('Employee')
            ActorA.perversion = 5
            ActorA.perversion += 5
            var sum = Player.perversion + ActorA.perversion
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  ActorA = getSpecific(Employee)',
        '  ActorA:perversion => 5',
        '  ActorA:perversion += 5',
        '  sum = Player:perversion + ActorA:perversion',
        'sceneEnd()',
    ].join(LB))
})

// This is not very useful other than for coverage
let runOnce = true
STATS.forEach(stat => {
    test(`LPActor Stats - ${stat}`, async () => {
        const testName = `LPActor_stat_${stat}`

        const script = `module.exports = (()=>{
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: '${testName}'}, (scene) => {
        scene.start(() => {
            const {Player} = scene
            var ActorA = scene.getSpecific('Employee')
            ActorA.${stat} = 5
            ActorA.${stat} += 5
            var sum = Player.${stat} + ActorA.${stat}
        })
    })
    return scene
    })()
`
        const scene = eval(script)
        expect((await scene.toString()).trim()).toBe([
            'sceneStart()',
            '  ActorA = getSpecific(Employee)',
            `  ActorA:${stat} => 5`,
            `  ActorA:${stat} += 5`,
            `  sum = Player:${stat} + ActorA:${stat}`,
            'sceneEnd()'
        ].join(LB))
    })
})
