const fs = require('fs/promises')
const ensureDirectory = async (dirPath) => fs.mkdir(dirPath, {recursive: true})
module.exports = ensureDirectory