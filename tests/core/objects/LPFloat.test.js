// noinspection JSUnresolvedVariable,EqualityComparisonWithCoercionJS,JSUnusedLocalSymbols,JSUnusedAssignment

const Scene = require('../../../src/core/Scene')
const LB = '\r\n'

test('creates float with value 1', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        'sceneEnd()'
    ].join(LB))
})

// ADD
test('float.add', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = 2
        let c = a + b
        let d = a + 5
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a + b',
        '  d = a + 5',
        'sceneEnd()'
    ].join(LB))
})

test('float.add chaining', async () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = 2
        let c = a + b + 32 + 17
        let d = a + 31 + 18
    })
    await scene.writeFiles({buildPath: 'build', filePath: 'test/core/objects/LPFloat', fileName: 'float_add_chaining', type: 'scene', debug: true})
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a + b + 32 + 17',
        '  d = a + 31 + 18',
        'sceneEnd()'
    ].join(LB))
})

test('float.add stats', () => {
    const scene = new Scene()
    scene.start((scene) => {
        var Employee1 = scene.getSpecific('Employee')
        var Employee2 = scene.getSpecific('Employee')
        var c = Employee1.perversion.add(Employee2.perversion) + 1
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  Employee1 = getSpecific(Employee)',
        '  Employee2 = getSpecific(Employee)',
        '  c = Employee1:perversion + Employee2:perversion + 1',
        'sceneEnd()'
    ].join(LB))
})

test('float.addEq', async () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = 2
        a += b
        a += b + 42
        a += 52
    })
    await scene.writeFiles({buildPath: 'build', filePath: 'test/core/objects/LPFloat', fileName: 'float_addEq', type: 'scene', debug: true})
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  a += b',
        '  a += b + 42',
        '  a += 52',
        'sceneEnd()'
    ].join(LB))
})

test('float.addEq with rhs chaining', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = 2
        a += b + 3
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  a += b + 3',
        'sceneEnd()'
    ].join(LB))
})

// SUB
test('float.sub', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = 2
        let c = a - b
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a - b',
        'sceneEnd()'
    ].join(LB))
})

test('float.sub chaining', async () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = 2
        let c = a - b - 3
        let d = a - 8 - 7
    })
    await scene.writeFiles({buildPath: 'build', filePath: 'test/core/objects/LPFloat', fileName: 'float_sub_chaining', type: 'scene', debug: true})
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a - b - 3',
        '  d = a - 8 - 7',
        'sceneEnd()'
    ].join(LB))
})

test('float.subEq', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = 2
        a -= b
        a -= 5
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  a -= b',
        '  a -= 5',
        'sceneEnd()'
    ].join(LB))
})

test('float.subEq with rhs chaining', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = 2
        a -= b + 1
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  a -= b + 1',
        'sceneEnd()'
    ].join(LB))
})

// MUL
test('float mul', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = 2
        let c = a * b
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a * b',
        'sceneEnd()'
    ].join(LB))
})

test('float.mul chaining', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = 2
        let c = a * b * 3
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a * b * 3',
        'sceneEnd()'
    ].join(LB))
})

test('float.mulEq', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = 2
        a *= b
        a *= 5
        a *= b * 2
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  a *= b',
        '  a *= 5',
        '  a *= b * 2',
        'sceneEnd()'
    ].join(LB))
})

// DIV
test('float.div', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = 2
        let c = a / b
        c = a / b / 3
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a / b',
        '  c = a / b / 3',
        'sceneEnd()'
    ].join(LB))
})


test('float.divEq', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = 2
        a /= b
        a /= 5
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  a /= b',
        '  a /= 5',
        'sceneEnd()'
    ].join(LB))
})


// Logical
test('float.gt', async () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = 2
        var c = a > b
        c = a > 5
        c = a > b && a > a
        c = a > b && a > a && a > a
        c = a > b || a > a
        c = a > b || a > a || a > a
        c = a > b && a > a || a > a
    })
    await scene.writeFiles({buildPath: 'build', filePath: 'test/core/objects/LPFloat', fileName: 'float_gt', type: 'scene', debug: true})
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a > b',
        '  c = a > 5',
        '  c = a > b && a > a',
        '  c = a > b && a > a && a > a',
        '  c = a > b || a > a',
        '  c = a > b || a > a || a > a',
        '  c = a > b && a > a || a > a',
        'sceneEnd()'
    ].join(LB))
})


test('float.gte', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = 2
        let c = a >= b
        c = a >= 5
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a >= b',
        '  c = a >= 5',
        'sceneEnd()'
    ].join(LB))
})

test('float.lt', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = 2
        var c = a < b
        c = a < 5
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a < b',
        '  c = a < 5',
        'sceneEnd()'
    ].join(LB))
})

test('float.lte', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = 2
        var c = a <= b
        c = a <= 5
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a <= b',
        '  c = a <= 5',
        'sceneEnd()'
    ].join(LB))
})

test('float.ne', () => {
    const scene = new Scene()

    scene.start((scene) => {
        let a = 1
        let b = 2
        var c = a != b
        c = a !== 5
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a != b',
        '  c = a != 5',
        'sceneEnd()'
    ].join(LB))
})

test('float.eq', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = 2
        var c = a == b
        c = a === 5
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a == b',
        '  c = a == 5',
        'sceneEnd()'
    ].join(LB))
})

// Other
test('float.floor', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b =  a.floor()
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = a.floor()',
        'sceneEnd()'
    ].join(LB))
})


test('float.power', async () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = a.power(3)
        b = a ** 3
    })
    await scene.writeFiles({buildPath: 'build', filePath: 'test/core/objects/LPFloat', fileName: `LPFloat_power`, type: 'scene', debug: true})
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = a.power(3)',
        '  b = a.power(3)',
        'sceneEnd()'
    ].join(LB))
})

test('float.round', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = a.round()
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = a.round()',
        'sceneEnd()'
    ].join(LB))
})

test('float.convertToLocalCurrency', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        let b = a.convertToLocalCurrency()
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = a.convertToLocalCurrency()',
        'sceneEnd()'
    ].join(LB))
})

test('float.setRent', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        a.setRent()
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  a.setRent()',
        'sceneEnd()'
    ].join(LB))
})

test('float.setSalary', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        a.setSalary()
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  a.setSalary()',
        'sceneEnd()'
    ].join(LB))
})

test('float.setTuition', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        a.setTuition()
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  a.setTuition()',
        'sceneEnd()'
    ].join(LB))
})

// this is mostly for coverage
test('float.isStat', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        // a is turned into an LPFloat so this is valid but very weird :D
        a.isStat = true
        a.assign(5)
        scene.narrative(`a isStat = ${a.isStat}`)
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  a => 5',
        '  "a isStat = true"',
        'sceneEnd()'
    ].join(LB))
})

test('float.write', () => {
    const scene = new Scene()
    scene.start((scene) => {
        let a = 1
        a.write()
    })
    expect(scene._code.trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  a',
        'sceneEnd()'
    ].join(LB))
})