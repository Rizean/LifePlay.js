// noinspection JSUnresolvedVariable,EqualityComparisonWithCoercionJS,JSUnusedLocalSymbols,JSUnusedAssignment

const setupMod = require('../../tools/setupMod')
const Scene = require('../../../src/core/Scene')
const LB = '\r\n'

// ADD
test('float.add', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_add'}, (scene) => {
        scene.start(() => {
            let a = 1
            let b = 2
            let c = a + b
            let d = a + 5
            c = a + b + 32 + 17
            d = a + 31 + 18
            let e = a + 31 + 18 + a + 3 + c
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a + b',
        '  d = a + 5',
        '  c = a + b + 32 + 17',
        '  d = a + 31 + 18',
        '  e = a + 31 + 18 + a + 3 + c',
        'sceneEnd()',
    ].join(LB))

})


test('float.add stats', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_stats'}, (scene) => {
        scene.start(() => {
            var Employee1 = scene.getSpecific('Employee')
            var Employee2 = scene.getSpecific('Employee')
            var c = Employee1.perversion.add(Employee2.perversion) + 1
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  Employee1 = getSpecific(Employee)',
        '  Employee2 = getSpecific(Employee)',
        '  c = Employee1:perversion + Employee2:perversion + 1',
        'sceneEnd()',
    ].join(LB))
})

test('float.addEq', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_addEq'}, (scene) => {
        scene.start(() => {
            let a = 1
            let b = 2
            a += b
            a += b + 42
            a += 52
            a += b + 3 + b + 2
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  a += b',
        '  a += b + 42',
        '  a += 52',
        '  a += b + 3 + b + 2',
        'sceneEnd()',
    ].join(LB))
})


// SUB
test('float.sub', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_sub'}, (scene) => {
        scene.start(() => {
            let a = 1
            let b = 2
            let c = a - b
            c = a - b - 3
            let d = a - 8 - 7 + c
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a - b',
        '  c = a - b - 3',
        '  d = a - 8 - 7 + c',
        'sceneEnd()',
    ].join(LB))
})

test('float.subEq', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_subEq'}, (scene) => {
        scene.start(() => {
            let a = 1
            let b = 2
            a -= b
            a -= b + 1
            a -= 5 - b
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  a -= b',
        '  a -= b + 1',
        '  a -= 5 - b',
        'sceneEnd()',
    ].join(LB))
})


// MUL
test('float mul', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_mul'}, (scene) => {
        scene.start(() => {
            let a = 1
            let b = 2 * 2
            let c = a * b
            c = 3 * a * b * 3 * a
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2 * 2',
        '  c = a * b',
        '  c = 3 * a * b * 3 * a',
        'sceneEnd()',
    ].join(LB))
})


test('float.mulEq', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_mulEq'}, (scene) => {
        scene.start(() => {
            let a = 1
            let b = 2
            a *= 2 * b
            a *= b
            a *= 5
            a *= b * 2
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  a *= 2 * b',
        '  a *= b',
        '  a *= 5',
        '  a *= b * 2',
        'sceneEnd()',
    ].join(LB))
})

// DIV
test('float.div', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_div'}, (scene) => {
        scene.start(() => {
            let a = 1
            let b = 2
            let c = 3 / a / b
            c = a / b / 3
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = 3 / a / b',
        '  c = a / b / 3',
        'sceneEnd()',
    ].join(LB))
})


test('float.divEq', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_divEq'}, (scene) => {
        scene.start(() => {
            let a = 1
            let b = 2
            a /= 3 * b / a
            a /= b / 5 * 3
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  a /= 3 * b / a',
        '  a /= b / 5 * 3',
        'sceneEnd()',
    ].join(LB))
})


// Logical
test('float.gt', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_gt'}, (scene) => {
        scene.start(() => {
            let a = 1
            let b = 2
            var c = a > b
            c = a > 5
            c = 4 > a && 5 > c
            c = a > b && a > a
            c = a > b && a > a && a > a
            c = a > b || a > a
            c = a > b || a > a || a > a
            c = a > b && a > a || a > a
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a > b',
        '  c = a > 5',
        '  c = 4 > a && 5 > c',
        '  c = a > b && a > a',
        '  c = a > b && a > a && a > a',
        '  c = a > b || a > a',
        '  c = a > b || a > a || a > a',
        '  c = a > b && a > a || a > a',
        'sceneEnd()',
    ].join(LB))

})


