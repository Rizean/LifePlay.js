const fs = require('fs/promises')
const path = require('path')

const makeGetterSetter = (stat) => {
    return '' +
        `
    /**
     * ${stat}
     * @type {LPFloat}
     */
    get ${stat}() {
        return this._${stat};
    }
    set ${stat}(${stat}) {
        this._${stat}.assign(${stat})
    }`
}

// const makeGetterSetter = (stat) => {
//     return '' +
//         `
//     /**
//      * ${stat}
//      * @type {LPFloat}
//      */
//     get ${stat}() {
//         return this._${stat};
//     }`
// }

const makeGettersSetters = (stats) => {
    return stats.map(makeGetterSetter).join('\n')
}


const makeConstructor = (stats) => {
    const constructor = [
        '    constructor({context, name}) {',
        // `      STATS.forEach(stat => this[\`_\${stat}\`].name =  \`\${name}:\${stat}\`)`,
    ]

    stats.forEach(stat => {
        constructor.push(`        this._${stat} = new LPFloat({context, name: \`\${name}:${stat}\`, isStat: true})`)
    })

    constructor.push('    }')
    return constructor.join('\n')
}

const makeClass = (stats) => {
    return [
        `const {STATS} = require('../constants')`,
        `const LPFloat = require('./LPFloat')`,
        `class LPStats {`,
        ``,
        makeConstructor(stats),
        ``,
        makeGettersSetters(stats),
        ``,
        `}`,
        `module.exports = LPStats`,
    ].join('\n')
}

const {STATS} = require('../constants')

const result = makeClass(STATS)


fs.writeFile(path.resolve(__dirname, 'LPStats.js'), result, 'utf-8')
.catch(e=>{
    console.log(e)
    throw e
})