const {LOCATIONS, MOODS} = require('./constants')

module.exports = {
    isValidLocation: (location) => LOCATIONS.includes(location.toLowerCase()),
    isMoodValid: (mood) => MOODS.map(ele => ele.toLowerCase()).includes(mood.toLowerCase())
}