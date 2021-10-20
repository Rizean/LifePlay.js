// noinspection JSUnusedGlobalSymbols
const {STATS} = require('../constants')
const {isMoodValid} = require('../tools')

const LPObject = require('./LPObject')
const LPFloat = require('./LPFloat')
const LPBoolean = require('./LPBoolean')
const LPBuilding = require('./LPBuilding')
const LPString = require('./LPString')
const LPStats = require('./LPStats')
const {CLOTHING_SLOTS, ANIMATIONS} = require('../constants')
let LPNPC = undefined

class LPActor extends LPObject {
    constructor({context, name, expression}) {
        super({context, name, expression})

        // delayed require as LPNPC depends on LPActor
        LPNPC = require("./LPNPC")

        const stats = new LPStats({context: this.context, name: this.name})
        const thisRef = this
        const statsHandler = {
            get: function(target, prop, receiver) {
                return stats[prop] || Reflect.get(...arguments)

                // console.log('get', {target, prop, receiver})
                // if (stats[prop]) return stats[prop]
                // return Reflect.get(...arguments)
            },
            // set: function(target, prop, receiver) {
            //     console.log('set', {target, prop, receiver})
            //     if (stats[prop]) {
            //         stats[prop] = arguments[0]
            //     } else {
            //         Reflect.set(...arguments)
            //     }
            // },
        }
        const handler1 = {
            apply: function(target, prop, receiver) {
                console.log('apply', {target, prop, receiver})
                return Reflect.apply(...arguments)
            },
            construct: function(target, prop, receiver) {
                console.log('construct', {target, prop, receiver})
                return Reflect.construct(...arguments)
            },
            // defineProperty: function(target, prop, receiver) {
            //     console.log('defineProperty', {/*target,*/ prop, receiver})
            //     return Reflect.defineProperty(...arguments)
            // },
            deleteProperty: function(target, prop, receiver) {
                console.log('deleteProperty', {target, prop, receiver})
                return Reflect.deleteProperty(...arguments)
            },
            get: function(target, prop, receiver) {
                console.log('get', {target, prop, /* receiver */})
                if (receiver._stats[prop]) return receiver._stats[prop]
                return Reflect.get(...arguments)
            },
            getOwnPropertyDescriptor: function(target, prop, receiver) {
                console.log('getOwnPropertyDescriptor', {/*target,*/ prop, receiver})
                return Reflect.getOwnPropertyDescriptor(...arguments)
            },
            getPrototypeOf: function(target, prop, receiver) {
                console.log('getPrototypeOf', {/*target,*/ prop, receiver})
                console.log('getPrototypeOf typeof prop', typeof prop)
                return Reflect.getPrototypeOf(...arguments)
            },
            has: function(target, prop, receiver) {
                console.log('has', {target, prop, receiver})
                return Reflect.has(...arguments)
            },
            isExtensible: function(target, prop, receiver) {
                console.log('isExtensible', {target, prop, receiver})
                return Reflect.isExtensible(...arguments)
            },
            ownKeys: function(target, prop, receiver) {
                console.log('ownKeys', {target, prop, receiver})
                return Reflect.ownKeys(...arguments)
            },
            preventExtensions: function(target, prop, receiver) {
                console.log('preventExtensions', {target, prop, receiver})
                return Reflect.preventExtensions(...arguments)
            },
            set: function(target, prop, receiver) {
                console.log('set', {/*target,*/ prop, receiver})
                return Reflect.set(...arguments)
            },
            setPrototypeOf: function(target, prop, receiver) {
                console.log('setPrototypeOf', {target, prop, receiver})
                return Reflect.setPrototypeOf(...arguments)
            },
        }
        // return new Proxy(this, statsHandler)
        // return new Proxy(this, handler1)

        this._stats = {}
        STATS.forEach(stat => {
            this._stats[stat] = new LPFloat({context: this.context, name: `${this.name}:${stat}`, isStat: true})
            Object.defineProperty(this, stat,{
                // get: () => this._stats[stat],
                get: () => stats[stat],
                // set: (n) => this._stats[stat].assign(n)
                set: (n) => stats[stat].assign(n)
            })
        })
    }

    _isHelper(func, params = [], nameStr) {
        const name = nameStr?.name || nameStr
        params = params.map(param => param.name || param)
        const expression = `${this.name}.${func}(${params.join(', ')})`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return this.context.boolean(expression, name)
    }

    /**
     * Actors Name
     * @type {string}
     */
    get name() {
        return super.name;
    }
    set name(value) {
        super._name = value
    }

