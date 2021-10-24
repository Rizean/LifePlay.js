// noinspection JSUnusedGlobalSymbols
const {isMoodValid} = require('../tools')

const LPObject = require('./LPObject')
const LPFloat = require('./LPFloat')
const LPBoolean = require('./LPBoolean')
const LPBuilding = require('./LPBuilding')
const LPString = require('./LPString')
const LPVariable = require('./LPVariable')
const {CLOTHING_SLOTS, ANIMATIONS} = require('../constants')
let LPNPC = undefined

class LPActor extends LPVariable {
    /**
     * @classdesc Class representing a LifePlay Actor.
     * @class LPActor
     * @extends LPVariable
     * @private
     */
    constructor({context, lpMod, name, expression}) {
        super({context, lpMod, name, expression})

        // delayed require as LPNPC depends on LPActor
        LPNPC = require("./LPNPC")

        /****STATS****/
        this._age = new LPFloat({context, lpMod, name: `${this.name}:age`, isStat: true})
        this._arousal = new LPFloat({context, lpMod, name: `${this.name}:arousal`, isStat: true})
        this._attractiontoplayer = new LPFloat({context, lpMod, name: `${this.name}:attractiontoplayer`, isStat: true})
        this._attractiveness = new LPFloat({context, lpMod, name: `${this.name}:attractiveness`, isStat: true})
        this._car_value = new LPFloat({context, lpMod, name: `${this.name}:car_value`, isStat: true})
        this._children = new LPFloat({context, lpMod, name: `${this.name}:children`, isStat: true})
        this._cooking = new LPFloat({context, lpMod, name: `${this.name}:cooking`, isStat: true})
        this._dance = new LPFloat({context, lpMod, name: `${this.name}:dance`, isStat: true})
        this._energy = new LPFloat({context, lpMod, name: `${this.name}:energy`, isStat: true})
        this._fertility = new LPFloat({context, lpMod, name: `${this.name}:fertility`, isStat: true})
        this._fitness = new LPFloat({context, lpMod, name: `${this.name}:fitness`, isStat: true})
        this._incest = new LPFloat({context, lpMod, name: `${this.name}:incest`, isStat: true})
        this._intelligence = new LPFloat({context, lpMod, name: `${this.name}:intelligence`, isStat: true})
        this._interpersonal = new LPFloat({context, lpMod, name: `${this.name}:interpersonal`, isStat: true})
        this._intoxication = new LPFloat({context, lpMod, name: `${this.name}:intoxication`, isStat: true})
        this._jobexperience = new LPFloat({context, lpMod, name: `${this.name}:jobexperience`, isStat: true})
        this._jobperformance = new LPFloat({context, lpMod, name: `${this.name}:jobperformance`, isStat: true})
        this._martial = new LPFloat({context, lpMod, name: `${this.name}:martial`, isStat: true})
        this._masochist = new LPFloat({context, lpMod, name: `${this.name}:masochist`, isStat: true})
        this._money = new LPFloat({context, lpMod, name: `${this.name}:money`, isStat: true})
        this._mood = new LPFloat({context, lpMod, name: `${this.name}:mood`, isStat: true})
        this._muscle = new LPFloat({context, lpMod, name: `${this.name}:muscle`, isStat: true})
        this._music = new LPFloat({context, lpMod, name: `${this.name}:music`, isStat: true})
        this._perversion = new LPFloat({context, lpMod, name: `${this.name}:perversion`, isStat: true})
        this._pet_health = new LPFloat({context, lpMod, name: `${this.name}:pet_health`, isStat: true})
        this._pornfame = new LPFloat({context, lpMod, name: `${this.name}:pornfame`, isStat: true})
        this._rapportwithplayer = new LPFloat({context, lpMod, name: `${this.name}:rapportwithplayer`, isStat: true})
        this._sneak = new LPFloat({context, lpMod, name: `${this.name}:sneak`, isStat: true})
        this._stock_alcohol = new LPFloat({context, lpMod, name: `${this.name}:stock_alcohol`, isStat: true})
        this._stock_book = new LPFloat({context, lpMod, name: `${this.name}:stock_book`, isStat: true})
        this._stock_coffee = new LPFloat({context, lpMod, name: `${this.name}:stock_coffee`, isStat: true})
        this._stock_condom = new LPFloat({context, lpMod, name: `${this.name}:stock_condom`, isStat: true})
        this._stock_flower = new LPFloat({context, lpMod, name: `${this.name}:stock_flower`, isStat: true})
        this._stock_gift = new LPFloat({context, lpMod, name: `${this.name}:stock_gift`, isStat: true})
        this._stock_haircare = new LPFloat({context, lpMod, name: `${this.name}:stock_haircare`, isStat: true})
        this._stock_ingredient = new LPFloat({context, lpMod, name: `${this.name}:stock_ingredient`, isStat: true})
        this._stock_juice = new LPFloat({context, lpMod, name: `${this.name}:stock_juice`, isStat: true})
        this._stock_makeup = new LPFloat({context, lpMod, name: `${this.name}:stock_makeup`, isStat: true})
        this._stock_meal = new LPFloat({context, lpMod, name: `${this.name}:stock_meal`, isStat: true})
        this._stock_movie = new LPFloat({context, lpMod, name: `${this.name}:stock_movie`, isStat: true})
        this._stock_musicalinstrument = new LPFloat({context, lpMod, name: `${this.name}:stock_musicalinstrument`, isStat: true})
        this._stock_petfood = new LPFloat({context, lpMod, name: `${this.name}:stock_petfood`, isStat: true})
        this._stock_photo = new LPFloat({context, lpMod, name: `${this.name}:stock_photo`, isStat: true})
        this._stock_pill = new LPFloat({context, lpMod, name: `${this.name}:stock_pill`, isStat: true})
        this._stock_skincare = new LPFloat({context, lpMod, name: `${this.name}:stock_skincare`, isStat: true})
        this._stock_snack = new LPFloat({context, lpMod, name: `${this.name}:stock_snack`, isStat: true})
        this._stock_soda = new LPFloat({context, lpMod, name: `${this.name}:stock_soda`, isStat: true})
        this._stock_supplement = new LPFloat({context, lpMod, name: `${this.name}:stock_supplement`, isStat: true})
        this._stock_tea = new LPFloat({context, lpMod, name: `${this.name}:stock_tea`, isStat: true})
        this._stock_tobacco = new LPFloat({context, lpMod, name: `${this.name}:stock_tobacco`, isStat: true})
        this._stock_video = new LPFloat({context, lpMod, name: `${this.name}:stock_video`, isStat: true})
    }

