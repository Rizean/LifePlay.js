const Scene = require('../src/core/LPScene')
const scene = new Scene()
scene.WHAT(['all', '-sleep', '-nap']) // what actions can trigger this scene, use their IDs, or alternatively, use all, followed by a bunch -action to exclude
scene.WHERE(['home'])                 // for list of wheres, check All_wheres.txt and use their IDs specifically, or alternatively, use all, followed by a bunch -action to exclude
scene.WHEN(['0', '24'])                    // you can also do things like '22 - 3'
scene.WHO((scene, condition, $IF) => {                       // could simply be 'empty', or could be one or multiple parts, including at least one that 'gets' an actor using getSpecific() or getPerson(). There's also an option for the last part to be an If function which could be anything but is recommended to be related to the actors you just grabbed. If one of the getSpecific() or getPerson() functions fail to get an appropriate actor, or if the actors found don't match the conditions in the final 'If' part, then the scene is ignored
    var boss = scene.getSpecific('boss')
})
scene.OTHER((scene, condition, $IF) => {                     // just a normal If function without the word 'If'
    condition(scene.Player.isAtHome())
})

scene.start((scene) => {
    const {Player, narrative, getSpecific, $random, $while, random, option, choice} = scene
    narrative("Scene description goes here.")
    const boss = getSpecific('boss')
    if (boss.masochist > -50) {
        boss.masochist = random(50, 100) * -1
    }

    $random(() => {
        narrative("My boss is at my door?")
        narrative("WTF? My boss is here?")
        narrative("Oh crap... my boss is here. That can't be good.")
    })

    boss.dialogue("Your performance hasn't been very good lately.", 'Evil')
    boss.dialogue("But I have a way you can make up for it.", 'Evil')
    narrative("It's clear my boss wants to use me. Should I let them?")

    var willSubmit = (Player.masochist + boss.masochist) < 0
    var canResist = (Player.masochist + boss.masochist) > -50

    option([
        {text: 'Yes', condition: willSubmit},
        {text: 'No', condition: canResist},
    ])

    if (choice(0)) {
        if (canResist) {
            Player.dialogue("Less get this over with.", 'Angry')
        } else {
            Player.dialogue("Um...", 'Shy')
        }
        Player.sex([boss])
    } else {
        Player.dialogue("No fucking way!", 'Angry')
    }
})

console.log(scene.code)

