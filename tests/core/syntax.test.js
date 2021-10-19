const fs = require('fs/promises')
const path = require('path')
const Scene = require('../../src/core/Scene')
const LPActor = require('../../src/core/objects/LPActor')
const LPBoolean = require('../../src/core/objects/LPBoolean')
const LPBuilding = require('../../src/core/objects/LPBuilding')
const LPFloat = require('../../src/core/objects/LPFloat')
const LPNPC = require('../../src/core/objects/LPNPC')
const LPObject = require('../../src/core/objects/LPObject')
const LPPlayer = require('../../src/core/objects/LPPlayer')
const LPString = require('../../src/core/objects/LPString')
const LPGlobals = require('../../src/core/objects/LPGlobals')
const LPGlobal = require('../../src/core/objects/LPGlobal')
const LPTalk = require('../../src/core/objects/LPTalk')

test('Syntax Check', async () => {
    const syntax = (await fs.readFile(path.resolve(__dirname, 'syntax.txt'), 'utf-8')).split(/\r?\n/).filter(ele => !ele.startsWith('~~'))
    const expected = syntax.map(ele => `${ele}:true`).join('\r\n')
    const results = []

    const lowerFirst = (str) => `${str.slice(0, 1).toLowerCase()}${str.slice(1)}`


    const scene = new Scene()
    const objects = [
        scene,

        new LPBoolean({context: scene}),
        new LPBuilding({context: scene}),
        new LPFloat({context: scene}),
        new LPString({context: scene}),

        new LPGlobals({context: scene}),
        new LPGlobal({context: scene}),

        new LPObject({context: scene}),
        new LPActor({context: scene}),
        new LPNPC({context: scene}),
        new LPPlayer({context: scene}),
        new LPTalk({context: LPTalk}),

    ]

    syntax.forEach(syn=>{
        objects.some(obj=>{
            if (obj[syn] || obj[lowerFirst(syn)]) {
                results.push(`${syn}:true`)
                return true
            }
        })
    })


    expect(results.join('\r\n')).toBe(expected)
})