test('float.gte', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_gte'}, (scene) => {
        scene.start(() => {
            let a = 1
            let b = 2
            let c = a >= b
            c = a >= 5
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a >= b',
        '  c = a >= 5',
        'sceneEnd()',
    ].join(LB))
})

test('float.lt', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_lt'}, (scene) => {
        scene.start(() => {
            let a = 1
            let b = 2
            var c = a < b
            c = a < 5
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a < b',
        '  c = a < 5',
        'sceneEnd()',
    ].join(LB))
})

test('float.lte', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_lte'}, (scene) => {
        scene.start(() => {
            let a = 1
            let b = 2
            var c = a <= b
            c = a <= 5
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a <= b',
        '  c = a <= 5',
        'sceneEnd()',
    ].join(LB))
})

test('float.ne', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_ne'}, (scene) => {
        scene.start(() => {
            let a = 1
            let b = 2
            var c = a != b
            c = a !== 5
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a != b',
        '  c = a != 5',
        'sceneEnd()',
    ].join(LB))
})

test('float.eq', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_eq'}, (scene) => {
        scene.start(() => {
            let a = 1
            let b = 2
            var c = a == b
            c = a === 5
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = 2',
        '  c = a == b',
        '  c = a == 5',
        'sceneEnd()',
    ].join(LB))
})

// Other
test('float.floor', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_floor'}, (scene) => {
        scene.start(() => {
            let a = 1
            let b = a.floor()
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = a.floor()',
        'sceneEnd()',
    ].join(LB))
})


test('float.power', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_power'}, (scene) => {
        scene.start(() => {
            let a = 1
            let b = a.power(3)
            b = a ** 3
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = a.power(3)',
        '  b = a.power(3)',
        'sceneEnd()',
    ].join(LB))
})

test('float.round', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_round'}, (scene) => {
        scene.start(() => {
            let a = 1.327
            let b = a.round()
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1.327',
        '  b = a.round()',
        'sceneEnd()',
    ].join(LB))
})

test('float.convertToLocalCurrency', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_convertToLocalCurrency'}, (scene) => {
        scene.start(() => {
            let a = 1
            let b = a.convertToLocalCurrency()
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  b = a.convertToLocalCurrency()',
        'sceneEnd()',
    ].join(LB))
})

test('float.setFraternityFees', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_setFraternityFees'}, (scene) => {
        scene.start(() => {
            let a = 1
            a.setFraternityFees()
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  a.setFraternityFees()',
        'sceneEnd()',
    ].join(LB))
})

test('float.setRent', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_setRent'}, (scene) => {
        scene.start(() => {
            let a = 1
            a.setRent()
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  a.setRent()',
        'sceneEnd()',
    ].join(LB))
})

test('float.setSalary', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_setSalary'}, (scene) => {
        scene.start(() => {
            let a = 1
            a.setSalary()
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  a.setSalary()',
        'sceneEnd()',
    ].join(LB))
})

test('float.setTuition', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_setTuition'}, (scene) => {
        scene.start(() => {
            let a = 1
            a.setTuition()
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  a.setTuition()',
        'sceneEnd()',
    ].join(LB))
})

// this is mostly for coverage
test('float.isStat', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_isStat'}, (scene) => {
        scene.start(() => {
            let a = 1
            // a is turned into an LPFloat so this is valid but very weird :D
            a.isStat = true
            a.assign(5)
            scene.narrative(`a isStat = ${a.isStat}`)
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  a => 5',
        '  "a isStat = true"',
        'sceneEnd()',
    ].join(LB))
})

test('float.write', async () => {
    const lpMod = setupMod()
    let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPFloat_write'}, (scene) => {
        scene.start(() => {
            let a = 1
            a.write()
        })
    })
    expect((await scene.toString()).trim()).toBe([
        'sceneStart()',
        '  a = 1',
        '  a',
        'sceneEnd()',
    ].join(LB))
})