    /**
     * Make the actor do something. If no parameter is given current animation will be stopped and actor will go idle.
     * @param animation - undefined or one of: martialart, drinkglass, dance, smoke, pray, sofawatch, browse, call, socialize, work, sweep, bathe, drinkbottle, lecture, theatrewatch,
     * write, groupdance, call, sneak, camera, makeup, eat, toilet, bathe, masturbate, drinktea, smoke, strip, managefinances, receivelapdance, dental, beauty,
     * health, haircut, weights, yoga, na_sleep, na_running
     */
    animate = (animation) => {
        if (animation && !ANIMATIONS.includes(animation.toLowerCase())) throw new Error(`Invalid animation! ${animation}`)
        this.context.writeLine(`${this.name}.animate(${animation || ''})`)
    }

    /**
     * Make the actor use a furniture animation / pose with a specific object. Use the room editor to get x y z of the furniture. Filter is usually sit, use, lie or work
     * @param x
     * @param y
     * @param z
     * @param filter
     */
    animateFnt = (x, y, z, filter) => {
        this.context.writeLine(`${this.name}.animate(${x}, ${y}, ${z}, ${filter})`)
    }

    /**
     * Animates a pair of actors
     * @param {LPActor} secondActor
     * @param {string} animation - can be one of Kissing, Vaginal, ...?
     * @return {void|*}
     */
    animatePair = (secondActor, animation) => {
        this.context.writeLine(`animatePair(${this.name}, ${secondActor.name}, ${animation})`)
    }

    /**
     * Blends an actors appearance from two actors.
     * @example
     * SceneStart()
     * "I wonder what a future child of me and my date would look like ..."
     * Actor = Player.generateRelativeMatchRace()
     * Actor.blendAppearanceFrom(Player, CurrentCompanion)
     * Actor.show()
     * "Probably like this ..."
     * SceneEnd()
     * @param {LPActor} firstActor
     * @param {LPActor} secondActor
     * @return {LPActor} this actor for chaining
     */
    blendAppearanceFrom = (firstActor, secondActor) => {
        this.context.writeLine(`${this.name}.blendAppearanceFrom(${firstActor.name}, ${secondActor.name})`)
        return this
    }

    /**
     * Blend this actor with a preset, usually called after generatePerson().
     * Presets are contained in a module's folder for the purpose, and can contain either body morphing or stat-related intel.
     * PresetID is the filename without the extension.
     * @example
     * // We want a male bodybuilder
     * Bodybuilder = generatePerson()  // just so that we get the random stats etc, but this might generate a female
     *
     * Bodybuilder.blendPreset(bodybuilder)  // if the above is female, then this will reset face and hair to the default male face and hair, so it's best to follow up with
     *
     * Actor.randomizeFace()
     * Actor.randomizeHairs()
     * @param {string} presetID
     * @return {LPActor} this actor for chaining
     */
    blendPreset = (presetID) => {
        this.context.writeLine(`${this.name}.blendPreset(${presetID})`)
        return this
    }

    /**
     * Change to the opposite sex, used for TF start
     */
    changeSex = () => this.context.writeLine(`${this.name}.changeSex()`)

    /**
     * Make an actor identical to another actor (stats, appearance, names, sexual preferences, etc). Used in incest_relationship.lpscene to switch between relative and normal NPC statuses.
     * @example
     * actor2 = generatePerson()
     * actor2.cloneFrom(Actor)  // Actor2 is now a duplicate of Actor
     * actor2.deletePerson() // Bye bye, your clone has replaced you
     * actor2.dress()
     * actor2.show(2)
     * @param {LPActor} actor
     * @return {void|*}
     */
    cloneFrom = (actor) => {
        this.context.writeLine(`${this.name}.cloneFrom(${actor.name})`)
    }

    /**
     * force actor to close or open their eyes
     * @example
     * Masseuse.dialog("Just lie down and relax.")
     * Player.CloseEyes(true)
     * Mom.dialog("Hey, wake up, sleepy head! You're about to be late for work!", "Angry")
     * Player.CloseEyes(false)
     * @param {boolean} isClosed
     * @return {void|*}
     */
    closeEyes = (isClosed) => this.context.writeLine(`${this.name}.closeEyes(${isClosed})`)

    /**
     * Check if any equipped apparel has an ID that contains the keyword
     * @example
     * if (Actor.clothesContain('Jeans')) {
     *     scene.narrative("<Actor.name> is wearing some sorts of jeans")
     * }
     * @param keyword
     * @param name
     */
    clothesContain = (keyword, name) => this._isHelper('clothesContain', [keyword], name)

