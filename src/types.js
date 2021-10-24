/**
 * WHAT
 * @param {[string]} actions
 */
global.WHAT = function(actions){ throw new Error('This should not be called!')}

/**
 * WHERE
 * @param {[string]} wheres
 */
// global.WHERE = function(wheres){ throw new Error('This should not be called!')}

// @param {Array.<{start: String, stop: String}>} when

/**
 * WHEN
 * @param {string} start
 * @param {string} stop
 */
global.WHEN = function([start = '0', stop = '24']){ throw new Error('This should not be called!')}

/**
 * WHO
 * @param {function} script
 */
global.WHO = function(script){ throw new Error('This should not be called!')}

/**
 * OTHER
 * @param {function} script
 */
global.OTHER = function(script){ throw new Error('This should not be called!')}

/**
 * sceneStart
 */
global.sceneStart = function(){ throw new Error('This should not be called!')}

/**
 * sceneEnd
 */
global.sceneEnd = function(){ throw new Error('This should not be called!')}

// /**
//  * narrative
//  * @param {string} text
//  */
// global.narrative = function(text){ throw new Error('This should not be called!')}

/**
 * isAtHome
 */
global.isAtHome = function(){ throw new Error('This should not be called!')}

/**
 * sex
 * @param {[string]} actors
 */
global.sex = function(actors){ throw new Error('This should not be called!')}

/**
 * random
 * @param {function} script
 */
global.random = function(script){ throw new Error('This should not be called!')}

/**
 * generatePerson
 * @param {[string]} presets
 * @param {string} variable
 */
global.generatePerson = function(presets = [], variable = 'Actor'){ throw new Error('This should not be called!')}

/**
 * generatePersonTemporary
 * @param {[string]} presets
 * @param {string} variable
 */
global.generatePersonTemporary = function(presets = [], variable = 'Actor'){ throw new Error('This should not be called!')}

/**
 * getSpecific
 * @param {string} person
 */
global.getSpecific = function(person){ throw new Error('This should not be called!')}

global.Player = {
    submission: Number,
    dialogue: function(){}
}

global.Actor = {
    isContactExchanged: function(){},

}

global.Random = function(script){ throw new Error('This should not be called!')}
global.$if = function(condition){ throw new Error('This should not be called!')}
global.$while = function(condition, script){ throw new Error('This should not be called!')}