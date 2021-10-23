const LPMod = require('../../../src/LPMod')

const path = require('path')
const modsDir = path.resolve(__dirname, '../../../build')

const lpMod = new LPMod({
    MODULE_UNIQUEID: 'rizean_LifePlay_test',
    MODULE_NAME: 'LifePlay.js Test Mod',
    MODULE_AUTHOR: 'Rizean',
    MODULE_LINK: '',
    MODULE_DESCRIPTION: 'LifePlay.js Test Mod',
    MODULE_REQUIREMENTS: '',
    modsDir,
})

lpMod.addStat(require('./stats/tests.lpstat'))
lpMod.addStat(require('./stats/bugs.lpstat'))

lpMod.addAction(require('./actions/onlyfans.lpaction'))
lpMod.addAction(require('./actions/open_relationship.lpaction'))
console.log('mod addScene')

lpMod.addScene(require('./scenes/cinema_with_date_passive.lpscene')(lpMod))

lpMod.writeMod()