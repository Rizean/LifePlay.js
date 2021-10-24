const Context = require('../../../src/core/Context')
const LPObject = require('../../../src/core/objects/LPObject')
const setupMod = require('../../tools/setupMod')

// We can't test LPObject in the normal way as it is not available in the Scene scope
test('LPObject.constructor', () => {
    const main = () => {
        let a = new LPObject({context: undefined, name: 'a'})
    }
    expect(main).toThrowError()
})

test('LPObject.name', () => {
    const main = () => {
        const context = new Context({lpMod: setupMod()})
        let a = new LPObject({context, lpMod: setupMod(), name: 'a'})
        a.name = 'b'
        return a.name
    }

    expect(main()).toBe('a')
})