    /**
     * Returns the number of days a player has been pregnant.
     * @return {LPFloat}
     */
    countPregnancyDays = (name = 'lpjs_pregnancyDays') => {
        this.context.writeLine(`${name} = ${this.name}.countPregnancyDays()`)
        return new LPFloat({context: this.context, name})
    }

    /**
     * Text the actor will say.
     * @param {string} text
     * @param {string=} mood
     */
    dialogue(text, mood) {
        if (mood && !isMoodValid(mood)) throw new Error(`Invalid mood! ${mood}`)
        if (!!mood) this.context.writeLine(`${this.name}(${mood}):: "${text}"`)
        else this.context.writeLine(`${this.name}:: "${text}"`)
    }

    /**
     * If there's nothing in the bracket, it will dress the actor fully appropriate to the current building. If a clothing piece is specified, will put that on only. Check LifePlay\Content\Heavy\Clothes for the names of the items
     * @example
     * scene.setBackground("work")
     * Player.dress()  // will put on a full suit with oxford shoes etc and underwear underneath
     * // or
     * Player.dress("Casual-Clothes_1_F") // will put on casual clothes only, no shoe or underwear
     * @param {string|LPString} clothes
     */
    dress = (clothes = '') => this.context.writeLine(`${this.name}.dress(${clothes.expression || clothes})`)

    /**
     * Put a bdsm piece on an actor. List is in LifePlay\Content\Heavy\New2\BDSM\Clothes (the ones with the prefix Bdg_ )
     * @example
     * Actor.dressBondage("Bdg_Blindfold")
     * @param bondageGearID
     */
    dressBondage = (bondageGearID) => this.context.writeLine(`${this.name}.dressBondage(${bondageGearID})`)

    /**
     * Dress this person but leave the specified slots unmodified. Used for lingerie modelling.
     * @example
     * scene.narration("Looks like they haven't got far at all and are still choosing lingerie ...")
     * Actor.dressExcept(["Outerwear", "Top", "Bottom", "Foot", "Headwear", "Eyewear"])
     * Actor2.dialog("How about this?")
     * @param {[string]} slots - 'Outerwear', 'Headwear', 'Eyewear', 'Top', 'Top_Under', 'Bottom', 'Bottom_Under', 'Foot', 'Foot_Under'
     */
    dressExcept = (slots) => {
        slots.forEach(slot => {
            if (!CLOTHING_SLOTS.includes(slot.toLowerCase())) throw new Error(`Invalid clothing slot! ${slot}`)
        })
        this.context.writeLine(`${this.name}.dressExcept(${slots.join(', ')})`)
    }

    /**
     * Dress the person in prison guard outfit (3d assets not made yet, so this actually just calls normal Dress instead).
     */
    dressGuard = () => this.context.writeLine(`${this.name}.dressGuard()`)

    /**
     * Dress the person in prison outfit (3d assets not made yet, so this actually just calls normal Dress instead).
     */
    dressPrisoner = () => this.context.writeLine(`${this.name}.dressPrisoner()`)

    /**
     * Put on appropriate uniform for this person's profession or specific clothing
     * @example
     * Actor.SetJob(Doctor)
     * Actor.dressUniform()
     * // or
     * Actor.dressUniform("Prison")
     * @param {string|LPString} clothing - empty or one of Doctor, Nurse, sexwork, Police, Prison, Crime, Wedding, Fast_food, Place_of_worship
     */
    dressUniform = (clothing = '') => this.context.writeLine(`${this.name}.dressUniform(${clothing.expression || clothing})`)

    /**
     * This command puts the actor in a wedding dress or suit.
     * @example
     * scene.narration("It took quite a bit of doing, getting into that corset, but I finally was good to go, and ready to step down the aisle.")
     * scene.setBackground(place_of_worship)
     * Player.dressWedding()
     */
    dressWedding = () => this.context.writeLine(`${this.name}.dressWedding()`)

    /**
     * Ends the pregnancy of the actor or player.
     * @example
     * scene.narration("Sometimes in life difficult choices must be made ...")
     * Player.strip()
     * Player.endPregnancy()
     * scene.narration("Thankfully the procedure went according to plans, with no lasting impact on my future health and fertility.")
     * @return {void|*}
     */
    endPregnancy = () => this.context.writeLine(`${this.name}.endPregnancy()`)

    /**
     * Displays a text box so that the player can type in this actor's first name. Used for naming children and pets.
     */
    enterFirstName = () => this.context.writeLine(`${this.name}.enterFirstName()`)

