const Context = require('../../../src/core/Context')
const LPObject = require('../../../src/core/objects/LPObject')
const LPString = require('../../../src/core/objects/LPString')
const setupMod = require('../../tools/setupMod')

// We can't test LPObject in the normal way as it is not available in the Scene scope
test('LPObject.constructor', () => {
    const main = () => {
        let a = new LPObject({context: undefined, name: 'a'})
    }
    expect(main).toThrowError()
})

// test('LPObject.assign with type and iType', () => {
//     const main = () => {
//         const context = new Context({})
//         let a = new LPObject({context, name: 'a'})
//         a.assign('test2', 'string', LPString)
//     }
//
//     expect(main).not.toThrowError()
//
//     const main2 = () => {
//         const context = new Context({})
//         let a = new LPObject({context, name: 'a'})
//         a.assign(5, 'string', LPString)
//     }
//     expect(main2).toThrowError()
// })
//
// test('LPObject.assign with type', () => {
//     const main = () => {
//         const context = new Context({})
//         let a = new LPObject({context, name: 'a'})
//         a.assign('test2', 'string')
//     }
//
//     expect(main).not.toThrowError()
//
//     const main2 = () => {
//         const context = new Context({})
//         let a = new LPObject({context, name: 'a'})
//         a.assign(5, 'string')
//     }
//     expect(main2).toThrowError()
// })
//
// test('LPObject.assign with iType', () => {
//     const main = () => {
//         const context = new Context({})
//         let a = new LPObject({context, name: 'a'})
//         let b = new LPString({context, name: 'b'})
//         a.assign(b, null, LPString)
//     }
//
//     expect(main).not.toThrowError()
//
//     const main2 = () => {
//         const context = new Context({})
//         let a = new LPObject({context, name: 'a'})
//         a.assign(5, null, LPString)
//     }
//     expect(main2).toThrowError()
// })

test('LPObject.name', () => {
    const main = () => {
        const context = new Context({lpMod: setupMod()})
        let a = new LPObject({context, lpMod: setupMod(), name: 'a'})
        a.name = 'b'
        return a.name
    }

    expect(main()).toBe('a')
})