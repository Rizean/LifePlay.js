const LPMod = require('../../../src/LPMod')

const path = require('path')

// Note: DOUBLE BACK SLASH IS CRITICAL!
// This is where the output of the mod will go.
// For example if you wanted to write you mod into the lifeplay mod dir
// and your lifeplay is installed to D:\other\LifePlay_4_14_64bit
// then use: modsDir = 'D:\\other\\LifePlay_4_14_64bit\\LifePlay\\Content\\Modules'
let modsDir = 'D:\\projects\\LifePlay.js\\build'
if (process.env.NODE_ENV === 'test') {
    modsDir = path.resolve(__dirname, '../../../build')
}

const lpMod = new LPMod({
    MODULE_UNIQUEID: 'rizean_LifePlay_test',
    MODULE_NAME: 'LifePlay.js Test Mod',
    MODULE_AUTHOR: 'Rizean',
    MODULE_LINK: '',
    MODULE_DESCRIPTION: 'LifePlay.js Test Mod',
    MODULE_REQUIREMENTS: '',
    modsDir,
})

lpMod.addFunction('generateBadCop', require('./functions/generateBadCop'))

lpMod.addStat(require('./stats/tests.lpstat'))
lpMod.addStat(require('./stats/bugs.lpstat'))

lpMod.addAction(require('./actions/onlyfans.lpaction'))
lpMod.addAction(require('./actions/open_relationship.lpaction'))
console.log('mod addScene')

lpMod.addScene(require('./scenes/cinema_with_date_passive.lpScene'))
lpMod.addScene(require('./scenes/test.lpscene'))

lpMod.writeMod()