    assign(rhs) {
        return super.assign(rhs, null, LPActor)
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

    // set name(value) {
    //     super._name = value
    // }

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
        this.context.writeLine(`${this.name}.animateFnt(${x}, ${y}, ${z}, ${filter})`)
    }

    /**
     * Animates a pair of actors
     * @param {LPActor} secondActor
     * @param {string} animation - can be one of Kissing, Vaginal, ...?
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
        return new LPFloat({context: this.context, lpMod: this.lpMod, name})
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
     * @param {string[]} slots - 'Outerwear', 'Headwear', 'Eyewear', 'Top', 'Top_Under', 'Bottom', 'Bottom_Under', 'Foot', 'Foot_Under'
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
        return new LPNPC({context: this.context, lpMod: this.lpMod, name})
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
        return new LPNPC({context: this.context, lpMod: this.lpMod, name})
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
        return new LPNPC({context: this.context, lpMod: this.lpMod, name})
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
     */
    getActorVar = (varOrTag, name) => {
        this.context.writeLine(`${name} = ${this.name}.getActorVar(${varOrTag})`)
        return new LPString({context: this.context, lpMod: this.lpMod, name})
    }

    /**
     * Returns the Actor who got the this Actor pregnant.
     * @example
     * var BioDaddy = Actor.getBabyDaddy()
     * @return {LPNPC}
     */
    getBabyDaddy = (name) => {
        this.context.writeLine(`${name} = ${this.name}.getBabyDaddy()`)
        return new LPNPC({context: this.context, lpMod: this.lpMod, name})
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
        return new LPBuilding({context: this.context, lpMod: this.lpMod, name, params: {type},expression: `${this.name}.getBuilding(${type})`})
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
        return new LPFloat({context: this.context, lpMod: this.lpMod, name})
    }

    /**
     * Returns morph value as a float. Morph list can be found in any lpcharacter file
     * @param morphName
     * @return {LPFloat}
     */
    getMorphValue = (morphName, name) => {
        this.context.writeLine(`${name} = ${this.name}.getMorphValue(${morphName})`)
        return new LPFloat({context: this.context, lpMod: this.lpMod, name})
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
        return new LPString({context: this.context, lpMod: this.lpMod, name})
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
        return new LPString({context: this.context, lpMod: this.lpMod, name})
    }

