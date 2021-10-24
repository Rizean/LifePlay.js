<a name="LPPlayer"></a>

## LPPlayer : [<code>LPPlayer</code>](#LPPlayer)
Class representing a LifePlay Player.

**Kind**: global class  

* [LPPlayer](#LPPlayer) : [<code>LPPlayer</code>](#LPPlayer)
    * [.blockContact](#LPPlayer+blockContact) ⇒ <code>void</code> \| <code>\*</code>
    * [.chooseContact](#LPPlayer+chooseContact) ⇒ <code>void</code> \| <code>\*</code>
    * [.chooseMajor](#LPPlayer+chooseMajor) ⇒ <code>void</code> \| <code>\*</code>
    * [.contractSTD](#LPPlayer+contractSTD) ⇒ <code>void</code> \| <code>\*</code>
    * [.datingHasHome](#LPPlayer+datingHasHome) ⇒ <code>void</code> \| <code>\*</code>
    * [.divorce](#LPPlayer+divorce) ⇒ <code>\*</code>
    * [.endDate](#LPPlayer+endDate) ⇒ <code>void</code> \| <code>\*</code>
    * [.endOpenRelationship](#LPPlayer+endOpenRelationship) ⇒ <code>void</code> \| <code>\*</code>
    * [.endPrison](#LPPlayer+endPrison) ⇒ <code>void</code> \| <code>\*</code>
    * [.enterBusinessName](#LPPlayer+enterBusinessName) ⇒ <code>void</code> \| <code>\*</code>
    * [.exchangeContact](#LPPlayer+exchangeContact)
    * [.forgiveAffairs](#LPPlayer+forgiveAffairs) ⇒ <code>void</code> \| <code>\*</code>
    * [.getMarried](#LPPlayer+getMarried) ⇒ <code>void</code> \| <code>\*</code>
    * [.givePlayerDefaultClothes](#LPPlayer+givePlayerDefaultClothes)
    * [.imprison](#LPPlayer+imprison) ⇒ <code>void</code> \| <code>\*</code>
    * [.loseHome](#LPPlayer+loseHome) ⇒ <code>void</code> \| <code>\*</code>
    * [.loseHomeDating](#LPPlayer+loseHomeDating) ⇒ <code>void</code> \| <code>\*</code>
    * [.loseJob](#LPPlayer+loseJob) ⇒ <code>void</code> \| <code>\*</code>
    * [.losePT](#LPPlayer+losePT) ⇒ <code>void</code> \| <code>\*</code>
    * [.moveFraternity](#LPPlayer+moveFraternity) ⇒ <code>void</code> \| <code>\*</code>
    * [.moveHome](#LPPlayer+moveHome) ⇒ <code>void</code> \| <code>\*</code>
    * [.moveJobs](#LPPlayer+moveJobs) ⇒ <code>void</code> \| <code>\*</code>
    * [.moveSchools](#LPPlayer+moveSchools) ⇒ <code>void</code> \| <code>\*</code>
    * [.moveTo](#LPPlayer+moveTo)
    * [.openRelationship](#LPPlayer+openRelationship) ⇒ <code>boolean</code>
    * [.quitCrime](#LPPlayer+quitCrime) ⇒ <code>void</code> \| <code>\*</code>
    * [.quitFraternity](#LPPlayer+quitFraternity) ⇒ <code>void</code> \| <code>\*</code>
    * [.quitLecturing](#LPPlayer+quitLecturing) ⇒ <code>void</code> \| <code>\*</code>
    * [.quitMedical](#LPPlayer+quitMedical) ⇒ <code>void</code> \| <code>\*</code>
    * [.quitSchool](#LPPlayer+quitSchool) ⇒ <code>void</code> \| <code>\*</code>
    * [.removeAddedClothes](#LPPlayer+removeAddedClothes) ⇒ <code>void</code> \| <code>\*</code>
    * [.setMajor](#LPPlayer+setMajor) ⇒ <code>void</code> \| <code>\*</code>
    * [.setRent](#LPPlayer+setRent)
    * [.startBusiness](#LPPlayer+startBusiness) ⇒ <code>void</code> \| <code>\*</code>
    * [.startDate](#LPPlayer+startDate) ⇒ <code>void</code> \| <code>\*</code>
    * [.startOpenRelationship](#LPPlayer+startOpenRelationship) ⇒ <code>void</code> \| <code>\*</code>
    * [.stopBusiness](#LPPlayer+stopBusiness) ⇒ <code>void</code> \| <code>\*</code>
    * [.getAnyRelative(relativeType)](#LPPlayer+getAnyRelative) ⇒ <code>void</code> \| <code>\*</code>
    * [.getCompanion()](#LPPlayer+getCompanion) ⇒ <code>void</code> \| <code>\*</code>
    * [.getCompanionAny()](#LPPlayer+getCompanionAny) ⇒ <code>void</code> \| <code>\*</code>
    * [.getCompanionCreature()](#LPPlayer+getCompanionCreature) ⇒ <code>void</code> \| <code>\*</code>
    * [.getNumRelatives()](#LPPlayer+getNumRelatives) ⇒ <code>LPFloat</code>
    * [.getRelative(relationshipTypes)](#LPPlayer+getRelative) ⇒ <code>LPActor</code> \| <code>undefined</code>
    * [.getRelativeExcept(relationshipTypes)](#LPPlayer+getRelativeExcept) ⇒ <code>LPActor</code> \| <code>undefined</code>
    * [.getRent()](#LPPlayer+getRent) ⇒ <code>LPFloat</code>
    * [.getSalary()](#LPPlayer+getSalary) ⇒ <code>LPFloat</code>
    * [.getSelectedNPC()](#LPPlayer+getSelectedNPC) ⇒ <code>LPNPC</code>
    * [.getTarget()](#LPPlayer+getTarget) ⇒ <code>LPNPC</code>
    * [.isAtDatingHome()](#LPPlayer+isAtDatingHome) ⇒ <code>LPBoolean</code>
    * [.isAtHome()](#LPPlayer+isAtHome) ⇒ <code>LPBoolean</code>
    * [.isPlayerMarried()](#LPPlayer+isPlayerMarried) ⇒ <code>boolean</code>
    * [.isStudent()](#LPPlayer+isStudent) ⇒ <code>boolean</code>
    * [.isWithCompanion()](#LPPlayer+isWithCompanion) ⇒ <code>LPBoolean</code>
    * [.isWithCompanionCreature()](#LPPlayer+isWithCompanionCreature) ⇒ <code>boolean</code>
    * [.loseDating()](#LPPlayer+loseDating) ⇒ <code>void</code> \| <code>\*</code>
    * [.playerHasHome()](#LPPlayer+playerHasHome) ⇒ <code>boolean</code>
    * [.selectNPC(tag)](#LPPlayer+selectNPC) ⇒ <code>void</code> \| <code>\*</code>
    * [.setFraternityFees(fratFee)](#LPPlayer+setFraternityFees)
    * [.setSalary(salary)](#LPPlayer+setSalary)
    * [.setTuition(tuition)](#LPPlayer+setTuition)

<a name="LPPlayer+blockContact"></a>

### lpPlayer.blockContact ⇒ <code>void</code> \| <code>\*</code>
Remove this actor from your contact list.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type |
| --- | --- |
| actor | <code>LPActor</code> | 

<a name="LPPlayer+chooseContact"></a>

### lpPlayer.chooseContact ⇒ <code>void</code> \| <code>\*</code>
Choose a person from your contact by displaying a option menu while staying in the scene. Must be followed by getSpecific(chooseContact). Probably inferior to selectNPC() unless you really don't want to take the player out of the scene even temporarily.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
Dating(Flirty):: "You naughty <Player.boy_or_girl>! Fancy yourself as a generous <Dating.boyfriend_or_girlfriend> sharer, don't you? Fine then, if that's what turns you on, I can give it a try. Just make sure to find me a cute <Player.boy_or_girl> to date and go home with, okay?""We then went on to discuss potential candidates."chooseContact()Bull = scene.getSpecific(chooseContact)
```
<a name="LPPlayer+chooseMajor"></a>

### lpPlayer.chooseMajor ⇒ <code>void</code> \| <code>\*</code>
Pick the Major for the player, both for teaching and studying. Must be followed by setMajor(). The majors available are hardcoded in the GI file.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
Player.chooseMajor()Player.setMajor()scene.narration("I just selected my <Player.Major> as my major.")
```
<a name="LPPlayer+contractSTD"></a>

### lpPlayer.contractSTD ⇒ <code>void</code> \| <code>\*</code>
Give the player STD

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
contactSTD()narration("Oh no, I have a STD.")
```
<a name="LPPlayer+datingHasHome"></a>

### lpPlayer.datingHasHome ⇒ <code>void</code> \| <code>\*</code>
Checks to see if the player's significant other lives in their own apartment.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
If (!Player.PlayerHasHome()) {  Player.dialog("I can't afford to rent my own apartment.")  If (Player.DatingHasHome()) {    Player.dialog("Maybe I can move in with my girlfriend instead?")  }}
```
<a name="LPPlayer+divorce"></a>

### lpPlayer.divorce ⇒ <code>\*</code>
This command undoes the marriage between player and their husband/wife. It will revert their status to being boyfriend(s)/girlfriend(s) though, so you probably want to follow up with loseDating().

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
Official.dialog("Sign here and here and here and here... Initial here and here and here... Very well, everything's in order.")Player.dialog("About damn time!", "Disgusted")Player.divorce()Player.loseDating()
```
<a name="LPPlayer+endDate"></a>

### lpPlayer.endDate ⇒ <code>void</code> \| <code>\*</code>
End the current 'date', i.e. get rid of the current companion.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
scene.narration("We already hung out for the whole afternoon. It's time to separate.")Player.endDate()
```
<a name="LPPlayer+endOpenRelationship"></a>

### lpPlayer.endOpenRelationship ⇒ <code>void</code> \| <code>\*</code>
Revert your current relationship/ marriage back into a normal closed one (there are now cheating consequences).

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
Player.endOpenRelationship()Player.sex(["NotMyGF"]) // This will NOT be the same as SexNoAffair, your GF could catch you and get upset
```
<a name="LPPlayer+endPrison"></a>

### lpPlayer.endPrison ⇒ <code>void</code> \| <code>\*</code>
Remove the player from prison.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
scene.narration("And I did it! The prison guards were long left behind. Usain Bolt would be proud of that run!")scene.narration("My prison escape was close, but ultimately successful. I'm a free <Player.man_or_woman> again!")Player.endPrison()
```
<a name="LPPlayer+enterBusinessName"></a>

### lpPlayer.enterBusinessName ⇒ <code>void</code> \| <code>\*</code>
Displays a text box so that the player can type in this business's name.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+exchangeContact"></a>

### lpPlayer.exchangeContact
Exchange numbers with this actor.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type |
| --- | --- |
| actor | <code>LPActor</code> | 

**Example**  
```js
scene.narration("We exchanged numbers and parted ways.")Player.exchangeContact(John)
```
<a name="LPPlayer+forgiveAffairs"></a>

### lpPlayer.forgiveAffairs ⇒ <code>void</code> \| <code>\*</code>
Clear all affairs committed while in this current relationship. This is done automatically when SetDating().

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
Dating.dialog("Alright, after everything we've been through, I guess I can forgive you this time ...", "Crying")Player.forgiveAffairs()
```
<a name="LPPlayer+getMarried"></a>

### lpPlayer.getMarried ⇒ <code>void</code> \| <code>\*</code>
Call this function to marry the player to their current bf/gf. This doesn't trigger a wedding scene, but flags them as being married.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
Priest.dialog("I now pronounce you man and wife.")Player.getMarried()
```
<a name="LPPlayer+givePlayerDefaultClothes"></a>

### lpPlayer.givePlayerDefaultClothes
Gives the player default clothing?

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+imprison"></a>

### lpPlayer.imprison ⇒ <code>void</code> \| <code>\*</code>
Send the player to prison.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
scene.narration("The court-appointed lawyer didn't do me much good. I got the expected sentence and was sent on my way to jail.")Player.imprison()
```
<a name="LPPlayer+loseHome"></a>

### lpPlayer.loseHome ⇒ <code>void</code> \| <code>\*</code>
The player moves out of their current home. Set rent to 0. Landlord and neighbours become acquaintances. If the player's SO has a home, they'll move in with them instead.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+loseHomeDating"></a>

### lpPlayer.loseHomeDating ⇒ <code>void</code> \| <code>\*</code>
Your SO moves out of their home, and in with you.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+loseJob"></a>

### lpPlayer.loseJob ⇒ <code>void</code> \| <code>\*</code>
The player stops working at their current company. Set salary to 0. Boss and colleagues become acquaintances.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+losePT"></a>

### lpPlayer.losePT ⇒ <code>void</code> \| <code>\*</code>
The player fires their current personal trainer.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+moveFraternity"></a>

### lpPlayer.moveFraternity ⇒ <code>void</code> \| <code>\*</code>
Move into the current building and make it your new fraternity / sorority

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+moveHome"></a>

### lpPlayer.moveHome ⇒ <code>void</code> \| <code>\*</code>
Move into the current building and make it your new home. Remember to use SetLandlord() and SetRent() separately.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+moveJobs"></a>

### lpPlayer.moveJobs ⇒ <code>void</code> \| <code>\*</code>
Get hired at this current building and make it our new workplace. Remember to use setBoss() and SetSalary() separately.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+moveSchools"></a>

### lpPlayer.moveSchools ⇒ <code>void</code> \| <code>\*</code>
Enroll into the current building and make it your new university

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+moveTo"></a>

### lpPlayer.moveTo
Instantly move the player (and possible companion) to this place. Currently there are only three places: Home, Home_Dating, WorkCan also move to a location

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param |
| --- |
| place | 

**Example**  
```js
var loc = scene.findNearbyBuilding(sports_centre)Player.moveTo(loc)
```
<a name="LPPlayer+openRelationship"></a>

### lpPlayer.openRelationship ⇒ <code>boolean</code>
Check if player is in an open relationship.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+quitCrime"></a>

### lpPlayer.quitCrime ⇒ <code>void</code> \| <code>\*</code>
Leave your crime family

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+quitFraternity"></a>

### lpPlayer.quitFraternity ⇒ <code>void</code> \| <code>\*</code>
Drop out of the fraternity

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+quitLecturing"></a>

### lpPlayer.quitLecturing ⇒ <code>void</code> \| <code>\*</code>
Quit your lecturing job

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+quitMedical"></a>

### lpPlayer.quitMedical ⇒ <code>void</code> \| <code>\*</code>
Leave your medical career

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+quitSchool"></a>

### lpPlayer.quitSchool ⇒ <code>void</code> \| <code>\*</code>
Drop out of university

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+removeAddedClothes"></a>

### lpPlayer.removeAddedClothes ⇒ <code>void</code> \| <code>\*</code>
Remove all clothes from your inventory that were added during this scene. Used for modelling shoots.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+setMajor"></a>

### lpPlayer.setMajor ⇒ <code>void</code> \| <code>\*</code>
Set the Major for the player, both for teaching and studying. Must be preceded by chooseMajor(). The majors available are hardcoded in the GI file.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
Player.chooseMajor()Player.setMajor()scene.narration("I just selected my <Player.Major> as my major.")
```
<a name="LPPlayer+setRent"></a>

### lpPlayer.setRent
Set your current rent.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type |
| --- | --- |
| rent | <code>number</code> \| <code>LPFloat</code> | 

**Example**  
```js
const rent = Player.getRent()rent.mulEq(1.2)Player.setRent(rent)// this is equivalentPlayer.setRent(Player.getRent().mulEq(1.2))
```
<a name="LPPlayer+startBusiness"></a>

### lpPlayer.startBusiness ⇒ <code>void</code> \| <code>\*</code>
Make the current building your business.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+startDate"></a>

### lpPlayer.startDate ⇒ <code>void</code> \| <code>\*</code>
Start hanging out with this person (make them your current companion)

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+startOpenRelationship"></a>

### lpPlayer.startOpenRelationship ⇒ <code>void</code> \| <code>\*</code>
Make your current relationship/ marriage an open one (no cheating consequences and unlocks a number of scenes). Resets when you end this currentrelationship and any new relationship will start off as closed.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+stopBusiness"></a>

### lpPlayer.stopBusiness ⇒ <code>void</code> \| <code>\*</code>
Make the current building no longer your business.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+getAnyRelative"></a>

### lpPlayer.getAnyRelative(relativeType) ⇒ <code>void</code> \| <code>\*</code>
Returns a relative of type relativeType

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
**See**: childcare.lpsecne  

| Param |
| --- |
| relativeType | 

**Example**  
```js
var Child = Player.getAnyRelative("Child")
```
<a name="LPPlayer+getCompanion"></a>

### lpPlayer.getCompanion() ⇒ <code>void</code> \| <code>\*</code>
Get the current companion. Not entirely necessary as the current companion has a special variable "CurrentCompanion" that is always available.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
var Actor = Player.getCompanion()Actor.dress()// is the same asCurrentCompanion.dress()
```
<a name="LPPlayer+getCompanionAny"></a>

### lpPlayer.getCompanionAny() ⇒ <code>void</code> \| <code>\*</code>
Get the current companion, regardless of whether they are human or not.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+getCompanionCreature"></a>

### lpPlayer.getCompanionCreature() ⇒ <code>void</code> \| <code>\*</code>
Get the current companion, but only if they are a creature.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+getNumRelatives"></a>

### lpPlayer.getNumRelatives() ⇒ <code>LPFloat</code>
Counts the total number of relative NPCs in the game (your relatives, not NPC's relatives).

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+getRelative"></a>

### lpPlayer.getRelative(relationshipTypes) ⇒ <code>LPActor</code> \| <code>undefined</code>
Retrieves an actor who's related to the player.This can be filtered down to only certain types of relatives with keywords: Sibling, StepSibling, Child, StepChild, Cousin, ParentSibling (uncles/aunts), GrandParent, Parent, StepParent

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| relationshipTypes | <code>Array.&lt;string&gt;</code> | Sibling, StepSibling, Child, StepChild, Cousin, ParentSibling (uncles/aunts), GrandParent, Parent, StepParent |

<a name="LPPlayer+getRelativeExcept"></a>

### lpPlayer.getRelativeExcept(relationshipTypes) ⇒ <code>LPActor</code> \| <code>undefined</code>
Retrieves an actor who is related to the player, but isn't tagged by the listed keyword(s).

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| relationshipTypes | <code>Array.&lt;string&gt;</code> | Sibling, StepSibling, Child, StepChild, Cousin, ParentSibling (uncles/aunts), GrandParent, Parent, StepParent |

<a name="LPPlayer+getRent"></a>

### lpPlayer.getRent() ⇒ <code>LPFloat</code>
Get the current rent into a float variable.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
**Returns**: <code>LPFloat</code> - rent  
**Todo**

- [ ] this is special ie Rent.setRent()

**Example**  
```js
var Rent = Player.getRent()Rent *= 1.2                                  // todo this wont workRent.setRent()                               // todo this wont workscene.narration("Damn, the rent was increased by 20%.")
```
<a name="LPPlayer+getSalary"></a>

### lpPlayer.getSalary() ⇒ <code>LPFloat</code>
Get the current salary into a float variable.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
**Returns**: <code>LPFloat</code> - Salary  
**Todo**

- [ ] this is special ie Salary.setSalary()

**Example**  
```js
var Salary = Player.getSalary()Salary *= 1.2                                  // todo this wont workSalary.setSalary()                             // todo this wont workscene.narration("Yay, my salary was increased by 20%.")
```
<a name="LPPlayer+getSelectedNPC"></a>

### lpPlayer.getSelectedNPC() ⇒ <code>LPNPC</code>
Choose a person from your contacts by leaving the scene temporarily and opening the Contacts menu. Must be preceded by selectNPC(). Basically superior to chooseContact() unless you really don't want to take the player out of the scene even temporarily.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
scene.narration("Who should be my first guest?")Player.selectNPC()var Guest1 = Player.getSelectedNPC()
```
<a name="LPPlayer+getTarget"></a>

### lpPlayer.getTarget() ⇒ <code>LPNPC</code>
Get the current interaction target (i.e. the actor the player just clicked on)

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
var Actor = Player.getTarget()
```
<a name="LPPlayer+isAtDatingHome"></a>

### lpPlayer.isAtDatingHome() ⇒ <code>LPBoolean</code>
Checks if player is at significant other's home rather than their own. (The WHERE : home trigger catches both)

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+isAtHome"></a>

### lpPlayer.isAtHome() ⇒ <code>LPBoolean</code>
Check if the player is at their own home. Frequently used to separate 'WHERE: home' cases of the player being at home and being at their significant other's home.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+isPlayerMarried"></a>

### lpPlayer.isPlayerMarried() ⇒ <code>boolean</code>
Checks if the player is married.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+isStudent"></a>

### lpPlayer.isStudent() ⇒ <code>boolean</code>
Checks if the player is a student.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+isWithCompanion"></a>

### lpPlayer.isWithCompanion() ⇒ <code>LPBoolean</code>
Checks if the player is with a companion.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+isWithCompanionCreature"></a>

### lpPlayer.isWithCompanionCreature() ⇒ <code>boolean</code>
Checks if the player is with a companion creature.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+loseDating"></a>

### lpPlayer.loseDating() ⇒ <code>void</code> \| <code>\*</code>
Break up with current boyfriend / girlfriend. All affairs and SO's friends are cleared and become acquaintances.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+playerHasHome"></a>

### lpPlayer.playerHasHome() ⇒ <code>boolean</code>
Check if player player has a home.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+selectNPC"></a>

### lpPlayer.selectNPC(tag) ⇒ <code>void</code> \| <code>\*</code>
Choose a person from your contacts by leaving the scene temporarily and opening the Contacts menu. Must be followed by getSelectedNPC().Basically superior to chooseContact() unless you really don't want to take the player out of the scene even temporarily.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  

| Param |
| --- |
| tag | 

**Example**  
```js
scene.narration("Who should be my first guest?")Player.selectNPC()var Guest1 = Player.getSelectedNPC()
```
<a name="LPPlayer+setFraternityFees"></a>

### lpPlayer.setFraternityFees(fratFee)
Set this as your current monthly fraternity fees.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type |
| --- | --- |
| fratFee | <code>number</code> \| <code>LPFloat</code> | 

**Example**  
```js
var FratFee = Player.setFraternityFees(1000)scene.narrative("I agreed to pay $1000 per month for fraternity fees")
```
<a name="LPPlayer+setSalary"></a>

### lpPlayer.setSalary(salary)
Set this as your current salary.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type |
| --- | --- |
| salary | <code>number</code> \| <code>LPFloat</code> | 

**Example**  
```js
scene.narrative("I signed the contract.")Player.moveJobs()Interviewer.setBoss()Player.setSalary(2000)
```
<a name="LPPlayer+setTuition"></a>

### lpPlayer.setTuition(tuition)
Set this as your current monthly tuition fees.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type |
| --- | --- |
| tuition | <code>number</code> \| <code>LPFloat</code> | 

**Example**  
```js
Player.setTuition(1000)scene.narrative("I agreed to pay $1000 per month for tuition")
```
