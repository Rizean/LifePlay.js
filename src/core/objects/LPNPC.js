// noinspection JSUnusedGlobalSymbols

const {RELATIONSHIPS} = require('../constants')
const LPActor = require('./LPActor')
const LPString = require('./LPString')
const LPFloat = require('./LPFloat')
const LPBoolean = require('./LPBoolean')

module.exports = class LPNPC extends LPActor {
    constructor({context, lpMod, name, expression}) {
        super({context, lpMod, name, expression})
    }

    /**
     * Add this actor to the list of colleagues. Can be found later with getSpecific(Colleague)
     * @return {LPBoolean}
     */
    addColleague = () => this.context.writeLine(`${this.name}.addColleague()`)
    /**
     * Make this person part of your crime family.
     * @return {LPBoolean}
     */
    addCriminal = () => this.context.writeLine(`${this.name}.addCriminal()`)
    /**
     * Add this actor to the list of your significant other's friends. Can be found later with getSpecific(Dating_Friend)
     * @return {LPBoolean}
     */
    addDatingFriend = () => this.context.writeLine(`${this.name}.addDatingFriend()`)
    /**
     * Make this person an employee at the specified salary at the current building.
     * @return {LPBoolean}
     */
    addEmployee = () => this.context.writeLine(`${this.name}.addEmployee()`)
    /**
     * Add this actor to the list of neighbours. Can be found later with getSpecific(Neighbour)
     * @return {LPBoolean}
     */
    addNeighbour = () => this.context.writeLine(`${this.name}.addNeighbour()`)
    /**
     * Add this actor to the list of prostitutes. Can be checked later with Actor.isProstitute()
     * @return {*}
     */
    addProstitute = () => this.context.writeLine(`${this.name}.addProstitute()`)
    /**
     * todo
     * @return {void|*}
     */
    addToPeopleHere = () => this.context.writeLine(`${this.name}.addToPeopleHere()`)

    /**
     * Returns the what the actor is doing, for example "having sex", "masturbating", "sleeping"
     * Must call scene.AssignResidents() first.
     * @example
     * scene.assignResidents()
     * var ActorWhere = Actor.assignWhere()
     * var ActorWhat = Actor.assignWhat()
     * $if(ActorWhere.isString("bedroom"), ()=>{
     *      scene.narration('<Actor.name> is in the <ActorWhere> and they are <ActorWhat>.')
     * })
     * @return {string}
     */
    assignWhat = () => this.context.writeLine(`${this.name}.assignWhat()`)

    /**
     * Returns the location the actor is in, for example bedroom, nightclub
     * @example
     * scene.assignResidents()
     * var ActorWhere = Actor.assignWhere()
     * var ActorWhat = Actor.assignWhat()
     * $if(ActorWhere.isString("bedroom"), ()=>{
     *      scene.narration('<Actor.name> is in the <ActorWhere> and they are <ActorWhat>.')
     * })
     * @return {string}
     */
    assignWhere = () => this.context.writeLine(`${this.name}.assignWhere()`)

    /**
     * Prevents this person from ever having NPC-NPC relationships. Mainly used for ex-relative bf/gf so that your gf/ former sister doesn't introduce you to her brother that you apparently haven't met
     * @param {LPActor} actor - optional?
     */
    blockNPCRelationships = (actor) => this.context.writeLine(`${this.name}.blockNPCRelationships(${actor.name})`)

    /**
     * Force remove this actor from current memory. Used in rare cases where SceneEnd() (which does this automatically to all actors used in the scene) isn't called.
     * @return {void|*}
     */
    delete = () => this.context.writeLine(`${this.name}.delete()`)

    /**
     * Force remove this actor completely from the game. They will no longer be called on in scenes or accessible from the Contacts menu. Used in rare cases to kill off characters or characters moving to a new city etc ...
     * @return {void|*}
     */
    deletePerson = () => this.context.writeLine(`${this.name}.deletePerson()`)

    /**
     * Controls weather or not an actor has a favorite home. Notes: When called with true it should be followed by Actor.setLivingWithPlayer(false) and it seems to mean the Actor will live somewhere other than with the player. When called with false
     * it should be followed up by Actor.setLivingWithPlayer(true)
     * @example
     * scene.narration("What action should I take with <Actor.name>?")
     * scene.option([
     *      {text: 'Nothing'},
     *      {condition: 'Actor.livesWithPlayer()', text: 'Ask <Actor.name> to move out and find <Actor.his_or_her> place'},
     *      {condition: '!Actor.livesWithPlayer()', text: 'Ask <Actor.name> to move in with me'},
     * ])
     * $if(choice(1), ()=>{
     *      scene.narration("<Actor.name> no longer lives with me and has found another place to live.")
     *      Actor.setLivingWithPlayer(false)
     *      Actor.favoriteHome(true)
     * }).$elseIf(choice(2), () => {
     *      scene.narration("<Actor.name> moved out of <Actor.his_or_her> current place and moved in with me.")
     *      Actor.setLivingWithPlayer(true)
     *      Actor.favoriteHome(false)
     * }).$endIf()
     * @param {boolean} hasFavorite
     * @return {void|*}
     */
    favoriteHome = (hasFavorite) => {
        this.context.writeLine(`${this.name}.favoriteHome(${hasFavorite})`)

        // if (hasFavorite) {
        //     this.context.writeLine(`${this.name}.favoriteHome()`)
        // } else {
        //     this.context.writeLine(`${this.name}.favoriteHome(false)`)
        // }
    }

    /**
     * Returns the time this person will stop being at their current location and AI would look for a new location again. The value returned isn't the time of the day,
     * but total hours elapsed since the start of the current game, i.e. HoursElapsed + HoursStayed HoursElapsed being a special variable
     * @return {LPFloat}
     */
    getUntil = (name) => {
        if (name) this.context.writeLine(`${name} = ${this.name}.getUntil()`)
        return new LPFloat({context: this.context, lpMod: this.lpMod, name})
    }

    /**
     * Checks to see if this NPC is already in a special relationship of a specific type or another with any another NPC. The list for 'Type':
     * @param {[string]} types - dating, spouses, siblings, parentchild, cousins, bossemployee, colleagues
     * @returns {LPBoolean}
     */
    hasRelationship = (types, name) => {
        types.forEach(type => {
            if (!RELATIONSHIPS.includes(type.toLowerCase())) throw new Error(`hasRelationship invalid type: ${type}`)
        })
        const expression = `${this.name}.hasRelationship(${types.join(', ')})`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPBoolean({context: this.context, lpMod: this.lpMod, name, expression})
    }

    /**
     * Check if you have committed an affair with this actor while with your current boyfriend / girlfriend.
     * @example
     * $if(John.isAffair(), ()=>{
     *     John.dialog("Oh baby, your stupid boyfriend has no idea what we've done.", 'Flirty')
     * }).$endif()
     * @return {LPBoolean}
     */
    isAffair = (name) => {
        const expression = `${this.name}.isAffair()`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPBoolean({context: this.context, lpMod: this.lpMod, name, expression})
    }

    /**
     * Check if the actor is the player's boss.
     * @example
     * $if(John.isBoss(), ()=>{
     *     John.dialog("You're fired!", "Angry")
     * }).$endIf()
     * @return {LPBoolean}
     */
    isBoss = (name) => this._isHelper('isBoss', [], name)

    /**
     * Check if the actor is one of the player's colleagues.
     * @example
     * $if(John.isColleague(), ()=>{
     *     John.dialog("Hey, wanna go for lunch?", "Happy")
     * }).$endIf()
     * @return {LPBoolean}
     */
    isColleague = (name) => this._isHelper('isColleague', [], name)

    /**
     * Check if the actor has exchanged numbers with the player.
     * @example
     * $if(John.isContactExchanged(), ()=>{
     *     John.dialog("Well, you have my number. Just call me if you need anything else.", "Happy")
     * }).$else(()=>{
     *     John.dialog("Actually, why don't we exchange numbers. So that you'll know how to reach me if you need anything else.", "Happy")
     *     exchangeContact(John)
     * }).$endIf()
     * @return {LPBoolean}
     */
    isContactExchanged = (name) => this._isHelper('isContactExchanged', [], name)

    /**
     * Check if the actor is a creature and not human
     * $if(!Actor.isCreature(), ()=>{
     *     Actor.dress()
     * }).$endIf()
     * @return {LPBoolean}
     */
    isCreature = (name) => this._isHelper('isCreature', [], name)

    /**
     * Check if the actor is a creature of type Dog or Horse
     * @param {string} type Dog or Horse
     * @return {LPBoolean}
     */
    isCreatureType = (type, name) => this._isHelper('isCreatureType', [type], name)

    /**
     * Check if the actor is a friend of your significant other
     * @return {LPBoolean}
     */
    isDatingFriend = (name) => this._isHelper('isDatingFriend', [], name)

    /**
     * Returns true if actor has been deflowered by Player.
     * @return {LPBoolean}
     */
    isDeflowered = (name) => this._isHelper('isDeflowered', [], name)

    /**
     * Returns true if actor has been deflowered the Player.
     * @return {void|*}
     */
    isDeflowerer = (name) => this._isHelper('isDeflowerer', [], name)

    /**
     * Returns true if actor is an employee of the Player.
     * @return {void|*}
     */
    isEmployee = (name) => this._isHelper('isEmployee', [], name)

    /**
     * Check if the actor is actually your relative who became a lover.
     * @return {LPBoolean}
     */
    isExRelative = (name) => this._isHelper('isExRelative', [], name)

    /**
     * Check if the actor is your landlord.
     * @return {LPBoolean}
     */
    isLandlord = (name) => this._isHelper('isLandlord', [], name)

    /**
     * Returns true if the calling actor is married.
     * @return {LPBoolean}
     */
    isMarried = (name) => this._isHelper('isMarried', [], name)

    /**
     * Check if the actor is one of your neighbours.
     * @return {LPBoolean}
     */
    isNeighbour = (name) => this._isHelper('isNeighbour', [], name)

    /**
     * If this actor is in a specific NPC-NPC relationship with actor (Siblings, Dating, Spouses, ParentChild etc)
     * @param actor
     * @param relationshipType
     * @returns {LPBoolean}
     */
    isRelationshipWith = (actor, relationshipType, name) => {
        // fixme
        // if (!RELATIONSHIPS.includes(relationshipType.map(type=>type.toLowerCase()))) throw new Error(`${this.name}.isRelationshipWith(${actor.name}, ${relationshipType.join(', ')}) invalid relationship type!`)
        return this._isHelper('isRelationshipWith', [actor.name, relationshipType.join(', ')], name)
    }

    /**
     * returns true if the calling actor is a relative of the player's
     * @return {LPBoolean}
     */
    isRelative = (name) => this._isHelper('isRelative', [], name)

    /**
     * Check if this actor is this specific relative relationship with the player
     * @param type
     * @return {LPBoolean}
     */
    isRelativeType = (type, name) => this._isHelper('isRelativeType', [type], name)

    /**
     * Check if this actor is temporary and to be removed as soon as this scene finishes / the player moves from this location. Used with makePermanent()
     * @return {LPBoolean}
     */
    isTemporary = (name) => this._isHelper('isTemporary', [], name)

    /**
     * Returns true if the actor lives with the player, ie in the same apartment, not the same building (that'd be a neighbour).
     * @return {LPBoolean}
     */
    livesWithPlayer = (name) => this._isHelper('livesWithPlayer', [], name)

    /**
     * This turns a temporary actor (generatePersonTemporary) into a permanent actor that persists after the current scene ends. Does nothing if called on an already permanent actor.
     * @return {void|*}
     */
    makePermanent = () => this.context.writeLine(`${this.name}.makePermanent()`)

    /**
     * Used to pass an actor from one scene to the next scene, used with scene.followUp() and scene.getSpecific("PassedOn")
     * @return {LPNPC} "this" LPActor for chaining
     */
    passOn = () => {
        this.context.writeLine(`${this.name}.passOn()`)
        return this
    }

    /**
     * Randomize the actor's face and skin. Commonly called after blendpreset (which might change the gender which resets the actor to the default face and hair for that gender)
     * @return {void|*}
     */
    randomizeFace = () => this.context.writeLine(`${this.name}.randomizeFace()`)

    /**
     * Randomize the actor's hair and pubic hair. Commonly called after blendpreset (which might change the gender which resets the actor to the default face and hair for that gender)
     * @return {void|*}
     */
    randomizeHairs = () => this.context.writeLine(`${this.name}.randomizeHairs()`)

    /**
     * Randomize skin colour and nose / eyes racial features
     * @return {void|*}
     */
    randomizeRace = () => this.context.writeLine(`${this.name}.randomizeRace()`)

    /**
     * Randomize dick and tits for this character
     * @return {void|*}
     */
    randomizeSexy = () => this.context.writeLine(`${this.name}.randomizeSexy()`)

    /**
     * Remove this actor from the list of colleague. Will remain acquaintance at least though.
     * @return {void|*}
     */
    removeColleague = () => this.context.writeLine(`${this.name}.removeColleague()`)

    /**
     * Remove this actor from the list of your significant other's friends. Will remain acquaintance at least though.
     * @return {void|*}
     */
    removeDatingFriend = () => this.context.writeLine(`${this.name}.removeDatingFriend()`)

    /**
     * Fire this employee
     * @return {void|*}
     */
    removeEmployee = () => this.context.writeLine(`${this.name}.removeEmployee()`)

    /**
     * Remove this actor from the list of your neighbours. Will remain acquaintance at least though.
     * @return {void|*}
     */
    removeNeighbour = () => this.context.writeLine(`${this.name}.removeNeighbour()`)

    /**
     * Remove this actor from the list of your prostitute.
     * @return {void|*}
     */
    removeProstitute = () => this.context.writeLine(`${this.name}.removeProstitute()`)

    /**
     * Force remove this actor from current memory, but saves any (stat) changes made to them in this scene first. Used for party scenes to avoid bloating.
     * @return {void|*}
     */
    saveAndDelete = () => this.context.writeLine(`${this.name}.saveAndDelete()`)

    /**
     * For quests. Set an actor as quest actors so you can reference them whenever you want throughout the quest with scene.getActorAlias(aliasStr)
     * @param aliasStr
     * @return {LPString}
     */
    setActorAlias = (aliasStr) => {
        const expression = `${this.name}.setActorAlias(${aliasStr})`
        const alias = new LPString({context: this, lpMod: this.lpMod, name: aliasStr, expression})
        this.context.writeLine(expression)
        return alias
    }

    /**
     * Make this person your boss. Current boss is no longer boss and becomes acquaintance.
     * @return {void|*}
     */
    setBoss = () => this.context.writeLine(`${this.name}.setBoss()`)

    /**
     * Make this person the boss of your crime family.
     * @return {void|*}
     */
    setCrimeBoss = () => this.context.writeLine(`${this.name}.setCrimeBoss()`)

    /**
     * Make this person your significant other. Current SO is no longer dating you and becomes acquaintance. Also clears out all friends of previous SOs and affairs, who all become acquaintances.
     * @return {void|*}
     */
    setDating = () => this.context.writeLine(`${this.name}.setDating()`)

    /**
     * Something to do with Poly...
     * @return {void|*}
     */
    setDatingID = () => this.context.writeLine(`${this.name}.setDatingID()`)

    /**
     * Set the Major for the NPC to be a random subject but not the same as the player, both for teaching and studying.
     * @return {void|*}
     */
    setDifferentMajor = () => this.context.writeLine(`${this.name}.setDifferentMajor()`)

    /**
     * Make this person your landlord. Current landlord is no longer landlord and becomes acquaintance.
     * @return {void|*}
     */
    setLandlord = () => this.context.writeLine(`${this.name}.setLandlord()`)

    /**
     * flags or unflags an actor as living with the player
     * @param {boolean} isLivingWith
     * @return {void|*}
     */
    setLivingWithPlayer = (isLivingWith) => this.context.writeLine(`${this.name}.setLivingWithPlayer(${isLivingWith})`)

    /**
     * Make this person your personal trainer. Current personal trainer is no longer PT and becomes acquaintance.
     * @return {void|*}
     */
    setPT = () => this.context.writeLine(`${this.name}.setPT()`)

    /**
     * Set which type of relative this person is (must already be a relative actor, not a normal NPC). Used for giving birth.
     * @example
     * Actor2 = Actor.generateRelativeMatchRace()
     * Actor2.setRelativeType("Child")
     *
     * @param relativeType
     * @return {void|*}
     */
    setRelativeType = (relativeType) => this.context.writeLine(`${this.name}.setRelativeType(${relativeType})`)

    /**
     * Set the Major for the NPC to be the same as the player, both for teaching and studying.
     * @return {void|*}
     */
    setSameMajor = () => this.context.writeLine(`${this.name}.setSameMajor()`)

    /**
     * Pick a random subject for a lecturer to teach that matches their major.
     * @return {void|*}
     */
    setSubject = () => this.context.writeLine(`${this.name}.setSubject()`)

    /**
     * Set until what time this person will stay at their current location before AI searches for a new location for them again. The float variable isn't the time of the day,
     * but total hours elapsed since the start of the current game, i.e. HoursElapsed + HoursToStay HoursElapsed being a special variable and HoursToStay is up to you
     * @param {LPFloat} floatTime
     */
    setUntil = (floatTime) => this.context.writeLine(`${this.name}.setUntil(${floatTime.name})`)
}