    /**
     * Get a single NPC with a relationship of the specified type or another with the specified NPC. The list for 'Type' is:
     * @param {string[]} relationshipTypes - Dating, Spouses, Siblings, ParentChild, Cousins, BossEmployee, Colleagues
     * @return {LPNPC|undefined}
     */
    getRelatedPerson = (relationshipTypes = [], name) => {
        this.context.writeLine(`${name} = ${this.name}.getRelatedPerson(${relationshipTypes.join(', ')})`)
        return new LPNPC({context: this.context, lpMod: this.lpMod, name})
    }

    /**
     * Same as getRelatedPerson() but only load the necessary data for the actor needed for AI stuffs. Only meant for lpai files, actors gotten this way aren't meant to be shown to the player on screen.
     * @param {string[]} relationshipTypes - Dating, Spouses, Siblings, ParentChild, Cousins, BossEmployee, Colleagues
     * @return {LPNPC|undefined}
     */
    getRelatedPersonQuick = (relationshipTypes = [], name = `lpjs_${this.name}_getRelatedPersonQuick`) => {
        this.context.writeLine(`${name} = ${this.name}.getRelatedPersonQuick(${relationshipTypes.join(', ')})`)
        return new LPNPC({context: this.context, lpMod: this.lpMod, name})
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
        return new LPBoolean({context: this.context, lpMod: this.lpMod, name, expression})
    }

    /**
     * Hide the actor or player from the player's view. Opposite to show().
     */
    hide = () => this.context.writeLine(`${this.name}.hide()`)

    /**
     * Force impregnate someone. Works even without sex!
     * @example
     * Player.impregnate() // Oh no, I'm Virgin Mary now.
     * @param {LPActor=} target - optional - if target is provided then this Actor will impregnate target actor
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
     * @param {string[]} presets
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
     */
    modifyActorVar = (key, value) => this.context.writeLine(`${this.name}.modifyActorVar(${key}, ${value?.name || value})`)

    /**
     * Multiply the actors salary by value ie salary of 100 * value of 1.1 would become 110.
     * @param {number|LPFloat} value
     */
    modifySalary = (value) => this.context.writeLine(`${this.name}.modifySalary(${value})`)

    /**
     * Moves this actor towards actor and head tracks actor.
     * @param {LPActor} actor
     */
    moveToPerson = (actor) => this.context.writeLine(`${this.name}.moveToPerson(${actor.name})`)

    /**
     * Make this actor move toward another actors position.
     * @param {LPActor} actor
     * @param {number|LPFloat} distance - Distance to stay away from 'target'. 0 = Move to exact the same spot as 'target'.
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
     */
    setActorVar = (name, value) => this.context.writeLine(`${this.name}.setActorVar(${name}, ${value})`)

    /**
     * Change an actor's current location. Used with findNearbyBuilding or getBuilding(Home) or getBuilding(Work), mostly in lpai files.
     * @param {LPBuilding} buildingVariable
     */
    setCurrentLocation = (buildingVariable) => this.context.writeLine(`${this.name}.setCurrentLocation(${buildingVariable.name})`)

    /**
     * Used for polyamorous for setting up which lover to break up with before you use loseDating()
     */
    setDatingId = () => this.context.writeLine(`${this.name}.setDatingId()`)

    /**
     * Make this Actor remember that they used to be related to the actor.
     * @param {LPActor} actor
     */
    setExRelative = (actor) => this.context.writeLine(`${this.name}.setExRelative(${actor.name})`)

    /**
     * Set the job for this NPC. Only Doctor and Nurse are available now
     * @param job
     */
    setJob = (job) => this.context.writeLine(`${this.name}.setJob(${job})`)

    /**
     * Morph list can be found in any lpcharacter file.
     * @param morphName
     * @param value
     */
    setMorphValue = (morphName, value) => this.context.writeLine(`${this.name}.setMorphValue(${morphName}, ${value})`)

    /**
     * Prevents an Actor from redressing. May not work on player.
     */
    setNoRedress = () => this.context.writeLine(`${this.name}.setNoRedress()`)