    /**
     * Generate a new actor that matches the racial preset of another person (for example, to generate a relative of an NPC). The actor generated using this method will be permanent right away, meaning they will remain after the current scene ends and are usable for some functions that only work with permanent actors.
     * @return {LPNPC}
     * @example
     * var Actor = Actor2.generatePersonMatchRace()  // If Actor2 is east asian, Actor will also be east asian
     * Actor.dress()
     * Actor.show(2)
     * Player.exchangeContact(Actor) // this will succeed because this is a permanent actor
     */
    generatePersonMatchRace = (name) => {
        this.context.writeLine(`${name} = ${this.name}.generatePersonMatchRace()`)
        return new LPNPC({context: this.context, name})
    }

    /**
     * Generate a new actor that matches the racial preset of another person (for example, to generate a relative of an NPC). The actor generated using this method will be permanent right away, meaning they will remain after the current scene ends and are usable for some functions that only work with permanent actors.
     * @return LPNPC
     * @example
     * var Actor = Actor2.generatePersonMatchRace()  // If Actor2 is east asian, Actor will also be east asian
     * Actor.dress()
     * Actor.show(2)
     * Player.exchangeContact(Actor) // this will fail because Actor isn't a permanent actor
     */
    generatePersonTemporaryMatchRace = (name) => {
        this.context.writeLine(`${name} = ${this.name}.generatePersonTemporaryMatchRace()`)
        return new LPNPC({context: this.context, name})
    }

    /**
     * Generate a new relative actor that matches the racial preset of another person (for example, to generate my relative). The actor generated using this method will be permanent right away, meaning they will remain after the current scene ends and are usable for some functions that only work with permanent actors.
     * @example
     * let Actor = $let('Actor', Player.generateRelativeMatchRace())  // This way if you're black, your brother wouldn't turn up white.
     * Actor.dress()
     * Actor.show(2)
     * @return {LPNPC}
     */
    generateRelativeMatchRace = (name) => {
        this.context.writeLine(`${name} = ${this.name}.generateRelativeMatchRace()`)
        return new LPNPC({context: this.context, name})
    }

    /**
     * Use this function to get the float value of a variable from a certain actor.
     * The actor can be the Player or any other actor.
     *
     * This function also allows testing it a certain TAG is assigned to an actors.
     *
     * If a tag / value was not assigned the function will return 0.
     * @example
     * Player.setActorVar("tag_Player", 1) // Set the Tag 'Player' to the Player's character
     * Player.setActorVar("tag_Player", -1) // Remove the Tag 'Player' from the Player's character
     *
     * Player.setActorVar("SomeVariable", 42)     // Set the variable to 42
     * var val = Player.getActorVar("SomeVariable")
     * scene.narration("The value of SomeVariable is <val>.")
     *
     * @param varOrTag
     * @return {void|*}
     */
    getActorVar = (varOrTag, name) => {
        this.context.writeLine(`${name} = ${this.name}.getActorVar(${varOrTag})`)
        return new LPString({context: this.context, name})
    }

    /**
     * Returns the Actor who got the this Actor pregnant.
     * @example
     * var BioDaddy = Actor.getBabyDaddy()
     * @return {LPNPC}
     */
    getBabyDaddy = (name) => {
        this.context.writeLine(`${name} = ${this.name}.getBabyDaddy()`)
        return new LPNPC({context: this.context, name})
    }

    /**
     * Get a building related to this NPC AI-wise. Parameters are Home, Work and Current.
     * @param {string} type current, home, work
     * @param {string=} name optional variable name
     * @return {LPBuilding}
     */
    getBuilding = (type, name) => {
        // name = name || `lpjs_${this.name}_getBuilding_${type}`
        // this.context.writeLine(`${this.name}.getBuilding(${type})`)
        if (name) this.context.writeLine(`${name} = ${this.name}.getBuilding(${type})`)
        return new LPBuilding({context: this.context, name, expression: `${this.name}.getBuilding(${type})`})
    }

    /**
     * Get the ID number of this actor, which can then be saved as a global variable and then called on using getSpecific.
     * @example
     * var ID = Actor.getID()
     * var SugarDaddy = $global('SugarDaddy')
     * SugarDaddy.setGlobal(ID)
     *
     * // another scene
     * var SugarDaddy = $global('SugarDaddy')
     * var ID = SugarDaddy.getGlobal()
     *
     * var Actor
     * $if('ID != 0', ()=>{
     *     Actor = scene.getSpecific(ID)
     * })
     *
     * @return {LPFloat}
     */
    getID = (name) => {
        this.context.writeLine(`${name} = ${this.name}.getID()`)
        return new LPFloat({context: this.context, name})
    }

    /**
     * Returns morph value as a float. Morph list can be found in any lpcharacter file
     * @param morphName
     * @return {LPFloat}
     */
    getMorphValue = (morphName, name) => {
        this.context.writeLine(`${name} = ${this.name}.getMorphValue(${morphName})`)
        return new LPFloat({context: this.context, name})
    }

