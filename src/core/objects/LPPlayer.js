// noinspection JSUnusedGlobalSymbols

const {RELATIONSHIPS} = require('../constants')
const LPActor = require('./LPActor')
const LPBuilding = require('../objects/LPBuilding')
const LPFloat = require('../objects/LPFloat')
const LPBoolean = require('../objects/LPBoolean')
const LPNPC = require('../objects/LPNPC')

module.exports = class LPPlayer extends LPActor {
    constructor({context}) {
        super({context, name: 'Player'})
    }

    _playerIsHelper(func, params = [], nameStr) {
        const name = nameStr?.name || nameStr
        params = params.map(param => param.name || param)
        const expression = `${func}(${params.join(', ')})`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return this.context.boolean(expression, name)
    }

    _playerFunction(func, params, name, ReturnType) {
        const expression = `${func}(${params})`
        if (name === '') this.context.writeLine(`${expression}`)
        else if (name) this.context.writeLine(`${name} = ${expression}`)
        if (ReturnType) return new ReturnType({context: this.context, name, expression})
    }

    /**
     * Remove this actor from your contact list.
     * @param {LPActor} actor
     * @return {void|*}
     */
    blockContact = (actor) => this.context.writeLine(`blockContact(${actor.name})`)

    /**
     * Choose a person from your contact by displaying a option menu while staying in the scene. Must be followed by getSpecific(chooseContact). Probably inferior to selectNPC() unless you really don't want to take the player out of the scene even temporarily.
     * @example
     * Dating(Flirty):: "You naughty <Player.boy_or_girl>! Fancy yourself as a generous <Dating.boyfriend_or_girlfriend> sharer, don't you? Fine then, if that's what turns you on, I can give it a try. Just make sure to find me a cute <Player.boy_or_girl> to date and go home with, okay?"
     * "We then went on to discuss potential candidates."
     * chooseContact()
     * Bull = scene.getSpecific(chooseContact)
     * @return {void|*}
     */
    chooseContact = () => this.context.writeLine(`chooseContact()`)

    /**
     * Pick the Major for the player, both for teaching and studying. Must be followed by setMajor(). The majors available are hardcoded in the GI file.
     * @example
     * Player.chooseMajor()
     * Player.setMajor()
     * scene.narration("I just selected my <Player.Major> as my major.")
     *
     * @return {void|*}
     */
    chooseMajor = () => this.context.writeLine(`chooseMajor()`)

    /**
     * Give the player STD
     * @example
     * contactSTD()
     * narration("Oh no, I have a STD.")
     * @return {void|*}
     */
    contractSTD = () => this.context.writeLine(`contractSTD()`)

    /**
     * Checks to see if the player's significant other lives in their own apartment.
     * @example
     * If (!Player.PlayerHasHome()) {
     *   Player.dialog("I can't afford to rent my own apartment.")
     *   If (Player.DatingHasHome()) {
     *     Player.dialog("Maybe I can move in with my girlfriend instead?")
     *   }
     * }
     * @return {void|*}
     */
    datingHasHome = () => this.context.writeLine(`datingHasHome()`)


    /**
     * This command undoes the marriage between player and their husband/wife. It will revert their status to being boyfriend(s)/girlfriend(s) though, so you probably want to follow up with loseDating().
     * @example
     * Official.dialog("Sign here and here and here and here... Initial here and here and here... Very well, everything's in order.")
     * Player.dialog("About damn time!", "Disgusted")
     * Player.divorce()
     * Player.loseDating()
     * @return {*}
     */
    divorce = () => this.context.writeLine(`divorce()`)

    /**
     * End the current 'date', i.e. get rid of the current companion.
     * @example
     * scene.narration("We already hung out for the whole afternoon. It's time to separate.")
     * Player.endDate()
     * @return {void|*}
     */
    endDate = () => this.context.writeLine(`endDate()`)

    /**
     * Revert your current relationship/ marriage back into a normal closed one (there are now cheating consequences).
     * @example
     * Player.endOpenRelationship()
     * Player.sex(["NotMyGF"]) // This will NOT be the same as SexNoAffair, your GF could catch you and get upset
     * @return {void|*}
     */
    endOpenRelationship = () => this.context.writeLine(`endOpenRelationship()`)

    /**
     * Remove the player from prison.
     * @example
     * scene.narration("And I did it! The prison guards were long left behind. Usain Bolt would be proud of that run!")
     * scene.narration("My prison escape was close, but ultimately successful. I'm a free <Player.man_or_woman> again!")
     * Player.endPrison()
     * @return {void|*}
     */
    endPrison = () => this.context.writeLine(`endPrison()`)

    /**
     * Displays a text box so that the player can type in this business's name.
     * @return {void|*}
     */
    enterBusinessName = () => this.context.writeLine(`enterBusinessName()`)

    /**
     * Exchange numbers with this actor.
     * @example
     * scene.narration("We exchanged numbers and parted ways.")
     * Player.exchangeContact(John)
     * @param actor
     * @return {void|*}
     */
    exchangeContact = (actor) => {
        if (actor instanceof LPActor) this.context.writeLine(`exchangeContact(${actor.name})`)
        else if (typeof actor === 'string') this.context.writeLine(`exchangeContact(${actor})`)
        else throw new Error(`"actor" must be instance of LPActor or a string!`)
    }

    /**
     * Clear all affairs committed while in this current relationship. This is done automatically when SetDating().
     * @example
     * Dating.dialog("Alright, after everything we've been through, I guess I can forgive you this time ...", "Crying")
     * Player.forgiveAffairs()
     * @return {void|*}
     */
    forgiveAffairs = () => this.context.writeLine(`forgiveAffairs()`)

    /**
     * Returns a relative of type relativeType
     * @example
     * var Child = Player.getAnyRelative("Child")
     * @see childcare.lpsecne
     * @param relativeType
     * @return {void|*}
     */
    getAnyRelative(relativeType) {
        const [_, name] = arguments
        const expression = `getAnyRelative(${relativeType})`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPNPC({context: this.context, name})
    }

    /**
     * Get the current companion. Not entirely necessary as the current companion has a special variable "CurrentCompanion" that is always available.
     * @example
     * var Actor = Player.getCompanion()
     * Actor.dress()
     *
     * // is the same as
     * CurrentCompanion.dress()
     * @return {void|*}
     */
    getCompanion() {
        const [name] = arguments
        const expression = `getCompanion()`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPNPC({context: this.context, name})
    }

    /**
     * Get the current companion, regardless of whether they are human or not.
     * @return {void|*}
     */
    getCompanionAny() {
        const [name] = arguments
        const expression = `getCompanionAny()`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPNPC({context: this.context, name})
    }

    /**
     * Get the current companion, but only if they are a creature.
     * @return {void|*}
     */
    getCompanionCreature() {
        const [name] = arguments
        const expression = `getCompanionCreature()`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPNPC({context: this.context, name})
    }

    /**
     * Call this function to marry the player to their current bf/gf. This doesn't trigger a wedding scene, but flags them as being married.
     * @example
     * Priest.dialog("I now pronounce you man and wife.")
     * Player.getMarried()
     * @return {void|*}
     */
    getMarried = () => this.context.writeLine(`getMarried()`)

    /**
     * Counts the total number of relative NPCs in the game (your relatives, not NPC's relatives).
     * @return {LPFloat}
     */
    getNumRelatives() {
        const [name] = arguments
        const expression = `getNumRelatives()`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPFloat({context: this.context, name, expression})
    }

    /**
     * Retrieves an actor who's related to the player.
     * This can be filtered down to only certain types of relatives with keywords: Sibling, StepSibling, Child, StepChild, Cousin, ParentSibling (uncles/aunts), GrandParent, Parent, StepParent
     * @param {[string]} relationshipTypes - Sibling, StepSibling, Child, StepChild, Cousin, ParentSibling (uncles/aunts), GrandParent, Parent, StepParent
     * @return {LPActor|undefined}
     */
    getRelative(relationshipTypes = []) {
        const [, name] = arguments
        const expression = `getRelative(${relationshipTypes.join(', ')})`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPNPC({context: this.context, name, expression})
    }

    /**
     * Retrieves an actor who is related to the player, but isn't tagged by the listed keyword(s).
     * @param {[string]} relationshipTypes - Sibling, StepSibling, Child, StepChild, Cousin, ParentSibling (uncles/aunts), GrandParent, Parent, StepParent
     * @return {LPActor|undefined}
     */
    getRelativeExcept(relationshipTypes = []) {
        const [, name] = arguments
        const expression = `getRelativeExcept(${relationshipTypes.join(', ')})`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPNPC({context: this.context, name, expression})
    }

    /**
     * Get the current rent into a float variable.
     * @todo this is special ie Rent.setRent()
     * @example
     * var Rent = Player.getRent()
     * Rent *= 1.2                                  // todo this wont work
     * Rent.setRent()                               // todo this wont work
     * scene.narration("Damn, the rent was increased by 20%.")
     *
     * @return {LPFloat} rent
     */
    getRent() {
        const [name] = arguments
        const expression = `getRent()`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPFloat({context: this.context, name, expression})
    }

    /**
     * Get the current salary into a float variable.
     * @todo this is special ie Salary.setSalary()
     * @example
     * var Salary = Player.getSalary()
     * Salary *= 1.2                                  // todo this wont work
     * Salary.setSalary()                             // todo this wont work
     * scene.narration("Yay, my salary was increased by 20%.")
     *
     * @return {LPFloat} Salary
     */
    getSalary() {
        const [name] = arguments
        const expression = `getSalary()`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPFloat({context: this.context, name, expression})
    }

    /**
     * Choose a person from your contacts by leaving the scene temporarily and opening the Contacts menu. Must be preceded by selectNPC(). Basically superior to chooseContact() unless you really don't want to take the player out of the scene even temporarily.
     * @example
     * scene.narration("Who should be my first guest?")
     * Player.selectNPC()
     * var Guest1 = Player.getSelectedNPC()
     * @return {LPNPC}
     */
    getSelectedNPC() {
        const [name] = arguments
        const expression = `getSelectedNPC()`
        if (name) this.context.writeLine(`${name} = ${expression}`)
        return new LPNPC({context: this.context, name, expression})
    }

    /**
     * Get the current interaction target (i.e. the actor the player just clicked on)
     * @example
     * var Actor = Player.getTarget()
     * @return {LPNPC}
     */
    getTarget() {
        return this._playerFunction('getTarget', '', arguments[0], LPNPC)
    }

    /**
     * Gives the player default clothing?
     */
    givePlayerDefaultClothes = () => this.context.writeLine(`givePlayerDefaultClothes()`)

    /**
     * Send the player to prison.
     * @example
     * scene.narration("The court-appointed lawyer didn't do me much good. I got the expected sentence and was sent on my way to jail.")
     * Player.imprison()
     * @return {void|*}
     */
    imprison = () => this.context.writeLine(`imprison()`)

    /**
     * Checks if player is at significant other's home rather than their own. (The WHERE : home trigger catches both)
     * @return {LPBoolean}
     */
    isAtDatingHome() {
        return this._playerFunction('isAtDatingHome', '', arguments[0], LPBoolean)
    }

    /**
     * Check if the player is at their own home. Frequently used to separate 'WHERE: home' cases of the player being at home and being at their significant other's home.
     * @return {LPBoolean}
     */
    isAtHome() {
        return this._playerFunction('isAtHome', '', arguments[0], LPBoolean)
    }

    /**
     * Checks if the player is married.
     * @return {boolean}
     */
    isPlayerMarried() {
        return this._playerFunction('isPlayerMarried', '', arguments[0], LPBoolean)
    }

    /**
     * Checks if the player is a student.
     * @return {boolean}
     */
    isStudent() {
        return this._playerFunction('isStudent', '', arguments[0], LPBoolean)
    }

    /**
     * Checks if the player is with a companion.
     * @return {LPBoolean}
     */
    isWithCompanion() {
        return this._playerFunction('isWithCompanion', '', arguments[0], LPBoolean)
    }

    /**
     * Checks if the player is with a companion creature.
     * @return {boolean}
     */
    isWithCompanionCreature() {
        return this._playerFunction('isWithCompanionCreature', '', arguments[0], LPBoolean)
    }

    /**
     * Break up with current boyfriend / girlfriend. All affairs and SO's friends are cleared and become acquaintances.
     * @return {void|*}
     */
    loseDating() {
        return this._playerFunction('loseDating', '', '', null)
    }

    /**
     * The player moves out of their current home. Set rent to 0. Landlord and neighbours become acquaintances. If the player's SO has a home, they'll move in with them instead.
     * @return {void|*}
     */
    loseHome = () => this.context.writeLine(`loseHome()`)

    /**
     * Your SO moves out of their home, and in with you.
     * @return {void|*}
     */
    loseHomeDating = () => this.context.writeLine(`loseHomeDating()`)

    /**
     * The player stops working at their current company. Set salary to 0. Boss and colleagues become acquaintances.
     * @return {void|*}
     */
    loseJob = () => this.context.writeLine(`loseJob()`)

    /**
     * The player fires their current personal trainer.
     * @return {void|*}
     */
    losePT = () => this.context.writeLine(`losePT()`)

    /**
     * Move into the current building and make it your new fraternity / sorority
     * @return {void|*}
     */
    moveFraternity = () => this.context.writeLine(`moveFraternity()`)

    /**
     * Move into the current building and make it your new home. Remember to use SetLandlord() and SetRent() separately.
     * @return {void|*}
     */
    moveHome = () => this.context.writeLine(`moveHome()`)

    /**
     * Get hired at this current building and make it our new workplace. Remember to use setBoss() and SetSalary() separately.
     * @return {void|*}
     */
    moveJobs = () => this.context.writeLine(`moveJobs()`)

    /**
     * Enroll into the current building and make it your new university
     * @return {void|*}
     */
    moveSchools = () => this.context.writeLine(`moveSchools()`)

    /**
     * Instantly move the player (and possible companion) to this place. Currently there are only three places: Home, Home_Dating, Work
     * Can also move to a location
     * @example
     * var loc = scene.findNearbyBuilding(sports_centre)
     * Player.moveTo(loc)
     * @param place
     */
    moveTo = (place) => {
        if (place instanceof LPBuilding) this.context.writeLine(`moveTo(${place.name})`)
        else this.context.writeLine(`moveTo(${place})`)
    }

    /**
     * Check if player is in an open relationship.
     * @return {boolean}
     */
    openRelationship = () => this.context.writeLine(`openRelationship()`)

    /**
     * Check if player player has a home.
     * @return {boolean}
     */
    playerHasHome() {
        return this._playerFunction('playerHasHome', '', arguments[0], LPBoolean)
    }

    /**
     * Leave your crime family
     * @return {void|*}
     */
    quitCrime = () => this.context.writeLine(`quitCrime()`)

    /**
     * Drop out of the fraternity
     * @return {void|*}
     */
    quitFraternity = () => this.context.writeLine(`quitFraternity()`)

    /**
     * Quit your lecturing job
     * @return {void|*}
     */
    quitLecturing = () => this.context.writeLine(`quitLecturing()`)

    /**
     * Leave your medical career
     * @return {void|*}
     */
    quitMedical = () => this.context.writeLine(`quitMedical()`)

    /**
     * Drop out of university
     * @return {void|*}
     */
    quitSchool = () => this.context.writeLine(`quitSchool()`)

    /**
     * Remove all clothes from your inventory that were added during this scene. Used for modelling shoots.
     * @return {void|*}
     */
    removeAddedClothes = () => this.context.writeLine(`removeAddedClothes()`)

    /**
     * Choose a person from your contacts by leaving the scene temporarily and opening the Contacts menu. Must be followed by getSelectedNPC().
     * Basically superior to chooseContact() unless you really don't want to take the player out of the scene even temporarily.
     * @example
     * scene.narration("Who should be my first guest?")
     * Player.selectNPC()
     * var Guest1 = Player.getSelectedNPC()
     * @param tag
     * @return {void|*}
     */
    selectNPC(tag = '') {
        return this._playerFunction('selectNPC', tag, arguments[1], LPBoolean)
    }


    /**
     * Set this as your current monthly fraternity fees.
     * @example
     * var FratFee = Player.setFraternityFees(1000)
     * scene.narrative("I agreed to pay $1000 per month for fraternity fees")
     * @param {number|LPFloat} fratFee
     */
    setFraternityFees(fratFee) {
        const varFratFee = new LPFloat({context: this.context, name: 'lpjs_fratFee', codeStr: fratFee})
        this.context.writeLine(`lpjs_fratFee = ${fratFee}`)
        this.context.writeLine(`lpjs_fratFee.setFraternityFees()`)
    }

    /**
     * Set the Major for the player, both for teaching and studying. Must be preceded by chooseMajor(). The majors available are hardcoded in the GI file.
     * @example
     * Player.chooseMajor()
     * Player.setMajor()
     * scene.narration("I just selected my <Player.Major> as my major.")
     *
     * @return {void|*}
     */
    setMajor = () => this.context.writeLine('setMajor()')

    /**
     * Set your current rent.
     * @example
     * const rent = Player.getRent()
     * rent.mulEq(1.2)
     * Player.setRent(rent)
     * // this is equivalent
     * Player.setRent(Player.getRent().mulEq(1.2))
     * @param {number|LPFloat} rent
     * @return {LPFloat} lpjs_rent
     */
    setRent = (rent) => {
        if (rent instanceof LPFloat) {
            this.context.writeLine(`${rent.name}.setRent()`)
            return rent
        }
        this.context.writeLine(`lpjs_rent = ${rent}`)
        this.context.writeLine(`lpjs_rent.setRent()`)
    }

    /**
     * Set this as your current salary.
     * @example
     * scene.narrative("I signed the contract.")
     * Player.moveJobs()
     * Interviewer.setBoss()
     * Player.setSalary(2000)
     * @param {number|LPFloat} salary
     * @return {LPFloat} lpjs_salary
     */
    setSalary(salary) {
        if (salary instanceof LPFloat) {
            this.context.writeLine(`${salary.name}.setSalary()`)
            return salary
        }
        this.context.writeLine(`lpjs_salary = ${salary}`)
        this.context.writeLine(`lpjs_salary.setSalary()`)
    }

    /**
     * Set this as your current monthly tuition fees.
     * @example
     * Player.setTuition(1000)
     * scene.narrative("I agreed to pay $1000 per month for tuition")
     * @param {number|LPFloat} tuition
     */
    setTuition(tuition) {
        if (tuition instanceof LPFloat) {
            this.context.writeLine(`${tuition.name}.setTuition()`)
            return tuition
        }
        this.context.writeLine(`lpjs_tuition = ${tuition}`)
        this.context.writeLine(`lpjs_tuition.setTuition()`)
    }

    /**
     * Make the current building your business.
     * @return {void|*}
     */
    startBusiness = () => this.context.writeLine(`startBusiness()`)

    /**
     * Start hanging out with this person (make them your current companion)
     * @return {void|*}
     */
    startDate = () => this.context.writeLine(`startDate()`)

    /**
     * Make your current relationship/ marriage an open one (no cheating consequences and unlocks a number of scenes). Resets when you end this current
     * relationship and any new relationship will start off as closed.
     * @return {void|*}
     */
    startOpenRelationship = () => this.context.writeLine(`startOpenRelationship()`)

    /**
     * Make the current building no longer your business.
     * @return {void|*}
     */
    stopBusiness = () => this.context.writeLine(`stopBusiness()`)
}