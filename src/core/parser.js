const esprima = require('esprima')
const INDENT = 4

const DEFAULT_VALUE_FUNC = [
    {name: 'getPerson', value: "''"},
    {name: 'getBuilding', value: "''"},
    {name: 'generatePerson', value: "[]"},
    {name: 'generateCreature', value: "''"},
    {name: 'generateCreatureTemporary', value: "''"},
    {name: 'getPersonHere', value: "''"},
    {name: 'selectNPC', value: "''"},
]

const handlers = {}
const $pad = (depth) => ''.padStart(depth, ' ')

handlers.getHandler = (expression) => {
    const handler = handlers[expression.type]
    if (!handler) throw new Error(`Unknown Expression! ${expression.type}`)
    return handler
}

handlers.Identifier = ({name}, {depth = 0} = {}) => name
handlers.Literal = ({value, raw}, {depth = 0, name} = {}) => {
    if (typeof value === 'boolean') {
        if (name) return `scene.boolean(${raw}, "${name}")`
        return raw
    } else if (typeof value === 'number') {
        if (name) return `scene.float(${raw}, "${name}")`
        return raw
    } else if (typeof value === 'string') {
        if (name) return `scene.string(${raw}, "${name}")`
        return raw
    }
    /* istanbul ignore next */
    throw new Error('Fixme! How did we get here?')
}
handlers.UnaryExpression = (expression, {depth = 0, logs, name} = {}) => {
    logs.push(['UnaryExpression', expression])
    const {operator, argument} = expression
    name = name ? `, "${name}"` : ''
    if (operator === '!') return `scene.not(${handlers[argument.type](argument, {depth, logs})}${name})`
    return `${operator}${handlers.getHandler(argument)(argument, {depth, logs})}`
}
handlers.MemberExpression = (expression, {depth = 0, logs} = {}) => {
    logs.push(['MemberExpression', expression])
    const {object, property, computed} = expression
    const obj = `${handlers.getHandler(object)(object, {depth, logs})}`
    const prop = `${handlers.getHandler(property)(property, {depth, logs})}`
    if (computed) return `${obj}[${prop}]`
    return `${obj}.${prop}`
}

handlers.CallExpression = (expression, {depth = 0, name, logs} = {}) => {
    logs.push(['callExpression', expression])
    let {callee, arguments: _arguments} = expression
    _arguments = _arguments.map(argument => handlers.getHandler(argument)(argument, {depth, logs}))
    if (_arguments.length === 0) {
        const defaultValue = DEFAULT_VALUE_FUNC.find(({name}) => name === callee?.property?.name)?.value
        if (defaultValue) _arguments.push(defaultValue)
    }

    if (name) _arguments.push(`"${name}"`)
    return `${$pad(depth)}${handlers.getHandler(callee)(callee, {depth, logs})}(${_arguments.join(', ')})`
}

handlers.ExpressionStatement = (expression, {depth = 0, logs} = {}) => {
    logs.push(['ExpressionStatement', expression])
    return handlers.getHandler(expression.expression)(expression.expression, {depth, logs})
}

handlers.TemplateLiteral = (expression, {depth = 0, logs} = {}) => {
    logs.push(['TemplateLiteral', JSON.stringify(expression, null, 2)])
    const {quasis, expressions} = expression
    return '`' + quasis.map((ele, i) => {
        return `${handlers.getHandler(ele)(ele, {depth, logs})}${expressions[i] ? '${' + handlers.getHandler(expressions[i])(expressions[i], {depth, logs}) + '}' : ''}`
    }).join('') + '`'
}

handlers.TemplateElement = ({value: {raw, cooked}}) => raw

handlers.ArrayExpression = (expression, {depth = 0, logs} = {}) => {
    logs.push(['ArrayExpression', expression])
    const {elements} = expression
    return `[${elements.map(ele => handlers.getHandler(ele)(ele, {depth, logs})).join(', ')}]`
}
handlers.LogicalExpression = ({operator, left, right}, {depth = 0, name, logs} = {}) => {
    logs.push(['LogicalExpression', {operator, left, right}])
    name = name ? `, "${name}"` : ''
    const lhs = handlers.getHandler(left)(left, {depth, logs})
    const rhs = handlers.getHandler(right)(right, {depth, logs})
    if (operator === '&&') return `${lhs}.and(${rhs}${name})`
    if (operator === '||') return `${lhs}.or(${rhs}${name})`
    throw new Error(`Unknown Logical Operator! ${operator}`)
}