    /**
     * If wantsBaby is true then the actor wants a baby
     * @param wantsBaby
     */
    setWantsBabies = (wantsBaby = false) => this.context.writeLine(`${this.name}.setWantsBabies(${wantsBaby})`)

    /**
     * Start a sex scene involving these actors. If the player is involved, it will also check whether the player is cheating or not and add to the affair list accordingly.
     * The order in which roles are given to actors for the sex scene (important for descriptions and dirtytalk) depends largely on gender and domincance. Males are given roles before transsexuals, then women. Between people of the same gender, the most dominant one (lowest submission stat) is given a role first.
     * However, the order of the actor parameters to the Sex() function matters somewhat in group sex: Sex(Male1, Player, Male2) will be different from Sex(Male2, Player, Male1).
     * @param {LPActor[]} actors
     */
    sex = (actors) => this.context.writeLine(`sex(${this.name}, ${actors.map(actor => actor.name).join(', ')})`)

    /**
     * Show this actor on screen. The player's default position is 0. 1 - 6 is counted from right to left of the screen.
     * @param positionIndex
     */
    show = (positionIndex = 0) => this.context.writeLine(`${this.name}.show(${positionIndex})`)

    /**
     * Strip this actor of all clothes
     */
    strip = () => this.context.writeLine(`${this.name}.strip()`)

    /**
     * Strip this actor of a single currently equipped piece of clothes (but still follows logical order, so no stripping underwear before outerwear etc). Used for strip poker.
     */
    stripOne = () => this.context.writeLine(`${this.name}.stripOne()`)

    /**
     * Check if the actor wants a baby.
     * @param {string|LPString=} name handled by script preprocessor for vars
     * @returns {LPBoolean}
     */
    wantsBabies = (name) => this._isHelper('wantsBabies', [], name)

    // write() {
    //     this.context.writeLine(`${this.expression}`)
    //     return this
    //     // this._expression = this.name
    // }

    /****STATS-GETTER-SETTERS****/

    /**
     * age
     * @type {LPFloat}
     */
    get age() {
        return this._age;
    }
    
    set age(age) {
        this._age.assign(age)
    }

    /**
     * arousal
     * @type {LPFloat}
     */
    get arousal() {
        return this._arousal;
    }
    
    set arousal(arousal) {
        this._arousal.assign(arousal)
    }

    /**
     * attractiontoplayer
     * @type {LPFloat}
     */
    get attractiontoplayer() {
        return this._attractiontoplayer;
    }
    
    set attractiontoplayer(attractiontoplayer) {
        this._attractiontoplayer.assign(attractiontoplayer)
    }

    /**
     * attractiveness
     * @type {LPFloat}
     */
    get attractiveness() {
        return this._attractiveness;
    }
    
    set attractiveness(attractiveness) {
        this._attractiveness.assign(attractiveness)
    }

    /**
     * car_value
     * @type {LPFloat}
     */
    get car_value() {
        return this._car_value;
    }
    
    set car_value(car_value) {
        this._car_value.assign(car_value)
    }

    /**
     * children
     * @type {LPFloat}
     */
    get children() {
        return this._children;
    }
    
    set children(children) {
        this._children.assign(children)
    }

    /**
     * cooking
     * @type {LPFloat}
     */
    get cooking() {
        return this._cooking;
    }
    
    set cooking(cooking) {
        this._cooking.assign(cooking)
    }

    /**
     * dance
     * @type {LPFloat}
     */
    get dance() {
        return this._dance;
    }
    
    set dance(dance) {
        this._dance.assign(dance)
    }

    /**
     * energy
     * @type {LPFloat}
     */
    get energy() {
        return this._energy;
    }
    
    set energy(energy) {
        this._energy.assign(energy)
    }

    /**
     * fertility
     * @type {LPFloat}
     */
    get fertility() {
        return this._fertility;
    }
    
    set fertility(fertility) {
        this._fertility.assign(fertility)
    }

    /**
     * fitness
     * @type {LPFloat}
     */
    get fitness() {
        return this._fitness;
    }
    
    set fitness(fitness) {
        this._fitness.assign(fitness)
    }

    /**
     * incest
     * @type {LPFloat}
     */
    get incest() {
        return this._incest;
    }
    
    set incest(incest) {
        this._incest.assign(incest)
    }

    /**
     * intelligence
     * @type {LPFloat}
     */
    get intelligence() {
        return this._intelligence;
    }
    