    /**
     * Returns the tag of the Animation that was active when the Actor got pregnant?
     * @example
     * var Rape = Actor.getPregnancyTag()
     * $if(Rape.isString("Aggressive"), ()=>{
     *     scene.narration('<Actor.name> is pregnant from being raped!')
     * })
     * $if(Rape.isString("AggressiveFM") || , ()=>{
     *     scene.narration('<Actor.name> is pregnant from a rape she committed!')
     * })
     *
     * @return {LPString} - Aggressive/AggressiveFM/?
     */
    getPregnancyTag = (name) => {
        this.context.writeLine(`${name} = ${this.name}.getPregnancyTag()`)
        return new LPString({context: this.context, name})
    }

    /**
     * Returns the Actors race.
     * @example
     * var Race = Actor.getRace()
     * scene.narration("I've always had a major thing for a <Actor.handsome_or_beautiful> <Race> like <Actor.name> and couldn't help but fantasize about taking <Actor.him_or_her> to bed. Should I be direct and confess my little <Race> fetish to <Actor.name> now?")
     * @return {string}
     */
    getRace = (name) => {
        this.context.writeLine(`${name} = ${this.name}.getRace()`)
        return new LPString({context: this.context, name})
    }

    /**
     * Get a single NPC with a relationship of the specified type or another with the specified NPC. The list for 'Type' is:
     * @param {[string]} relationshipTypes - Dating, Spouses, Siblings, ParentChild, Cousins, BossEmployee, Colleagues
     * @return {LPNPC|undefined}
     */
    getRelatedPerson = (relationshipTypes = [], name) => {
        this.context.writeLine(`${name} = ${this.name}.getRelatedPerson(${relationshipTypes.join(', ')})`)
        return new LPNPC({context: this.context, name})
    }

    /**
     * Same as getRelatedPerson() but only load the necessary data for the actor needed for AI stuffs. Only meant for lpai files, actors gotten this way aren't meant to be shown to the player on screen.
     * @param {[string]} relationshipTypes - Dating, Spouses, Siblings, ParentChild, Cousins, BossEmployee, Colleagues
     * @return {LPNPC|undefined}
     */
    getRelatedPersonQuick = (relationshipTypes = [], name = `lpjs_${this.name}_getRelatedPersonQuick`) => {
        this.context.writeLine(`${name} = ${this.name}.getRelatedPersonQuick(${relationshipTypes.join(', ')})`)
        return new LPNPC({context: this.context, name})
    }

    /**
     * Check if this actor has had sex with the player at any point in this play through
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @return {boolean}
     */
    hadSex = (name) => this._isHelper('hadSex', [], name)

    /**
     * returns true if two actors have identical sexual orientations
     * @param {LPActor} actor
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    hasSameInterestAs = (actor, name) => {
        const expression = `${this.name}.hasSameInterestAs(${actor.name})`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPBoolean({context: this.context, name, expression})
    }

    /**
     * Hide the actor or player from the player's view. Opposite to show().
     * @return {void|*}
     */
    hide = () => this.context.writeLine(`${this.name}.hide()`)

    /**
     * Force impregnate someone. Works even without sex!
     * @example
     * Player.impregnate() // Oh no, I'm Virgin Mary now.
     * @param {LPActor=} target - optional - if target is provided then this Actor will impregnate target actor
     * @return {void|*}
     */
    impregnate = (target) => this.context.writeLine(`${this.name}.impregnate(${target ? target.name : ''})`)

    /**
     * returns true if the actor doesn't have any of the gender preferences "interested in male", "interested in female", or "interested in trans".
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @return {LPBoolean}
     */
    isAsexual = (name) => this._isHelper('isAsexual', [], name)

    /**
     * Used by AI. May not work on player.
     * @example
     * Actor.isAt("work")
     * @param {string|LPString} location
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @return {LPBoolean}
     */
    isAt = (location, name) => this._isHelper('isAt', [location], name)

