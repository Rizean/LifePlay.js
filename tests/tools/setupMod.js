const LPMod = require('../../src/core/LPMod')
const path = require('path')

const setupMod = () => {
    const modsDir = path.resolve(__dirname, '../../build/test/modules')
    return new LPMod({
        MODULE_UNIQUEID: 'rizean_LifePlay_test',
        MODULE_NAME: 'LifePlay.js Test Mod',
        MODULE_AUTHOR: 'Rizean',
        MODULE_LINK: '',
        MODULE_DESCRIPTION: 'LifePlay.js Test Mod',
        MODULE_REQUIREMENTS: '',
        modsDir,
    })
}

module.exports = setupMod