    set intelligence(intelligence) {
        this._intelligence.assign(intelligence)
    }

    /**
     * interpersonal
     * @type {LPFloat}
     */
    get interpersonal() {
        return this._interpersonal;
    }
    
    set interpersonal(interpersonal) {
        this._interpersonal.assign(interpersonal)
    }

    /**
     * intoxication
     * @type {LPFloat}
     */
    get intoxication() {
        return this._intoxication;
    }
    
    set intoxication(intoxication) {
        this._intoxication.assign(intoxication)
    }

    /**
     * jobexperience
     * @type {LPFloat}
     */
    get jobexperience() {
        return this._jobexperience;
    }
    
    set jobexperience(jobexperience) {
        this._jobexperience.assign(jobexperience)
    }

    /**
     * jobperformance
     * @type {LPFloat}
     */
    get jobperformance() {
        return this._jobperformance;
    }
    
    set jobperformance(jobperformance) {
        this._jobperformance.assign(jobperformance)
    }

    /**
     * martial
     * @type {LPFloat}
     */
    get martial() {
        return this._martial;
    }
    
    set martial(martial) {
        this._martial.assign(martial)
    }

    /**
     * masochist
     * @type {LPFloat}
     */
    get masochist() {
        return this._masochist;
    }
    
    set masochist(masochist) {
        this._masochist.assign(masochist)
    }

    /**
     * money
     * @type {LPFloat}
     */
    get money() {
        return this._money;
    }
    
    set money(money) {
        this._money.assign(money)
    }

    /**
     * mood
     * @type {LPFloat}
     */
    get mood() {
        return this._mood;
    }
    
    set mood(mood) {
        this._mood.assign(mood)
    }

    /**
     * muscle
     * @type {LPFloat}
     */
    get muscle() {
        return this._muscle;
    }
    
    set muscle(muscle) {
        this._muscle.assign(muscle)
    }

    /**
     * music
     * @type {LPFloat}
     */
    get music() {
        return this._music;
    }
    
    set music(music) {
        this._music.assign(music)
    }

    /**
     * perversion
     * @type {LPFloat}
     */
    get perversion() {
        return this._perversion;
    }
    
    set perversion(perversion) {
        this._perversion.assign(perversion)
    }

    /**
     * pet_health
     * @type {LPFloat}
     */
    get pet_health() {
        return this._pet_health;
    }
    
    set pet_health(pet_health) {
        this._pet_health.assign(pet_health)
    }

    /**
     * pornfame
     * @type {LPFloat}
     */
    get pornfame() {
        return this._pornfame;
    }
    
    set pornfame(pornfame) {
        this._pornfame.assign(pornfame)
    }

    /**
     * rapportwithplayer
     * @type {LPFloat}
     */
    get rapportwithplayer() {
        return this._rapportwithplayer;
    }
    
    set rapportwithplayer(rapportwithplayer) {
        this._rapportwithplayer.assign(rapportwithplayer)
    }

    /**
     * sneak
     * @type {LPFloat}
     */
    get sneak() {
        return this._sneak;
    }
    
    set sneak(sneak) {
        this._sneak.assign(sneak)
    }

    /**
     * stock_alcohol
     * @type {LPFloat}
     */
    get stock_alcohol() {
        return this._stock_alcohol;
    }
    
    set stock_alcohol(stock_alcohol) {
        this._stock_alcohol.assign(stock_alcohol)
    }

    /**
     * stock_book
     * @type {LPFloat}
     */
    get stock_book() {
        return this._stock_book;
    }
    
    set stock_book(stock_book) {
        this._stock_book.assign(stock_book)
    }

    /**
     * stock_coffee
     * @type {LPFloat}
     */
    get stock_coffee() {
        return this._stock_coffee;
    }
    
    set stock_coffee(stock_coffee) {
        this._stock_coffee.assign(stock_coffee)
    }

    /**
     * stock_condom
     * @type {LPFloat}
     */
    get stock_condom() {
        return this._stock_condom;
    }
    
    set stock_condom(stock_condom) {
        this._stock_condom.assign(stock_condom)
    }

    /**
     * stock_flower
     * @type {LPFloat}
     */
    get stock_flower() {
        return this._stock_flower;
    }
    
    set stock_flower(stock_flower) {
        this._stock_flower.assign(stock_flower)
    }

