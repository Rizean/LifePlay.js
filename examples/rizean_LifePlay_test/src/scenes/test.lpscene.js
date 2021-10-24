// noinspection JSUnresolvedVariable
const Scene = require('../../../../src/core/Scene')

const scene = new Scene({name: 'badcop'}, (scene) => {

    scene.WHAT([''])
    scene.WHERE([''])
    scene.WHEN([0, 24])
    scene.WHO('none')
    scene.OTHER()

    scene.start((scene) => {
        var generateBadCop = scene.lpMod.getFunction('generateBadCop')
        console.log('scene generateBadCop', generateBadCop)
        var BadCop = generateBadCop(scene)

        // BadCop.dialogue('test')
        // console.log('BadCop', BadCop)
        // console.log('BadCop', BadCop)
        //
        //
        // var BadCop = generateBadCop(scene)
    })


})
module.exports = scene