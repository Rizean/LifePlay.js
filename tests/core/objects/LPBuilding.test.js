const setupMod = require('../../tools/setupMod')
const Scene = require('../../../src/core/LPScene')
const LB = '\r\n'

async function simpleSceneWithVar(func, isScene, ...params) {
    const script = `module.exports = (()=>{
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPBuilding_${func}'}, (scene) => {
        scene.start(() => {
            var result = scene.building.${func}(${params.map(ele => {
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
        `  result = ${isScene ? 'SceneBuilding.' : ''}${func}(${params?.flat()?.join(', ') || ''})`,
        'sceneEnd()'
    ].join(LB))
}

test('LPBuilding.addObjective(LPAction)', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPBuilding_addObjective'}, (scene) => {
        scene.start(() => {
            var NatH = scene.building.generateBuildingAlias('NatH', 'home')
            NatH.addObjective('bggw_film')
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  NatH.generateBuildingAlias(home)',
        '  NatH.addObjective(bggw_film)',
        'sceneEnd()',
    ].join(LB))
})

test('LPBuilding.calculateExpenses()', () => simpleSceneWithVar('calculateExpenses', false))
test('LPBuilding.calculateRent()', () => simpleSceneWithVar('calculateRent', false))
test('LPBuilding.calculateRevenue()', () => simpleSceneWithVar('calculateRevenue', false))
test('LPBuilding.calculateWages()', () => simpleSceneWithVar('calculateWages', false))

test('LPBuilding.generateBuildingAlias(alias, buildingType)', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPBuilding_generateBuildingAlias'}, (scene) => {
        scene.start(() => {
            const {Player} = scene;
            var NatH = scene.building.generateBuildingAlias('NatH', 'home')
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  NatH.generateBuildingAlias(home)',
        'sceneEnd()',
    ].join(LB))
})

test('LPBuilding.getBuildingType()', () => simpleSceneWithVar('getBuildingType', true))

test('LPBuilding.isBuildingValid()', () => simpleSceneWithVar('isBuildingValid', true))
test('LPBuilding.isOpen()', () => simpleSceneWithVar('isOpen', false, "brothel"))

test('LPBuilding.isSameBuilding()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPBuilding_isSameBuilding'}, (scene) => {
        scene.start(() => {
            const {Player} = scene;
            var location = Player.getBuilding('current')
            var isSameAsWork = location.isSameBuilding('Work')
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  location = Player.getBuilding(current)',
        '  isSameAsWork = location.otherBuilding(Work)',
        'sceneEnd()',
    ].join(LB))
})

test('LPBuilding.modifyReputation()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPBuilding_modifyReputation'}, (scene) => {
        scene.start(() => {
            let change = 0.5
            scene.building.modifyReputation(0.5)
            scene.building.modifyReputation(change)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  change = 0.5',
        '  modifyReputation(0.5)',
        '  modifyReputation(change)',
        'sceneEnd()',
    ].join(LB))
})

test('LPBuilding.modifyReputation() to throw ', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPBuilding_modifyReputation_error'}, (scene) => {
        scene.start(() => {
            scene.building.modifyReputation('a')
        })
    })
    await expect(async () => await scene.toString()).rejects.toThrowError('Expected type of "number" or "LPFloat"!')
})

test('LPBuilding.removeObjective()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPBuilding_removeObjective'}, (scene) => {
        scene.start(() => {
            const {Player} = scene;
            var location = Player.getBuilding('current')
            location.removeObjective('bggw_film')
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  location = Player.getBuilding(current)',
        '  location.removeObjective(bggw_film)',
        'sceneEnd()',
    ].join(LB))
})

test('LPBuilding.setHomeDating()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPBuilding_setHomeDating'}, (scene) => {
        scene.start(() => {
            const {Player} = scene
            Player.loseHome()
            const Actor = scene.getSpecific("Dating")
            const location = Actor.getBuilding('home')
            location.setHomeDating()
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  loseHome()',
        '  Actor = getSpecific(Dating)',
        '  location = Actor.getBuilding(home)',
        '  location.setHomeDating()',
        'sceneEnd()',
    ].join(LB))
})