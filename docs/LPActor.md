<a name="LPActor"></a>

## LPActor : [<code>LPActor</code>](#LPActor)
Class representing a LifePlay Actor.

**Kind**: global class  

* [LPActor](#LPActor) : [<code>LPActor</code>](#LPActor)
    * [.name](#LPActor+name) : <code>string</code>
    * [.animate](#LPActor+animate)
    * [.animateFnt](#LPActor+animateFnt)
    * [.animatePair](#LPActor+animatePair) ⇒ <code>void</code> \| <code>\*</code>
    * [.blendAppearanceFrom](#LPActor+blendAppearanceFrom) ⇒ [<code>LPActor</code>](#LPActor)
    * [.blendPreset](#LPActor+blendPreset) ⇒ [<code>LPActor</code>](#LPActor)
    * [.changeSex](#LPActor+changeSex)
    * [.cloneFrom](#LPActor+cloneFrom) ⇒ <code>void</code> \| <code>\*</code>
    * [.closeEyes](#LPActor+closeEyes) ⇒ <code>void</code> \| <code>\*</code>
    * [.clothesContain](#LPActor+clothesContain)
    * [.countPregnancyDays](#LPActor+countPregnancyDays) ⇒ <code>LPFloat</code>
    * [.dress](#LPActor+dress)
    * [.dressBondage](#LPActor+dressBondage)
    * [.dressExcept](#LPActor+dressExcept)
    * [.dressGuard](#LPActor+dressGuard)
    * [.dressPrisoner](#LPActor+dressPrisoner)
    * [.dressUniform](#LPActor+dressUniform)
    * [.dressWedding](#LPActor+dressWedding)
    * [.endPregnancy](#LPActor+endPregnancy) ⇒ <code>void</code> \| <code>\*</code>
    * [.enterFirstName](#LPActor+enterFirstName)
    * [.generatePersonMatchRace](#LPActor+generatePersonMatchRace) ⇒ <code>LPNPC</code>
    * [.generatePersonTemporaryMatchRace](#LPActor+generatePersonTemporaryMatchRace) ⇒
    * [.generateRelativeMatchRace](#LPActor+generateRelativeMatchRace) ⇒ <code>LPNPC</code>
    * [.getActorVar](#LPActor+getActorVar) ⇒ <code>void</code> \| <code>\*</code>
    * [.getBabyDaddy](#LPActor+getBabyDaddy) ⇒ <code>LPNPC</code>
    * [.getBuilding](#LPActor+getBuilding) ⇒ <code>LPBuilding</code>
    * [.getID](#LPActor+getID) ⇒ <code>LPFloat</code>
    * [.getMorphValue](#LPActor+getMorphValue) ⇒ <code>LPFloat</code>
    * [.getPregnancyTag](#LPActor+getPregnancyTag) ⇒ <code>LPString</code>
    * [.getRace](#LPActor+getRace) ⇒ <code>string</code>
    * [.getRelatedPerson](#LPActor+getRelatedPerson) ⇒ <code>LPNPC</code> \| <code>undefined</code>
    * [.getRelatedPersonQuick](#LPActor+getRelatedPersonQuick) ⇒ <code>LPNPC</code> \| <code>undefined</code>
    * [.hadSex](#LPActor+hadSex) ⇒ <code>boolean</code>
    * [.hasSameInterestAs](#LPActor+hasSameInterestAs) ⇒ <code>LPBoolean</code>
    * [.hide](#LPActor+hide) ⇒ <code>void</code> \| <code>\*</code>
    * [.impregnate](#LPActor+impregnate) ⇒ <code>void</code> \| <code>\*</code>
    * [.isAsexual](#LPActor+isAsexual) ⇒ <code>LPBoolean</code>
    * [.isAt](#LPActor+isAt) ⇒ <code>LPBoolean</code>
    * [.isBisexual](#LPActor+isBisexual) ⇒ <code>LPBoolean</code>
    * [.isBisexualNonTrans](#LPActor+isBisexualNonTrans) ⇒ <code>LPBoolean</code>
    * [.isDating](#LPActor+isDating) ⇒ <code>LPBoolean</code>
    * [.isDominantSex](#LPActor+isDominantSex) ⇒ <code>LPBoolean</code>
    * [.isEquipped](#LPActor+isEquipped) ⇒ <code>LPBoolean</code>
    * [.isFemale](#LPActor+isFemale) ⇒ <code>LPBoolean</code>
    * [.isGay](#LPActor+isGay) ⇒ <code>LPBoolean</code>
    * [.isGayNonTrans](#LPActor+isGayNonTrans) ⇒ <code>LPBoolean</code>
    * [.isInterestedIn](#LPActor+isInterestedIn) ⇒ <code>LPBoolean</code>
    * [.isInterestedInMen](#LPActor+isInterestedInMen) ⇒ <code>LPBoolean</code>
    * [.isInterestedInTrans](#LPActor+isInterestedInTrans) ⇒ <code>LPBoolean</code>
    * [.isInterestedInWomen](#LPActor+isInterestedInWomen) ⇒ <code>LPBoolean</code>
    * [.isJob](#LPActor+isJob) ⇒ <code>LPBoolean</code>
    * [.isMale](#LPActor+isMale) ⇒ <code>LPBoolean</code>
    * [.isNaked](#LPActor+isNaked) ⇒ <code>LPBoolean</code>
    * [.isNude](#LPActor+isNude) ⇒ <code>LPBoolean</code>
    * [.isOnPeriod](#LPActor+isOnPeriod) ⇒ <code>LPBoolean</code>
    * [.isPlayer](#LPActor+isPlayer) ⇒ <code>LPBoolean</code>
    * [.isPregnant](#LPActor+isPregnant) ⇒ <code>LPBoolean</code>
    * [.isProstitute](#LPActor+isProstitute) ⇒ <code>LPBoolean</code>
    * [.isRace](#LPActor+isRace) ⇒ <code>LPBoolean</code>
    * [.isSameAs](#LPActor+isSameAs) ⇒ <code>LPBoolean</code>
    * [.isSameGender](#LPActor+isSameGender) ⇒ <code>LPBoolean</code>
    * [.isSameRace](#LPActor+isSameRace) ⇒ <code>LPBoolean</code>
    * [.isSlotOccupied](#LPActor+isSlotOccupied) ⇒ <code>LPBoolean</code>
    * [.isStraight](#LPActor+isStraight) ⇒ <code>LPBoolean</code>
    * [.isStraightNonTrans](#LPActor+isStraightNonTrans) ⇒ <code>LPBoolean</code>
    * [.isTrans](#LPActor+isTrans) ⇒ <code>LPBoolean</code>
    * [.isValid](#LPActor+isValid) ⇒ <code>LPBoolean</code>
    * [.isVirgin](#LPActor+isVirgin) ⇒ <code>LPBoolean</code>
    * [.isVisible](#LPActor+isVisible) ⇒ <code>LPBoolean</code>
    * [.loadPreset](#LPActor+loadPreset) ⇒ [<code>LPActor</code>](#LPActor)
    * [.makeInterested](#LPActor+makeInterested)
    * [.matchLastName](#LPActor+matchLastName)
    * [.modifyActorVar](#LPActor+modifyActorVar) ⇒ <code>void</code> \| <code>\*</code>
    * [.modifySalary](#LPActor+modifySalary) ⇒ <code>void</code> \| <code>\*</code>
    * [.moveToPerson](#LPActor+moveToPerson) ⇒ <code>void</code> \| <code>\*</code>
    * [.moveToPersonStand](#LPActor+moveToPersonStand) ⇒ <code>void</code> \| <code>\*</code>
    * [.setActorVar](#LPActor+setActorVar) ⇒ <code>void</code> \| <code>\*</code>
    * [.setCurrentLocation](#LPActor+setCurrentLocation) ⇒ <code>void</code> \| <code>\*</code>
    * [.setDatingId](#LPActor+setDatingId)
    * [.setExRelative](#LPActor+setExRelative) ⇒ <code>void</code> \| <code>\*</code>
    * [.setJob](#LPActor+setJob) ⇒ <code>void</code> \| <code>\*</code>
    * [.setMorphValue](#LPActor+setMorphValue) ⇒ <code>void</code> \| <code>\*</code>
    * [.setNoRedress](#LPActor+setNoRedress) ⇒ <code>void</code> \| <code>\*</code>
    * [.setWantsBabies](#LPActor+setWantsBabies) ⇒ <code>void</code> \| <code>\*</code>
    * [.sex](#LPActor+sex) ⇒ <code>void</code> \| <code>\*</code>
    * [.show](#LPActor+show) ⇒ <code>void</code> \| <code>\*</code>
    * [.strip](#LPActor+strip) ⇒ <code>void</code> \| <code>\*</code>
    * [.stripOne](#LPActor+stripOne) ⇒ <code>void</code> \| <code>\*</code>
    * [.wantsBabies](#LPActor+wantsBabies) ⇒ <code>LPBoolean</code>
    * [.age](#LPActor+age) : <code>LPFloat</code>
    * [.arousal](#LPActor+arousal) : <code>LPFloat</code>
    * [.attractiontoplayer](#LPActor+attractiontoplayer) : <code>LPFloat</code>
    * [.attractiveness](#LPActor+attractiveness) : <code>LPFloat</code>
    * [.car_value](#LPActor+car_value) : <code>LPFloat</code>
    * [.children](#LPActor+children) : <code>LPFloat</code>
    * [.cooking](#LPActor+cooking) : <code>LPFloat</code>
    * [.dance](#LPActor+dance) : <code>LPFloat</code>
    * [.energy](#LPActor+energy) : <code>LPFloat</code>
    * [.fertility](#LPActor+fertility) : <code>LPFloat</code>
    * [.fitness](#LPActor+fitness) : <code>LPFloat</code>
    * [.incest](#LPActor+incest) : <code>LPFloat</code>
    * [.intelligence](#LPActor+intelligence) : <code>LPFloat</code>
    * [.interpersonal](#LPActor+interpersonal) : <code>LPFloat</code>
    * [.intoxication](#LPActor+intoxication) : <code>LPFloat</code>
    * [.jobexperience](#LPActor+jobexperience) : <code>LPFloat</code>
    * [.jobperformance](#LPActor+jobperformance) : <code>LPFloat</code>
    * [.martial](#LPActor+martial) : <code>LPFloat</code>
    * [.masochist](#LPActor+masochist) : <code>LPFloat</code>
    * [.money](#LPActor+money) : <code>LPFloat</code>
    * [.mood](#LPActor+mood) : <code>LPFloat</code>
    * [.muscle](#LPActor+muscle) : <code>LPFloat</code>
    * [.music](#LPActor+music) : <code>LPFloat</code>
    * [.perversion](#LPActor+perversion) : <code>LPFloat</code>
    * [.pet_health](#LPActor+pet_health) : <code>LPFloat</code>
    * [.pornfame](#LPActor+pornfame) : <code>LPFloat</code>
    * [.rapportwithplayer](#LPActor+rapportwithplayer) : <code>LPFloat</code>
    * [.sneak](#LPActor+sneak) : <code>LPFloat</code>
    * [.stock_alcohol](#LPActor+stock_alcohol) : <code>LPFloat</code>
    * [.stock_book](#LPActor+stock_book) : <code>LPFloat</code>
    * [.stock_coffee](#LPActor+stock_coffee) : <code>LPFloat</code>
    * [.stock_condom](#LPActor+stock_condom) : <code>LPFloat</code>
    * [.stock_flower](#LPActor+stock_flower) : <code>LPFloat</code>
    * [.stock_gift](#LPActor+stock_gift) : <code>LPFloat</code>
    * [.stock_haircare](#LPActor+stock_haircare) : <code>LPFloat</code>
    * [.stock_ingredient](#LPActor+stock_ingredient) : <code>LPFloat</code>
    * [.stock_juice](#LPActor+stock_juice) : <code>LPFloat</code>
    * [.stock_makeup](#LPActor+stock_makeup) : <code>LPFloat</code>
    * [.stock_meal](#LPActor+stock_meal) : <code>LPFloat</code>
    * [.stock_movie](#LPActor+stock_movie) : <code>LPFloat</code>
    * [.stock_musicalinstrument](#LPActor+stock_musicalinstrument) : <code>LPFloat</code>
    * [.stock_petfood](#LPActor+stock_petfood) : <code>LPFloat</code>
    * [.stock_photo](#LPActor+stock_photo) : <code>LPFloat</code>
    * [.stock_pill](#LPActor+stock_pill) : <code>LPFloat</code>
    * [.stock_skincare](#LPActor+stock_skincare) : <code>LPFloat</code>
    * [.stock_snack](#LPActor+stock_snack) : <code>LPFloat</code>
    * [.stock_soda](#LPActor+stock_soda) : <code>LPFloat</code>
    * [.stock_supplement](#LPActor+stock_supplement) : <code>LPFloat</code>
    * [.stock_tea](#LPActor+stock_tea) : <code>LPFloat</code>
    * [.stock_tobacco](#LPActor+stock_tobacco) : <code>LPFloat</code>
    * [.stock_video](#LPActor+stock_video) : <code>LPFloat</code>
    * [.dialogue(text, [mood])](#LPActor+dialogue)

<a name="LPActor+name"></a>

### lpActor.name : <code>string</code>
Actors Name

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+animate"></a>

### lpActor.animate
Make the actor do something. If no parameter is given current animation will be stopped and actor will go idle.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Description |
| --- | --- |
| animation | undefined or one of: martialart, drinkglass, dance, smoke, pray, sofawatch, browse, call, socialize, work, sweep, bathe, drinkbottle, lecture, theatrewatch, write, groupdance, call, sneak, camera, makeup, eat, toilet, bathe, masturbate, drinktea, smoke, strip, managefinances, receivelapdance, dental, beauty, health, haircut, weights, yoga, na_sleep, na_running |

<a name="LPActor+animateFnt"></a>

### lpActor.animateFnt
Make the actor use a furniture animation / pose with a specific object. Use the room editor to get x y z of the furniture. Filter is usually sit, use, lie or work

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param |
| --- |
| x | 
| y | 
| z | 
| filter | 

<a name="LPActor+animatePair"></a>

### lpActor.animatePair ⇒ <code>void</code> \| <code>\*</code>
Animates a pair of actors

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| secondActor | [<code>LPActor</code>](#LPActor) |  |
| animation | <code>string</code> | can be one of Kissing, Vaginal, ...? |

<a name="LPActor+blendAppearanceFrom"></a>

### lpActor.blendAppearanceFrom ⇒ [<code>LPActor</code>](#LPActor)
Blends an actors appearance from two actors.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
**Returns**: [<code>LPActor</code>](#LPActor) - this actor for chaining  

| Param | Type |
| --- | --- |
| firstActor | [<code>LPActor</code>](#LPActor) | 
| secondActor | [<code>LPActor</code>](#LPActor) | 

**Example**  
```js
SceneStart()"I wonder what a future child of me and my date would look like ..."Actor = Player.generateRelativeMatchRace()Actor.blendAppearanceFrom(Player, CurrentCompanion)Actor.show()"Probably like this ..."SceneEnd()
```
<a name="LPActor+blendPreset"></a>

### lpActor.blendPreset ⇒ [<code>LPActor</code>](#LPActor)
Blend this actor with a preset, usually called after generatePerson().Presets are contained in a module's folder for the purpose, and can contain either body morphing or stat-related intel.PresetID is the filename without the extension.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
**Returns**: [<code>LPActor</code>](#LPActor) - this actor for chaining  

| Param | Type |
| --- | --- |
| presetID | <code>string</code> | 

**Example**  
```js
// We want a male bodybuilderBodybuilder = generatePerson()  // just so that we get the random stats etc, but this might generate a femaleBodybuilder.blendPreset(bodybuilder)  // if the above is female, then this will reset face and hair to the default male face and hair, so it's best to follow up withActor.randomizeFace()Actor.randomizeHairs()
```
<a name="LPActor+changeSex"></a>

### lpActor.changeSex
Change to the opposite sex, used for TF start

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+cloneFrom"></a>

### lpActor.cloneFrom ⇒ <code>void</code> \| <code>\*</code>
Make an actor identical to another actor (stats, appearance, names, sexual preferences, etc). Used in incest_relationship.lpscene to switch between relative and normal NPC statuses.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type |
| --- | --- |
| actor | [<code>LPActor</code>](#LPActor) | 

**Example**  
```js
actor2 = generatePerson()actor2.cloneFrom(Actor)  // Actor2 is now a duplicate of Actoractor2.deletePerson() // Bye bye, your clone has replaced youactor2.dress()actor2.show(2)
```
<a name="LPActor+closeEyes"></a>

### lpActor.closeEyes ⇒ <code>void</code> \| <code>\*</code>
force actor to close or open their eyes

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type |
| --- | --- |
| isClosed | <code>boolean</code> | 

**Example**  
```js
Masseuse.dialog("Just lie down and relax.")Player.CloseEyes(true)Mom.dialog("Hey, wake up, sleepy head! You're about to be late for work!", "Angry")Player.CloseEyes(false)
```
<a name="LPActor+clothesContain"></a>

### lpActor.clothesContain
Check if any equipped apparel has an ID that contains the keyword

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param |
| --- |
| keyword | 
| name | 

**Example**  
```js
if (Actor.clothesContain('Jeans')) {    scene.narrative("<Actor.name> is wearing some sorts of jeans")}
```
<a name="LPActor+countPregnancyDays"></a>

### lpActor.countPregnancyDays ⇒ <code>LPFloat</code>
Returns the number of days a player has been pregnant.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+dress"></a>

### lpActor.dress
If there's nothing in the bracket, it will dress the actor fully appropriate to the current building. If a clothing piece is specified, will put that on only. Check LifePlay\Content\Heavy\Clothes for the names of the items

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type |
| --- | --- |
| clothes | <code>string</code> \| <code>LPString</code> | 

**Example**  
```js
scene.setBackground("work")Player.dress()  // will put on a full suit with oxford shoes etc and underwear underneath// orPlayer.dress("Casual-Clothes_1_F") // will put on casual clothes only, no shoe or underwear
```
<a name="LPActor+dressBondage"></a>

### lpActor.dressBondage
Put a bdsm piece on an actor. List is in LifePlay\Content\Heavy\New2\BDSM\Clothes (the ones with the prefix Bdg_ )

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param |
| --- |
| bondageGearID | 

**Example**  
```js
Actor.dressBondage("Bdg_Blindfold")
```
<a name="LPActor+dressExcept"></a>

### lpActor.dressExcept
Dress this person but leave the specified slots unmodified. Used for lingerie modelling.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| slots | <code>Array.&lt;string&gt;</code> | 'Outerwear', 'Headwear', 'Eyewear', 'Top', 'Top_Under', 'Bottom', 'Bottom_Under', 'Foot', 'Foot_Under' |

**Example**  
```js
scene.narration("Looks like they haven't got far at all and are still choosing lingerie ...")Actor.dressExcept(["Outerwear", "Top", "Bottom", "Foot", "Headwear", "Eyewear"])Actor2.dialog("How about this?")
```
<a name="LPActor+dressGuard"></a>

### lpActor.dressGuard
Dress the person in prison guard outfit (3d assets not made yet, so this actually just calls normal Dress instead).

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+dressPrisoner"></a>

### lpActor.dressPrisoner
Dress the person in prison outfit (3d assets not made yet, so this actually just calls normal Dress instead).

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+dressUniform"></a>

### lpActor.dressUniform
Put on appropriate uniform for this person's profession or specific clothing

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| clothing | <code>string</code> \| <code>LPString</code> | empty or one of Doctor, Nurse, sexwork, Police, Prison, Crime, Wedding, Fast_food, Place_of_worship |

**Example**  
```js
Actor.SetJob(Doctor)Actor.dressUniform()// orActor.dressUniform("Prison")
```
<a name="LPActor+dressWedding"></a>

### lpActor.dressWedding
This command puts the actor in a wedding dress or suit.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
**Example**  
```js
scene.narration("It took quite a bit of doing, getting into that corset, but I finally was good to go, and ready to step down the aisle.")scene.setBackground(place_of_worship)Player.dressWedding()
```
<a name="LPActor+endPregnancy"></a>

### lpActor.endPregnancy ⇒ <code>void</code> \| <code>\*</code>
Ends the pregnancy of the actor or player.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
**Example**  
```js
scene.narration("Sometimes in life difficult choices must be made ...")Player.strip()Player.endPregnancy()scene.narration("Thankfully the procedure went according to plans, with no lasting impact on my future health and fertility.")
```
<a name="LPActor+enterFirstName"></a>

### lpActor.enterFirstName
Displays a text box so that the player can type in this actor's first name. Used for naming children and pets.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+generatePersonMatchRace"></a>

### lpActor.generatePersonMatchRace ⇒ <code>LPNPC</code>
Generate a new actor that matches the racial preset of another person (for example, to generate a relative of an NPC). The actor generated using this method will be permanent right away, meaning they will remain after the current scene ends and are usable for some functions that only work with permanent actors.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
**Example**  
```js
var Actor = Actor2.generatePersonMatchRace()  // If Actor2 is east asian, Actor will also be east asianActor.dress()Actor.show(2)Player.exchangeContact(Actor) // this will succeed because this is a permanent actor
```
<a name="LPActor+generatePersonTemporaryMatchRace"></a>

### lpActor.generatePersonTemporaryMatchRace ⇒
Generate a new actor that matches the racial preset of another person (for example, to generate a relative of an NPC). The actor generated using this method will be permanent right away, meaning they will remain after the current scene ends and are usable for some functions that only work with permanent actors.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
**Returns**: LPNPC  
**Example**  
```js
var Actor = Actor2.generatePersonMatchRace()  // If Actor2 is east asian, Actor will also be east asianActor.dress()Actor.show(2)Player.exchangeContact(Actor) // this will fail because Actor isn't a permanent actor
```
<a name="LPActor+generateRelativeMatchRace"></a>

### lpActor.generateRelativeMatchRace ⇒ <code>LPNPC</code>
Generate a new relative actor that matches the racial preset of another person (for example, to generate my relative). The actor generated using this method will be permanent right away, meaning they will remain after the current scene ends and are usable for some functions that only work with permanent actors.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
**Example**  
```js
let Actor = $let('Actor', Player.generateRelativeMatchRace())  // This way if you're black, your brother wouldn't turn up white.Actor.dress()Actor.show(2)
```
<a name="LPActor+getActorVar"></a>

### lpActor.getActorVar ⇒ <code>void</code> \| <code>\*</code>
Use this function to get the float value of a variable from a certain actor.The actor can be the Player or any other actor.This function also allows testing it a certain TAG is assigned to an actors.If a tag / value was not assigned the function will return 0.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param |
| --- |
| varOrTag | 

**Example**  
```js
Player.setActorVar("tag_Player", 1) // Set the Tag 'Player' to the Player's characterPlayer.setActorVar("tag_Player", -1) // Remove the Tag 'Player' from the Player's characterPlayer.setActorVar("SomeVariable", 42)     // Set the variable to 42var val = Player.getActorVar("SomeVariable")scene.narration("The value of SomeVariable is <val>.")
```
<a name="LPActor+getBabyDaddy"></a>

### lpActor.getBabyDaddy ⇒ <code>LPNPC</code>
Returns the Actor who got the this Actor pregnant.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
**Example**  
```js
var BioDaddy = Actor.getBabyDaddy()
```
<a name="LPActor+getBuilding"></a>

### lpActor.getBuilding ⇒ <code>LPBuilding</code>
Get a building related to this NPC AI-wise. Parameters are Home, Work and Current.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | current, home, work |
| [name] | <code>string</code> | optional variable name |

<a name="LPActor+getID"></a>

### lpActor.getID ⇒ <code>LPFloat</code>
Get the ID number of this actor, which can then be saved as a global variable and then called on using getSpecific.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
**Example**  
```js
var ID = Actor.getID()var SugarDaddy = $global('SugarDaddy')SugarDaddy.setGlobal(ID)// another scenevar SugarDaddy = $global('SugarDaddy')var ID = SugarDaddy.getGlobal()var Actor$if('ID != 0', ()=>{    Actor = scene.getSpecific(ID)})
```
<a name="LPActor+getMorphValue"></a>

### lpActor.getMorphValue ⇒ <code>LPFloat</code>
Returns morph value as a float. Morph list can be found in any lpcharacter file

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param |
| --- |
| morphName | 

<a name="LPActor+getPregnancyTag"></a>

### lpActor.getPregnancyTag ⇒ <code>LPString</code>
Returns the tag of the Animation that was active when the Actor got pregnant?

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
**Returns**: <code>LPString</code> - - Aggressive/AggressiveFM/?  
**Example**  
```js
var Rape = Actor.getPregnancyTag()$if(Rape.isString("Aggressive"), ()=>{    scene.narration('<Actor.name> is pregnant from being raped!')})$if(Rape.isString("AggressiveFM") || , ()=>{    scene.narration('<Actor.name> is pregnant from a rape she committed!')})
```
<a name="LPActor+getRace"></a>

### lpActor.getRace ⇒ <code>string</code>
Returns the Actors race.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
**Example**  
```js
var Race = Actor.getRace()scene.narration("I've always had a major thing for a <Actor.handsome_or_beautiful> <Race> like <Actor.name> and couldn't help but fantasize about taking <Actor.him_or_her> to bed. Should I be direct and confess my little <Race> fetish to <Actor.name> now?")
```
<a name="LPActor+getRelatedPerson"></a>

### lpActor.getRelatedPerson ⇒ <code>LPNPC</code> \| <code>undefined</code>
Get a single NPC with a relationship of the specified type or another with the specified NPC. The list for 'Type' is:

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| relationshipTypes | <code>Array.&lt;string&gt;</code> | Dating, Spouses, Siblings, ParentChild, Cousins, BossEmployee, Colleagues |

<a name="LPActor+getRelatedPersonQuick"></a>

### lpActor.getRelatedPersonQuick ⇒ <code>LPNPC</code> \| <code>undefined</code>
Same as getRelatedPerson() but only load the necessary data for the actor needed for AI stuffs. Only meant for lpai files, actors gotten this way aren't meant to be shown to the player on screen.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| relationshipTypes | <code>Array.&lt;string&gt;</code> | Dating, Spouses, Siblings, ParentChild, Cousins, BossEmployee, Colleagues |

<a name="LPActor+hadSex"></a>

### lpActor.hadSex ⇒ <code>boolean</code>
Check if this actor has had sex with the player at any point in this play through

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+hasSameInterestAs"></a>

### lpActor.hasSameInterestAs ⇒ <code>LPBoolean</code>
returns true if two actors have identical sexual orientations

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| actor | [<code>LPActor</code>](#LPActor) |  |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+hide"></a>

### lpActor.hide ⇒ <code>void</code> \| <code>\*</code>
Hide the actor or player from the player's view. Opposite to show().

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+impregnate"></a>

### lpActor.impregnate ⇒ <code>void</code> \| <code>\*</code>
Force impregnate someone. Works even without sex!

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| [target] | [<code>LPActor</code>](#LPActor) | optional - if target is provided then this Actor will impregnate target actor |

**Example**  
```js
Player.impregnate() // Oh no, I'm Virgin Mary now.
```
<a name="LPActor+isAsexual"></a>

### lpActor.isAsexual ⇒ <code>LPBoolean</code>
returns true if the actor doesn't have any of the gender preferences "interested in male", "interested in female", or "interested in trans".

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isAt"></a>

### lpActor.isAt ⇒ <code>LPBoolean</code>
Used by AI. May not work on player.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| location | <code>string</code> \| <code>LPString</code> |  |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

**Example**  
```js
Actor.isAt("work")
```
<a name="LPActor+isBisexual"></a>

### lpActor.isBisexual ⇒ <code>LPBoolean</code>
If interested in both same gender and opposite gender

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isBisexualNonTrans"></a>

### lpActor.isBisexualNonTrans ⇒ <code>LPBoolean</code>
Same as isBisexual but stricter, returns false no matter own gender if interested in Trans

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isDating"></a>

### lpActor.isDating ⇒ <code>LPBoolean</code>
Check if the actor is in a relationship with the player. Can also be used to check if the Player is dating anyone i.e. Player.isDating()Alternatively, if the Actor is Player then it checks whether the player is currently in a relationship at all.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isDominantSex"></a>

### lpActor.isDominantSex ⇒ <code>LPBoolean</code>
Check if the one actor would take a dominant role in a sexual relationship with another actor. This doesn't take into account sexual orientation. The rule is male is dominant to female, female with penis dominant to female with vagina. When it's male-male or female-female, it compares the masochist / submissive stat, the actor with lower masochist is dominant. Useful for mostly gender-related roles (opening doors, who walks who home etc)

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| actor | [<code>LPActor</code>](#LPActor) |  |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isEquipped"></a>

### lpActor.isEquipped ⇒ <code>LPBoolean</code>
Check if an actor is wearing any clothes in a certain 'slot'. Will return true even if it's an underwear hidden under other clothes. The slots are:

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| slot | <code>string</code> |  |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isFemale"></a>

### lpActor.isFemale ⇒ <code>LPBoolean</code>
Check if an actor is a woman. False if trans.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isGay"></a>

### lpActor.isGay ⇒ <code>LPBoolean</code>
Check if an actor is only interested in the same sex, i.e. false if bi

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isGayNonTrans"></a>

### lpActor.isGayNonTrans ⇒ <code>LPBoolean</code>
Same as isGay but stricter, returns false no matter own gender if interested in Trans

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isInterestedIn"></a>

### lpActor.isInterestedIn ⇒ <code>LPBoolean</code>
Check if the one actor is interested sexually in another actor's gender. Does not take into account attractiontoplayer stat, just look at Actor1's sexual orientation and Actor2's gender.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| actor | [<code>LPActor</code>](#LPActor) |  |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isInterestedInMen"></a>

### lpActor.isInterestedInMen ⇒ <code>LPBoolean</code>
Check if an actor is interested in men

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isInterestedInTrans"></a>

### lpActor.isInterestedInTrans ⇒ <code>LPBoolean</code>
Check if an actor is interested in trans women

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isInterestedInWomen"></a>

### lpActor.isInterestedInWomen ⇒ <code>LPBoolean</code>
Check if an actor is interested in women

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isJob"></a>

### lpActor.isJob ⇒ <code>LPBoolean</code>
Check if actor is a doctor or a nurse

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| job | <code>string</code> \| <code>LPString</code> | doctor or nurse |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isMale"></a>

### lpActor.isMale ⇒ <code>LPBoolean</code>
Check if an actor is a man. ??True if trans??

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isNaked"></a>

### lpActor.isNaked ⇒ <code>LPBoolean</code>
Check if the actor is completely without any clothes

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isNude"></a>

### lpActor.isNude ⇒ <code>LPBoolean</code>
Check if the actor is nude? How is this different from isNaked?

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isOnPeriod"></a>

### lpActor.isOnPeriod ⇒ <code>LPBoolean</code>
Returns true if actor is on period.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isPlayer"></a>

### lpActor.isPlayer ⇒ <code>LPBoolean</code>
Check if the actor is the player.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isPregnant"></a>

### lpActor.isPregnant ⇒ <code>LPBoolean</code>
Check if the actor is pregnant.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isProstitute"></a>

### lpActor.isProstitute ⇒ <code>LPBoolean</code>
Returns true if the actor is a sex worker.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isRace"></a>

### lpActor.isRace ⇒ <code>LPBoolean</code>
Returns true is Actor is race

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| race | <code>string</code> \| <code>LPString</code> | Human, Elf, Orc, Vampire |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isSameAs"></a>

### lpActor.isSameAs ⇒ <code>LPBoolean</code>
Check if the two actors are the same person

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| actor | [<code>LPActor</code>](#LPActor) |  |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isSameGender"></a>

### lpActor.isSameGender ⇒ <code>LPBoolean</code>
Check if the two actors are the same gender

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| actor | [<code>LPActor</code>](#LPActor) |  |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isSameRace"></a>

### lpActor.isSameRace ⇒ <code>LPBoolean</code>
Check if the two actors are the same race

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| actor | [<code>LPActor</code>](#LPActor) |  |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isSlotOccupied"></a>

### lpActor.isSlotOccupied ⇒ <code>LPBoolean</code>
Checks if a clothing slot is occupied.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| slot | <code>string</code> |  |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isStraight"></a>

### lpActor.isStraight ⇒ <code>LPBoolean</code>
Check if an actor is only interested in the opposite sex, i.e. false if bi

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isStraightNonTrans"></a>

### lpActor.isStraightNonTrans ⇒ <code>LPBoolean</code>
Same as isStraight but stricter, returns false no matter own gender if interested in Trans

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isTrans"></a>

### lpActor.isTrans ⇒ <code>LPBoolean</code>
Check if the actor is transsexual.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isValid"></a>

### lpActor.isValid ⇒ <code>LPBoolean</code>
Check if an actor variable is valid. Most commonly used after GetPerson(), GetCompanion() or GetSpecific()

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isVirgin"></a>

### lpActor.isVirgin ⇒ <code>LPBoolean</code>
Check if the actor is a virgin.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+isVisible"></a>

### lpActor.isVisible ⇒ <code>LPBoolean</code>
Check if an actor is wearing any clothes in a certain 'slot'. Will return false if it's an underwear hidden under other clothes. The slots are:

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| slot | <code>string</code> | Outerwear, Headwear, Eyewear, Top, Top_Under, Bottom, Bottom_Under, Foot, Foot_Under |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+loadPreset"></a>

### lpActor.loadPreset ⇒ [<code>LPActor</code>](#LPActor)
Load the preset(s) onto this character, resetting them to default first before doing so.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
**Returns**: [<code>LPActor</code>](#LPActor) - "this" LPActor for chaining  

| Param | Type |
| --- | --- |
| presets | <code>Array.&lt;string&gt;</code> | 

**Example**  
```js
Actor.loadPreset(["bodybuilder_F"])$random(()=>{    Actor.loadPreset(["hourglass_F"]) // Just a normal hourglass girl    Actor.blendPreset(["hourglass_F"]) // There is still signs of the beefcake})
```
<a name="LPActor+makeInterested"></a>

### lpActor.makeInterested
Changes this Actor's sexual orientation so that they become interested in Actor.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type |
| --- | --- |
| actor | [<code>LPActor</code>](#LPActor) | 

<a name="LPActor+matchLastName"></a>

### lpActor.matchLastName
Change this Actor's last name to match that of actor

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type |
| --- | --- |
| actor | [<code>LPActor</code>](#LPActor) | 

<a name="LPActor+modifyActorVar"></a>

### lpActor.modifyActorVar ⇒ <code>void</code> \| <code>\*</code>
Use this function to modify the float value of a variable by a given value.The actor can be the Player or any other actor.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| value | <code>number</code> \| <code>LPFloat</code> | 

<a name="LPActor+modifySalary"></a>

### lpActor.modifySalary ⇒ <code>void</code> \| <code>\*</code>
Multiply the actors salary by value ie salary of 100 * value of 1.1 would become 110.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type |
| --- | --- |
| value | <code>number</code> \| <code>LPFloat</code> | 

<a name="LPActor+moveToPerson"></a>

### lpActor.moveToPerson ⇒ <code>void</code> \| <code>\*</code>
Moves this actor towards actor and head tracks actor.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type |
| --- | --- |
| actor | [<code>LPActor</code>](#LPActor) | 

<a name="LPActor+moveToPersonStand"></a>

### lpActor.moveToPersonStand ⇒ <code>void</code> \| <code>\*</code>
Make this actor move toward another actors position.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| actor | [<code>LPActor</code>](#LPActor) |  |
| distance | <code>number</code> \| <code>LPFloat</code> | Distance to stay away from 'target'. 0 = Move to exact the same spot as 'target'. |

<a name="LPActor+setActorVar"></a>

### lpActor.setActorVar ⇒ <code>void</code> \| <code>\*</code>
Use this function to set a float variable to a certain actor.The actor can be the Player or any other actor.This function also allows setting TAGs to actors.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param |
| --- |
| name | 
| value | 

**Example**  
```js
Player.setActorVar("tag_Player", 1) // Set the Tag 'Player' to the Player's characterPlayer.setActorVar("tag_Player", -1) // Remove the Tag 'Player' from the Player's characterPlayer.setActorVar("SomeVariable", 42)     // Set the variable to 42var val = Player.getActorVar("SomeVariable")scene.narration("The value of SomeVariable is <val>.")
```
<a name="LPActor+setCurrentLocation"></a>

### lpActor.setCurrentLocation ⇒ <code>void</code> \| <code>\*</code>
Change an actor's current location. Used with findNearbyBuilding or getBuilding(Home) or getBuilding(Work), mostly in lpai files.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type |
| --- | --- |
| buildingVariable | <code>LPBuilding</code> | 

<a name="LPActor+setDatingId"></a>

### lpActor.setDatingId
Used for polyamorous for setting up which lover to break up with before you use loseDating()

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+setExRelative"></a>

### lpActor.setExRelative ⇒ <code>void</code> \| <code>\*</code>
Make this Actor remember that they used to be related to the actor.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type |
| --- | --- |
| actor | [<code>LPActor</code>](#LPActor) | 

<a name="LPActor+setJob"></a>

### lpActor.setJob ⇒ <code>void</code> \| <code>\*</code>
Set the job for this NPC. Only Doctor and Nurse are available now

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param |
| --- |
| job | 

<a name="LPActor+setMorphValue"></a>

### lpActor.setMorphValue ⇒ <code>void</code> \| <code>\*</code>
Morph list can be found in any lpcharacter file.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param |
| --- |
| morphName | 
| value | 

<a name="LPActor+setNoRedress"></a>

### lpActor.setNoRedress ⇒ <code>void</code> \| <code>\*</code>
Prevents an Actor from redressing. May not work on player.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+setWantsBabies"></a>

### lpActor.setWantsBabies ⇒ <code>void</code> \| <code>\*</code>
If wantsBaby is true then the actor wants a baby

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param |
| --- |
| wantsBaby | 

<a name="LPActor+sex"></a>

### lpActor.sex ⇒ <code>void</code> \| <code>\*</code>
Start a sex scene involving these actors. If the player is involved, it will also check whether the player is cheating or not and add to the affair list accordingly.The order in which roles are given to actors for the sex scene (important for descriptions and dirtytalk) depends largely on gender and domincance. Males are given roles before transsexuals, then women. Between people of the same gender, the most dominant one (lowest submission stat) is given a role first.However, the order of the actor parameters to the Sex() function matters somewhat in group sex: Sex(Male1, Player, Male2) will be different from Sex(Male2, Player, Male1).

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type |
| --- | --- |
| actors | [<code>Array.&lt;LPActor&gt;</code>](#LPActor) | 

<a name="LPActor+show"></a>

### lpActor.show ⇒ <code>void</code> \| <code>\*</code>
Show this actor on screen. The player's default position is 0. 1 - 6 is counted from right to left of the screen.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param |
| --- |
| positionIndex | 

<a name="LPActor+strip"></a>

### lpActor.strip ⇒ <code>void</code> \| <code>\*</code>
Strip this actor of all clothes

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stripOne"></a>

### lpActor.stripOne ⇒ <code>void</code> \| <code>\*</code>
Strip this actor of a single currently equipped piece of clothes (but still follows logical order, so no stripping underwear before outerwear etc). Used for strip poker.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+wantsBabies"></a>

### lpActor.wantsBabies ⇒ <code>LPBoolean</code>
Check if the actor wants a baby.

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| <code>LPString</code> | handled by script preprocessor for vars |

<a name="LPActor+age"></a>

### lpActor.age : <code>LPFloat</code>
age

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+arousal"></a>

### lpActor.arousal : <code>LPFloat</code>
arousal

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+attractiontoplayer"></a>

### lpActor.attractiontoplayer : <code>LPFloat</code>
attractiontoplayer

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+attractiveness"></a>

### lpActor.attractiveness : <code>LPFloat</code>
attractiveness

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+car_value"></a>

### lpActor.car\_value : <code>LPFloat</code>
car_value

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+children"></a>

### lpActor.children : <code>LPFloat</code>
children

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+cooking"></a>

### lpActor.cooking : <code>LPFloat</code>
cooking

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+dance"></a>

### lpActor.dance : <code>LPFloat</code>
dance

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+energy"></a>

### lpActor.energy : <code>LPFloat</code>
energy

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+fertility"></a>

### lpActor.fertility : <code>LPFloat</code>
fertility

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+fitness"></a>

### lpActor.fitness : <code>LPFloat</code>
fitness

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+incest"></a>

### lpActor.incest : <code>LPFloat</code>
incest

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+intelligence"></a>

### lpActor.intelligence : <code>LPFloat</code>
intelligence

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+interpersonal"></a>

### lpActor.interpersonal : <code>LPFloat</code>
interpersonal

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+intoxication"></a>

### lpActor.intoxication : <code>LPFloat</code>
intoxication

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+jobexperience"></a>

### lpActor.jobexperience : <code>LPFloat</code>
jobexperience

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+jobperformance"></a>

### lpActor.jobperformance : <code>LPFloat</code>
jobperformance

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+martial"></a>

### lpActor.martial : <code>LPFloat</code>
martial

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+masochist"></a>

### lpActor.masochist : <code>LPFloat</code>
masochist

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+money"></a>

### lpActor.money : <code>LPFloat</code>
money

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+mood"></a>

### lpActor.mood : <code>LPFloat</code>
mood

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+muscle"></a>

### lpActor.muscle : <code>LPFloat</code>
muscle

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+music"></a>

### lpActor.music : <code>LPFloat</code>
music

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+perversion"></a>

### lpActor.perversion : <code>LPFloat</code>
perversion

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+pet_health"></a>

### lpActor.pet\_health : <code>LPFloat</code>
pet_health

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+pornfame"></a>

### lpActor.pornfame : <code>LPFloat</code>
pornfame

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+rapportwithplayer"></a>

### lpActor.rapportwithplayer : <code>LPFloat</code>
rapportwithplayer

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+sneak"></a>

### lpActor.sneak : <code>LPFloat</code>
sneak

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_alcohol"></a>

### lpActor.stock\_alcohol : <code>LPFloat</code>
stock_alcohol

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_book"></a>

### lpActor.stock\_book : <code>LPFloat</code>
stock_book

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_coffee"></a>

### lpActor.stock\_coffee : <code>LPFloat</code>
stock_coffee

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_condom"></a>

### lpActor.stock\_condom : <code>LPFloat</code>
stock_condom

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_flower"></a>

### lpActor.stock\_flower : <code>LPFloat</code>
stock_flower

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_gift"></a>

### lpActor.stock\_gift : <code>LPFloat</code>
stock_gift

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_haircare"></a>

### lpActor.stock\_haircare : <code>LPFloat</code>
stock_haircare

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_ingredient"></a>

### lpActor.stock\_ingredient : <code>LPFloat</code>
stock_ingredient

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_juice"></a>

### lpActor.stock\_juice : <code>LPFloat</code>
stock_juice

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_makeup"></a>

### lpActor.stock\_makeup : <code>LPFloat</code>
stock_makeup

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_meal"></a>

### lpActor.stock\_meal : <code>LPFloat</code>
stock_meal

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_movie"></a>

### lpActor.stock\_movie : <code>LPFloat</code>
stock_movie

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_musicalinstrument"></a>

### lpActor.stock\_musicalinstrument : <code>LPFloat</code>
stock_musicalinstrument

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_petfood"></a>

### lpActor.stock\_petfood : <code>LPFloat</code>
stock_petfood

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_photo"></a>

### lpActor.stock\_photo : <code>LPFloat</code>
stock_photo

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_pill"></a>

### lpActor.stock\_pill : <code>LPFloat</code>
stock_pill

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_skincare"></a>

### lpActor.stock\_skincare : <code>LPFloat</code>
stock_skincare

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_snack"></a>

### lpActor.stock\_snack : <code>LPFloat</code>
stock_snack

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_soda"></a>

### lpActor.stock\_soda : <code>LPFloat</code>
stock_soda

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_supplement"></a>

### lpActor.stock\_supplement : <code>LPFloat</code>
stock_supplement

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_tea"></a>

### lpActor.stock\_tea : <code>LPFloat</code>
stock_tea

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_tobacco"></a>

### lpActor.stock\_tobacco : <code>LPFloat</code>
stock_tobacco

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+stock_video"></a>

### lpActor.stock\_video : <code>LPFloat</code>
stock_video

**Kind**: instance property of [<code>LPActor</code>](#LPActor)  
<a name="LPActor+dialogue"></a>

### lpActor.dialogue(text, [mood])
Text the actor will say.

**Kind**: instance method of [<code>LPActor</code>](#LPActor)  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 
| [mood] | <code>string</code> | 

