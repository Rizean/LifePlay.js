require('../src/types')
const Scene = require('../src/core/LPScene')
const scene = new Scene()
const {Player, $if, option, choice, narrative} = scene;

scene.WHAT([])
scene.WHERE([])
scene.WHEN([])
scene.WHO((scene) => {
})
scene.OTHER((scene) => {
})
scene.start((scene) => {
    const {narrative, option, choice, Player} = scene
    narrative("Invite <CurrentCompanion.name> inside?")
    option([
        {text: 'Yes'},
        {text: 'No'},
    ])

    if (choice(0)) {
        Player.dialogue("Hey, do you want to come in?", "Happy")
    } else {
        Player.dialogue("Goodbye darling!", "Happy")
    }
})


/*

0:: "Yes"
1:: "No"
        // not entirely sure why, but an empty line here is crucial - it looks neater anyway
If 0 // instead if just '0', can also be written as 'choice == 0'
    Player(Happy):: "Hey, do you want to come in?"
Else
    Player(Happy):: "Goodbye darling!"
Endif
 */


console.log(scene.code)
