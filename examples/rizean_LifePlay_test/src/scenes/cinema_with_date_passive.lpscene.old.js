// noinspection JSUnresolvedVariable
const Scene = require('../../../../src/core/LPScene')

module.exports = (lpMod) => {
    const scene = new Scene({lpMod, name: 'cinema_with_date_passive'})

    scene.WHAT(['watch_a_movie'])
    scene.WHERE(['cinema'])
    scene.WHEN([0, 24])
    scene.WHO('none')
    scene.OTHER((scene, condition, $IF) => {
        const {Player, CurrentCompanion, random, paren} = scene;
        condition(Player.isWithCompanion() && CurrentCompanion.isInterestedIn(Player) && paren(paren(!CurrentCompanion.isRelative() && CurrentCompanion.attractiontoplayer > 30) || CurrentCompanion.incest > 50) && random(50, 200) < CurrentCompanion.perversion)
    })

    scene.start((scene) => {
        const {Player, CurrentCompanion, random, narrative, option, choice, isModEnabled} = scene
        var RelatedPerson = CurrentCompanion.isRelative().or(CurrentCompanion.isExRelative())
        narrative("I'm watching a movie with <CurrentCompanion.name>. It's really dark in here.") // testComment
        narrative("What's that? <CurrentCompanion.name> is caressing my thigh. What a pervert!")
        option([
            {text: "Grope <CurrentCompanion.him_or_her> back"},
            {text: "Ignore"},
            {text: "Walk out"},
        ])

        if (choice(0)) {
            narrative("I decided to respond in kind and get handsy with my date and started caressing <CurrentCompanion.his_or_her> thighs.")
            narrative("<CurrentCompanion.name> was clearly delighted by my receptive mood and increased <CurrentCompanion.his_or_her> intensity caressing me as well.")
            Player.animatePair(CurrentCompanion, 'Kissing')
            Player.dialogue('...', 'Kiss')
            CurrentCompanion.dialogue('...', 'Kiss')
            narrative("Eventually, we started making out, right there in the theatre.")
            CurrentCompanion.attractiontoplayer.addEq(random(0, 2))

            option([
                {text: "Stop it there"},
                {text: "Invite <CurrentCompanion.him_or_her> home", condition: Player.perversion > 5},
                {text: "Have sex right here", condition: isModEnabled('vin_VanillaPorn').and(Player.perversion > 50)},
            ])

            if (choice(0)) {
                narrative("That's enough. We should stop before a fellow cinema goer spots our shameless public display of affection.")
            } else if (choice(1)) {
                narrative("I whispered into <CurrentCompanion.his_or_her> ear, suggesting that we go back to my place.")
                narrative("<CurrentCompanion.name> nodded and soon enough, I was leading <CurrentCompanion.him_or_her> back to my apartment.")
                Player.moveTo('home')
                scene.setBackground('home')
                narrative("As soon as we were inside, the passion became too much to resist any longer.")
                CurrentCompanion.sex([Player])
                Player.perversion.addEq(random(0, 0.25))
                CurrentCompanion.attractiontoplayer.addEq(random(0, 2))

                if (RelatedPerson) {
                    CurrentCompanion.incest.addEq(random(0, 2))
                }
            } else {
                narrative("I whispered into <CurrentCompanion.his_or_her> ear, suggesting that we get much more intimate right here in the cinema.")
                narrative("<CurrentCompanion.name> nodded and soon enough, we were undressing each other right there in the cinema.")
                CurrentCompanion.sex([Player])
                Player.perversion.addEq(random(0, 1))
                CurrentCompanion.attractiontoplayer.addEq(random(0, 2))

                if (RelatedPerson) {
                    CurrentCompanion.incest.addEq(random(0, 2))
                }
            }
        } else if (choice(2)) {
            Player.dialogue("What do you think you're doing, pervert?", 'Angry')
            CurrentCompanion.attractiontoplayer -= random(0, 2)
            CurrentCompanion.rapportwithplayer -= random(0, 2)

            if (RelatedPerson) {
                CurrentCompanion.incest -= random(0, 2)
            }

            Player.endDate()
        }
    })
    scene.timeout(48, ['cinema_with_date_passive'])

    // console.log('scene._code', scene._code)
    return scene
}