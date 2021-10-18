// noinspection JSUnusedGlobalSymbols,JSValidateTypes
// const preprocessor = require('./preprocessor')

const SPACE = ' '
const LINE_ENDDING = '\r\n'
const {isValidLocation} = require('./tools')
const LPFloat = require('./objects/LPFloat')
const LPString = require('./objects/LPString')
const LPObject = require('./objects/LPObject')
const LPBoolean = require('./objects/LPBoolean')
const LPBuilding = require('./objects/LPBuilding')
const LPActor = require('./objects/LPActor')
const LPPlayer = require('./objects/LPPlayer')
const LPNPC = require('./objects/LPNPC')
const Context = require('./Context')


module.exports = class Scene extends Context {


    /**
     *
     * @param script
     */
    constructor(script) {
        super({script})
        // this._context = this
        this.Player = new LPPlayer({context: this})
        // require('./playerFunctions')(this.Player, this)
        this._what = 'WHAT:'
        this._where = 'WHERE:'
        this._when = 'WHEN:'
        this._who = 'WHO:'
        this._whoScript = undefined
        this._other = 'OTHER:'
        this._otherScript = undefined
        this._building = new LPBuilding({context: this, name: 'SceneBuilding'})
        this._CurrentCompanion = new LPNPC({context: this, name: 'CurrentCompanion'})
        this._shouldWriteHeader = true
        this.actionDuration = new LPFloat({context: this, name: 'actionDuration'})

        // this.build.bind(this)
    }

    // build() {
    //     this.reset()
    //     console.log('scene build')
    //     if (this._shouldWriteHeader) {
    //         console.log('scene build header')
    //         this.writeLine(this._what)
    //         this.writeLine(this._where)
    //         this.writeLine(this._when)
    //         this._inline = true
    //         this._code += `WHO: `
    //         if (this._whoScript) this._whoScript()
    //         this._code += LINE_ENDDING
    //         // this.writeLine(this._who)
    //
    //         this._code += `OTHER: `
    //         if (this._otherScript) this._otherScript()
    //         this._code += LINE_ENDDING
    //         // this.writeLine(this._other)
    //         this._inline = false
    //         console.log('scene build header done', this._code)
    //     }
    //     // return super.build.call(this, false)
    //     return super.build(false)
    // }

    /**
     * WHAT
     * @type Function
     * @param {[string]} actions
     */
    WHAT = (actions) => {
        this._what = `WHAT: ${actions.join(', ')}`
        this.writeLine(this._what)
    }

    /**
     * WHERE
     * @type Function
     * @param {[string]} wheres
     */
    WHERE = (wheres) => {
        this._where = `WHERE: ${wheres.join(', ')}`
        this.writeLine(this._where)
    }

    WHEN = (when) => {
        const [start = '0', stop = '24'] = when
        this._when = `WHEN: ${start} - ${stop}`
        this.writeLine(`WHEN: ${start} - ${stop}`)
    }

    /**
     * @callback Script~scene
     * @param {Scene} scene
     */

    /**
     * Start the scene and open the scene UI
     * @param {string|Script~scene=} script
     * @return {Scene} scene for chaining
     */
    WHO = (script) => {
        // todo this._who = 'WHO:'
        this._inline = true
        this._code += `WHO: `
        if (typeof script === 'function') super.buildV2({}, script, this)
        else if (typeof script === 'string') this._code += script
        this._code += LINE_ENDDING
        this._inline = false
    }

    /**
     * @callback Script~scene
     * @param {Scene} scene
     */

    /**
     * Start the scene and open the scene UI
     * @param {Script~scene=} script
     * @return {Scene} scene for chaining
     */
    OTHER = (script) => {
        // todo this._other = 'OTHER:'
        this._inline = true
        this._code += `OTHER: `
        if (script) super.buildV2({}, script, this)
        this._code = this._code.trim() + LINE_ENDDING
        this._inline = false
    }


    /**
     * Add (or change if a relationship already exists) a relationship between 2 or more NPCs.
     * @example
     * addNpcRelationship(Dating, John, Maria)
     * narrative("John and Maria have started dating. What a matchmaker I was!")
     * narrative("A few months later ...")
     * addNPCRelationship(Spouses, John, Maria) // The 'dating' relationship will be upgraded to spouses
     *
     * Jack.dialog("Have you met my brother, Jason?")
     * addNpcRelationship(Siblings, Jack, Jason)
     * narrative("A few days later ... in a separate scene perhaps")
     * Jack.dialog("Here's my sister, Natalie.")
     * addNPCRelationship(Siblings, Jack, Natalie)
     * narrative("The game will now also recognize Jason and Natalie as siblings.")
     * @param {string} type - Dating, Spouses, Siblings, ParentChild (2 actors only, parent is Actor1, child is Actor2), Cousins, BossEmployee (2 actors only, Boss is Actor1, employee is Actor2), Colleagues
     * @param {[LPActor]} actors
     * @return {void|*}
     */
    addNpcRelationship = (type, actors) => this.writeLine(`addNpcRelationship(${type}, ${actors.map(actor => actor.name).join(', ')})`)

    /**
     * Not documented and not used. No idea what it does.
     * @return {void|*}
     */
    assignHome = () => this.writeLine(`assignHome()`)

    /**
     * Assigns residents to a location. Need for Actor.assignWhat() and Actor.assignWhere()
     * @return {void|*}
     */
    assignResidents = () => this.writeLine(`assignResidents()`)

    /**
     * Block all pregnancies for all sex scenes in this current scene.
     * @example
     * scene.blockPregnancy()
     * scene.narrative("This is a dream ...")
     * scene.sex(Player, Actor) // No pregnancies can result from this sex scene
     * @return {void|*}
     */
    blockPregnancy = () => this.writeLine(`blockPregnancy()`)

    /**
     * Makes the camera focus on the given actor.
     * @example
     * cameraMove( 0, 0, 800 ) // Move camera to the middle of the room
     * cameraFocus(MainActor)  // Make cam point to the main actor
     * @param {LPActor} actor
     * @return {void|*}
     */
    cameraFocus = (actor) => this.writeLine(`cameraFocus(${actor.name})`)

    /**
     * Locks a camera?
     */
    cameraLock = () => this.writeLine(`cameraLock()`)

    /**
     * Moves and rotates the camera.
     * @example
     * cameraMove( 0, 0, 800 ) // Move camera to the middle of the room
     * cameraFocus(MainActor)  // Make cam point to the main actor
     * @param x
     * @param y
     * @param z
     * @param rx
     * @param ry
     * @param rz
     * @return {void|*}
     */
    cameraMove = (x, y, z, rx, ry, rz) => {
        if (rx && ry && rz) return this.writeLine(`cameraMove(${x}, ${y}, ${z}, ${rx}, ${ry}, ${rz})`)
        if (rx && ry) return this.writeLine(`cameraMove(${x}, ${y}, ${z}, ${rx}, ${ry})`)
        if (rx) return this.writeLine(`cameraMove(${x}, ${y}, ${z}, ${rx})`)
        this.writeLine(`cameraMove(${x}, ${y}, ${z})`)
    }

    /**
     * Unlocks a camera?
     */
    cameraUnlock = () => this.writeLine(`cameraUnlock()`)

    /**
     * Clears a background set by scene.setBackground3D("Modules/nn_PornEmpire/Rooms/nn_pe_office_1.lpworld")
     */
    clearBackground3d = () => this.writeLine(`clearBackground3d()`)

    /**
     * So that GetSpecific() GetPerson() etc can return the same actor again if they're already called by a previous get functions in the same scene
     */
    clearGetList = () => this.writeLine(`clearGetList()`)

    /**
     * Use this to toggle the 'dress code' of the scene.
     * @example
     * scene.dressFormal() // formal on
     * Actor.dress()
     * Actor2.dress()
     *
     * scene.dressFormal() // formal off
     * Actor3.dress()
     *
     * // 1 and 2 are wearing suits while 3 is looking like a bum
     */
    dressFormal = () => this.writeLine(`dressFormal()`)

    /**
     * Causes two actors to face each other.
     * @param actorOne
     * @param actorTwo
     */
    faceEachOther = (actorOne, actorTwo) => this.writeLine(`faceEachOther(${actorOne.name}, ${actorTwo.name})`)

    /**
     * Filter erotic descriptions, name the lpdesc file with the suffix _restricted if you only want that file to be used specifically when FilterDesc calls for it
     * @param {string} filenameOfLPDescFile
     */
    filterDesc = (filenameOfLPDescFile) => this.writeLine(`filterDesc(${filenameOfLPDescFile})`)

    /**
     * Filter Dirty talks, name the lptalk file with the suffix _restricted if you only want that file to be used specifically when FilterTalk calls for it
     * @param {string} filenameOfLPDescFile
     */
    filterTalk = (filenameOfLPDescFile) => this.writeLine(`filterTalk(${filenameOfLPDescFile})`)

    /**
     * Limit a sex scene to animations that have the specified tag.
     * @example
     * scene.narrative("A while later in front of her place.")
     * Player.dialog("Baby, since I just took you to that fancy place and all, maybe I could... come inside?", "Flirty")
     * Girlfriend.dialog("Hey, what do you take me for? I don't put out just for a meal!", "Offended")
     * Player.dialog("I know you don't, I mean, I didn't think you would, but... please, being around you drives me nuts! I'm about to burst!", "Shy")
     * Girlfriend.dialog("Oh, alright then. But there's no way we're actually doing 'it' tonight! A quick shake and then I'm off to bed, and you're off to yours!", "Annoyed")
     * setBackground(home)
     * Player.strip()
     * scene.filter(Handjob)
     * scene.sex(Player, Girlfriend)
     * @param filterType
     */
    filter = (filterType) => this.writeLine(`filter(${filterType})`)

    /**
     * Find a building near to another building that is of a certain type. Used with setCurrentLocation()
     * @param {[string]} types - hospital, restaurant, hotel, nightclub, restaurant, sports_centre, etc
     * @example
     * var loc = scene.findNearbyBuilding(restaurant, bar, nightclub)
     * scene.moveTo(loc)
     * @return {LPBuilding}
     */
    findNearbyBuilding = (types, name) => {
        const expression = `findNearbyBuilding(${types.join(', ')})`
        if (name) this.writeLine(`${name} = ${expression}`)
        return new LPBuilding({context: this, name, expression})
    }

    /**
     * Start another scene immediately after this current scene finishes
     * @example
     * Dating.dialog("You betrayed me, you humiliated me ... now you die!", "Furious")
     * scene.narrative("Pow!")
     * Player.hide()
     * scene.followUp("death")
     * @param sceneID
     */
    followUp = (sceneID) => this.writeLine(`followUp(${sceneID})`)

    /**
     * Returns whether a scene was force triggered with an action that has the SCENE_ALWAYS field filled (which overrides the conditions at the top of a scene). Use it to know if the scene was consciously triggered by the player or randomly triggered.
     * @example
     * // The "organize_a_house_party.lpaction" file has the following field filled:
     * // SCENE_ALWAYS: house_party
     *
     * // And the house_party.lpscene consults it like this:
     * let PlayerHosting = scene.ForcedTrigger()
     * scene.sceneStart()
     * $if(PlayerHosting, ()=>{
     * 	  scene.narrative("My preparations are all done. It's time to welcome the guests!")
     * 	  Player.dialog("Come in, everyone! Don't be shy. Everything's ready.", "Happy")
     * }).$else(()=>{
     * 	  scene.narrative("My phone rang! It's <Host.name>. I wonder what <Host.he_or_she> is calling me for?")
     *    // ...
     * }).$endif()
     * @return {LPBoolean}
     */
    forcedTrigger = (name) => {
        const expression = `forcedTrigger()`
        if (name) this.writeLine(`${name} = ${expression}`)
        return new LPBoolean({context: this, name, expression})
    }

    /**
     * Generate a new permanent creature NPC.
     * @param {string} optionalRace - dog/horse or none
     * @return {LPActor} Actor
     * @example
     * let Actor = scene.generateCreature(Dogs)
     * scene.narrative("<Actor.name> is my new dog.")
     */
    generateCreature = (optionalRace = '', name) => {
        const expression = `generateCreature(${optionalRace})`
        if (name) this.writeLine(`${name} = ${expression}`)
        return new LPActor({context: this, name, expression})
    }

    /**
     * Generate a new temporary (until you call MakePermanent) creature NPC.
     * @param {string} optionalRace - dog/horse or none
     * @return {LPActor} Actor
     * @example
     * Actor = generateCreatureTemporary(Dogs)
     * let Actor
     * $while(Actor.isMale(), ()=>{
     *    Actor = $let('Actor', scene.generateCreatureTemporary("Dog"))
     * })
     * scene.narrative("<Actor.name> is my new bitch, literally.")
     */
    generateCreatureTemporary = (optionalRace = '', name) => {
        const expression = `generateCreatureTemporary(${optionalRace})`
        if (name) this.writeLine(`${name} = ${expression}`)
        return new LPActor({context: this, name, expression})
    }

    /**
     * Generate a new actor. If nothing inside the bracket: completely random actor. Or you can specify the presets to blend into this new actor. The actor generated using this method will be permanent right away, meaning they will remain after the current scene ends and are usable for some functions that only work with permanent actors.
     * @param presets
     * @return {LPActor} Actor
     * @example
     * let Actor = $let('Actor', scene.generatePerson())  // OR Actor = scene.generatePerson(["easterneuropean", "twenties", "fitness_model"])
     * Actor.dress()
     * Actor.show(2)
     * Player.exchangeContact(Actor) // this will succeed because this is a permanent actor
     */
    generatePerson = (presets = [], name) => {
        const expression = `generatePerson(${presets.join(', ')})`
        if (name) this.writeLine(`${name} = ${expression}`)
        return new LPActor({context: this, name, expression})
    }

    /**
     * Generate a new actor. If nothing inside the bracket: completely random actor. Or you can specify the presets to blend into this new actor.
     * @param presets
     * @return {LPActor} Actor
     * @example
     * let Actor = $let('Actor', scene.generatePersonTemporary())  // OR Actor = scene.generatePersonTemporary(["easterneuropean", "twenties", "fitness_model"])
     * Actor.dress()
     * Actor.show(2)
     * Player.exchangeContact(Actor) // this will succeed because this is a permanent actor
     */
    generatePersonTemporary = (presets = [], name) => {
        const expression = `generatePersonTemporary(${presets.join(', ')})`
        if (name) this.writeLine(`${name} = ${expression}`)
        return new LPActor({context: this, name, expression})
    }

    /**
     * For quests. Return an actor from a previously set actor alias.
     * @param {LPString|string} aliasStr
     * @return {LPNPC}
     */
    getActorAlias = (aliasStr, name) => {
        aliasStr = aliasStr.name || aliasStr
        const expression = `${aliasStr}.getActorAlias()`
        if (name) this.writeLine(`${name} = ${expression}`)
        return new LPNPC({context: this, name, expression})
    }

    /**
     * Gets an actor assigned to a location? But how do they get assigned?
     * @example
     * var Actor4 = scene.getAssignee("living room")
     * @param location
     */
    getAssignee = (location, name) => {
        const expression = `getAssignee(${location})`
        if (name) this.writeLine(`${name} = ${expression}`)
        return new LPNPC({context: this, name, expression})
    }

    /**
     * Get a random creature NPC. This function is very simple right now with the first implementation of creature NPCs, but it will most likely evolve over time.
     */
    getCreature = (name) => {
        const expression = `getCreature()`
        if (name) this.writeLine(`${name} = ${expression}`)
        return new LPNPC({context: this, name, expression})
    }

    /**
     * Get the float value of a global variable. If there's no global variable under such name, returns 0.
     * @param key global variable key name
     * @param name optional variable name
     * @return {LPFloat}
     */
    getGlobal = (key, name) => {
        // todo track global variables
        const expression = `${key}.getGlobal()`
        if (name) this.writeLine(`${name} = ${expression}`)
        return new LPFloat({context: this, name, expression})
    }

    /**
     * Get the string value of a global variable. If there's no global variable under such name, returns ?.
     * @param key global variable key name
     * @param name optional variable name
     * @return {LPString}
     */
    getGlobalString = (key, name) => {
        // todo track global variables
        const expression = `${key}.getGlobalString()`
        if (name) this.writeLine(`${name} = ${expression}`)
        return new LPString({context: this, name, expression})
    }

    /**
     * Get a random person in your current game (i.e. could be anyone that has been created with GeneratePerson() or GeneratePersonTemporary() then MakePermanent() ).
     * getPerson() will only return a specific person once for a scene. So you can use it to  iterate though all persons in the game (omit the parameter), all you
     * have in your contacts (set parameter to true), all persons you don't have exchanged contacts with (set to false) or all persons with a specific tag.
     *
     * @param {boolean|tag} hasContactExchangedOrTag to filter for whether their contact has been exchanged to you or not. Tag (any): to filter for persons that have
     * the given tag assigned. The tag command was introduced with LifePlay 2.18 and can be used to iterate over all persons with a certain tag.
     *
     * @example
     * var Actor = scene.getPerson()       // get anyone
     * Actor = scene.getPerson(true)       // get someone who has exchanged contacts with me
     * Actor = scene.getPerson(false)      // get someone who is not in my contacts
     * Actor = scene.getPerson('SomeTag')  // get only persons with 'SomeTag' (in contacts or not)
     * Actor = scene.getPerson('TagModel')
     * $while(Actor.isValid(), ()=>{
     *     // Do something with the model
     *
     *     // Get the next one or an invalid actor if no more persons with this tag.
     *     Actor = scene.getPerson('TagModel')
     * })
     *
     * @return {LPActor|undefined}
     */
    getPerson = (hasContactExchangedOrTag = '', name) => {
        const expression = `getPerson(${hasContactExchangedOrTag})`
        if (name) this.writeLine(`${name} = ${expression}`)
        return new LPNPC({context: this, name, expression})
    }

    /**
     * Returns a person in the current building / location.
     * @param {boolean|undefined} isPermanent If true only permanent actors will be returned. If false only temporary NPCs will be returned. If omitted all NPCs will be returned.
     * @return {LPNPC}
     */
    getPersonHere = (isPermanent, name) => {
        let expression = `getPersonHere()`
        if (typeof isPermanent === 'boolean' && isPermanent) expression = `getPersonHere(true)`
        else if (typeof isPermanent === 'boolean' && !isPermanent) expression = `getPersonHere(false)`
        if (name) this.writeLine(`${name} = ${expression}`)
        return new LPNPC({context: this, name, expression})
    }

    /**
     * Get a group of NPCs with special relationship of specific type or another with each other. The actor variable you give will receive a number suffix starting from 0 when the actors are returned. The list for 'Type' is:
     * @todo this one is weird as it returns multiple actors ie if getRelatedPeople(Spouses, Dating) this would create Actor0 and Actor1, it will be complex to handle
     * @param {[string]|undefined} types - Dating, Spouses, Siblings, ParentChild, Cousins, BossEmployee, Colleagues
     * @return {[LPNPC]|undefined}
     */
    getRelatedPeople = (types = [], name) => {
        const expression = `getRelatedPeople(${types.join(', ')})`
        if (name) this.writeLine(`${name} = ${expression}`)
        // FIXME this is special as it returns an array of npcs?
        return new LPNPC({context: this, name, expression})
    }

    /**
     * Get a specific person in your current game.
     * @param {string|float} keywordOrID - Doctor, Nurse, Dating, Dating_Friend, Boss, Colleague, Neighbour, PT, PotentialBabyDaddy, Prostitute, ExDating, Landlord, Lecturer, CurrentBabyDaddy,
     * Impregnated, Affair, Coursemate, Fraternity, Student, chooseContact, PassedOn, Relative, Dating_Friend, Neighbour
     * Alternatively, you can input an ID number or a float variable containing it to get the actor with that ID.
     * @todo handle variable name?
     */
    getSpecific = (keywordOrID, name) => {
        const expression = `getSpecific(${keywordOrID})`
        if (name) this.writeLine(`${name} = ${expression}`)
        return new LPActor({context: this, name, expression})
    }

    /**
     * Check if a mod, identified by its ID in its .lpmod file, is enabled.
     * @param modID
     * @return {void|*}
     */
    isModEnabled = (modID, name) => {
        const expression = `isModEnabled(${modID})`
        if (name) this.writeLine(`${name} = ${expression}`)
        return new LPBoolean({context: this, name, expression})
    }

    /**
     * Returns true if quest is complete
     * @param {string} quest
     * @return {LPBoolean}
     */
    isQuestCompleted = (quest, name) => {
        const expression = `isQuestCompleted(${quest})`
        if (name) this.writeLine(`${name} = ${expression}`)
        return new LPBoolean({context: this, name, expression})
    }

    /**
     * Check if the specified is still in cool down period and shouldn't be triggered again yet.
     * @param {LPString|string} sceneID
     * @return {LPBoolean}
     */
    isTimingOut = (sceneID, name) => {
        const expression = `isTimingOut(${sceneID})`
        if (name) this.writeLine(`${name} = ${expression}`)
        return new LPBoolean({context: this, name, expression})
    }

    narrative = (text) => this.writeLine(`"${text}"`)


    /**
     * Opens a menu.
     * @param {string} text - ModManager, Stat, CharGen, Contacts, City, Inventory
     */
    openMenu = (text) => this.writeLine(`openMenu()`)

    /**
     * Use to pass time during a scene.
     * @example
     * scene.narrative("The party continues ...")
     * scene.passTime(0.25, 1)
     * @param {number} hoursMin
     * @param {number} hoursMax
     * @return {Scene} scene for chaining
     */
    passTime = (hoursMin, hoursMax) => {
        this.writeLine(`passTime(${hoursMin}, ${hoursMax})`)
    }

    /**
     * No idea what this does but is used when buying or selling.
     * @return {Scene} scene for chaining
     */
    preciseModify = () => {
        this.writeLine(`preciseModify()`)
        return this
    }

    /**
     * Ends the current quest
     * @return {Scene} scene for chaining
     */
    questEnd = () => {
        this.writeLine(`questEnd()`)
        return this
    }


    /**
     * Remove any relationships between 2 or more NPCs.
     * @param {[LPActor]} actors
     * @return {Scene}
     */
    removeNpcRelationship = (actors) => {
        this.writeLine(`removeNpcRelationship(${actors.map(actor => actor.name).join(', ')})`)
        return this
    }

    /**
     * Reset the tutorials? Not sure only used in TF.
     * @return {Scene}
     */
    resetTutorials = () => {
        this.writeLine(`resetTutorials()`)
        return this
    }

    /**
     * Saves the player before Player.changeSex()? Not sure only used in TF.
     * @return {Scene}
     */
    saveOldPlayer = () => {
        this.writeLine(`saveOldPlayer()`)
        return this
    }


    /**
     * @callback Script~scene
     * @param {Scene} scene
     */

    /**
     * Start the scene and open the scene UI
     * @param {Script~scene} script
     * @return {Scene} scene for chaining
     */
    start = (script) => {
        this.writeLine(``)
        this.writeLine(`sceneStart()`)
        this.codeDepth += 2
        if (typeof script === 'function') {
            const result = super.buildV2({}, '' + script, this)
            this.codeDepth -= 2
            this.writeLine(`sceneEnd()`)
            this.writeLine(``)
        }
    }

    /**
     * End the current scene and loads the last save. Used for game-over.
     * @return {Scene} scene for chaining
     */
    sceneEndLoadLastSave = () => {
        this.writeLine(`sceneEndLoadLastSave()`)
        return this
    }

    /**
     * Lock an actor onto a miniscreen, for telephone call and thought sequence. While being locked, every Show() called on the Actor will not move them into the environment but stuck at the miniscreen instead
     * @param actor
     */
    secondScreen = (actor) => this.writeLine(`secondScreen(${actor.name})`)

    /**
     * Same as SecondScreen(), but does nothing if the actor is already currently seen in the environment (So that they don't disappear from the player's current location and get on the phone remotely instead).
     * @param actor
     */
    secondScreenIfHidden = (actor) => this.writeLine(`secondScreenIfHidden(${actor.name})`)

    /**
     * Set the background image. Check all_where.txt for full list. This is also important for dress() which decides how to dress the actor appropriately based on the background (suits for work, sport clothes for sports_centre etc)
     * @param where
     */
    setBackground = (where) => {
        if (!isValidLocation(where)) throw new Error(`Invalid location! "${where}"`)
        this.writeLine(`setBackground(${where})`)
    }
    /**
     * Set the background as a 3D room for the current scene.
     * @example
     * scene.setBackground("work")
     * scene.setBackground3D("Modules/nn_PornEmpire/Rooms/nn_pe_office_1.lpworld")
     * @param scene3dPath
     */
    setBackground3D = (scene3dPath) => {
        // console.warn(`setBackground3D(${scene3dPath}) Warning, scene3dPath not validated.`)
        this.writeLine(`setBackground3D(${scene3dPath})`)
    }

    /**
     * Same as setBackground(), but some extra parameters like livingroom, kitchen, stable, hallway
     * @param {string} where - livingroom, kitchen, stable, hallway
     */
    setBackgroundCustom = (where) => {
        // if (!isValidLocation(where)) console.warn(`setBackgroundCustom(${where}) Warning, Unknown location!`)
        this.writeLine(`setBackgroundCustom(${where})`)
    }

    /**
     * Start a sex scene involving these actors. If the player is involved, it will also check whether the player is cheating or not and add to the affair list accordingly.
     * The order in which roles are given to actors for the sex scene (important for descriptions and dirtytalk) depends largely on gender and domincance. Males are given roles
     * before transsexuals, then women. Between people of the same gender, the most dominant one (lowest submission stat) is given a role first. However, the order of the actor
     * parameters to the sex() function matters somewhat in group sex: Sex(Male1, Player, Male2) will be different from Sex(Male2, Player, Male1).
     * @param actors
     */
    sex = (actors) => this.writeLine(`sex(${actors.map(({name}) => name).join(', ')})`)

    /**
     * Let the following sex scene happen at a specific position and not at a randomly chosen one.
     * @param x
     * @param y
     * @param z
     * @param angle
     */
    sexAtPoint = (x, y, z, angle = '') => {
        if (angle) this.writeLine(`sexAtPoint(${x}, ${y}, ${z}, ${angle})`)
        else this.writeLine(`sexAtPoint(${x}, ${y}, ${z})`)
    }

    /**
     * Start a sex scene involving these actors. Even if the player is involved, it will not check whether the player is cheating or not. The order in which roles are given to
     * actors for the sex scene (important for descriptions and dirtytalk) depends largely on gender and domincance. Males are given roles before transsexuals, then women.
     * Between people of the same gender, the most dominant one (lowest submission stat) is given a role first. However, the order of the actor parameters to the Sex()
     * function matters somewhat in group sex: SexNoAffair(Male1, Player, Male2) will be different from SexNoAffair(Male2, Player, Male1).
     * @param actors
     */
    sexNoAffair = (actors) => this.writeLine(`sexNoAffair(${actors.map(({name}) => name).join(', ')})`)

    /**
     * Show sneak game, if successful, the next sneak check will return 100
     * @example
     * $if(Random(0, 100).lt(sneak), ()=>{
     *     scene.narrative("Perfect. Nobody saw a thing.")
     * }).$endif()
     * @return {float}
     */
    sneakGame = () => this.writeLine(`sneakGame()`)

    /**
     * call this command before starting a sex scene to make sure that none of the regular 'dirtytalk' (ie both ppl wanting it) is played, and only rape talk is.
     */
    talkNonConsensual = () => this.writeLine(`talkNonConsensual()`)

    /**
     * Returns true if condoms were used during last sex
     * @return {boolean}
     */
    wasCondomUsedDuringLastSex = (name) => {
        const expression = `wasCondomUsedDuringLastSex()`
        if (name) this.writeLine(`${name} = ${expression}`)
        return new LPBoolean({context: this, name, expression})
    }


    timeoutPrecise = (hours, scenes) => this.writeLine(`timeoutPrecise(${hours}, ${scenes.join(', ')})`)
    timeout = (hours, scenes) => this.writeLine(`timeout(${hours}, ${scenes.join(', ')})`)
    timeoutActorPrecise = (hours, scene, actors) => this.writeLine(`timeoutActorPrecise(${hours}, ${scene}, ${actors.map(({name}) => name).join(', ')})`)
    timeoutActor = (hours, scene, actors) => this.writeLine(`timeoutActor(${hours}, ${scene}, ${actors.map(({name}) => name).join(', ')})`)


    get building() {
        return this._building
    }

    get CurrentCompanion() {
        return this._CurrentCompanion
    }
}