    /**
     * If interested in both same gender and opposite gender
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isBisexual = (name) => this._isHelper('isBisexual', [], name)
    // isBisexual = (name) => {
    //     const expression = `${this.name}.isBisexual()`
    //     if (name) this.context.writeLine(`${name} = ${expression}`)
    //     return this.context._boolean(expression, name)
    // }

    /**
     * Same as isBisexual but stricter, returns false no matter own gender if interested in Trans
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isBisexualNonTrans = (name) => this._isHelper('isBisexualNonTrans', [], name)
    // isBisexualNonTrans = (name) => {
    //     const expression = `${this.name}.isBisexualNonTrans()`
    //     if (name) this.context.writeLine(`${name} = ${expression}`)
    //     return this.context._boolean(expression, name)
    // }

    /**
     * Check if the actor is in a relationship with the player. Can also be used to check if the Player is dating anyone i.e. Player.isDating()
     * Alternatively, if the Actor is Player then it checks whether the player is currently in a relationship at all.
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @return {LPBoolean}
     */
    isDating = (name) => this._isHelper('isDating', [], name)
    // isDating = (name) => {
    //     const expression = `${this.name}.isDating()`
    //     if (name) this.context.writeLine(`${name} = ${expression}`)
    //     return this.context._boolean(expression, name)
    // }

    /**
     * Check if the one actor would take a dominant role in a sexual relationship with another actor. This doesn't take into account sexual orientation. The rule is male is dominant to female, female with penis dominant to female with vagina. When it's male-male or female-female, it compares the masochist / submissive stat, the actor with lower masochist is dominant. Useful for mostly gender-related roles (opening doors, who walks who home etc)
     * @param {LPActor} actor
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isDominantSex = (actor, name) => this._isHelper('isDominantSex', [actor], name)
    // isDominantSex = (actor, name) => {
    //     const expression = `${this.name}.isDominantSex(${actor.name})`
    //     if (name) this.context.writeLine(`${name} = ${expression}`)
    //     return this.context._boolean(expression, name)
    // }

    /**
     * Check if an actor is wearing any clothes in a certain 'slot'. Will return true even if it's an underwear hidden under other clothes. The slots are:
     * @param {string} slot
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isEquipped = (slot, name) => this._isHelper('isEquipped', [slot], name)
    // isEquipped = (slot, name) => {
    //     if (!CLOTHING_SLOTS.includes(slot.toLowerCase())) throw new Error(`${this.name}.isEquipped(${slot}) Invalid clothing slot!`)
    //     const expression = `${this.name}.isEquipped(${slot})`
    //     if (name) this.context.writeLine(`${name} = ${expression}`)
    //     return this.context._boolean(expression, name)
    // }

    /**
     * Check if an actor is a woman. False if trans.
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isFemale = (name) => this._isHelper('isFemale', [], name)
    // isFemale = (name) => {
    //     const expression = `${this.name}.isFemale()`
    //     if (name) this.context.writeLine(`${name} = ${expression}`)
    //     return this.context._boolean(expression, name)
    // }

    /**
     * Check if an actor is only interested in the same sex, i.e. false if bi
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isGay = (name) => this._isHelper('isGay', [], name)
    // isGay = (name) => {
    //     const expression = `${this.name}.isGay()`
    //     if (name) this.context.writeLine(`${name} = ${expression}`)
    //     return this.context._boolean(expression, name)
    // }

    /**
     * Same as isGay but stricter, returns false no matter own gender if interested in Trans
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isGayNonTrans = (name) => this._isHelper('isGayNonTrans', [], name)
    // isGayNonTrans = (name) => {
    //     const expression = `${this.name}.isGayNonTrans()`
    //     if (name) this.context.writeLine(`${name} = ${expression}`)
    //     return this.context._boolean(expression, name)
    // }

    /**
     * Check if the one actor is interested sexually in another actor's gender. Does not take into account attractiontoplayer stat, just look at Actor1's sexual orientation and Actor2's gender.
     * @param {LPActor} actor
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isInterestedIn = (actor, name) => this._isHelper('isInterestedIn', [actor], name)
    // isInterestedIn = (actor, name) => {
    //     const expression = `${this.name}.isInterestedIn(${actor.name})`
    //     if (name) this.context.writeLine(`${name} = ${expression}`)
    //     return this.context._boolean(expression, name)
    // }

    /**
     * Check if an actor is interested in men
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isInterestedInMen = (name) => this._isHelper('isInterestedInMen', [], name)
    // isInterestedInMen = (name) => {
    //     const expression = `${this.name}.isInterestedInMen()`
    //     if (name) this.context.writeLine(`${name} = ${expression}`)
    //     return this.context._boolean(expression, name)
    // }

    /**
     * Check if an actor is interested in trans women
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isInterestedInTrans = (name) => this._isHelper('isInterestedInTrans', [], name)
    /**
     * Check if an actor is interested in women
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isInterestedInWomen = (name) => this._isHelper('isInterestedInWomen', [], name)

    /**
     * Check if actor is a doctor or a nurse
     * @param {string|LPString} job - doctor or nurse
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isJob = (job, name) => this._isHelper('isJob', [job], name)

    /**
     * Check if an actor is a man. ??True if trans??
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isMale = (name) => this._isHelper('isMale', [], name)

    /**
     * Check if the actor is completely without any clothes
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isNaked = (name) => this._isHelper('isNaked', [], name)

    /**
     * Check if the actor is nude? How is this different from isNaked?
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isNude = (name) => this._isHelper('isNude', [], name)

    /**
     * Returns true if actor is on period.
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isOnPeriod = (name) => this._isHelper('isOnPeriod', [], name)

    /**
     * Check if the actor is the player.
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isPlayer = (name) => this._isHelper('isPlayer', [], name)

    /**
     * Check if the actor is pregnant.
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isPregnant = (name) => this._isHelper('isPregnant', [], name)

    /**
     * Returns true if the actor is a sex worker.
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isProstitute = (name) => this._isHelper('isProstitute', [], name)

    /**
     * Returns true is Actor is race
     * @param {string|LPString} race - Human, Elf, Orc, Vampire
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isRace = (race, name) => this._isHelper('isRace', [race], name)

    /**
     * Check if the two actors are the same person
     * @param {LPActor} actor
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isSameAs = (actor, name) => this._isHelper('isSameAs', [actor], name)

    /**
     * Check if the two actors are the same gender
     * @param {LPActor} actor
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isSameGender = (actor, name) => this._isHelper('isSameGender', [actor], name)

    /**
     * Check if the two actors are the same race
     * @param {LPActor} actor
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isSameRace = (actor, name) => this._isHelper('isSameRace', [actor], name)

    /**
     * Checks if a clothing slot is occupied.
     * @param {string} slot
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isSlotOccupied = (slot, name) => this._isHelper('isSlotOccupied', [slot], name)

    /**
     * Check if an actor is only interested in the opposite sex, i.e. false if bi
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isStraight = (name) => this._isHelper('isStraight', [], name)

    /**
     * Same as isStraight but stricter, returns false no matter own gender if interested in Trans
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isStraightNonTrans = (name) => this._isHelper('isStraightNonTrans', [], name)

    /**
     * Check if the actor is transsexual.
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isTrans = (name) => this._isHelper('isTrans', [], name)

    /**
     * Check if an actor variable is valid. Most commonly used after GetPerson(), GetCompanion() or GetSpecific()
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isValid = (name) => this._isHelper('isValid', [], name)

    /**
     * Check if the actor is a virgin.
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isVirgin = (name) => this._isHelper('isVirgin', [], name)

    /**
     * Check if an actor is wearing any clothes in a certain 'slot'. Will return false if it's an underwear hidden under other clothes. The slots are:
     * @param {string} slot - Outerwear, Headwear, Eyewear, Top, Top_Under, Bottom, Bottom_Under, Foot, Foot_Under
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    isVisible = (slot, name) => this._isHelper('isVisible', [slot], name)

    /**
     * Load the preset(s) onto this character, resetting them to default first before doing so.
     * @example
     * Actor.loadPreset(["bodybuilder_F"])
     * $random(()=>{
     *     Actor.loadPreset(["hourglass_F"]) // Just a normal hourglass girl
     *     Actor.blendPreset(["hourglass_F"]) // There is still signs of the beefcake
     * })
     * @param {[string]} presets
     * @return {LPActor} "this" LPActor for chaining
     */
    loadPreset = (presets) => {
        this.context.writeLine(`${this.name}.loadPreset(${presets.join(', ')})`)
        return this
    }

