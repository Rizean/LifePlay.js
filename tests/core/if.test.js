// noinspection JSUnresolvedVariable

const Scene = require('../../src/core/Scene')
const LB = '\r\n'
test('simple $if()', () => {
    let scene = new Scene()
    scene.start((scene) => {
        const {$if, narrative} = scene
        $if(true, () => {
            narrative("simple")
        }).$endIf()
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  If true',
        '    "simple"',
        '  EndIf',
        'sceneEnd()',
    ].join(LB))
})

test('simple $if().$else()', () => {
    let scene = new Scene()
    scene.start((scene) => {
        const {$if, narrative} = scene
        $if(true, () => {
            narrative("simple")
        }).$else(() => {
            narrative("simple else")
        }).$endIf()
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  If true',
        '    "simple"',
        '  Else',
        '    "simple else"',
        '  EndIf',
        'sceneEnd()',
    ].join(LB))
})

test('simple $if().$elseIf.$else()', () => {
    let scene = new Scene()
    scene.start((scene) => {
        const {$if, narrative} = scene
        $if(true, () => {
            narrative("simple")
        }).$elseIf(true, () => {
            narrative("simple else if")
        }).$else(() => {
            narrative("simple else")
        }).$endIf()
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  If true',
        '    "simple"',
        '  ElseIf true',
        '    "simple else if"',
        '  Else',
        '    "simple else"',
        '  EndIf',
        'sceneEnd()',
    ].join(LB))
})

test('simple $if().$elseIf().$elseIf().$elseIf().$else()', () => {
    let scene = new Scene()
    scene.start((scene) => {
        const {$if, narrative} = scene
        $if(true, () => {
            narrative("simple")
        }).$elseIf(true, () => {
            narrative("simple else if 1")
        }).$elseIf(true, () => {
            narrative("simple else if 2")
        }).$elseIf(true, () => {
            narrative("simple else if 3")
        }).$else(() => {
            narrative("simple else")
        }).$endIf()
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  If true',
        '    "simple"',
        '  ElseIf true',
        '    "simple else if 1"',
        '  ElseIf true',
        '    "simple else if 2"',
        '  ElseIf true',
        '    "simple else if 3"',
        '  Else',
        '    "simple else"',
        '  EndIf',
        'sceneEnd()',
    ].join(LB))
})

test('complex $if()', () => {
    let scene = new Scene()
    scene.WHO((scene) => {
        const {$if, $not, random} = scene;
        var Employee1 = scene.getSpecific('Employee')
        var Employee2 = scene.getSpecific('Employee')
        $if(
            $not(Employee1.isDating())
                .and($not(Employee2.isDating()))
                .and(Employee1.isInterestedIn(Employee2))
                .and(Employee2.isInterestedIn(Employee1))
                .and(
                    Employee1.perversion
                        .add(Employee2.perversion)
                        .gt(random(75, 150))
                )
        )
    })
    scene.start((scene) => {
        const {$if, narrative} = scene
        narrative('test')
    })
    expect(scene._code.trim()).toBe([
        'WHO: Employee1 = getSpecific(Employee); Employee2 = getSpecific(Employee); If !Employee1.isDating() && !Employee2.isDating() && Employee1.isInterestedIn(Employee2) && Employee2.isInterestedIn(Employee1) && Employee1:perversion + Employee2:perversion > Random(75, 150); ',
        '',
        'sceneStart()',
        '  "test"',
        'sceneEnd()',
    ].join(LB))
})

test('complex $if().$elseIf().$elseIf().$elseIf().$else()', () => {
    let scene = new Scene()
    scene.start((scene) => {
        const {$if, narrative, $not, random} = scene;
        var Employee1 = scene.getSpecific('Employee')
        var Employee2 = scene.getSpecific('Employee')

        $if($not(Employee1.isDating()).and($not(Employee2.isDating())), () => {
            narrative("!Employee1.isDating() && !Employee2.isDating()")

        }).$elseIf(Employee1.perversion.add(Employee2.perversion).gt(random(75, 150)), () => {
            narrative("Employee1:perversion + Employee2:perversion > Random(75, 150)")

        }).$elseIf(Employee1.isInterestedIn(Employee2), () => {
            narrative("Employee1.isInterestedIn(Employee2)")

        }).$elseIf(Employee2.isInterestedIn(Employee1), () => {
            narrative("Employee2.isInterestedIn(Employee1)")

        }).$else(() => {
            narrative("not so simple")

        }).$endIf()
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  Employee1 = getSpecific(Employee)',
        '  Employee2 = getSpecific(Employee)',
        '  If !Employee1.isDating() && !Employee2.isDating()',
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