handlers.BinaryExpression = ({operator, left, right}, {depth = 0, name, logs} = {}) => {
    logs.push(['BinaryExpression', {operator, left, right}])
    const lhs = handlers.getHandler(left)(left, {depth, logs})
    const rhs = handlers.getHandler(right)(right, {depth, logs})
    name = name ? `, "${name}"` : ''
    if (operator === '<') return `${lhs}.lt(${rhs}${name})`
    if (operator === '<=') return `${lhs}.lte(${rhs}${name})`
    if (operator === '>') return `${lhs}.gt(${rhs}${name})`
    if (operator === '>=') return `${lhs}.gte(${rhs}${name})`
    if (operator === '+') return `${lhs}.add(${rhs}${name})`
    if (operator === '+=') return `${lhs}.addEq(${rhs}${name})`
    if (operator === '-') return `${lhs}.sub(${rhs}${name})`
    if (operator === '-=') return `${lhs}.subEq(${rhs}${name})`
    if (operator === '/') return `${lhs}.div(${rhs}${name})`
    if (operator === '/=') return `${lhs}.divEq(${rhs}${name})`
    if (operator === '*') return `${lhs}.mul(${rhs}${name})`
    if (operator === '*=') return `${lhs}.mulEq(${rhs}${name})`
    if (operator === '==') return `${lhs}.eq(${rhs}${name})`
    if (operator === '===') return `${lhs}.eq(${rhs}${name})`
    if (operator === '!=') return `${lhs}.ne(${rhs}${name})`
    if (operator === '!==') return `${lhs}.ne(${rhs}${name})`
    if (operator === '**') return `${lhs}.power(${rhs}${name})`
    throw new Error(`Unknown Binary Operator! ${operator}`)
}
handlers.VariableDeclaration = (expression, {depth = 0, logs} = {}) => {
    logs.push(['VariableDeclaration', expression])
    const {type, declarations, kind} = expression

    if (declarations.length > 1) throw new Error(`Multiple Variable Declarator not supported!`)
    const declaration = declarations[0]
    if (declaration.init == null) throw new Error('Variable Declarator cannot be null!')
    return handlers.getHandler(declaration)(declaration, {depth, logs})

}
handlers.VariableDeclarator = (expression, {depth = 0, logs} = {}) => {
    logs.push(['VariableDeclarator', expression])
    const {type, id, init} = expression
    const name = handlers.getHandler(id)(id, {depth, logs})
    return `${$pad(depth)}var ${name} = ${handlers.getHandler(init)(init, {depth, name, logs})}`
}

handlers.NewExpression = (expression, {depth = 0, name, logs} = {}) => {
    logs.push(['NewExpression', expression])
    let {callee, arguments: _arguments} = expression
    _arguments = _arguments.map(argument => handlers.getHandler(argument)(argument, {depth, logs}))
    return `new ${handlers.getHandler(callee)(callee)}(${_arguments.join(', ')})`
}

handlers.ArrowFunctionExpression = (expression, {depth = 0, name, logs} = {}) => {
    logs.push(['ArrowFunctionExpression', expression])
    const {id, params, body} = expression
    const _params = params.map(param => handlers.getHandler(param)(param, {depth, logs}))
    depth += INDENT
    return `(${_params.join(', ')}) => {\r\n${handlers.getHandler(body)(body, {depth, logs})}\r\n}`
}

handlers.Property = (expression, {depth = 0, logs} = {}) => {
    logs.push(['Property', expression])
    const key = handlers.getHandler(expression.key)(expression.key, {depth, logs})
    const value = handlers.getHandler(expression.value)(expression.value, {depth, logs})
    if (key !== value) return `${key}: ${value}`
    return key
}

handlers.ObjectPattern = (expression, {depth = 0, logs} = {}) => {
    logs.push(['ObjectPattern', expression])
    const properties = expression.properties.map(prop => handlers.getHandler(prop)(prop, {depth, logs}))
    return `{${properties.join(', ')}}`
}

handlers.BlockStatement = (expression, {depth = 0, logs} = {}) => {
    logs.push(['BlockStatement', expression])

    return expression.body.map(_expression => handlers.getHandler(_expression)(_expression, {depth, logs})).join('\r\n')
}