    /**
     * Changes this Actor's sexual orientation so that they become interested in Actor.
     * @param {LPActor} actor
     */
    makeInterested = (actor) => this.context.writeLine(`${this.name}.makeInterested(${actor.name})`)

    /**
     * Change this Actor's last name to match that of actor
     * @param {LPActor} actor
     */
    matchLastName = (actor) => this.context.writeLine(`${this.name}.matchLastName(${actor.name})`)

    /**
     * Use this function to modify the float value of a variable by a given value.
     * The actor can be the Player or any other actor.
     * @param {string} key
     * @param {number|LPFloat} value
     * @return {void|*}
     */
    modifyActorVar = (key, value) => this.context.writeLine(`${this.name}.modifyActorVar(${key}, ${value?.name || value})`)

    /**
     * Multiply the actors salary by value ie salary of 100 * value of 1.1 would become 110.
     * @param {number|LPFloat} value
     * @return {void|*}
     */
    modifySalary = (value) => this.context.writeLine(`${this.name}.modifySalary(${value})`)

    /**
     * Moves this actor towards actor and head tracks actor.
     * @param {LPActor} actor
     * @return {void|*}
     */
    moveToPerson = (actor) => this.context.writeLine(`${this.name}.moveToPerson(${actor.name})`)

    /**
     * Make this actor move toward another actors position.
     * @param {LPActor} actor
     * @param {number|LPFloat} distance - Distance to stay away from 'target'. 0 = Move to exact the same spot as 'target'.
     * @return {void|*}
     */
    moveToPersonStand = (actor, distance = 100) => this.context.writeLine(`${this.name}.moveToPersonStand(${actor.name}, ${distance?.name || distance})`)


