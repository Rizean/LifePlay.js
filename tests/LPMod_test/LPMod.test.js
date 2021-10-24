const fs = require('fs/promises')
const LPMod = require('../../src/core/LPMod')
const LPStat = require('../../src/core/LPStat')
const LPAction = require('../../src/core/LPAction')
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

const setupStats = (lpMod) => {
    lpMod.addStat(new LPStat({
        STAT_ID: 'tests',
        STAT_NAME: 'Tests; Mo test mo problems!',
        PLAYER_ONLY: true,
        HIGHER_BETTER: true,
        STAT_MIN: 0,
        STAT_MAX: 1337,
        DAILY_CHANGE: 0,
        DEFAULT_VALUE: 0,
        NPC_ONLY: false,
    }))
    lpMod.addStat(new LPStat({
        STAT_ID: 'bugs',
        STAT_NAME: 'Bugs; 99 bugs in the queue. Take one down, patch it around, 137 bugs in the queue.',
        PLAYER_ONLY: false,
        HIGHER_BETTER: 'no_difficulty_adjustment',
        STAT_MIN: 1,
        STAT_MAX: 7331,
        DAILY_CHANGE: 1,
        DEFAULT_VALUE: 1,
        NPC_ONLY: true,
    }))
    return lpMod
}

const setupActions = (lpMod) => {
    lpMod.addAction(new LPAction({
        ACTION_UNIQUEID: 'onlyfans',
        ACTION_NAME: 'Manage OnlyFans',
        WHERE: 'sexwork',
        WHEN: '0 - 24',
        MINUTES: '120 - 120',
        TIMEOUT_MINUTES: 0,
        ALSO_TIMEOUT: '',
        EFFECTS: '',
        CONDITIONS: 'pornfame > 0 (STAT_COMPARE)',
        MOVE_FIRST: false,
        SCENE_ALWAYS: 'onlyfans',
        ANIMATION: 'browse',
    }))
    lpMod.addAction(new LPAction({
        ACTION_UNIQUEID: 'open_relationship',
        ACTION_NAME: 'Propose open relationship',
        WHERE: 'interaction',
        WHEN: '0 - 24',
        MINUTES: '5 - 10',
        TIMEOUT_MINUTES: 0,
        ALSO_TIMEOUT: '',
        EFFECTS: '',
        CONDITIONS: '',
        MOVE_FIRST: true,
        SCENE_ALWAYS: 'open_relationship',
        ANIMATION: '',
        WHO: 'Companion = getTarget(); If Companion.isSameAs(CurrentCompanion) && CurrentCompanion.isDating() && !OpenRelationship()',
    }))
    return lpMod
}

const buildMod = async () => {
    const lpmod = setupMod()
    setupStats(lpmod)
    setupActions(lpmod)
    await lpmod.writeMod()
}

test('LPMod Build', async () => {
    await expect(buildMod()).resolves.not.toThrow()
})

test('LPMod', async () => {
    const expectedDir = path.resolve(__dirname, 'modules/rizean_LifePlay_test/rizean_LifePlay_test.lpmod')
    const expected = await fs.readFile(expectedDir, 'utf-8')
    const lpMod = setupMod()
    await lpMod.writeMod()
    const result = await fs.readFile(path.resolve(lpMod.modsDir, `${lpMod.MODULE_UNIQUEID}.lpmod`), 'utf-8')
    expect(expected).toBe(result)
})

test('LPMod > Stat', async () => {
    const expectedDir = path.resolve(__dirname, 'modules/rizean_LifePlay_test/rizean_LifePlay_test.lpmod')
    const expected = await fs.readFile(expectedDir, 'utf-8')
    const lpMod = setupMod()
    setupStats(lpMod)
    await lpMod.writeMod()
    const result = await fs.readFile(path.resolve(lpMod.modsDir, `${lpMod.MODULE_UNIQUEID}.lpmod`), 'utf-8')
    expect(expected).toBe(result)
})