    /**
     * stock_gift
     * @type {LPFloat}
     */
    get stock_gift() {
        return this._stock_gift;
    }
    
    set stock_gift(stock_gift) {
        this._stock_gift.assign(stock_gift)
    }

    /**
     * stock_haircare
     * @type {LPFloat}
     */
    get stock_haircare() {
        return this._stock_haircare;
    }
    
    set stock_haircare(stock_haircare) {
        this._stock_haircare.assign(stock_haircare)
    }

    /**
     * stock_ingredient
     * @type {LPFloat}
     */
    get stock_ingredient() {
        return this._stock_ingredient;
    }
    
    set stock_ingredient(stock_ingredient) {
        this._stock_ingredient.assign(stock_ingredient)
    }

    /**
     * stock_juice
     * @type {LPFloat}
     */
    get stock_juice() {
        return this._stock_juice;
    }
    
    set stock_juice(stock_juice) {
        this._stock_juice.assign(stock_juice)
    }

    /**
     * stock_makeup
     * @type {LPFloat}
     */
    get stock_makeup() {
        return this._stock_makeup;
    }
    
    set stock_makeup(stock_makeup) {
        this._stock_makeup.assign(stock_makeup)
    }

    /**
     * stock_meal
     * @type {LPFloat}
     */
    get stock_meal() {
        return this._stock_meal;
    }
    
    set stock_meal(stock_meal) {
        this._stock_meal.assign(stock_meal)
    }

    /**
     * stock_movie
     * @type {LPFloat}
     */
    get stock_movie() {
        return this._stock_movie;
    }
    
    set stock_movie(stock_movie) {
        this._stock_movie.assign(stock_movie)
    }

    /**
     * stock_musicalinstrument
     * @type {LPFloat}
     */
    get stock_musicalinstrument() {
        return this._stock_musicalinstrument;
    }
    
    set stock_musicalinstrument(stock_musicalinstrument) {
        this._stock_musicalinstrument.assign(stock_musicalinstrument)
    }

    /**
     * stock_petfood
     * @type {LPFloat}
     */
    get stock_petfood() {
        return this._stock_petfood;
    }
    
    set stock_petfood(stock_petfood) {
        this._stock_petfood.assign(stock_petfood)
    }

    /**
     * stock_photo
     * @type {LPFloat}
     */
    get stock_photo() {
        return this._stock_photo;
    }
    
    set stock_photo(stock_photo) {
        this._stock_photo.assign(stock_photo)
    }

    /**
     * stock_pill
     * @type {LPFloat}
     */
    get stock_pill() {
        return this._stock_pill;
    }
    
    set stock_pill(stock_pill) {
        this._stock_pill.assign(stock_pill)
    }

    /**
     * stock_skincare
     * @type {LPFloat}
     */
    get stock_skincare() {
        return this._stock_skincare;
    }
    
    set stock_skincare(stock_skincare) {
        this._stock_skincare.assign(stock_skincare)
    }

    /**
     * stock_snack
     * @type {LPFloat}
     */
    get stock_snack() {
        return this._stock_snack;
    }
    
    set stock_snack(stock_snack) {
        this._stock_snack.assign(stock_snack)
    }

    /**
     * stock_soda
     * @type {LPFloat}
     */
    get stock_soda() {
        return this._stock_soda;
    }
    
    set stock_soda(stock_soda) {
        this._stock_soda.assign(stock_soda)
    }

    /**
     * stock_supplement
     * @type {LPFloat}
     */
    get stock_supplement() {
        return this._stock_supplement;
    }
    
    set stock_supplement(stock_supplement) {
        this._stock_supplement.assign(stock_supplement)
    }

    /**
     * stock_tea
     * @type {LPFloat}
     */
    get stock_tea() {
        return this._stock_tea;
    }
    
    set stock_tea(stock_tea) {
        this._stock_tea.assign(stock_tea)
    }

    /**
     * stock_tobacco
     * @type {LPFloat}
     */
    get stock_tobacco() {
        return this._stock_tobacco;
    }
    
    set stock_tobacco(stock_tobacco) {
        this._stock_tobacco.assign(stock_tobacco)
    }

    /**
     * stock_video
     * @type {LPFloat}
     */
    get stock_video() {
        return this._stock_video;
    }
    
    set stock_video(stock_video) {
        this._stock_video.assign(stock_video)
    }
}

module.exports = LPActor