    /**
     * Use this function to set a float variable to a certain actor.
     * The actor can be the Player or any other actor.
     *
     * This function also allows setting TAGs to actors.
     *
     * @example
     * Player.setActorVar("tag_Player", 1) // Set the Tag 'Player' to the Player's character
     * Player.setActorVar("tag_Player", -1) // Remove the Tag 'Player' from the Player's character
     *
     * Player.setActorVar("SomeVariable", 42)     // Set the variable to 42
     * var val = Player.getActorVar("SomeVariable")
     * scene.narration("The value of SomeVariable is <val>.")
     * @param name
     * @param value
     * @return {void|*}
     */
    setActorVar = (name, value) => this.context.writeLine(`${this.name}.setActorVar(${name}, ${value})`)

    /**
     * Change an actor's current location. Used with findNearbyBuilding or getBuilding(Home) or getBuilding(Work), mostly in lpai files.
     * @param {LPBuilding} buildingVariable
     * @return {void|*}
     */
    setCurrentLocation = (buildingVariable) => this.context.writeLine(`${this.name}.setCurrentLocation(${buildingVariable.name})`)

    /**
     * Used for polyamorous for setting up which lover to break up with before you use loseDating()
     */
    setDatingId = () => this.context.writeLine(`${this.name}.setDatingId()`)

    /**
     * Make this Actor remember that they used to be related to the actor.
     * @param {LPActor} actor
     * @return {void|*}
     */
    setExRelative = (actor) => this.context.writeLine(`${this.name}.setExRelative(${actor.name})`)

    /**
     * Set the job for this NPC. Only Doctor and Nurse are available now
     * @param job
     * @return {void|*}
     */
    setJob = (job) => this.context.writeLine(`${this.name}.setJob(${job})`)

    /**
     * Morph list can be found in any lpcharacter file.
     * @param morphName
     * @param value
     * @return {void|*}
     */
    setMorphValue = (morphName, value) => this.context.writeLine(`${this.name}.setMorphValue(${morphName}, ${value})`)

    /**
     * Prevents an Actor from redressing. May not work on player.
     * @return {void|*}
     */
    setNoRedress = () => this.context.writeLine(`${this.name}.setNoRedress()`)

    /**
     * If wantsBaby is true then the actor wants a baby
     * @param wantsBaby
     * @return {void|*}
     */
    setWantsBabies = (wantsBaby = false) => this.context.writeLine(`${this.name}.setWantsBabies(${wantsBaby})`)

    /**
     * Start a sex scene involving these actors. If the player is involved, it will also check whether the player is cheating or not and add to the affair list accordingly.
     * The order in which roles are given to actors for the sex scene (important for descriptions and dirtytalk) depends largely on gender and domincance. Males are given roles before transsexuals, then women. Between people of the same gender, the most dominant one (lowest submission stat) is given a role first.
     * However, the order of the actor parameters to the Sex() function matters somewhat in group sex: Sex(Male1, Player, Male2) will be different from Sex(Male2, Player, Male1).
     * @param {[LPActor]} actors
     * @return {void|*}
     */
    sex = (actors) => this.context.writeLine(`sex(${this.name}, ${actors.map(actor => actor.name).join(', ')})`)

    /**
     * Show this actor on screen. The player's default position is 0. 1 - 6 is counted from right to left of the screen.
     * @param positionIndex
     * @return {void|*}
     */
    show = (positionIndex = 0) => this.context.writeLine(`${this.name}.show(${positionIndex})`)

    /**
     * Strip this actor of all clothes
     * @return {void|*}
     */
    strip = () => this.context.writeLine(`${this.name}.strip()`)

    /**
     * Strip this actor of a single currently equipped piece of clothes (but still follows logical order, so no stripping underwear before outerwear etc). Used for strip poker.
     * @return {void|*}
     */
    stripOne = () => this.context.writeLine(`${this.name}.stripOne()`)

    /**
     * Check if the actor wants a baby.
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    wantsBabies = (name) => this._isHelper('wantsBabies', [], name)

    write() {
        this.context.writeLine(`${this.expression}`)
        return this
        // this._expression = this.name
    }
}

module.exports = LPActor