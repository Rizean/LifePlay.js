// noinspection JSUnresolvedVariable

const setupMod = require('../tools/setupMod')
const Scene = require('../../src/core/Scene')
const LB = '\r\n'

test('simple $if()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'simple_if'}, (scene) => {
        scene.start(() => {
            const {narrative} = scene
            if (true) {
                narrative("simple")
            }
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  If true',
        '    "simple"',
        '  EndIf',
        'sceneEnd()',
    ].join(LB))
})

test('simple if else', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'simple_if_else'}, (scene) => {
        scene.start(() => {
            const {narrative} = scene
            if (true) {
                narrative("simple")
            } else {
                narrative("simple else")
            }
        })
    })

    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  If true',
        '    "simple"',
        '  Else',
        '    "simple else"',
        '  EndIf',
        'sceneEnd()',
    ].join(LB))
})

test('simple if elseif else', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'simple_if_elseif_else'}, (scene) => {
        scene.start(() => {
            const {narrative} = scene
            const a = true
            const b = false
            if (a) {
                narrative("simple")
            } else if (b) {
                narrative("simple else if")
            } else {
                narrative("simple else")
            }
        })
    })

    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = true',
        '  b = false',
        '  If a',
        '    "simple"',
        '  ElseIf b',
        '    "simple else if"',
        '  Else',
        '    "simple else"',
        '  EndIf',
        'sceneEnd()',
    ].join(LB))
})

test('complex $if()', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'complex_if'}, (scene) => {
        const {$not, random, narrative} = scene;
        scene.WHO(() => {
            var Employee1 = scene.getSpecific('Employee')
            var Employee2 = scene.getSpecific('Employee')
            $IF(
                scene.not(Employee1.isDating())
                    .and(scene.not(Employee2.isDating()))
                    .and(Employee1.isInterestedIn(Employee2))
                    .and(Employee2.isInterestedIn(Employee1))
                    .and(
                        Employee1.perversion
                            .add(Employee2.perversion)
                            .gt(random(75, 150))
                    )
            )
        })
        scene.start(() => {
            narrative('test')
        })
    })

    expect((await scene.toString()).trim()).toBe([
        'WHO: Employee1 = getSpecific(Employee); Employee2 = getSpecific(Employee); If !(Employee1.isDating()) && !(Employee2.isDating()) && Employee1.isInterestedIn(Employee2) && Employee2.isInterestedIn(Employee1) && Employee1:perversion + Employee2:perversion > Random(75, 150); ',
        '',
        'sceneStart()',
        '  "test"',
        'sceneEnd()',
    ].join(LB))
})

test('very complex if', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'very_complex_if'}, (scene) => {
        scene.start(() => {
            const {narrative, random} = scene;
            var Employee1 = scene.getSpecific('Employee')
            var Employee2 = scene.getSpecific('Employee')

            if (scene.not(Employee1.isDating()).and(scene.not(Employee2.isDating()))) {
                narrative("!Employee1.isDating() && !Employee2.isDating()")
            } else if (Employee1.perversion.add(Employee2.perversion).gt(random(75, 150))) {
                narrative("Employee1:perversion + Employee2:perversion > Random(75, 150)")
            } else if (Employee1.isInterestedIn(Employee2)) {
                narrative("Employee1.isInterestedIn(Employee2)")
            } else if (Employee2.isInterestedIn(Employee1)) {
                narrative("Employee2.isInterestedIn(Employee1)")
            } else {
                narrative("not so simple")
            }
        })
    })

    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  Employee1 = getSpecific(Employee)',
        '  Employee2 = getSpecific(Employee)',
        '  If !(Employee1.isDating()) && !(Employee2.isDating())',
        '    "!Employee1.isDating() && !Employee2.isDating()"',
        '  ElseIf Employee1:perversion + Employee2:perversion > Random(75, 150)',
        '    "Employee1:perversion + Employee2:perversion > Random(75, 150)"',
        '  ElseIf Employee1.isInterestedIn(Employee2)',
        '    "Employee1.isInterestedIn(Employee2)"',
        '  ElseIf Employee2.isInterestedIn(Employee1)',
        '    "Employee2.isInterestedIn(Employee1)"',
        '  Else',
        '    "not so simple"',
        '  EndIf',
        'sceneEnd()',
    ].join(LB))
})