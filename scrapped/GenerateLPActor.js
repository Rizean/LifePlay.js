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


const makeGettersSetters = (stats) => {
    return [
        '/****STATS-GETTER-SETTERS****/',
        ...stats.map(makeGetterSetter)
    ].join('\n')
}



const makeConstructor = (stats) => {
    const constructor = ['/****STATS****/']
    stats.forEach(stat => {
        constructor.push(`        this._${stat} = new LPFloat({context, lpMod, name: \`\${this.name}:${stat}\`, isStat: true})`)
    })
    return constructor.join('\n')
}

const makeClass = async (stats) => {
    let template = await fs.readFile(path.resolve(__dirname, 'LPActorTemplate.js'), 'utf-8')
    template = template.replace('/****STATS****/', makeConstructor(stats))
    return template.replace('/****STATS-GETTER-SETTERS****/', makeGettersSetters(stats))
}

const {STATS} = require('../src/core/constants')

const main = async () => {
    const result = await makeClass(STATS)
    await fs.writeFile(path.resolve(__dirname, 'LPActor.js'), result, 'utf-8')
}

main().catch(console.error)
