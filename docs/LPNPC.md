<a name="LPNPC"></a>

## LPNPC : [<code>LPNPC</code>](#LPNPC)
Class representing a LifePlay NPC Actor.

**Kind**: global class  

* [LPNPC](#LPNPC) : [<code>LPNPC</code>](#LPNPC)
    * [.addColleague](#LPNPC+addColleague) ⇒ <code>LPBoolean</code>
    * [.addCriminal](#LPNPC+addCriminal) ⇒ <code>LPBoolean</code>
    * [.addDatingFriend](#LPNPC+addDatingFriend) ⇒ <code>LPBoolean</code>
    * [.addEmployee](#LPNPC+addEmployee) ⇒ <code>LPBoolean</code>
    * [.addNeighbour](#LPNPC+addNeighbour) ⇒ <code>LPBoolean</code>
    * [.addProstitute](#LPNPC+addProstitute) ⇒ <code>\*</code>
    * [.addToPeopleHere](#LPNPC+addToPeopleHere) ⇒ <code>void</code> \| <code>\*</code>
    * [.assignWhat](#LPNPC+assignWhat) ⇒ <code>string</code>
    * [.assignWhere](#LPNPC+assignWhere) ⇒ <code>string</code>
    * [.blockNPCRelationships](#LPNPC+blockNPCRelationships)
    * [.delete](#LPNPC+delete) ⇒ <code>void</code> \| <code>\*</code>
    * [.deletePerson](#LPNPC+deletePerson) ⇒ <code>void</code> \| <code>\*</code>
    * [.favoriteHome](#LPNPC+favoriteHome) ⇒ <code>void</code> \| <code>\*</code>
    * [.getUntil](#LPNPC+getUntil) ⇒ <code>LPFloat</code>
    * [.hasRelationship](#LPNPC+hasRelationship) ⇒ <code>LPBoolean</code>
    * [.isAffair](#LPNPC+isAffair) ⇒ <code>LPBoolean</code>
    * [.isBoss](#LPNPC+isBoss) ⇒ <code>LPBoolean</code>
    * [.isColleague](#LPNPC+isColleague) ⇒ <code>LPBoolean</code>
    * [.isContactExchanged](#LPNPC+isContactExchanged) ⇒ <code>LPBoolean</code>
    * [.isCreature](#LPNPC+isCreature) ⇒ <code>LPBoolean</code>
    * [.isCreatureType](#LPNPC+isCreatureType) ⇒ <code>LPBoolean</code>
    * [.isDatingFriend](#LPNPC+isDatingFriend) ⇒ <code>LPBoolean</code>
    * [.isDeflowered](#LPNPC+isDeflowered) ⇒ <code>LPBoolean</code>
    * [.isDeflowerer](#LPNPC+isDeflowerer) ⇒ <code>void</code> \| <code>\*</code>
    * [.isEmployee](#LPNPC+isEmployee) ⇒ <code>void</code> \| <code>\*</code>
    * [.isExRelative](#LPNPC+isExRelative) ⇒ <code>LPBoolean</code>
    * [.isLandlord](#LPNPC+isLandlord) ⇒ <code>LPBoolean</code>
    * [.isMarried](#LPNPC+isMarried) ⇒ <code>LPBoolean</code>
    * [.isNeighbour](#LPNPC+isNeighbour) ⇒ <code>LPBoolean</code>
    * [.isRelationshipWith](#LPNPC+isRelationshipWith) ⇒ <code>LPBoolean</code>
    * [.isRelative](#LPNPC+isRelative) ⇒ <code>LPBoolean</code>
    * [.isRelativeType](#LPNPC+isRelativeType) ⇒ <code>LPBoolean</code>
    * [.isTemporary](#LPNPC+isTemporary) ⇒ <code>LPBoolean</code>
    * [.livesWithPlayer](#LPNPC+livesWithPlayer) ⇒ <code>LPBoolean</code>
    * [.makePermanent](#LPNPC+makePermanent) ⇒ <code>void</code> \| <code>\*</code>
    * [.passOn](#LPNPC+passOn) ⇒ [<code>LPNPC</code>](#LPNPC)
    * [.randomizeFace](#LPNPC+randomizeFace) ⇒ <code>void</code> \| <code>\*</code>
    * [.randomizeHairs](#LPNPC+randomizeHairs) ⇒ <code>void</code> \| <code>\*</code>
    * [.randomizeRace](#LPNPC+randomizeRace) ⇒ <code>void</code> \| <code>\*</code>
    * [.randomizeSexy](#LPNPC+randomizeSexy) ⇒ <code>void</code> \| <code>\*</code>
    * [.removeColleague](#LPNPC+removeColleague) ⇒ <code>void</code> \| <code>\*</code>
    * [.removeDatingFriend](#LPNPC+removeDatingFriend) ⇒ <code>void</code> \| <code>\*</code>
    * [.removeEmployee](#LPNPC+removeEmployee) ⇒ <code>void</code> \| <code>\*</code>
    * [.removeNeighbour](#LPNPC+removeNeighbour) ⇒ <code>void</code> \| <code>\*</code>
    * [.removeProstitute](#LPNPC+removeProstitute) ⇒ <code>void</code> \| <code>\*</code>
    * [.saveAndDelete](#LPNPC+saveAndDelete) ⇒ <code>void</code> \| <code>\*</code>
    * [.setActorAlias](#LPNPC+setActorAlias) ⇒ <code>LPString</code>
    * [.setBoss](#LPNPC+setBoss) ⇒ <code>void</code> \| <code>\*</code>
    * [.setCrimeBoss](#LPNPC+setCrimeBoss) ⇒ <code>void</code> \| <code>\*</code>
    * [.setDating](#LPNPC+setDating) ⇒ <code>void</code> \| <code>\*</code>
    * [.setDatingID](#LPNPC+setDatingID) ⇒ <code>void</code> \| <code>\*</code>
    * [.setDifferentMajor](#LPNPC+setDifferentMajor) ⇒ <code>void</code> \| <code>\*</code>
    * [.setLandlord](#LPNPC+setLandlord) ⇒ <code>void</code> \| <code>\*</code>
    * [.setLivingWithPlayer](#LPNPC+setLivingWithPlayer) ⇒ <code>void</code> \| <code>\*</code>
    * [.setPT](#LPNPC+setPT) ⇒ <code>void</code> \| <code>\*</code>
    * [.setRelativeType](#LPNPC+setRelativeType) ⇒ <code>void</code> \| <code>\*</code>
    * [.setSameMajor](#LPNPC+setSameMajor) ⇒ <code>void</code> \| <code>\*</code>
    * [.setSubject](#LPNPC+setSubject) ⇒ <code>void</code> \| <code>\*</code>
    * [.setUntil](#LPNPC+setUntil)

<a name="LPNPC+addColleague"></a>

### lpnpC.addColleague ⇒ <code>LPBoolean</code>
Add this actor to the list of colleagues. Can be found later with getSpecific(Colleague)

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+addCriminal"></a>

### lpnpC.addCriminal ⇒ <code>LPBoolean</code>
Make this person part of your crime family.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+addDatingFriend"></a>

### lpnpC.addDatingFriend ⇒ <code>LPBoolean</code>
Add this actor to the list of your significant other's friends. Can be found later with getSpecific(Dating_Friend)

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+addEmployee"></a>

### lpnpC.addEmployee ⇒ <code>LPBoolean</code>
Make this person an employee at the specified salary at the current building.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+addNeighbour"></a>

### lpnpC.addNeighbour ⇒ <code>LPBoolean</code>
Add this actor to the list of neighbours. Can be found later with getSpecific(Neighbour)

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+addProstitute"></a>

### lpnpC.addProstitute ⇒ <code>\*</code>
Add this actor to the list of prostitutes. Can be checked later with Actor.isProstitute()

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+addToPeopleHere"></a>

### lpnpC.addToPeopleHere ⇒ <code>void</code> \| <code>\*</code>
todo

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+assignWhat"></a>

### lpnpC.assignWhat ⇒ <code>string</code>
Returns the what the actor is doing, for example "having sex", "masturbating", "sleeping"Must call scene.AssignResidents() first.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Example**  
```js
scene.assignResidents()var ActorWhere = Actor.assignWhere()var ActorWhat = Actor.assignWhat()$if(ActorWhere.isString("bedroom"), ()=>{     scene.narration('<Actor.name> is in the <ActorWhere> and they are <ActorWhat>.')})
```
<a name="LPNPC+assignWhere"></a>

### lpnpC.assignWhere ⇒ <code>string</code>
Returns the location the actor is in, for example bedroom, nightclub

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Example**  
```js
scene.assignResidents()var ActorWhere = Actor.assignWhere()var ActorWhat = Actor.assignWhat()$if(ActorWhere.isString("bedroom"), ()=>{     scene.narration('<Actor.name> is in the <ActorWhere> and they are <ActorWhat>.')})
```
<a name="LPNPC+blockNPCRelationships"></a>

### lpnpC.blockNPCRelationships
Prevents this person from ever having NPC-NPC relationships. Mainly used for ex-relative bf/gf so that your gf/ former sister doesn't introduce you to her brother that you apparently haven't met

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| actor | <code>LPActor</code> | optional? |

<a name="LPNPC+delete"></a>

### lpnpC.delete ⇒ <code>void</code> \| <code>\*</code>
Force remove this actor from current memory. Used in rare cases where SceneEnd() (which does this automatically to all actors used in the scene) isn't called.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+deletePerson"></a>

### lpnpC.deletePerson ⇒ <code>void</code> \| <code>\*</code>
Force remove this actor completely from the game. They will no longer be called on in scenes or accessible from the Contacts menu. Used in rare cases to kill off characters or characters moving to a new city etc ...

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+favoriteHome"></a>

### lpnpC.favoriteHome ⇒ <code>void</code> \| <code>\*</code>
Controls weather or not an actor has a favorite home. Notes: When called with true it should be followed by Actor.setLivingWithPlayer(false) and it seems to mean the Actor will live somewhere other than with the player. When called with falseit should be followed up by Actor.setLivingWithPlayer(true)

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type |
| --- | --- |
| hasFavorite | <code>boolean</code> | 

**Example**  
```js
scene.narration("What action should I take with <Actor.name>?")scene.option([     {text: 'Nothing'},     {condition: 'Actor.livesWithPlayer()', text: 'Ask <Actor.name> to move out and find <Actor.his_or_her> place'},     {condition: '!Actor.livesWithPlayer()', text: 'Ask <Actor.name> to move in with me'},])$if(choice(1), ()=>{     scene.narration("<Actor.name> no longer lives with me and has found another place to live.")     Actor.setLivingWithPlayer(false)     Actor.favoriteHome(true)}).$elseIf(choice(2), () => {     scene.narration("<Actor.name> moved out of <Actor.his_or_her> current place and moved in with me.")     Actor.setLivingWithPlayer(true)     Actor.favoriteHome(false)}).$endIf()
```
<a name="LPNPC+getUntil"></a>

### lpnpC.getUntil ⇒ <code>LPFloat</code>
Returns the time this person will stop being at their current location and AI would look for a new location again. The value returned isn't the time of the day,but total hours elapsed since the start of the current game, i.e. HoursElapsed + HoursStayed HoursElapsed being a special variable

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+hasRelationship"></a>

### lpnpC.hasRelationship ⇒ <code>LPBoolean</code>
Checks to see if this NPC is already in a special relationship of a specific type or another with any another NPC. The list for 'Type':

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| types | <code>Array.&lt;string&gt;</code> | dating, spouses, siblings, parentchild, cousins, bossemployee, colleagues |

<a name="LPNPC+isAffair"></a>

### lpnpC.isAffair ⇒ <code>LPBoolean</code>
Check if you have committed an affair with this actor while with your current boyfriend / girlfriend.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Example**  
```js
$if(John.isAffair(), ()=>{    John.dialog("Oh baby, your stupid boyfriend has no idea what we've done.", 'Flirty')}).$endif()
```
<a name="LPNPC+isBoss"></a>

### lpnpC.isBoss ⇒ <code>LPBoolean</code>
Check if the actor is the player's boss.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Example**  
```js
$if(John.isBoss(), ()=>{    John.dialog("You're fired!", "Angry")}).$endIf()
```
<a name="LPNPC+isColleague"></a>

### lpnpC.isColleague ⇒ <code>LPBoolean</code>
Check if the actor is one of the player's colleagues.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Example**  
```js
$if(John.isColleague(), ()=>{    John.dialog("Hey, wanna go for lunch?", "Happy")}).$endIf()
```
<a name="LPNPC+isContactExchanged"></a>

### lpnpC.isContactExchanged ⇒ <code>LPBoolean</code>
Check if the actor has exchanged numbers with the player.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Example**  
```js
$if(John.isContactExchanged(), ()=>{    John.dialog("Well, you have my number. Just call me if you need anything else.", "Happy")}).$else(()=>{    John.dialog("Actually, why don't we exchange numbers. So that you'll know how to reach me if you need anything else.", "Happy")    exchangeContact(John)}).$endIf()
```
<a name="LPNPC+isCreature"></a>

### lpnpC.isCreature ⇒ <code>LPBoolean</code>
Check if the actor is a creature and not human$if(!Actor.isCreature(), ()=>{    Actor.dress()}).$endIf()

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+isCreatureType"></a>

### lpnpC.isCreatureType ⇒ <code>LPBoolean</code>
Check if the actor is a creature of type Dog or Horse

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Dog or Horse |

<a name="LPNPC+isDatingFriend"></a>

### lpnpC.isDatingFriend ⇒ <code>LPBoolean</code>
Check if the actor is a friend of your significant other

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+isDeflowered"></a>

### lpnpC.isDeflowered ⇒ <code>LPBoolean</code>
Returns true if actor has been deflowered by Player.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+isDeflowerer"></a>

### lpnpC.isDeflowerer ⇒ <code>void</code> \| <code>\*</code>
Returns true if actor has been deflowered the Player.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+isEmployee"></a>

### lpnpC.isEmployee ⇒ <code>void</code> \| <code>\*</code>
Returns true if actor is an employee of the Player.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+isExRelative"></a>

### lpnpC.isExRelative ⇒ <code>LPBoolean</code>
Check if the actor is actually your relative who became a lover.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+isLandlord"></a>

### lpnpC.isLandlord ⇒ <code>LPBoolean</code>
Check if the actor is your landlord.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+isMarried"></a>

### lpnpC.isMarried ⇒ <code>LPBoolean</code>
Returns true if the calling actor is married.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+isNeighbour"></a>

### lpnpC.isNeighbour ⇒ <code>LPBoolean</code>
Check if the actor is one of your neighbours.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+isRelationshipWith"></a>

### lpnpC.isRelationshipWith ⇒ <code>LPBoolean</code>
If this actor is in a specific NPC-NPC relationship with actor (Siblings, Dating, Spouses, ParentChild etc)

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param |
| --- |
| actor | 
| relationshipType | 

<a name="LPNPC+isRelative"></a>

### lpnpC.isRelative ⇒ <code>LPBoolean</code>
returns true if the calling actor is a relative of the player's

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+isRelativeType"></a>

### lpnpC.isRelativeType ⇒ <code>LPBoolean</code>
Check if this actor is this specific relative relationship with the player

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param |
| --- |
| type | 

<a name="LPNPC+isTemporary"></a>

### lpnpC.isTemporary ⇒ <code>LPBoolean</code>
Check if this actor is temporary and to be removed as soon as this scene finishes / the player moves from this location. Used with makePermanent()

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+livesWithPlayer"></a>

### lpnpC.livesWithPlayer ⇒ <code>LPBoolean</code>
Returns true if the actor lives with the player, ie in the same apartment, not the same building (that'd be a neighbour).

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+makePermanent"></a>

### lpnpC.makePermanent ⇒ <code>void</code> \| <code>\*</code>
This turns a temporary actor (generatePersonTemporary) into a permanent actor that persists after the current scene ends. Does nothing if called on an already permanent actor.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+passOn"></a>

### lpnpC.passOn ⇒ [<code>LPNPC</code>](#LPNPC)
Used to pass an actor from one scene to the next scene, used with scene.followUp() and scene.getSpecific("PassedOn")

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Returns**: [<code>LPNPC</code>](#LPNPC) - "this" LPActor for chaining  
<a name="LPNPC+randomizeFace"></a>

### lpnpC.randomizeFace ⇒ <code>void</code> \| <code>\*</code>
Randomize the actor's face and skin. Commonly called after blendpreset (which might change the gender which resets the actor to the default face and hair for that gender)

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+randomizeHairs"></a>

### lpnpC.randomizeHairs ⇒ <code>void</code> \| <code>\*</code>
Randomize the actor's hair and pubic hair. Commonly called after blendpreset (which might change the gender which resets the actor to the default face and hair for that gender)

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+randomizeRace"></a>

### lpnpC.randomizeRace ⇒ <code>void</code> \| <code>\*</code>
Randomize skin colour and nose / eyes racial features

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+randomizeSexy"></a>

### lpnpC.randomizeSexy ⇒ <code>void</code> \| <code>\*</code>
Randomize dick and tits for this character

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+removeColleague"></a>

### lpnpC.removeColleague ⇒ <code>void</code> \| <code>\*</code>
Remove this actor from the list of colleague. Will remain acquaintance at least though.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+removeDatingFriend"></a>

### lpnpC.removeDatingFriend ⇒ <code>void</code> \| <code>\*</code>
Remove this actor from the list of your significant other's friends. Will remain acquaintance at least though.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+removeEmployee"></a>

### lpnpC.removeEmployee ⇒ <code>void</code> \| <code>\*</code>
Fire this employee

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+removeNeighbour"></a>

### lpnpC.removeNeighbour ⇒ <code>void</code> \| <code>\*</code>
Remove this actor from the list of your neighbours. Will remain acquaintance at least though.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+removeProstitute"></a>

### lpnpC.removeProstitute ⇒ <code>void</code> \| <code>\*</code>
Remove this actor from the list of your prostitute.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+saveAndDelete"></a>

### lpnpC.saveAndDelete ⇒ <code>void</code> \| <code>\*</code>
Force remove this actor from current memory, but saves any (stat) changes made to them in this scene first. Used for party scenes to avoid bloating.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+setActorAlias"></a>

### lpnpC.setActorAlias ⇒ <code>LPString</code>
For quests. Set an actor as quest actors so you can reference them whenever you want throughout the quest with scene.getActorAlias(aliasStr)

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param |
| --- |
| aliasStr | 

<a name="LPNPC+setBoss"></a>

### lpnpC.setBoss ⇒ <code>void</code> \| <code>\*</code>
Make this person your boss. Current boss is no longer boss and becomes acquaintance.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+setCrimeBoss"></a>

### lpnpC.setCrimeBoss ⇒ <code>void</code> \| <code>\*</code>
Make this person the boss of your crime family.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+setDating"></a>

### lpnpC.setDating ⇒ <code>void</code> \| <code>\*</code>
Make this person your significant other. Current SO is no longer dating you and becomes acquaintance. Also clears out all friends of previous SOs and affairs, who all become acquaintances.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+setDatingID"></a>

### lpnpC.setDatingID ⇒ <code>void</code> \| <code>\*</code>
Something to do with Poly...

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+setDifferentMajor"></a>

### lpnpC.setDifferentMajor ⇒ <code>void</code> \| <code>\*</code>
Set the Major for the NPC to be a random subject but not the same as the player, both for teaching and studying.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+setLandlord"></a>

### lpnpC.setLandlord ⇒ <code>void</code> \| <code>\*</code>
Make this person your landlord. Current landlord is no longer landlord and becomes acquaintance.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+setLivingWithPlayer"></a>

### lpnpC.setLivingWithPlayer ⇒ <code>void</code> \| <code>\*</code>
flags or unflags an actor as living with the player

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type |
| --- | --- |
| isLivingWith | <code>boolean</code> | 

<a name="LPNPC+setPT"></a>

### lpnpC.setPT ⇒ <code>void</code> \| <code>\*</code>
Make this person your personal trainer. Current personal trainer is no longer PT and becomes acquaintance.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+setRelativeType"></a>

### lpnpC.setRelativeType ⇒ <code>void</code> \| <code>\*</code>
Set which type of relative this person is (must already be a relative actor, not a normal NPC). Used for giving birth.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param |
| --- |
| relativeType | 

**Example**  
```js
Actor2 = Actor.generateRelativeMatchRace()Actor2.setRelativeType("Child")
```
<a name="LPNPC+setSameMajor"></a>

### lpnpC.setSameMajor ⇒ <code>void</code> \| <code>\*</code>
Set the Major for the NPC to be the same as the player, both for teaching and studying.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+setSubject"></a>

### lpnpC.setSubject ⇒ <code>void</code> \| <code>\*</code>
Pick a random subject for a lecturer to teach that matches their major.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+setUntil"></a>

### lpnpC.setUntil
Set until what time this person will stay at their current location before AI searches for a new location for them again. The float variable isn't the time of the day,but total hours elapsed since the start of the current game, i.e. HoursElapsed + HoursToStay HoursElapsed being a special variable and HoursToStay is up to you

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type |
| --- | --- |
| floatTime | <code>LPFloat</code> | 