handlers.ObjectExpression = (expression, {depth = 0, logs} = {}) => {
    logs.push(['ObjectExpression', expression])
    const properties = expression.properties.map(prop => handlers.getHandler(prop)(prop, {depth, logs}))
    return `{${properties.join(', ')}}`
}

handlers.WhileStatement = (expression, {depth = 0, logs} = {}) => {
    logs.push(['WhileStatement = ', expression])
    let {test, body} = expression
    test = handlers.getHandler(test)(test, {depth, logs})
    body = handlers.getHandler(body)(body, {depth: depth + INDENT, logs})

    return [
        `${$pad(depth)}scene.$while(${test}, () => {`,
        `${$pad(depth + 2)}${body}`,
        `${$pad(depth)}})`
    ].join('\r\n')
}

handlers.IfStatement = (expression, {depth = 0, logs} = {}) => {
    logs.push(['IfStatement', expression])
    let {test, consequent, alternate} = expression
    test = handlers.getHandler(test)(test, {depth, logs})
    consequent = handlers.getHandler(consequent)(consequent, {depth: depth + INDENT, logs})
    if (alternate) alternate = handlers.getHandler(alternate)(alternate, {depth: depth + INDENT, logs})

    if (!alternate) {
        return [
            `${$pad(depth)}scene.$if(${test}, function () {`,
            `${consequent}`,
            `${$pad(depth)}}).$endIf()`
        ].join('\r\n')

    } else {
        const isAltIf = expression.alternate.type === 'IfStatement'
        alternate = isAltIf ? alternate.trim() : `(()=>{\r\n${alternate}\r\n${$pad(depth)}}).$endIf()`
        if (alternate.trim().startsWith('scene.$if')) alternate = alternate.replace('scene.$if', '$if')
        const out = [
            `${$pad(depth)}scene.$if(${test}, function () {`,
            `${consequent}`,
            `${$pad(depth)}}).$else${alternate.trim()}`
        ].join('\r\n')
        if (out.includes(' $if')) {
            logs.push(['Bad Code: ', {out, alternate}])
            throw new Error('Invalid if statement generated! FIXME!')
        }
        return out
    }
}

handlers.AssignmentExpression = (expression, {depth = 0, logs} = {}) => {
    logs.push(['AssignmentExpression', expression])
    let {operator, left, right} = expression
    const isComputed = left.computed
    const name = left.name
    if (operator === '-=') return `${handlers.getHandler(left)(left, {logs, name})}.subEq(${handlers.getHandler(right)(right, {depth, logs})})`
    if (operator === '+=') return `${handlers.getHandler(left)(left, {logs, name})}.addEq(${handlers.getHandler(right)(right, {depth, logs})})`
    if (operator === '*=') return `${handlers.getHandler(left)(left, {logs, name})}.mulEq(${handlers.getHandler(right)(right, {depth, logs})})`
    if (operator === '/=') return `${handlers.getHandler(left)(left, {logs, name})}.divEq(${handlers.getHandler(right)(right, {depth, logs})})`
    if (operator === '=') {
        if (left.type === 'Identifier') {
            return `${handlers.getHandler(left)(left, {logs, name})}.assign(${handlers.getHandler(right)(right, {depth, logs})}, "${name}")`
        }
        return `${handlers.getHandler(left)(left, {logs, name})} = ${handlers.getHandler(right)(right, {depth, logs})}`
    }
    return `${handlers.getHandler(left)(left, {logs})} ${operator} ${handlers.getHandler(right)(right, {depth, logs, name})}`
}

handlers.FunctionExpression = (expression, {depth = 0, logs} = {}) => {
    logs.push(['FunctionExpression', expression])
    const params = expression.params.map(param => handlers.getHandler(param)(param, {depth, logs})).join(', ')
    const body = handlers.getHandler(expression.body)(expression.body, {depth: depth + INDENT, logs})

    return [
        `function(${params}) {`,
        `${body}`,
        `${$pad(depth)}}`,
    ].join('\r\n')
}

handlers.Program = (program, {depth = 0, logs} = {}) => {
    logs.push(['Program', program])
    const {body} = program
    return body.map(expression => handlers.getHandler(expression)(expression, {depth, logs}))
}


const parser = (source, context = 'scene') => {
    const logs = []
    const parsed = esprima.parse(source, {tokens: false, comment: false, loc: false, range: false})
    const intermediate = handlers.Program(parsed, {logs}).join('\r\n')
    return {intermediate, parsed, logs}
}

module.exports = parser