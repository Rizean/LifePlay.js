const Scene = require('../../../src/core/Scene')
const LB = '\r\n'

function simpleSceneWithVar(func, isScene, ...params) {
    const varName = `actor_${func}`
    const script = `(scene) => {
    var result = scene.building.${func}(${params.map(ele => {
        if (Array.isArray(ele)) return JSON.stringify(ele)
        return `"${ele}"`
    }).join(', ')})
}`
    // console.log('script', script)
    let scene = new Scene()
    scene.start(eval(script))
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        `  result = ${isScene ? 'SceneBuilding.' : ''}${func}(${params?.flat()?.join(', ') || ''})`,
        'sceneEnd()'
    ].join(LB))
}

test('LPBuilding.calculateExpenses()', () => simpleSceneWithVar('calculateExpenses', false))
test('LPBuilding.calculateRent()', () => simpleSceneWithVar('calculateRent', false))
test('LPBuilding.calculateRevenue()', () => simpleSceneWithVar('calculateRevenue', false))
test('LPBuilding.calculateWages()', () => simpleSceneWithVar('calculateWages', false))
test('LPBuilding.getBuildingType()', () => simpleSceneWithVar('getBuildingType', true))

test('LPBuilding.isBuildingValid()', () => simpleSceneWithVar('isBuildingValid', true))
test('LPBuilding.isOpen()', () => simpleSceneWithVar('isOpen', false, "brothel"))

test('LPBuilding.isSameBuilding()', () => {
    let scene = new Scene()
    scene.start((scene) => {
        const {Player} = scene;
        var location = Player.getBuilding('current')
        var isSameAsWork = location.isSameBuilding('Work')
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  location = Player.getBuilding(current)',
        '  isSameAsWork = location.otherBuilding(Work)',
        'sceneEnd()'
    ].join(LB))
})

test('LPBuilding.modifyReputation()', () => {
    let scene = new Scene()
    scene.start((scene) => {
        const change = 0.5
        scene.building.modifyReputation(0.5)
        scene.building.modifyReputation(change)
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  change = 0.5',
        '  modifyReputation(0.5)',
        '  modifyReputation(change)',
        'sceneEnd()'
    ].join(LB))
})

test('LPBuilding.modifyReputation() to throw ', () => {
    let scene = new Scene()
    const main = () => scene.start((scene) => {
        scene.building.modifyReputation('a')
    })
    expect(main).toThrowError('Expected type of "number" or "LPFloat"!')
})

test('LPBuilding.removeObjective()', () => {
    let scene = new Scene()
    scene.start((scene) => {
        const {Player} = scene;
        var location = Player.getBuilding('current')
        location.removeObjective('bggw_film')
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  location = Player.getBuilding(current)',
        '  location.removeObjective(bggw_film)',
        'sceneEnd()'
    ].join(LB))
})