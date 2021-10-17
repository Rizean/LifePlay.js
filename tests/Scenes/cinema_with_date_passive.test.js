const fs = require('fs')
const path = require('path')

const expected = fs.readFileSync(path.resolve(__dirname, 'cinema_with_date_passive.lpscene'), 'utf-8')

test('cinema_with_date_passive', () => {
    const scene = require('../../examples/cinema_with_date_passive.scene')
    expect(scene._code.trim()).toBe(expected.replace(/\r?\n/g, '\r\n'))
})