## Classes

<dl>
<dt><a href="#LPAction">LPAction</a></dt>
<dd><p>Class representing a LifePlay Action.</p>
</dd>
<dt><a href="#LPDescription">LPDescription</a> : <code><a href="#LPAction">LPAction</a></code></dt>
<dd><p>Class representing a LifePlay Description.</p>
</dd>
<dt><a href="#LPMod">LPMod</a></dt>
<dd><p>Class representing a LifePlay Mod.</p>
</dd>
<dt><a href="#LPScene">LPScene</a> : <code><a href="#LPScene">LPScene</a></code></dt>
<dd><p>Class representing a LifePlay Scene.</p>
</dd>
<dt><a href="#LPStat">LPStat</a></dt>
<dd><p>Class representing a LifePlay Stat.</p>
</dd>
<dt><a href="#LPTalk">LPTalk</a></dt>
<dd><p>Class representing a LifePlay Talk.</p>
</dd>
<dt><a href="#LPBoolean">LPBoolean</a> : <code><a href="#LPBoolean">LPBoolean</a></code></dt>
<dd><p>Class representing a LifePlay boolean.</p>
</dd>
<dt><a href="#LPBuilding">LPBuilding</a> : <code><a href="#LPBuilding">LPBuilding</a></code></dt>
<dd><p>Class representing a LifePlay building.</p>
</dd>
<dt><a href="#LPBuildingAlias">LPBuildingAlias</a> : <code><a href="#LPBuildingAlias">LPBuildingAlias</a></code></dt>
<dd><p>Class representing a LifePlay building alias.</p>
</dd>
<dt><a href="#LPFloat">LPFloat</a> : <code><a href="#LPFloat">LPFloat</a></code></dt>
<dd><p>Class representing a LifePlay float.</p>
</dd>
<dt><a href="#LPNPC">LPNPC</a> ⇐ <code>LPActor</code></dt>
<dd><p>Class representing a LifePlay NPC Actor.</p>
</dd>
<dt><a href="#LPPlayer">LPPlayer</a> ⇐ <code>LPActor</code></dt>
<dd><p>Class representing a LifePlay Player.</p>
</dd>
<dt><a href="#LPString">LPString</a> : <code><a href="#LPString">LPString</a></code></dt>
<dd><p>Class representing a LifePlay string.</p>
</dd>
</dl>

<a name="LPAction"></a>

## LPAction
Class representing a LifePlay Action.

**Kind**: global class  
<a name="new_LPAction_new"></a>

### new LPAction(ACTION_UNIQUEID, ACTION_NAME, WHERE, WHEN, MINUTES, TIMEOUT_MINUTES, ALSO_TIMEOUT, EFFECTS, CONDITIONS, MOVE_FIRST, SCENE_ALWAYS, ANIMATION, WHO, modsDir, filePath)

| Param |
| --- |
| ACTION_UNIQUEID | 
| ACTION_NAME | 
| WHERE | 
| WHEN | 
| MINUTES | 
| TIMEOUT_MINUTES | 
| ALSO_TIMEOUT | 
| EFFECTS | 
| CONDITIONS | 
| MOVE_FIRST | 
| SCENE_ALWAYS | 
| ANIMATION | 
| WHO | 
| modsDir | 
| filePath | 

<a name="LPDescription"></a>

## LPDescription : [<code>LPAction</code>](#LPAction)
Class representing a LifePlay Description.

**Kind**: global class  
<a name="LPMod"></a>

## LPMod
Class representing a LifePlay Mod.

**Kind**: global class  
<a name="new_LPMod_new"></a>

### new LPMod(MODULE_UNIQUEID, MODULE_NAME, MODULE_AUTHOR, MODULE_LINK, MODULE_DESCRIPTION, MODULE_REQUIREMENTS, modsDir)

| Param |
| --- |
| MODULE_UNIQUEID | 
| MODULE_NAME | 
| MODULE_AUTHOR | 
| MODULE_LINK | 
| MODULE_DESCRIPTION | 
| MODULE_REQUIREMENTS | 
| modsDir | 

<a name="LPScene"></a>

## LPScene : [<code>LPScene</code>](#LPScene)
Class representing a LifePlay Scene.

**Kind**: global class  

* [LPScene](#LPScene) : [<code>LPScene</code>](#LPScene)
    * [new LPScene(lpMod, name, modsDir, filePath, script)](#new_LPScene_new)
    * [.WHAT](#LPScene+WHAT) : <code>function</code>
    * [.WHERE](#LPScene+WHERE) : <code>function</code>
    * [.WHO](#LPScene+WHO) ⇒ [<code>LPScene</code>](#LPScene)
    * [.OTHER](#LPScene+OTHER) ⇒ [<code>LPScene</code>](#LPScene)
    * [.narrative](#LPScene+narrative)
    * [.building](#LPScene+building) ⇒ [<code>LPBuilding</code>](#LPBuilding)
    * [.CurrentCompanion](#LPScene+CurrentCompanion) ⇒ [<code>LPNPC</code>](#LPNPC)
    * [.addNpcRelationship(type, actors)](#LPScene+addNpcRelationship) ⇒ <code>void</code> \| <code>\*</code>
    * [.assignHome()](#LPScene+assignHome) ⇒ <code>void</code> \| <code>\*</code>
    * [.assignResidents()](#LPScene+assignResidents) ⇒ <code>void</code> \| <code>\*</code>
    * [.blockPregnancy()](#LPScene+blockPregnancy) ⇒ <code>void</code> \| <code>\*</code>
    * [.cameraFocus(actor)](#LPScene+cameraFocus) ⇒ <code>void</code> \| <code>\*</code>
    * [.cameraLock()](#LPScene+cameraLock)
    * [.cameraMove(x, y, z, rx, ry, rz)](#LPScene+cameraMove) ⇒ <code>void</code> \| <code>\*</code>
    * [.cameraUnlock()](#LPScene+cameraUnlock)
    * [.clearBackground3d()](#LPScene+clearBackground3d)
    * [.clearGetList()](#LPScene+clearGetList)
    * [.dressFormal()](#LPScene+dressFormal)
    * [.faceEachOther(actorOne, actorTwo)](#LPScene+faceEachOther)
    * [.filterDesc(filenameOfLPDescFile)](#LPScene+filterDesc)
    * [.filterTalk(filenameOfLPDescFile)](#LPScene+filterTalk)
    * [.filter(filterType)](#LPScene+filter)
    * [.findNearbyBuilding(types)](#LPScene+findNearbyBuilding) ⇒ [<code>LPBuilding</code>](#LPBuilding)
    * [.followUp(sceneID)](#LPScene+followUp)
    * [.forcedTrigger()](#LPScene+forcedTrigger) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.generateCreature(optionalRace)](#LPScene+generateCreature) ⇒ <code>LPActor</code>
    * [.generateCreatureTemporary(optionalRace)](#LPScene+generateCreatureTemporary) ⇒ <code>LPActor</code>
    * [.generatePerson(presets)](#LPScene+generatePerson) ⇒ <code>LPActor</code>
    * [.generatePersonTemporary(presets)](#LPScene+generatePersonTemporary) ⇒ <code>LPActor</code>
    * [.getActorAlias(aliasStr)](#LPScene+getActorAlias) ⇒ [<code>LPNPC</code>](#LPNPC)
    * [.getAssignee(location)](#LPScene+getAssignee)
    * [.getCreature()](#LPScene+getCreature)
    * [.getPerson(hasContactExchangedOrTag)](#LPScene+getPerson) ⇒ <code>LPActor</code> \| <code>undefined</code>
    * [.getPersonHere(isPermanent)](#LPScene+getPersonHere) ⇒ [<code>LPNPC</code>](#LPNPC)
    * [.getRelatedPeople(types)](#LPScene+getRelatedPeople) ⇒ [<code>Array.&lt;LPNPC&gt;</code>](#LPNPC) \| <code>undefined</code>
    * [.getSpecific(keywordOrID)](#LPScene+getSpecific) ⇒ [<code>LPNPC</code>](#LPNPC)
    * [.isModEnabled(modID)](#LPScene+isModEnabled) ⇒ <code>void</code> \| <code>\*</code>
    * [.isQuestCompleted(quest)](#LPScene+isQuestCompleted) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isTimingOut(sceneID)](#LPScene+isTimingOut) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.openMenu(text)](#LPScene+openMenu)
    * [.passTime(hoursMin, hoursMax)](#LPScene+passTime) ⇒ [<code>LPScene</code>](#LPScene)
    * [.preciseModify()](#LPScene+preciseModify) ⇒ [<code>LPScene</code>](#LPScene)
    * [.questEnd()](#LPScene+questEnd) ⇒ [<code>LPScene</code>](#LPScene)
    * [.removeNpcRelationship(actors)](#LPScene+removeNpcRelationship) ⇒ [<code>LPScene</code>](#LPScene)
    * [.resetTutorials()](#LPScene+resetTutorials) ⇒ [<code>LPScene</code>](#LPScene)
    * [.saveOldPlayer()](#LPScene+saveOldPlayer) ⇒ [<code>LPScene</code>](#LPScene)
    * [.start(script)](#LPScene+start) ⇒ [<code>LPScene</code>](#LPScene)
    * [.sceneEndLoadLastSave()](#LPScene+sceneEndLoadLastSave) ⇒ [<code>LPScene</code>](#LPScene)
    * [.secondScreen(actor)](#LPScene+secondScreen)
    * [.secondScreenIfHidden(actor)](#LPScene+secondScreenIfHidden)
    * [.setBackground(where)](#LPScene+setBackground)
    * [.setBackground3D(scene3dPath)](#LPScene+setBackground3D)
    * [.setBackgroundCustom(where)](#LPScene+setBackgroundCustom)
    * [.sex(actors)](#LPScene+sex)
    * [.sexAtPoint(x, y, z, angle)](#LPScene+sexAtPoint)
    * [.sexNoAffair(actors)](#LPScene+sexNoAffair)
    * [.showMapView(radius)](#LPScene+showMapView)
    * [.sneakGame()](#LPScene+sneakGame) ⇒ <code>float</code>
    * [.talkNonConsensual()](#LPScene+talkNonConsensual)
    * [.TfGame()](#LPScene+TfGame) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.wasCondomUsedDuringLastSex()](#LPScene+wasCondomUsedDuringLastSex) ⇒ <code>boolean</code>

<a name="new_LPScene_new"></a>

### new LPScene(lpMod, name, modsDir, filePath, script)

| Param |
| --- |
| lpMod | 
| name | 
| modsDir | 
| filePath | 
| script | 

<a name="LPScene+WHAT"></a>

### lpScene.WHAT : <code>function</code>
WHAT

**Kind**: instance property of [<code>LPScene</code>](#LPScene)  

| Param | Type |
| --- | --- |
| actions | <code>Array.&lt;string&gt;</code> | 

<a name="LPScene+WHERE"></a>

### lpScene.WHERE : <code>function</code>
WHERE

**Kind**: instance property of [<code>LPScene</code>](#LPScene)  

| Param | Type |
| --- | --- |
| wheres | <code>Array.&lt;string&gt;</code> | 

<a name="LPScene+WHO"></a>

### lpScene.WHO ⇒ [<code>LPScene</code>](#LPScene)
Start the scene and open the scene UI

**Kind**: instance property of [<code>LPScene</code>](#LPScene)  
**Returns**: [<code>LPScene</code>](#LPScene) - scene for chaining  

| Param | Type |
| --- | --- |
| script | <code>string</code> \| [<code>scene</code>](#Script..scene) | 

<a name="LPScene+OTHER"></a>

### lpScene.OTHER ⇒ [<code>LPScene</code>](#LPScene)
Start the scene and open the scene UI

**Kind**: instance property of [<code>LPScene</code>](#LPScene)  
**Returns**: [<code>LPScene</code>](#LPScene) - scene for chaining  

| Param | Type |
| --- | --- |
| [script] | [<code>scene</code>](#Script..scene) | 

<a name="LPScene+narrative"></a>

### lpScene.narrative
Scene description narrations

**Kind**: instance property of [<code>LPScene</code>](#LPScene)  

| Param | Type |
| --- | --- |
| text | <code>string</code> \| <code>Array.&lt;string&gt;</code> | 

**Example**  
```js
scene.start((scene) => {    scene.narrative("some text")    scene.narrative([        "many lines",        "of",        "text"    ]) })
```
<a name="LPScene+building"></a>

### lpScene.building ⇒ [<code>LPBuilding</code>](#LPBuilding)
Current location, sort of.

**Kind**: instance property of [<code>LPScene</code>](#LPScene)  
<a name="LPScene+CurrentCompanion"></a>

### lpScene.CurrentCompanion ⇒ [<code>LPNPC</code>](#LPNPC)
CurrentCompanion

**Kind**: instance property of [<code>LPScene</code>](#LPScene)  
<a name="LPScene+addNpcRelationship"></a>

### lpScene.addNpcRelationship(type, actors) ⇒ <code>void</code> \| <code>\*</code>
Add (or change if a relationship already exists) a relationship between 2 or more NPCs.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Dating, Spouses, Siblings, ParentChild (2 actors only, parent is Actor1, child is Actor2), Cousins, BossEmployee (2 actors only, Boss is Actor1, employee is Actor2), Colleagues |
| actors | <code>Array.&lt;LPActor&gt;</code> |  |

**Example**  
```js
addNpcRelationship(Dating, John, Maria)narrative("John and Maria have started dating. What a matchmaker I was!")narrative("A few months later ...")addNPCRelationship(Spouses, John, Maria) // The 'dating' relationship will be upgraded to spousesJack.dialog("Have you met my brother, Jason?")addNpcRelationship(Siblings, Jack, Jason)narrative("A few days later ... in a separate scene perhaps")Jack.dialog("Here's my sister, Natalie.")addNPCRelationship(Siblings, Jack, Natalie)narrative("The game will now also recognize Jason and Natalie as siblings.")
```
<a name="LPScene+assignHome"></a>

### lpScene.assignHome() ⇒ <code>void</code> \| <code>\*</code>
Not documented and not used. No idea what it does.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
<a name="LPScene+assignResidents"></a>

### lpScene.assignResidents() ⇒ <code>void</code> \| <code>\*</code>
Assigns residents to a location. Need for Actor.assignWhat() and Actor.assignWhere()

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
<a name="LPScene+blockPregnancy"></a>

### lpScene.blockPregnancy() ⇒ <code>void</code> \| <code>\*</code>
Block all pregnancies for all sex scenes in this current scene.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
**Example**  
```js
scene.blockPregnancy()scene.narrative("This is a dream ...")scene.sex(Player, Actor) // No pregnancies can result from this sex scene
```
<a name="LPScene+cameraFocus"></a>

### lpScene.cameraFocus(actor) ⇒ <code>void</code> \| <code>\*</code>
Makes the camera focus on the given actor.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param | Type |
| --- | --- |
| actor | <code>LPActor</code> | 

**Example**  
```js
cameraMove( 0, 0, 800 ) // Move camera to the middle of the roomcameraFocus(MainActor)  // Make cam point to the main actor
```
<a name="LPScene+cameraLock"></a>

### lpScene.cameraLock()
Locks a camera?

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
<a name="LPScene+cameraMove"></a>

### lpScene.cameraMove(x, y, z, rx, ry, rz) ⇒ <code>void</code> \| <code>\*</code>
Moves and rotates the camera.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param |
| --- |
| x | 
| y | 
| z | 
| rx | 
| ry | 
| rz | 

**Example**  
```js
cameraMove( 0, 0, 800 ) // Move camera to the middle of the roomcameraFocus(MainActor)  // Make cam point to the main actor
```
<a name="LPScene+cameraUnlock"></a>

### lpScene.cameraUnlock()
Unlocks a camera?

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
<a name="LPScene+clearBackground3d"></a>

### lpScene.clearBackground3d()
Clears a background set by scene.setBackground3D("Modules/nn_PornEmpire/Rooms/nn_pe_office_1.lpworld")

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
<a name="LPScene+clearGetList"></a>

### lpScene.clearGetList()
So that GetSpecific() GetPerson() etc can return the same actor again if they're already called by a previous get functions in the same scene

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
<a name="LPScene+dressFormal"></a>

### lpScene.dressFormal()
Use this to toggle the 'dress code' of the scene.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
**Example**  
```js
scene.dressFormal() // formal onActor.dress()Actor2.dress()scene.dressFormal() // formal offActor3.dress()// 1 and 2 are wearing suits while 3 is looking like a bum
```
<a name="LPScene+faceEachOther"></a>

### lpScene.faceEachOther(actorOne, actorTwo)
Causes two actors to face each other.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param |
| --- |
| actorOne | 
| actorTwo | 

<a name="LPScene+filterDesc"></a>

### lpScene.filterDesc(filenameOfLPDescFile)
Filter erotic descriptions, name the lpdesc file with the suffix _restricted if you only want that file to be used specifically when FilterDesc calls for it

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param | Type |
| --- | --- |
| filenameOfLPDescFile | <code>string</code> | 

<a name="LPScene+filterTalk"></a>

### lpScene.filterTalk(filenameOfLPDescFile)
Filter Dirty talks, name the lptalk file with the suffix _restricted if you only want that file to be used specifically when FilterTalk calls for it

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param | Type |
| --- | --- |
| filenameOfLPDescFile | <code>string</code> | 

<a name="LPScene+filter"></a>

### lpScene.filter(filterType)
Limit a sex scene to animations that have the specified tag.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param |
| --- |
| filterType | 

**Example**  
```js
scene.narrative("A while later in front of her place.")Player.dialog("Baby, since I just took you to that fancy place and all, maybe I could... come inside?", "Flirty")Girlfriend.dialog("Hey, what do you take me for? I don't put out just for a meal!", "Offended")Player.dialog("I know you don't, I mean, I didn't think you would, but... please, being around you drives me nuts! I'm about to burst!", "Shy")Girlfriend.dialog("Oh, alright then. But there's no way we're actually doing 'it' tonight! A quick shake and then I'm off to bed, and you're off to yours!", "Annoyed")setBackground(home)Player.strip()scene.filter(Handjob)scene.sex(Player, Girlfriend)
```
<a name="LPScene+findNearbyBuilding"></a>

### lpScene.findNearbyBuilding(types) ⇒ [<code>LPBuilding</code>](#LPBuilding)
Find a building near to another building that is of a certain type. Used with setCurrentLocation()

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param | Type | Description |
| --- | --- | --- |
| types | <code>Array.&lt;string&gt;</code> | hospital, restaurant, hotel, nightclub, restaurant, sports_centre, etc |

**Example**  
```js
var loc = scene.findNearbyBuilding(restaurant, bar, nightclub)scene.moveTo(loc)
```
<a name="LPScene+followUp"></a>

### lpScene.followUp(sceneID)
Start another scene immediately after this current scene finishes

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param |
| --- |
| sceneID | 

**Example**  
```js
Dating.dialog("You betrayed me, you humiliated me ... now you die!", "Furious")scene.narrative("Pow!")Player.hide()scene.followUp("death")
```
<a name="LPScene+forcedTrigger"></a>

### lpScene.forcedTrigger() ⇒ [<code>LPBoolean</code>](#LPBoolean)
Returns whether a scene was force triggered with an action that has the SCENE_ALWAYS field filled (which overrides the conditions at the top of a scene). Use it to know if the scene was consciously triggered by the player or randomly triggered.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
**Example**  
```js
// The "organize_a_house_party.lpaction" file has the following field filled:// SCENE_ALWAYS: house_party// And the house_party.lpscene consults it like this:let PlayerHosting = scene.ForcedTrigger()scene.sceneStart()$if(PlayerHosting, ()=>{	  scene.narrative("My preparations are all done. It's time to welcome the guests!")	  Player.dialog("Come in, everyone! Don't be shy. Everything's ready.", "Happy")}).$else(()=>{	  scene.narrative("My phone rang! It's <Host.name>. I wonder what <Host.he_or_she> is calling me for?")   // ...}).$endif()
```
<a name="LPScene+generateCreature"></a>

### lpScene.generateCreature(optionalRace) ⇒ <code>LPActor</code>
Generate a new permanent creature NPC.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
**Returns**: <code>LPActor</code> - Actor  

| Param | Type | Description |
| --- | --- | --- |
| optionalRace | <code>string</code> | dog/horse or none |

**Example**  
```js
let Actor = scene.generateCreature(Dogs)scene.narrative("<Actor.name> is my new dog.")
```
<a name="LPScene+generateCreatureTemporary"></a>

### lpScene.generateCreatureTemporary(optionalRace) ⇒ <code>LPActor</code>
Generate a new temporary (until you call MakePermanent) creature NPC.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
**Returns**: <code>LPActor</code> - Actor  

| Param | Type | Description |
| --- | --- | --- |
| optionalRace | <code>string</code> | dog/horse or none |

**Example**  
```js
Actor = generateCreatureTemporary(Dogs)let Actor$while(Actor.isMale(), ()=>{   Actor = $let('Actor', scene.generateCreatureTemporary("Dog"))})scene.narrative("<Actor.name> is my new bitch, literally.")
```
<a name="LPScene+generatePerson"></a>

### lpScene.generatePerson(presets) ⇒ <code>LPActor</code>
Generate a new actor. If nothing inside the bracket: completely random actor. Or you can specify the presets to blend into this new actor. The actor generated using this method will be permanent right away, meaning they will remain after the current scene ends and are usable for some functions that only work with permanent actors.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
**Returns**: <code>LPActor</code> - Actor  

| Param |
| --- |
| presets | 

**Example**  
```js
let Actor = $let('Actor', scene.generatePerson())  // OR Actor = scene.generatePerson(["easterneuropean", "twenties", "fitness_model"])Actor.dress()Actor.show(2)Player.exchangeContact(Actor) // this will succeed because this is a permanent actor
```
<a name="LPScene+generatePersonTemporary"></a>

### lpScene.generatePersonTemporary(presets) ⇒ <code>LPActor</code>
Generate a new actor. If nothing inside the bracket: completely random actor. Or you can specify the presets to blend into this new actor.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
**Returns**: <code>LPActor</code> - Actor  

| Param |
| --- |
| presets | 

**Example**  
```js
let Actor = $let('Actor', scene.generatePersonTemporary())  // OR Actor = scene.generatePersonTemporary(["easterneuropean", "twenties", "fitness_model"])Actor.dress()Actor.show(2)Player.exchangeContact(Actor) // this will succeed because this is a permanent actor
```
<a name="LPScene+getActorAlias"></a>

### lpScene.getActorAlias(aliasStr) ⇒ [<code>LPNPC</code>](#LPNPC)
For quests. Return an actor from a previously set actor alias.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param | Type |
| --- | --- |
| aliasStr | [<code>LPString</code>](#LPString) \| <code>string</code> | 

<a name="LPScene+getAssignee"></a>

### lpScene.getAssignee(location)
Gets an actor assigned to a location? But how do they get assigned?

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param |
| --- |
| location | 

**Example**  
```js
var Actor4 = scene.getAssignee("living room")
```
<a name="LPScene+getCreature"></a>

### lpScene.getCreature()
Get a random creature NPC. This function is very simple right now with the first implementation of creature NPCs, but it will most likely evolve over time.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
<a name="LPScene+getPerson"></a>

### lpScene.getPerson(hasContactExchangedOrTag) ⇒ <code>LPActor</code> \| <code>undefined</code>
Get a random person in your current game (i.e. could be anyone that has been created with GeneratePerson() or GeneratePersonTemporary() then MakePermanent() ).getPerson() will only return a specific person once for a scene. So you can use it to  iterate though all persons in the game (omit the parameter), all youhave in your contacts (set parameter to true), all persons you don't have exchanged contacts with (set to false) or all persons with a specific tag.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param | Type | Description |
| --- | --- | --- |
| hasContactExchangedOrTag | <code>boolean</code> \| <code>tag</code> | to filter for whether their contact has been exchanged to you or not. Tag (any): to filter for persons that have the given tag assigned. The tag command was introduced with LifePlay 2.18 and can be used to iterate over all persons with a certain tag. |

**Example**  
```js
var Actor = scene.getPerson()       // get anyoneActor = scene.getPerson(true)       // get someone who has exchanged contacts with meActor = scene.getPerson(false)      // get someone who is not in my contactsActor = scene.getPerson('SomeTag')  // get only persons with 'SomeTag' (in contacts or not)Actor = scene.getPerson('TagModel')$while(Actor.isValid(), ()=>{    // Do something with the model    // Get the next one or an invalid actor if no more persons with this tag.    Actor = scene.getPerson('TagModel')})
```
<a name="LPScene+getPersonHere"></a>

### lpScene.getPersonHere(isPermanent) ⇒ [<code>LPNPC</code>](#LPNPC)
Returns a person in the current building / location.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param | Type | Description |
| --- | --- | --- |
| isPermanent | <code>boolean</code> \| <code>undefined</code> | If true only permanent actors will be returned. If false only temporary NPCs will be returned. If omitted all NPCs will be returned. |

<a name="LPScene+getRelatedPeople"></a>

### lpScene.getRelatedPeople(types) ⇒ [<code>Array.&lt;LPNPC&gt;</code>](#LPNPC) \| <code>undefined</code>
Get a group of NPCs with special relationship of specific type or another with each other. The actor variable you give will receive a number suffix starting from 0 when the actors are returned. The list for 'Type' is:

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
**Todo**

- [ ] this one is weird as it returns multiple actors ie if getRelatedPeople(Spouses, Dating) this would create Actor0 and Actor1, it will be complex to handle


| Param | Type | Description |
| --- | --- | --- |
| types | <code>Array.&lt;string&gt;</code> \| <code>undefined</code> | Dating, Spouses, Siblings, ParentChild, Cousins, BossEmployee, Colleagues |

<a name="LPScene+getSpecific"></a>

### lpScene.getSpecific(keywordOrID) ⇒ [<code>LPNPC</code>](#LPNPC)
Get a specific person in your current game.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param | Type | Description |
| --- | --- | --- |
| keywordOrID | <code>string</code> \| <code>float</code> | Doctor, Nurse, Dating, Dating_Friend, Boss, Colleague, Neighbour, PT, PotentialBabyDaddy, Prostitute, ExDating, Landlord, Lecturer, CurrentBabyDaddy, Impregnated, Affair, Coursemate, Fraternity, Student, chooseContact, PassedOn, Relative, Dating_Friend, Neighbour Alternatively, you can input an ID number or a float variable containing it to get the actor with that ID. |

<a name="LPScene+isModEnabled"></a>

### lpScene.isModEnabled(modID) ⇒ <code>void</code> \| <code>\*</code>
Check if a mod, identified by its ID in its .lpmod file, is enabled.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param |
| --- |
| modID | 

<a name="LPScene+isQuestCompleted"></a>

### lpScene.isQuestCompleted(quest) ⇒ [<code>LPBoolean</code>](#LPBoolean)
Returns true if quest is complete

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param | Type |
| --- | --- |
| quest | <code>string</code> | 

<a name="LPScene+isTimingOut"></a>

### lpScene.isTimingOut(sceneID) ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the specified is still in cool down period and shouldn't be triggered again yet.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param | Type |
| --- | --- |
| sceneID | [<code>LPString</code>](#LPString) \| <code>string</code> | 

<a name="LPScene+openMenu"></a>

### lpScene.openMenu(text)
Opens a menu.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | ModManager, Stat, CharGen, Contacts, City, Inventory |

<a name="LPScene+passTime"></a>

### lpScene.passTime(hoursMin, hoursMax) ⇒ [<code>LPScene</code>](#LPScene)
Use to pass time during a scene.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
**Returns**: [<code>LPScene</code>](#LPScene) - scene for chaining  

| Param | Type |
| --- | --- |
| hoursMin | <code>number</code> | 
| hoursMax | <code>number</code> | 

**Example**  
```js
scene.narrative("The party continues ...")scene.passTime(0.25, 1)
```
<a name="LPScene+preciseModify"></a>

### lpScene.preciseModify() ⇒ [<code>LPScene</code>](#LPScene)
No idea what this does but is used when buying or selling.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
**Returns**: [<code>LPScene</code>](#LPScene) - scene for chaining  
<a name="LPScene+questEnd"></a>

### lpScene.questEnd() ⇒ [<code>LPScene</code>](#LPScene)
Ends the current quest

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
**Returns**: [<code>LPScene</code>](#LPScene) - scene for chaining  
<a name="LPScene+removeNpcRelationship"></a>

### lpScene.removeNpcRelationship(actors) ⇒ [<code>LPScene</code>](#LPScene)
Remove any relationships between 2 or more NPCs.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param | Type |
| --- | --- |
| actors | <code>Array.&lt;LPActor&gt;</code> | 

<a name="LPScene+resetTutorials"></a>

### lpScene.resetTutorials() ⇒ [<code>LPScene</code>](#LPScene)
Reset the tutorials? Not sure only used in TF.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
<a name="LPScene+saveOldPlayer"></a>

### lpScene.saveOldPlayer() ⇒ [<code>LPScene</code>](#LPScene)
Saves the player before Player.changeSex()? Not sure only used in TF.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
<a name="LPScene+start"></a>

### lpScene.start(script) ⇒ [<code>LPScene</code>](#LPScene)
Start the scene and open the scene UI

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
**Returns**: [<code>LPScene</code>](#LPScene) - scene for chaining  

| Param | Type |
| --- | --- |
| script | [<code>scene</code>](#Script..scene) | 

<a name="LPScene+sceneEndLoadLastSave"></a>

### lpScene.sceneEndLoadLastSave() ⇒ [<code>LPScene</code>](#LPScene)
End the current scene and loads the last save. Used for game-over.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
**Returns**: [<code>LPScene</code>](#LPScene) - scene for chaining  
<a name="LPScene+secondScreen"></a>

### lpScene.secondScreen(actor)
Lock an actor onto a miniscreen, for telephone call and thought sequence. While being locked, every Show() called on the Actor will not move them into the environment but stuck at the miniscreen instead

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param |
| --- |
| actor | 

<a name="LPScene+secondScreenIfHidden"></a>

### lpScene.secondScreenIfHidden(actor)
Same as SecondScreen(), but does nothing if the actor is already currently seen in the environment (So that they don't disappear from the player's current location and get on the phone remotely instead).

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param |
| --- |
| actor | 

<a name="LPScene+setBackground"></a>

### lpScene.setBackground(where)
Set the background image. Check all_where.txt for full list. This is also important for dress() which decides how to dress the actor appropriately based on the background (suits for work, sport clothes for sports_centre etc)

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param |
| --- |
| where | 

<a name="LPScene+setBackground3D"></a>

### lpScene.setBackground3D(scene3dPath)
Set the background as a 3D room for the current scene.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param |
| --- |
| scene3dPath | 

**Example**  
```js
scene.setBackground("work")scene.setBackground3D("Modules/nn_PornEmpire/Rooms/nn_pe_office_1.lpworld")
```
<a name="LPScene+setBackgroundCustom"></a>

### lpScene.setBackgroundCustom(where)
Same as setBackground(), but some extra parameters like livingroom, kitchen, stable, hallway

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param | Type | Description |
| --- | --- | --- |
| where | <code>string</code> | livingroom, kitchen, stable, hallway |

<a name="LPScene+sex"></a>

### lpScene.sex(actors)
Start a sex scene involving these actors. If the player is involved, it will also check whether the player is cheating or not and add to the affair list accordingly.The order in which roles are given to actors for the sex scene (important for descriptions and dirtytalk) depends largely on gender and domincance. Males are given rolesbefore transsexuals, then women. Between people of the same gender, the most dominant one (lowest submission stat) is given a role first. However, the order of the actorparameters to the sex() function matters somewhat in group sex: Sex(Male1, Player, Male2) will be different from Sex(Male2, Player, Male1).

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param |
| --- |
| actors | 

<a name="LPScene+sexAtPoint"></a>

### lpScene.sexAtPoint(x, y, z, angle)
Let the following sex scene happen at a specific position and not at a randomly chosen one.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param |
| --- |
| x | 
| y | 
| z | 
| angle | 

<a name="LPScene+sexNoAffair"></a>

### lpScene.sexNoAffair(actors)
Start a sex scene involving these actors. Even if the player is involved, it will not check whether the player is cheating or not. The order in which roles are given toactors for the sex scene (important for descriptions and dirtytalk) depends largely on gender and domincance. Males are given roles before transsexuals, then women.Between people of the same gender, the most dominant one (lowest submission stat) is given a role first. However, the order of the actor parameters to the Sex()function matters somewhat in group sex: SexNoAffair(Male1, Player, Male2) will be different from SexNoAffair(Male2, Player, Male1).

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param |
| --- |
| actors | 

<a name="LPScene+showMapView"></a>

### lpScene.showMapView(radius)
Allows you to switch to the map view during scenes, possibly with a random location within a specified radius from your current location

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param |
| --- |
| radius | 

<a name="LPScene+sneakGame"></a>

### lpScene.sneakGame() ⇒ <code>float</code>
Show sneak game, if successful, the next sneak check will return 100

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
**Example**  
```js
$if(Random(0, 100).lt(sneak), ()=>{    scene.narrative("Perfect. Nobody saw a thing.")}).$endif()
```
<a name="LPScene+talkNonConsensual"></a>

### lpScene.talkNonConsensual()
call this command before starting a sex scene to make sure that none of the regular 'dirtytalk' (ie both ppl wanting it) is played, and only rape talk is.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
<a name="LPScene+TfGame"></a>

### lpScene.TfGame() ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the current game was started with the TF New Game

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
<a name="LPScene+wasCondomUsedDuringLastSex"></a>

### lpScene.wasCondomUsedDuringLastSex() ⇒ <code>boolean</code>
Returns true if condoms were used during last sex

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
<a name="LPStat"></a>

## LPStat
Class representing a LifePlay Stat.

**Kind**: global class  
<a name="new_LPStat_new"></a>

### new LPStat(STAT_ID, STAT_NAME, PLAYER_ONLY, HIGHER_BETTER, STAT_MIN, STAT_MAX, DAILY_CHANGE, DEFAULT_VALUE, NPC_ONLY, modsDir, filePath)

| Param |
| --- |
| STAT_ID | 
| STAT_NAME | 
| PLAYER_ONLY | 
| HIGHER_BETTER | 
| STAT_MIN | 
| STAT_MAX | 
| DAILY_CHANGE | 
| DEFAULT_VALUE | 
| NPC_ONLY | 
| modsDir | 
| filePath | 

<a name="LPTalk"></a>

## LPTalk
Class representing a LifePlay Talk.

**Kind**: global class  
<a name="LPBoolean"></a>

## LPBoolean : [<code>LPBoolean</code>](#LPBoolean)
Class representing a LifePlay boolean.

**Kind**: global class  

* [LPBoolean](#LPBoolean) : [<code>LPBoolean</code>](#LPBoolean)
    * [.assign(rhs)](#LPBoolean+assign) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.and(rhs)](#LPBoolean+and) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.or(rhs)](#LPBoolean+or) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.not()](#LPBoolean+not) ⇒ [<code>LPBoolean</code>](#LPBoolean)

<a name="LPBoolean+assign"></a>

### lpBoolean.assign(rhs) ⇒ [<code>LPBoolean</code>](#LPBoolean)
Assigns the value of rhs to this

**Kind**: instance method of [<code>LPBoolean</code>](#LPBoolean)  

| Param | Type |
| --- | --- |
| rhs | <code>boolean</code> \| [<code>LPBoolean</code>](#LPBoolean) | 

<a name="LPBoolean+and"></a>

### lpBoolean.and(rhs) ⇒ [<code>LPBoolean</code>](#LPBoolean)
Logical and

**Kind**: instance method of [<code>LPBoolean</code>](#LPBoolean)  

| Param | Type |
| --- | --- |
| rhs | <code>boolean</code> \| [<code>LPBoolean</code>](#LPBoolean) | 

<a name="LPBoolean+or"></a>

### lpBoolean.or(rhs) ⇒ [<code>LPBoolean</code>](#LPBoolean)
Logical or

**Kind**: instance method of [<code>LPBoolean</code>](#LPBoolean)  

| Param | Type |
| --- | --- |
| rhs | <code>boolean</code> \| [<code>LPBoolean</code>](#LPBoolean) | 

<a name="LPBoolean+not"></a>

### lpBoolean.not() ⇒ [<code>LPBoolean</code>](#LPBoolean)
Logical not

**Kind**: instance method of [<code>LPBoolean</code>](#LPBoolean)  
<a name="LPBuilding"></a>

## LPBuilding : [<code>LPBuilding</code>](#LPBuilding)
Class representing a LifePlay building.

**Kind**: global class  

* [LPBuilding](#LPBuilding) : [<code>LPBuilding</code>](#LPBuilding)
    * [.calculateExpenses](#LPBuilding+calculateExpenses) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.calculateRent](#LPBuilding+calculateRent) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.calculateRevenue](#LPBuilding+calculateRevenue) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.calculateWages](#LPBuilding+calculateWages) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.getBuildingType](#LPBuilding+getBuildingType) ⇒ [<code>LPString</code>](#LPString)
    * [.isOpen](#LPBuilding+isOpen) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isSameBuilding](#LPBuilding+isSameBuilding) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.modifyReputation](#LPBuilding+modifyReputation) ⇒ [<code>LPBuilding</code>](#LPBuilding)
    * [.removeObjective](#LPBuilding+removeObjective) ⇒ [<code>LPBuilding</code>](#LPBuilding)
    * [.setHomeDating](#LPBuilding+setHomeDating)
    * [.generateBuildingAlias(alias, buildingType)](#LPBuilding+generateBuildingAlias)

<a name="LPBuilding+calculateExpenses"></a>

### lpBuilding.calculateExpenses ⇒ [<code>LPFloat</code>](#LPFloat)
Calculate the expenses for the current building.

**Kind**: instance property of [<code>LPBuilding</code>](#LPBuilding)  
<a name="LPBuilding+calculateRent"></a>

### lpBuilding.calculateRent ⇒ [<code>LPFloat</code>](#LPFloat)
Calculate the rent for the current building.

**Kind**: instance property of [<code>LPBuilding</code>](#LPBuilding)  
<a name="LPBuilding+calculateRevenue"></a>

### lpBuilding.calculateRevenue ⇒ [<code>LPFloat</code>](#LPFloat)
Calculate the revenue for the current building.

**Kind**: instance property of [<code>LPBuilding</code>](#LPBuilding)  
**Example**  
```js
var revenue = float('rent', scene.building.calculateRevenue())var revenueC = revenue.convertToLocalCurrency(true)scene.narration("Estimated gross revenue for this month is <revenueC>.")
```
<a name="LPBuilding+calculateWages"></a>

### lpBuilding.calculateWages ⇒ [<code>LPFloat</code>](#LPFloat)
Calculate the wages for the current building.

**Kind**: instance property of [<code>LPBuilding</code>](#LPBuilding)  
<a name="LPBuilding+getBuildingType"></a>

### lpBuilding.getBuildingType ⇒ [<code>LPString</code>](#LPString)
Used with getBuilding() and isString("") for lpai files

**Kind**: instance property of [<code>LPBuilding</code>](#LPBuilding)  
<a name="LPBuilding+isOpen"></a>

### lpBuilding.isOpen ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if a building type is open at the current hour

**Kind**: instance property of [<code>LPBuilding</code>](#LPBuilding)  

| Param |
| --- |
| type | 

<a name="LPBuilding+isSameBuilding"></a>

### lpBuilding.isSameBuilding ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if two building variables refer to the same building

**Kind**: instance property of [<code>LPBuilding</code>](#LPBuilding)  

| Param |
| --- |
| otherBuilding | 

<a name="LPBuilding+modifyReputation"></a>

### lpBuilding.modifyReputation ⇒ [<code>LPBuilding</code>](#LPBuilding)
Change the local reputation of this business

**Kind**: instance property of [<code>LPBuilding</code>](#LPBuilding)  
**Returns**: [<code>LPBuilding</code>](#LPBuilding) - "this" LPBuilding for chaining  

| Param | Type |
| --- | --- |
| value | [<code>LPFloat</code>](#LPFloat) \| <code>number</code> | 

<a name="LPBuilding+removeObjective"></a>

### lpBuilding.removeObjective ⇒ [<code>LPBuilding</code>](#LPBuilding)
Remove objective from a building alias, objective is simply a lpaction file with SCENE_ALWAYS

**Kind**: instance property of [<code>LPBuilding</code>](#LPBuilding)  
**Returns**: [<code>LPBuilding</code>](#LPBuilding) - "this" LPBuilding for chaining  

| Param |
| --- |
| lpActionFilename | 

<a name="LPBuilding+setHomeDating"></a>

### lpBuilding.setHomeDating
Set a specific building as your SO's home

**Kind**: instance property of [<code>LPBuilding</code>](#LPBuilding)  
<a name="LPBuilding+generateBuildingAlias"></a>

### lpBuilding.generateBuildingAlias(alias, buildingType)
Used for quest, building alias is a location that a quest objective can be at, used with LPBuildingAlias.addObjective()

**Kind**: instance method of [<code>LPBuilding</code>](#LPBuilding)  

| Param |
| --- |
| alias | 
| buildingType | 

<a name="LPBuildingAlias"></a>

## LPBuildingAlias : [<code>LPBuildingAlias</code>](#LPBuildingAlias)
Class representing a LifePlay building alias.

**Kind**: global class  
<a name="LPBuildingAlias+addObjective"></a>

### lpBuildingAlias.addObjective(LPAction)
Add objective to a building alias, objective is simply a LPAction file with SCENE_ALWAYS

**Kind**: instance method of [<code>LPBuildingAlias</code>](#LPBuildingAlias)  

| Param |
| --- |
| LPAction | 

<a name="LPFloat"></a>

## LPFloat : [<code>LPFloat</code>](#LPFloat)
Class representing a LifePlay float.

**Kind**: global class  

* [LPFloat](#LPFloat) : [<code>LPFloat</code>](#LPFloat)
    * [.floor()](#LPFloat+floor) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.power(rhs)](#LPFloat+power) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.round()](#LPFloat+round) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.convertToLocalCurrency()](#LPFloat+convertToLocalCurrency) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.setFraternityFees()](#LPFloat+setFraternityFees)
    * [.setRent()](#LPFloat+setRent)
    * [.setSalary()](#LPFloat+setSalary)
    * [.setTuition()](#LPFloat+setTuition)

<a name="LPFloat+floor"></a>

### lpFloat.floor() ⇒ [<code>LPFloat</code>](#LPFloat)
Use this function to get the integer value of a float variable.Any value less than x.3 / x.5 / x.8 will be rounded down to "x".

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  
<a name="LPFloat+power"></a>

### lpFloat.power(rhs) ⇒ [<code>LPFloat</code>](#LPFloat)
Float raised to the power of rhs.

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  

| Param | Type |
| --- | --- |
| rhs | <code>number</code> \| [<code>LPFloat</code>](#LPFloat) | 

<a name="LPFloat+round"></a>

### lpFloat.round() ⇒ [<code>LPFloat</code>](#LPFloat)
Use this function mathematically round a float variable.Any value less than x.5 will be rounded down to "x" anything larger or equal tox.5 will be rounded up to x+1.

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  
<a name="LPFloat+convertToLocalCurrency"></a>

### lpFloat.convertToLocalCurrency() ⇒ [<code>LPFloat</code>](#LPFloat)
Converts a dollar value to the local currency for the home city in string format.

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  
<a name="LPFloat+setFraternityFees"></a>

### lpFloat.setFraternityFees()
Set this as your current monthly fraternity fees.

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  
**Example**  
```js
var FratFee = float('FratFee', 1000)FratFee.setFraternityFees()scene.narrative("I agreed to pay $1000 per month for fraternity fees")
```
<a name="LPFloat+setRent"></a>

### lpFloat.setRent()
Set this as your current rent.

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  
**Example**  
```js
var Landlord = scene.generatePerson()Landlord.dress()Landlord.show(2)scene.narrative("I signed the contract.")Player.moveHome()var Rent = float('Rent', 1000)Landlord.setLandlord()Rent.setRent()
```
<a name="LPFloat+setSalary"></a>

### lpFloat.setSalary()
Set this as your current salary.

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  
**Example**  
```js
scene.narrative("I signed the contract.")Player.moveJobs()var Salary = float('Salary', 2000)Interviewer.setBoss()Salary.setSalary()
```
<a name="LPFloat+setTuition"></a>

### lpFloat.setTuition()
Set this as your current monthly tuition fees.

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  
**Example**  
```js
var Tuition = float('Tuition', 1000)Tuition.setTuition()scene.narrative("I agreed to pay $1000 per month for tuition")
```
<a name="LPNPC"></a>

## LPNPC ⇐ <code>LPActor</code>
Class representing a LifePlay NPC Actor.

**Kind**: global class  
**Extends**: <code>LPActor</code>  

* [LPNPC](#LPNPC) ⇐ <code>LPActor</code>
    * [.addColleague](#LPNPC+addColleague) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.addCriminal](#LPNPC+addCriminal) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.addDatingFriend](#LPNPC+addDatingFriend) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.addEmployee](#LPNPC+addEmployee) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.addNeighbour](#LPNPC+addNeighbour) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.addProstitute](#LPNPC+addProstitute) ⇒ <code>\*</code>
    * [.addToPeopleHere](#LPNPC+addToPeopleHere)
    * [.assignWhat](#LPNPC+assignWhat) ⇒ <code>string</code>
    * [.assignWhere](#LPNPC+assignWhere) ⇒ <code>string</code>
    * [.blockNPCRelationships](#LPNPC+blockNPCRelationships)
    * [.delete](#LPNPC+delete)
    * [.deletePerson](#LPNPC+deletePerson)
    * [.favoriteHome](#LPNPC+favoriteHome)
    * [.getUntil](#LPNPC+getUntil) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.hasRelationship](#LPNPC+hasRelationship) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isAffair](#LPNPC+isAffair) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isBoss](#LPNPC+isBoss) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isColleague](#LPNPC+isColleague) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isContactExchanged](#LPNPC+isContactExchanged) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isCreature](#LPNPC+isCreature) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isCreatureType](#LPNPC+isCreatureType) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isDatingFriend](#LPNPC+isDatingFriend) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isDeflowered](#LPNPC+isDeflowered) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isDeflowerer](#LPNPC+isDeflowerer)
    * [.isEmployee](#LPNPC+isEmployee)
    * [.isExRelative](#LPNPC+isExRelative) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isLandlord](#LPNPC+isLandlord) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isMarried](#LPNPC+isMarried) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isNeighbour](#LPNPC+isNeighbour) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isRelationshipWith](#LPNPC+isRelationshipWith) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isRelative](#LPNPC+isRelative) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isRelativeType](#LPNPC+isRelativeType) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isTemporary](#LPNPC+isTemporary) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.livesWithPlayer](#LPNPC+livesWithPlayer) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.makePermanent](#LPNPC+makePermanent)
    * [.passOn](#LPNPC+passOn) ⇒ [<code>LPNPC</code>](#LPNPC)
    * [.randomizeFace](#LPNPC+randomizeFace)
    * [.randomizeHairs](#LPNPC+randomizeHairs)
    * [.randomizeRace](#LPNPC+randomizeRace)
    * [.randomizeSexy](#LPNPC+randomizeSexy)
    * [.removeColleague](#LPNPC+removeColleague)
    * [.removeDatingFriend](#LPNPC+removeDatingFriend)
    * [.removeEmployee](#LPNPC+removeEmployee)
    * [.removeNeighbour](#LPNPC+removeNeighbour)
    * [.removeProstitute](#LPNPC+removeProstitute)
    * [.saveAndDelete](#LPNPC+saveAndDelete)
    * [.setActorAlias](#LPNPC+setActorAlias) ⇒ [<code>LPString</code>](#LPString)
    * [.setBoss](#LPNPC+setBoss)
    * [.setCrimeBoss](#LPNPC+setCrimeBoss)
    * [.setDating](#LPNPC+setDating)
    * [.setDatingID](#LPNPC+setDatingID)
    * [.setDifferentMajor](#LPNPC+setDifferentMajor)
    * [.setLandlord](#LPNPC+setLandlord)
    * [.setLivingWithPlayer](#LPNPC+setLivingWithPlayer)
    * [.setPT](#LPNPC+setPT)
    * [.setRelativeType](#LPNPC+setRelativeType)
    * [.setSameMajor](#LPNPC+setSameMajor)
    * [.setSubject](#LPNPC+setSubject)
    * [.setUntil](#LPNPC+setUntil)
    * [.name](#LPActor+name) : <code>string</code>
    * [.animate](#LPActor+animate)
    * [.animateFnt](#LPActor+animateFnt)
    * [.animatePair](#LPActor+animatePair)
    * [.blendAppearanceFrom](#LPActor+blendAppearanceFrom) ⇒ <code>LPActor</code>
    * [.blendPreset](#LPActor+blendPreset) ⇒ <code>LPActor</code>
    * [.changeSex](#LPActor+changeSex)
    * [.cloneFrom](#LPActor+cloneFrom)
    * [.closeEyes](#LPActor+closeEyes)
    * [.clothesContain](#LPActor+clothesContain)
    * [.countPregnancyDays](#LPActor+countPregnancyDays) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.dress](#LPActor+dress)
    * [.dressBondage](#LPActor+dressBondage)
    * [.dressExcept](#LPActor+dressExcept)
    * [.dressGuard](#LPActor+dressGuard)
    * [.dressPrisoner](#LPActor+dressPrisoner)
    * [.dressUniform](#LPActor+dressUniform)
    * [.dressWedding](#LPActor+dressWedding)
    * [.endPregnancy](#LPActor+endPregnancy)
    * [.enterFirstName](#LPActor+enterFirstName)
    * [.generatePersonMatchRace](#LPActor+generatePersonMatchRace) ⇒ [<code>LPNPC</code>](#LPNPC)
    * [.generatePersonTemporaryMatchRace](#LPActor+generatePersonTemporaryMatchRace) ⇒
    * [.generateRelativeMatchRace](#LPActor+generateRelativeMatchRace) ⇒ [<code>LPNPC</code>](#LPNPC)
    * [.getActorVar](#LPActor+getActorVar)
    * [.getBabyDaddy](#LPActor+getBabyDaddy) ⇒ [<code>LPNPC</code>](#LPNPC)
    * [.getBuilding](#LPActor+getBuilding) ⇒ [<code>LPBuilding</code>](#LPBuilding)
    * [.getID](#LPActor+getID) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.getMorphValue](#LPActor+getMorphValue) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.getPregnancyTag](#LPActor+getPregnancyTag) ⇒ [<code>LPString</code>](#LPString)
    * [.getRace](#LPActor+getRace) ⇒ <code>string</code>
    * [.getRelatedPerson](#LPActor+getRelatedPerson) ⇒ [<code>LPNPC</code>](#LPNPC) \| <code>undefined</code>
    * [.getRelatedPersonQuick](#LPActor+getRelatedPersonQuick) ⇒ [<code>LPNPC</code>](#LPNPC) \| <code>undefined</code>
    * [.hadSex](#LPActor+hadSex) ⇒ <code>boolean</code>
    * [.hasSameInterestAs](#LPActor+hasSameInterestAs) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.hide](#LPActor+hide)
    * [.impregnate](#LPActor+impregnate)
    * [.isAsexual](#LPActor+isAsexual) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isAt](#LPActor+isAt) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isBisexual](#LPActor+isBisexual) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isBisexualNonTrans](#LPActor+isBisexualNonTrans) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isDating](#LPActor+isDating) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isDominantSex](#LPActor+isDominantSex) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isEquipped](#LPActor+isEquipped) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isFemale](#LPActor+isFemale) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isGay](#LPActor+isGay) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isGayNonTrans](#LPActor+isGayNonTrans) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isInterestedIn](#LPActor+isInterestedIn) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isInterestedInMen](#LPActor+isInterestedInMen) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isInterestedInTrans](#LPActor+isInterestedInTrans) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isInterestedInWomen](#LPActor+isInterestedInWomen) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isJob](#LPActor+isJob) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isMale](#LPActor+isMale) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isNaked](#LPActor+isNaked) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isNude](#LPActor+isNude) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isOnPeriod](#LPActor+isOnPeriod) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isPlayer](#LPActor+isPlayer) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isPregnant](#LPActor+isPregnant) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isProstitute](#LPActor+isProstitute) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isRace](#LPActor+isRace) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isSameAs](#LPActor+isSameAs) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isSameGender](#LPActor+isSameGender) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isSameRace](#LPActor+isSameRace) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isSlotOccupied](#LPActor+isSlotOccupied) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isStraight](#LPActor+isStraight) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isStraightNonTrans](#LPActor+isStraightNonTrans) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isTrans](#LPActor+isTrans) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isValid](#LPActor+isValid) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isVirgin](#LPActor+isVirgin) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isVisible](#LPActor+isVisible) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.loadPreset](#LPActor+loadPreset) ⇒ <code>LPActor</code>
    * [.makeInterested](#LPActor+makeInterested)
    * [.matchLastName](#LPActor+matchLastName)
    * [.modifyActorVar](#LPActor+modifyActorVar)
    * [.modifySalary](#LPActor+modifySalary)
    * [.moveToPerson](#LPActor+moveToPerson)
    * [.moveToPersonStand](#LPActor+moveToPersonStand)
    * [.randomize](#LPActor+randomize)
    * [.setActorVar](#LPActor+setActorVar)
    * [.setCurrentLocation](#LPActor+setCurrentLocation)
    * [.setDatingId](#LPActor+setDatingId)
    * [.setExRelative](#LPActor+setExRelative)
    * [.setJob](#LPActor+setJob)
    * [.setMorphValue](#LPActor+setMorphValue)
    * [.setNoRedress](#LPActor+setNoRedress)
    * [.setWantsBabies](#LPActor+setWantsBabies)
    * [.sex](#LPActor+sex)
    * [.show](#LPActor+show)
    * [.strip](#LPActor+strip)
    * [.stripOne](#LPActor+stripOne)
    * [.wantsBabies](#LPActor+wantsBabies) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.age](#LPActor+age) : [<code>LPFloat</code>](#LPFloat)
    * [.arousal](#LPActor+arousal) : [<code>LPFloat</code>](#LPFloat)
    * [.attractiontoplayer](#LPActor+attractiontoplayer) : [<code>LPFloat</code>](#LPFloat)
    * [.attractiveness](#LPActor+attractiveness) : [<code>LPFloat</code>](#LPFloat)
    * [.car_value](#LPActor+car_value) : [<code>LPFloat</code>](#LPFloat)
    * [.children](#LPActor+children) : [<code>LPFloat</code>](#LPFloat)
    * [.cooking](#LPActor+cooking) : [<code>LPFloat</code>](#LPFloat)
    * [.dance](#LPActor+dance) : [<code>LPFloat</code>](#LPFloat)
    * [.energy](#LPActor+energy) : [<code>LPFloat</code>](#LPFloat)
    * [.fertility](#LPActor+fertility) : [<code>LPFloat</code>](#LPFloat)
    * [.fitness](#LPActor+fitness) : [<code>LPFloat</code>](#LPFloat)
    * [.incest](#LPActor+incest) : [<code>LPFloat</code>](#LPFloat)
    * [.intelligence](#LPActor+intelligence) : [<code>LPFloat</code>](#LPFloat)
    * [.interpersonal](#LPActor+interpersonal) : [<code>LPFloat</code>](#LPFloat)
    * [.intoxication](#LPActor+intoxication) : [<code>LPFloat</code>](#LPFloat)
    * [.jobexperience](#LPActor+jobexperience) : [<code>LPFloat</code>](#LPFloat)
    * [.jobperformance](#LPActor+jobperformance) : [<code>LPFloat</code>](#LPFloat)
    * [.karma](#LPActor+karma) : [<code>LPFloat</code>](#LPFloat)
    * [.martial](#LPActor+martial) : [<code>LPFloat</code>](#LPFloat)
    * [.masochist](#LPActor+masochist) : [<code>LPFloat</code>](#LPFloat)
    * [.money](#LPActor+money) : [<code>LPFloat</code>](#LPFloat)
    * [.mood](#LPActor+mood) : [<code>LPFloat</code>](#LPFloat)
    * [.muscle](#LPActor+muscle) : [<code>LPFloat</code>](#LPFloat)
    * [.music](#LPActor+music) : [<code>LPFloat</code>](#LPFloat)
    * [.perversion](#LPActor+perversion) : [<code>LPFloat</code>](#LPFloat)
    * [.pet_health](#LPActor+pet_health) : [<code>LPFloat</code>](#LPFloat)
    * [.pornfame](#LPActor+pornfame) : [<code>LPFloat</code>](#LPFloat)
    * [.rapportwithplayer](#LPActor+rapportwithplayer) : [<code>LPFloat</code>](#LPFloat)
    * [.sneak](#LPActor+sneak) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_alcohol](#LPActor+stock_alcohol) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_book](#LPActor+stock_book) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_coffee](#LPActor+stock_coffee) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_condom](#LPActor+stock_condom) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_flower](#LPActor+stock_flower) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_gift](#LPActor+stock_gift) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_haircare](#LPActor+stock_haircare) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_ingredient](#LPActor+stock_ingredient) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_juice](#LPActor+stock_juice) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_makeup](#LPActor+stock_makeup) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_meal](#LPActor+stock_meal) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_movie](#LPActor+stock_movie) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_musicalinstrument](#LPActor+stock_musicalinstrument) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_petfood](#LPActor+stock_petfood) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_photo](#LPActor+stock_photo) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_pill](#LPActor+stock_pill) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_skincare](#LPActor+stock_skincare) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_snack](#LPActor+stock_snack) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_soda](#LPActor+stock_soda) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_supplement](#LPActor+stock_supplement) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_tea](#LPActor+stock_tea) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_tobacco](#LPActor+stock_tobacco) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_video](#LPActor+stock_video) : [<code>LPFloat</code>](#LPFloat)
    * [.dialogue(text, [mood])](#LPActor+dialogue)
    * [.monolog(lines)](#LPActor+monolog)

<a name="LPNPC+addColleague"></a>

### lpnpC.addColleague ⇒ [<code>LPBoolean</code>](#LPBoolean)
Add this actor to the list of colleagues. Can be found later with getSpecific(Colleague)

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+addCriminal"></a>

### lpnpC.addCriminal ⇒ [<code>LPBoolean</code>](#LPBoolean)
Make this person part of your crime family.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+addDatingFriend"></a>

### lpnpC.addDatingFriend ⇒ [<code>LPBoolean</code>](#LPBoolean)
Add this actor to the list of your significant other's friends. Can be found later with getSpecific(Dating_Friend)

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+addEmployee"></a>

### lpnpC.addEmployee ⇒ [<code>LPBoolean</code>](#LPBoolean)
Make this person an employee at the specified salary at the current building.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+addNeighbour"></a>

### lpnpC.addNeighbour ⇒ [<code>LPBoolean</code>](#LPBoolean)
Add this actor to the list of neighbours. Can be found later with getSpecific(Neighbour)

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+addProstitute"></a>

### lpnpC.addProstitute ⇒ <code>\*</code>
Add this actor to the list of prostitutes. Can be checked later with Actor.isProstitute()

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+addToPeopleHere"></a>

### lpnpC.addToPeopleHere
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

### lpnpC.delete
Force remove this actor from current memory. Used in rare cases where SceneEnd() (which does this automatically to all actors used in the scene) isn't called.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+deletePerson"></a>

### lpnpC.deletePerson
Force remove this actor completely from the game. They will no longer be called on in scenes or accessible from the Contacts menu. Used in rare cases to kill off characters or characters moving to a new city etc ...

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+favoriteHome"></a>

### lpnpC.favoriteHome
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

### lpnpC.getUntil ⇒ [<code>LPFloat</code>](#LPFloat)
Returns the time this person will stop being at their current location and AI would look for a new location again. The value returned isn't the time of the day,but total hours elapsed since the start of the current game, i.e. HoursElapsed + HoursStayed HoursElapsed being a special variable

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+hasRelationship"></a>

### lpnpC.hasRelationship ⇒ [<code>LPBoolean</code>](#LPBoolean)
Checks to see if this NPC is already in a special relationship of a specific type or another with any another NPC. The list for 'Type':

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| types | <code>Array.&lt;string&gt;</code> | dating, spouses, siblings, parentchild, cousins, bossemployee, colleagues |

<a name="LPNPC+isAffair"></a>

### lpnpC.isAffair ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if you have committed an affair with this actor while with your current boyfriend / girlfriend.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Example**  
```js
$if(John.isAffair(), ()=>{    John.dialog("Oh baby, your stupid boyfriend has no idea what we've done.", 'Flirty')}).$endif()
```
<a name="LPNPC+isBoss"></a>

### lpnpC.isBoss ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is the player's boss.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Example**  
```js
$if(John.isBoss(), ()=>{    John.dialog("You're fired!", "Angry")}).$endIf()
```
<a name="LPNPC+isColleague"></a>

### lpnpC.isColleague ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is one of the player's colleagues.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Example**  
```js
$if(John.isColleague(), ()=>{    John.dialog("Hey, wanna go for lunch?", "Happy")}).$endIf()
```
<a name="LPNPC+isContactExchanged"></a>

### lpnpC.isContactExchanged ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor has exchanged numbers with the player.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Example**  
```js
$if(John.isContactExchanged(), ()=>{    John.dialog("Well, you have my number. Just call me if you need anything else.", "Happy")}).$else(()=>{    John.dialog("Actually, why don't we exchange numbers. So that you'll know how to reach me if you need anything else.", "Happy")    exchangeContact(John)}).$endIf()
```
<a name="LPNPC+isCreature"></a>

### lpnpC.isCreature ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is a creature and not human$if(!Actor.isCreature(), ()=>{    Actor.dress()}).$endIf()

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+isCreatureType"></a>

### lpnpC.isCreatureType ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is a creature of type Dog or Horse

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Dog or Horse |

<a name="LPNPC+isDatingFriend"></a>

### lpnpC.isDatingFriend ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is a friend of your significant other

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+isDeflowered"></a>

### lpnpC.isDeflowered ⇒ [<code>LPBoolean</code>](#LPBoolean)
Returns true if actor has been deflowered by Player.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+isDeflowerer"></a>

### lpnpC.isDeflowerer
Returns true if actor has been deflowered the Player.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+isEmployee"></a>

### lpnpC.isEmployee
Returns true if actor is an employee of the Player.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+isExRelative"></a>

### lpnpC.isExRelative ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is actually your relative who became a lover.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+isLandlord"></a>

### lpnpC.isLandlord ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is your landlord.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+isMarried"></a>

### lpnpC.isMarried ⇒ [<code>LPBoolean</code>](#LPBoolean)
Returns true if the calling actor is married.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+isNeighbour"></a>

### lpnpC.isNeighbour ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is one of your neighbours.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+isRelationshipWith"></a>

### lpnpC.isRelationshipWith ⇒ [<code>LPBoolean</code>](#LPBoolean)
If this actor is in a specific NPC-NPC relationship with actor (Siblings, Dating, Spouses, ParentChild etc)

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param |
| --- |
| actor | 
| relationshipType | 

<a name="LPNPC+isRelative"></a>

### lpnpC.isRelative ⇒ [<code>LPBoolean</code>](#LPBoolean)
returns true if the calling actor is a relative of the player's

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+isRelativeType"></a>

### lpnpC.isRelativeType ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if this actor is this specific relative relationship with the player

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param |
| --- |
| type | 

<a name="LPNPC+isTemporary"></a>

### lpnpC.isTemporary ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if this actor is temporary and to be removed as soon as this scene finishes / the player moves from this location. Used with makePermanent()

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+livesWithPlayer"></a>

### lpnpC.livesWithPlayer ⇒ [<code>LPBoolean</code>](#LPBoolean)
Returns true if the actor lives with the player, ie in the same apartment, not the same building (that'd be a neighbour).

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+makePermanent"></a>

### lpnpC.makePermanent
This turns a temporary actor (generatePersonTemporary) into a permanent actor that persists after the current scene ends. Does nothing if called on an already permanent actor.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+passOn"></a>

### lpnpC.passOn ⇒ [<code>LPNPC</code>](#LPNPC)
Used to pass an actor from one scene to the next scene, used with scene.followUp() and scene.getSpecific("PassedOn")

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Returns**: [<code>LPNPC</code>](#LPNPC) - "this" LPActor for chaining  
<a name="LPNPC+randomizeFace"></a>

### lpnpC.randomizeFace
Randomize the actor's face and skin. Commonly called after blendpreset (which might change the gender which resets the actor to the default face and hair for that gender)

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Overrides**: [<code>randomizeFace</code>](#LPActor+randomizeFace)  
<a name="LPNPC+randomizeHairs"></a>

### lpnpC.randomizeHairs
Randomize the actor's hair and pubic hair. Commonly called after blendpreset (which might change the gender which resets the actor to the default face and hair for that gender)

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Overrides**: [<code>randomizeHairs</code>](#LPActor+randomizeHairs)  
<a name="LPNPC+randomizeRace"></a>

### lpnpC.randomizeRace
Randomize skin colour and nose / eyes racial features

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Overrides**: [<code>randomizeRace</code>](#LPActor+randomizeRace)  
<a name="LPNPC+randomizeSexy"></a>

### lpnpC.randomizeSexy
Randomize dick and tits for this character

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Overrides**: [<code>randomizeSexy</code>](#LPActor+randomizeSexy)  
<a name="LPNPC+removeColleague"></a>

### lpnpC.removeColleague
Remove this actor from the list of colleague. Will remain acquaintance at least though.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+removeDatingFriend"></a>

### lpnpC.removeDatingFriend
Remove this actor from the list of your significant other's friends. Will remain acquaintance at least though.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+removeEmployee"></a>

### lpnpC.removeEmployee
Fire this employee

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+removeNeighbour"></a>

### lpnpC.removeNeighbour
Remove this actor from the list of your neighbours. Will remain acquaintance at least though.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+removeProstitute"></a>

### lpnpC.removeProstitute
Remove this actor from the list of your prostitute.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+saveAndDelete"></a>

### lpnpC.saveAndDelete
Force remove this actor from current memory, but saves any (stat) changes made to them in this scene first. Used for party scenes to avoid bloating.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+setActorAlias"></a>

### lpnpC.setActorAlias ⇒ [<code>LPString</code>](#LPString)
For quests. Set an actor as quest actors so you can reference them whenever you want throughout the quest with scene.getActorAlias(aliasStr)

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param |
| --- |
| aliasStr | 

<a name="LPNPC+setBoss"></a>

### lpnpC.setBoss
Make this person your boss. Current boss is no longer boss and becomes acquaintance.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+setCrimeBoss"></a>

### lpnpC.setCrimeBoss
Make this person the boss of your crime family.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+setDating"></a>

### lpnpC.setDating
Make this person your significant other. Current SO is no longer dating you and becomes acquaintance. Also clears out all friends of previous SOs and affairs, who all become acquaintances.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+setDatingID"></a>

### lpnpC.setDatingID
Something to do with Poly...

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+setDifferentMajor"></a>

### lpnpC.setDifferentMajor
Set the Major for the NPC to be a random subject but not the same as the player, both for teaching and studying.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+setLandlord"></a>

### lpnpC.setLandlord
Make this person your landlord. Current landlord is no longer landlord and becomes acquaintance.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+setLivingWithPlayer"></a>

### lpnpC.setLivingWithPlayer
flags or unflags an actor as living with the player

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type |
| --- | --- |
| isLivingWith | <code>boolean</code> | 

<a name="LPNPC+setPT"></a>

### lpnpC.setPT
Make this person your personal trainer. Current personal trainer is no longer PT and becomes acquaintance.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+setRelativeType"></a>

### lpnpC.setRelativeType
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

### lpnpC.setSameMajor
Set the Major for the NPC to be the same as the player, both for teaching and studying.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+setSubject"></a>

### lpnpC.setSubject
Pick a random subject for a lecturer to teach that matches their major.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPNPC+setUntil"></a>

### lpnpC.setUntil
Set until what time this person will stay at their current location before AI searches for a new location for them again. The float variable isn't the time of the day,but total hours elapsed since the start of the current game, i.e. HoursElapsed + HoursToStay HoursElapsed being a special variable and HoursToStay is up to you

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type |
| --- | --- |
| floatTime | [<code>LPFloat</code>](#LPFloat) | 

<a name="LPActor+name"></a>

### lpnpC.name : <code>string</code>
Actors Name

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+animate"></a>

### lpnpC.animate
Make the actor do something. If no parameter is given current animation will be stopped and actor will go idle.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Description |
| --- | --- |
| animation | undefined or one of: martialart, drinkglass, dance, smoke, pray, sofawatch, browse, call, socialize, work, sweep, bathe, drinkbottle, lecture, theatrewatch, write, groupdance, call, sneak, camera, makeup, eat, toilet, bathe, masturbate, drinktea, smoke, strip, managefinances, receivelapdance, dental, beauty, health, haircut, weights, yoga, na_sleep, na_running |

<a name="LPActor+animateFnt"></a>

### lpnpC.animateFnt
Make the actor use a furniture animation / pose with a specific object. Use the room editor to get x y z of the furniture. Filter is usually sit, use, lie or work

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param |
| --- |
| x | 
| y | 
| z | 
| filter | 

<a name="LPActor+animatePair"></a>

### lpnpC.animatePair
Animates a pair of actors

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| secondActor | <code>LPActor</code> |  |
| animation | <code>string</code> | can be one of Kissing, Vaginal, ...? |

<a name="LPActor+blendAppearanceFrom"></a>

### lpnpC.blendAppearanceFrom ⇒ <code>LPActor</code>
Blends an actors appearance from two actors.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Returns**: <code>LPActor</code> - this actor for chaining  

| Param | Type |
| --- | --- |
| firstActor | <code>LPActor</code> | 
| secondActor | <code>LPActor</code> | 

**Example**  
```js
SceneStart()"I wonder what a future child of me and my date would look like ..."Actor = Player.generateRelativeMatchRace()Actor.blendAppearanceFrom(Player, CurrentCompanion)Actor.show()"Probably like this ..."SceneEnd()
```
<a name="LPActor+blendPreset"></a>

### lpnpC.blendPreset ⇒ <code>LPActor</code>
Blend this actor with a preset, usually called after generatePerson().Presets are contained in a module's folder for the purpose, and can contain either body morphing or stat-related intel.PresetID is the filename without the extension.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Returns**: <code>LPActor</code> - this actor for chaining  

| Param | Type |
| --- | --- |
| presetID | <code>string</code> | 

**Example**  
```js
// We want a male bodybuilderBodybuilder = generatePerson()  // just so that we get the random stats etc, but this might generate a femaleBodybuilder.blendPreset(bodybuilder)  // if the above is female, then this will reset face and hair to the default male face and hair, so it's best to follow up withActor.randomizeFace()Actor.randomizeHairs()
```
<a name="LPActor+changeSex"></a>

### lpnpC.changeSex
Change to the opposite sex, used for TF start

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+cloneFrom"></a>

### lpnpC.cloneFrom
Make an actor identical to another actor (stats, appearance, names, sexual preferences, etc). Used in incest_relationship.lpscene to switch between relative and normal NPC statuses.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type |
| --- | --- |
| actor | <code>LPActor</code> | 

**Example**  
```js
actor2 = generatePerson()actor2.cloneFrom(Actor)  // Actor2 is now a duplicate of Actoractor2.deletePerson() // Bye bye, your clone has replaced youactor2.dress()actor2.show(2)
```
<a name="LPActor+closeEyes"></a>

### lpnpC.closeEyes
force actor to close or open their eyes

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type |
| --- | --- |
| isClosed | <code>boolean</code> | 

**Example**  
```js
Masseuse.dialog("Just lie down and relax.")Player.CloseEyes(true)Mom.dialog("Hey, wake up, sleepy head! You're about to be late for work!", "Angry")Player.CloseEyes(false)
```
<a name="LPActor+clothesContain"></a>

### lpnpC.clothesContain
Check if any equipped apparel has an ID that contains the keyword

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param |
| --- |
| keyword | 
| name | 

**Example**  
```js
if (Actor.clothesContain('Jeans')) {    scene.narrative("<Actor.name> is wearing some sorts of jeans")}
```
<a name="LPActor+countPregnancyDays"></a>

### lpnpC.countPregnancyDays ⇒ [<code>LPFloat</code>](#LPFloat)
Returns the number of days a player has been pregnant.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+dress"></a>

### lpnpC.dress
If there's nothing in the bracket, it will dress the actor fully appropriate to the current building. If a clothing piece is specified, will put that on only. Check LifePlay\Content\Heavy\Clothes for the names of the items

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type |
| --- | --- |
| clothes | <code>string</code> \| [<code>LPString</code>](#LPString) | 

**Example**  
```js
scene.setBackground("work")Player.dress()  // will put on a full suit with oxford shoes etc and underwear underneath// orPlayer.dress("Casual-Clothes_1_F") // will put on casual clothes only, no shoe or underwear
```
<a name="LPActor+dressBondage"></a>

### lpnpC.dressBondage
Put a bdsm piece on an actor. List is in LifePlay\Content\Heavy\New2\BDSM\Clothes (the ones with the prefix Bdg_ )

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param |
| --- |
| bondageGearID | 

**Example**  
```js
Actor.dressBondage("Bdg_Blindfold")
```
<a name="LPActor+dressExcept"></a>

### lpnpC.dressExcept
Dress this person but leave the specified slots unmodified. Used for lingerie modelling.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| slots | <code>Array.&lt;string&gt;</code> | 'Outerwear', 'Headwear', 'Eyewear', 'Top', 'Top_Under', 'Bottom', 'Bottom_Under', 'Foot', 'Foot_Under' |

**Example**  
```js
scene.narration("Looks like they haven't got far at all and are still choosing lingerie ...")Actor.dressExcept(["Outerwear", "Top", "Bottom", "Foot", "Headwear", "Eyewear"])Actor2.dialog("How about this?")
```
<a name="LPActor+dressGuard"></a>

### lpnpC.dressGuard
Dress the person in prison guard outfit (3d assets not made yet, so this actually just calls normal Dress instead).

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+dressPrisoner"></a>

### lpnpC.dressPrisoner
Dress the person in prison outfit (3d assets not made yet, so this actually just calls normal Dress instead).

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+dressUniform"></a>

### lpnpC.dressUniform
Put on appropriate uniform for this person's profession or specific clothing

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| clothing | <code>string</code> \| [<code>LPString</code>](#LPString) | empty or one of Doctor, Nurse, sexwork, Police, Prison, Crime, Wedding, Fast_food, Place_of_worship |

**Example**  
```js
Actor.SetJob(Doctor)Actor.dressUniform()// orActor.dressUniform("Prison")
```
<a name="LPActor+dressWedding"></a>

### lpnpC.dressWedding
This command puts the actor in a wedding dress or suit.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Example**  
```js
scene.narration("It took quite a bit of doing, getting into that corset, but I finally was good to go, and ready to step down the aisle.")scene.setBackground(place_of_worship)Player.dressWedding()
```
<a name="LPActor+endPregnancy"></a>

### lpnpC.endPregnancy
Ends the pregnancy of the actor or player.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Example**  
```js
scene.narration("Sometimes in life difficult choices must be made ...")Player.strip()Player.endPregnancy()scene.narration("Thankfully the procedure went according to plans, with no lasting impact on my future health and fertility.")
```
<a name="LPActor+enterFirstName"></a>

### lpnpC.enterFirstName
Displays a text box so that the player can type in this actor's first name. Used for naming children and pets.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+generatePersonMatchRace"></a>

### lpnpC.generatePersonMatchRace ⇒ [<code>LPNPC</code>](#LPNPC)
Generate a new actor that matches the racial preset of another person (for example, to generate a relative of an NPC). The actor generated using this method will be permanent right away, meaning they will remain after the current scene ends and are usable for some functions that only work with permanent actors.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Example**  
```js
var Actor = Actor2.generatePersonMatchRace()  // If Actor2 is east asian, Actor will also be east asianActor.dress()Actor.show(2)Player.exchangeContact(Actor) // this will succeed because this is a permanent actor
```
<a name="LPActor+generatePersonTemporaryMatchRace"></a>

### lpnpC.generatePersonTemporaryMatchRace ⇒
Generate a new actor that matches the racial preset of another person (for example, to generate a relative of an NPC). The actor generated using this method will be permanent right away, meaning they will remain after the current scene ends and are usable for some functions that only work with permanent actors.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Returns**: LPNPC  
**Example**  
```js
var Actor = Actor2.generatePersonMatchRace()  // If Actor2 is east asian, Actor will also be east asianActor.dress()Actor.show(2)Player.exchangeContact(Actor) // this will fail because Actor isn't a permanent actor
```
<a name="LPActor+generateRelativeMatchRace"></a>

### lpnpC.generateRelativeMatchRace ⇒ [<code>LPNPC</code>](#LPNPC)
Generate a new relative actor that matches the racial preset of another person (for example, to generate my relative). The actor generated using this method will be permanent right away, meaning they will remain after the current scene ends and are usable for some functions that only work with permanent actors.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Example**  
```js
let Actor = $let('Actor', Player.generateRelativeMatchRace())  // This way if you're black, your brother wouldn't turn up white.Actor.dress()Actor.show(2)
```
<a name="LPActor+getActorVar"></a>

### lpnpC.getActorVar
Use this function to get the float value of a variable from a certain actor.The actor can be the Player or any other actor.This function also allows testing it a certain TAG is assigned to an actors.If a tag / value was not assigned the function will return 0.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param |
| --- |
| varOrTag | 

**Example**  
```js
Player.setActorVar("tag_Player", 1) // Set the Tag 'Player' to the Player's characterPlayer.setActorVar("tag_Player", -1) // Remove the Tag 'Player' from the Player's characterPlayer.setActorVar("SomeVariable", 42)     // Set the variable to 42var val = Player.getActorVar("SomeVariable")scene.narration("The value of SomeVariable is <val>.")
```
<a name="LPActor+getBabyDaddy"></a>

### lpnpC.getBabyDaddy ⇒ [<code>LPNPC</code>](#LPNPC)
Returns the Actor who got the this Actor pregnant.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Example**  
```js
var BioDaddy = Actor.getBabyDaddy()
```
<a name="LPActor+getBuilding"></a>

### lpnpC.getBuilding ⇒ [<code>LPBuilding</code>](#LPBuilding)
Get a building related to this NPC AI-wise. Parameters are Home, Work and Current.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | current, home, work |
| [name] | <code>string</code> | optional variable name |

<a name="LPActor+getID"></a>

### lpnpC.getID ⇒ [<code>LPFloat</code>](#LPFloat)
Get the ID number of this actor, which can then be saved as a global variable and then called on using getSpecific.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Example**  
```js
var ID = Actor.getID()var SugarDaddy = $global('SugarDaddy')SugarDaddy.setGlobal(ID)// another scenevar SugarDaddy = $global('SugarDaddy')var ID = SugarDaddy.getGlobal()var Actor$if('ID != 0', ()=>{    Actor = scene.getSpecific(ID)})
```
<a name="LPActor+getMorphValue"></a>

### lpnpC.getMorphValue ⇒ [<code>LPFloat</code>](#LPFloat)
Returns morph value as a float. Morph list can be found in any lpcharacter file

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param |
| --- |
| morphName | 

<a name="LPActor+getPregnancyTag"></a>

### lpnpC.getPregnancyTag ⇒ [<code>LPString</code>](#LPString)
Returns the tag of the Animation that was active when the Actor got pregnant?

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Returns**: [<code>LPString</code>](#LPString) - - Aggressive/AggressiveFM/?  
**Example**  
```js
var Rape = Actor.getPregnancyTag()$if(Rape.isString("Aggressive"), ()=>{    scene.narration('<Actor.name> is pregnant from being raped!')})$if(Rape.isString("AggressiveFM") || , ()=>{    scene.narration('<Actor.name> is pregnant from a rape she committed!')})
```
<a name="LPActor+getRace"></a>

### lpnpC.getRace ⇒ <code>string</code>
Returns the Actors race.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Example**  
```js
var Race = Actor.getRace()scene.narration("I've always had a major thing for a <Actor.handsome_or_beautiful> <Race> like <Actor.name> and couldn't help but fantasize about taking <Actor.him_or_her> to bed. Should I be direct and confess my little <Race> fetish to <Actor.name> now?")
```
<a name="LPActor+getRelatedPerson"></a>

### lpnpC.getRelatedPerson ⇒ [<code>LPNPC</code>](#LPNPC) \| <code>undefined</code>
Get a single NPC with a relationship of the specified type or another with the specified NPC. The list for 'Type' is:

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| relationshipTypes | <code>Array.&lt;string&gt;</code> | Dating, Spouses, Siblings, ParentChild, Cousins, BossEmployee, Colleagues |

<a name="LPActor+getRelatedPersonQuick"></a>

### lpnpC.getRelatedPersonQuick ⇒ [<code>LPNPC</code>](#LPNPC) \| <code>undefined</code>
Same as getRelatedPerson() but only load the necessary data for the actor needed for AI stuffs. Only meant for lpai files, actors gotten this way aren't meant to be shown to the player on screen.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| relationshipTypes | <code>Array.&lt;string&gt;</code> | Dating, Spouses, Siblings, ParentChild, Cousins, BossEmployee, Colleagues |

<a name="LPActor+hadSex"></a>

### lpnpC.hadSex ⇒ <code>boolean</code>
Check if this actor has had sex with the player at any point in this play through

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+hasSameInterestAs"></a>

### lpnpC.hasSameInterestAs ⇒ [<code>LPBoolean</code>](#LPBoolean)
returns true if two actors have identical sexual orientations

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| actor | <code>LPActor</code> |  |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+hide"></a>

### lpnpC.hide
Hide the actor or player from the player's view. Opposite to show().

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+impregnate"></a>

### lpnpC.impregnate
Force impregnate someone. Works even without sex!

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| [target] | <code>LPActor</code> | optional - if target is provided then this Actor will impregnate target actor |

**Example**  
```js
Player.impregnate() // Oh no, I'm Virgin Mary now.
```
<a name="LPActor+isAsexual"></a>

### lpnpC.isAsexual ⇒ [<code>LPBoolean</code>](#LPBoolean)
returns true if the actor doesn't have any of the gender preferences "interested in male", "interested in female", or "interested in trans".

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isAt"></a>

### lpnpC.isAt ⇒ [<code>LPBoolean</code>](#LPBoolean)
Used by AI. May not work on player.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| location | <code>string</code> \| [<code>LPString</code>](#LPString) |  |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

**Example**  
```js
Actor.isAt("work")
```
<a name="LPActor+isBisexual"></a>

### lpnpC.isBisexual ⇒ [<code>LPBoolean</code>](#LPBoolean)
If interested in both same gender and opposite gender

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isBisexualNonTrans"></a>

### lpnpC.isBisexualNonTrans ⇒ [<code>LPBoolean</code>](#LPBoolean)
Same as isBisexual but stricter, returns false no matter own gender if interested in Trans

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isDating"></a>

### lpnpC.isDating ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is in a relationship with the player. Can also be used to check if the Player is dating anyone i.e. Player.isDating()Alternatively, if the Actor is Player then it checks whether the player is currently in a relationship at all.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isDominantSex"></a>

### lpnpC.isDominantSex ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the one actor would take a dominant role in a sexual relationship with another actor. This doesn't take into account sexual orientation. The rule is male is dominant to female, female with penis dominant to female with vagina. When it's male-male or female-female, it compares the masochist / submissive stat, the actor with lower masochist is dominant. Useful for mostly gender-related roles (opening doors, who walks who home etc)

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| actor | <code>LPActor</code> |  |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isEquipped"></a>

### lpnpC.isEquipped ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if an actor is wearing any clothes in a certain 'slot'. Will return true even if it's an underwear hidden under other clothes. The slots are:

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| slot | <code>string</code> |  |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isFemale"></a>

### lpnpC.isFemale ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if an actor is a woman. False if trans.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isGay"></a>

### lpnpC.isGay ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if an actor is only interested in the same sex, i.e. false if bi

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isGayNonTrans"></a>

### lpnpC.isGayNonTrans ⇒ [<code>LPBoolean</code>](#LPBoolean)
Same as isGay but stricter, returns false no matter own gender if interested in Trans

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isInterestedIn"></a>

### lpnpC.isInterestedIn ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the one actor is interested sexually in another actor's gender. Does not take into account attractiontoplayer stat, just look at Actor1's sexual orientation and Actor2's gender.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| actor | <code>LPActor</code> |  |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isInterestedInMen"></a>

### lpnpC.isInterestedInMen ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if an actor is interested in men

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isInterestedInTrans"></a>

### lpnpC.isInterestedInTrans ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if an actor is interested in trans women

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isInterestedInWomen"></a>

### lpnpC.isInterestedInWomen ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if an actor is interested in women

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isJob"></a>

### lpnpC.isJob ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if actor is a doctor or a nurse

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| job | <code>string</code> \| [<code>LPString</code>](#LPString) | doctor or nurse |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isMale"></a>

### lpnpC.isMale ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if an actor is a man. ??True if trans??

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isNaked"></a>

### lpnpC.isNaked ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is completely without any clothes

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isNude"></a>

### lpnpC.isNude ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is nude? How is this different from isNaked?

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isOnPeriod"></a>

### lpnpC.isOnPeriod ⇒ [<code>LPBoolean</code>](#LPBoolean)
Returns true if actor is on period.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isPlayer"></a>

### lpnpC.isPlayer ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is the player.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isPregnant"></a>

### lpnpC.isPregnant ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is pregnant.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isProstitute"></a>

### lpnpC.isProstitute ⇒ [<code>LPBoolean</code>](#LPBoolean)
Returns true if the actor is a sex worker.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isRace"></a>

### lpnpC.isRace ⇒ [<code>LPBoolean</code>](#LPBoolean)
Returns true is Actor is race

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| race | <code>string</code> \| [<code>LPString</code>](#LPString) | Human, Elf, Orc, Vampire |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isSameAs"></a>

### lpnpC.isSameAs ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the two actors are the same person

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| actor | <code>LPActor</code> |  |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isSameGender"></a>

### lpnpC.isSameGender ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the two actors are the same gender

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| actor | <code>LPActor</code> |  |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isSameRace"></a>

### lpnpC.isSameRace ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the two actors are the same race

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| actor | <code>LPActor</code> |  |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isSlotOccupied"></a>

### lpnpC.isSlotOccupied ⇒ [<code>LPBoolean</code>](#LPBoolean)
Checks if a clothing slot is occupied.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| slot | <code>string</code> |  |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isStraight"></a>

### lpnpC.isStraight ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if an actor is only interested in the opposite sex, i.e. false if bi

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isStraightNonTrans"></a>

### lpnpC.isStraightNonTrans ⇒ [<code>LPBoolean</code>](#LPBoolean)
Same as isStraight but stricter, returns false no matter own gender if interested in Trans

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isTrans"></a>

### lpnpC.isTrans ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is transsexual.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isValid"></a>

### lpnpC.isValid ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if an actor variable is valid. Most commonly used after GetPerson(), GetCompanion() or GetSpecific()

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isVirgin"></a>

### lpnpC.isVirgin ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is a virgin.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isVisible"></a>

### lpnpC.isVisible ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if an actor is wearing any clothes in a certain 'slot'. Will return false if it's an underwear hidden under other clothes. The slots are:

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| slot | <code>string</code> | Outerwear, Headwear, Eyewear, Top, Top_Under, Bottom, Bottom_Under, Foot, Foot_Under |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+loadPreset"></a>

### lpnpC.loadPreset ⇒ <code>LPActor</code>
Load the preset(s) onto this character, resetting them to default first before doing so.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Returns**: <code>LPActor</code> - "this" LPActor for chaining  

| Param | Type |
| --- | --- |
| presets | <code>Array.&lt;string&gt;</code> | 

**Example**  
```js
Actor.loadPreset(["bodybuilder_F"])$random(()=>{    Actor.loadPreset(["hourglass_F"]) // Just a normal hourglass girl    Actor.blendPreset(["hourglass_F"]) // There is still signs of the beefcake})
```
<a name="LPActor+makeInterested"></a>

### lpnpC.makeInterested
Changes this Actor's sexual orientation so that they become interested in Actor.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type |
| --- | --- |
| actor | <code>LPActor</code> | 

<a name="LPActor+matchLastName"></a>

### lpnpC.matchLastName
Change this Actor's last name to match that of actor

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type |
| --- | --- |
| actor | <code>LPActor</code> | 

<a name="LPActor+modifyActorVar"></a>

### lpnpC.modifyActorVar
Use this function to modify the float value of a variable by a given value.The actor can be the Player or any other actor.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| value | <code>number</code> \| [<code>LPFloat</code>](#LPFloat) | 

<a name="LPActor+modifySalary"></a>

### lpnpC.modifySalary
Multiply the actors salary by value ie salary of 100 * value of 1.1 would become 110.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type |
| --- | --- |
| value | <code>number</code> \| [<code>LPFloat</code>](#LPFloat) | 

<a name="LPActor+moveToPerson"></a>

### lpnpC.moveToPerson
Moves this actor towards actor and head tracks actor.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type |
| --- | --- |
| actor | <code>LPActor</code> | 

<a name="LPActor+moveToPersonStand"></a>

### lpnpC.moveToPersonStand
Make this actor move toward another actors position.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| actor | <code>LPActor</code> |  |
| distance | <code>number</code> \| [<code>LPFloat</code>](#LPFloat) | Distance to stay away from 'target'. 0 = Move to exact the same spot as 'target'. |

<a name="LPActor+randomize"></a>

### lpnpC.randomize
Randomize the actor's one or more of (face and skin), (hair and pubic hair), (skin colour and nose / eyes racial features), (genitals). Commonly called after blendpreset (which might change the gender which resets the actor to the default face and hair for that gender)

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
**Example**  
```js
let Helper = Player.getCompanion()if (!Helper.isValid()) {     Helper = scene.generatePersonTemporary()     while (!Helper.isInterestedIn(Player) || Helper.age > 35) {         Helper = generatePersonTemporary()     }     Helper.randomize({race: false, hairs: true, sexy: true, face: true})     Helper.dress()     Helper.show(2)}
```
<a name="LPActor+setActorVar"></a>

### lpnpC.setActorVar
Use this function to set a float variable to a certain actor.The actor can be the Player or any other actor.This function also allows setting TAGs to actors.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param |
| --- |
| name | 
| value | 

**Example**  
```js
Player.setActorVar("tag_Player", 1) // Set the Tag 'Player' to the Player's characterPlayer.setActorVar("tag_Player", -1) // Remove the Tag 'Player' from the Player's characterPlayer.setActorVar("SomeVariable", 42)     // Set the variable to 42var val = Player.getActorVar("SomeVariable")scene.narration("The value of SomeVariable is <val>.")
```
<a name="LPActor+setCurrentLocation"></a>

### lpnpC.setCurrentLocation
Change an actor's current location. Used with findNearbyBuilding or getBuilding(Home) or getBuilding(Work), mostly in lpai files.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type |
| --- | --- |
| buildingVariable | [<code>LPBuilding</code>](#LPBuilding) | 

<a name="LPActor+setDatingId"></a>

### lpnpC.setDatingId
Used for polyamorous for setting up which lover to break up with before you use loseDating()

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+setExRelative"></a>

### lpnpC.setExRelative
Make this Actor remember that they used to be related to the actor.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type |
| --- | --- |
| actor | <code>LPActor</code> | 

<a name="LPActor+setJob"></a>

### lpnpC.setJob
Set the job for this NPC. Only Doctor and Nurse are available now

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param |
| --- |
| job | 

<a name="LPActor+setMorphValue"></a>

### lpnpC.setMorphValue
Morph list can be found in any lpcharacter file.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param |
| --- |
| morphName | 
| value | 

<a name="LPActor+setNoRedress"></a>

### lpnpC.setNoRedress
Prevents an Actor from redressing. May not work on player.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+setWantsBabies"></a>

### lpnpC.setWantsBabies
If wantsBaby is true then the actor wants a baby

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param |
| --- |
| wantsBaby | 

<a name="LPActor+sex"></a>

### lpnpC.sex
Start a sex scene involving these actors. If the player is involved, it will also check whether the player is cheating or not and add to the affair list accordingly.The order in which roles are given to actors for the sex scene (important for descriptions and dirtytalk) depends largely on gender and domincance. Males are given roles before transsexuals, then women. Between people of the same gender, the most dominant one (lowest submission stat) is given a role first.However, the order of the actor parameters to the Sex() function matters somewhat in group sex: Sex(Male1, Player, Male2) will be different from Sex(Male2, Player, Male1).

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type |
| --- | --- |
| actors | <code>Array.&lt;LPActor&gt;</code> | 

<a name="LPActor+show"></a>

### lpnpC.show
Show this actor on screen. The player's default position is 0. 1 - 6 is counted from right to left of the screen.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param |
| --- |
| positionIndex | 

<a name="LPActor+strip"></a>

### lpnpC.strip
Strip this actor of all clothes

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stripOne"></a>

### lpnpC.stripOne
Strip this actor of a single currently equipped piece of clothes (but still follows logical order, so no stripping underwear before outerwear etc). Used for strip poker.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+wantsBabies"></a>

### lpnpC.wantsBabies ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor wants a baby.

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+age"></a>

### lpnpC.age : [<code>LPFloat</code>](#LPFloat)
age

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+arousal"></a>

### lpnpC.arousal : [<code>LPFloat</code>](#LPFloat)
arousal

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+attractiontoplayer"></a>

### lpnpC.attractiontoplayer : [<code>LPFloat</code>](#LPFloat)
attractiontoplayer

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+attractiveness"></a>

### lpnpC.attractiveness : [<code>LPFloat</code>](#LPFloat)
attractiveness

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+car_value"></a>

### lpnpC.car\_value : [<code>LPFloat</code>](#LPFloat)
car_value

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+children"></a>

### lpnpC.children : [<code>LPFloat</code>](#LPFloat)
children

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+cooking"></a>

### lpnpC.cooking : [<code>LPFloat</code>](#LPFloat)
cooking

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+dance"></a>

### lpnpC.dance : [<code>LPFloat</code>](#LPFloat)
dance

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+energy"></a>

### lpnpC.energy : [<code>LPFloat</code>](#LPFloat)
energy

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+fertility"></a>

### lpnpC.fertility : [<code>LPFloat</code>](#LPFloat)
fertility

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+fitness"></a>

### lpnpC.fitness : [<code>LPFloat</code>](#LPFloat)
fitness

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+incest"></a>

### lpnpC.incest : [<code>LPFloat</code>](#LPFloat)
incest

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+intelligence"></a>

### lpnpC.intelligence : [<code>LPFloat</code>](#LPFloat)
intelligence

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+interpersonal"></a>

### lpnpC.interpersonal : [<code>LPFloat</code>](#LPFloat)
interpersonal

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+intoxication"></a>

### lpnpC.intoxication : [<code>LPFloat</code>](#LPFloat)
intoxication

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+jobexperience"></a>

### lpnpC.jobexperience : [<code>LPFloat</code>](#LPFloat)
jobexperience

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+jobperformance"></a>

### lpnpC.jobperformance : [<code>LPFloat</code>](#LPFloat)
jobperformance

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+karma"></a>

### lpnpC.karma : [<code>LPFloat</code>](#LPFloat)
karma

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+martial"></a>

### lpnpC.martial : [<code>LPFloat</code>](#LPFloat)
martial

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+masochist"></a>

### lpnpC.masochist : [<code>LPFloat</code>](#LPFloat)
masochist

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+money"></a>

### lpnpC.money : [<code>LPFloat</code>](#LPFloat)
money

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+mood"></a>

### lpnpC.mood : [<code>LPFloat</code>](#LPFloat)
mood

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+muscle"></a>

### lpnpC.muscle : [<code>LPFloat</code>](#LPFloat)
muscle

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+music"></a>

### lpnpC.music : [<code>LPFloat</code>](#LPFloat)
music

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+perversion"></a>

### lpnpC.perversion : [<code>LPFloat</code>](#LPFloat)
perversion

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+pet_health"></a>

### lpnpC.pet\_health : [<code>LPFloat</code>](#LPFloat)
pet_health

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+pornfame"></a>

### lpnpC.pornfame : [<code>LPFloat</code>](#LPFloat)
pornfame

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+rapportwithplayer"></a>

### lpnpC.rapportwithplayer : [<code>LPFloat</code>](#LPFloat)
rapportwithplayer

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+sneak"></a>

### lpnpC.sneak : [<code>LPFloat</code>](#LPFloat)
sneak

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_alcohol"></a>

### lpnpC.stock\_alcohol : [<code>LPFloat</code>](#LPFloat)
stock_alcohol

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_book"></a>

### lpnpC.stock\_book : [<code>LPFloat</code>](#LPFloat)
stock_book

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_coffee"></a>

### lpnpC.stock\_coffee : [<code>LPFloat</code>](#LPFloat)
stock_coffee

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_condom"></a>

### lpnpC.stock\_condom : [<code>LPFloat</code>](#LPFloat)
stock_condom

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_flower"></a>

### lpnpC.stock\_flower : [<code>LPFloat</code>](#LPFloat)
stock_flower

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_gift"></a>

### lpnpC.stock\_gift : [<code>LPFloat</code>](#LPFloat)
stock_gift

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_haircare"></a>

### lpnpC.stock\_haircare : [<code>LPFloat</code>](#LPFloat)
stock_haircare

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_ingredient"></a>

### lpnpC.stock\_ingredient : [<code>LPFloat</code>](#LPFloat)
stock_ingredient

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_juice"></a>

### lpnpC.stock\_juice : [<code>LPFloat</code>](#LPFloat)
stock_juice

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_makeup"></a>

### lpnpC.stock\_makeup : [<code>LPFloat</code>](#LPFloat)
stock_makeup

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_meal"></a>

### lpnpC.stock\_meal : [<code>LPFloat</code>](#LPFloat)
stock_meal

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_movie"></a>

### lpnpC.stock\_movie : [<code>LPFloat</code>](#LPFloat)
stock_movie

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_musicalinstrument"></a>

### lpnpC.stock\_musicalinstrument : [<code>LPFloat</code>](#LPFloat)
stock_musicalinstrument

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_petfood"></a>

### lpnpC.stock\_petfood : [<code>LPFloat</code>](#LPFloat)
stock_petfood

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_photo"></a>

### lpnpC.stock\_photo : [<code>LPFloat</code>](#LPFloat)
stock_photo

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_pill"></a>

### lpnpC.stock\_pill : [<code>LPFloat</code>](#LPFloat)
stock_pill

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_skincare"></a>

### lpnpC.stock\_skincare : [<code>LPFloat</code>](#LPFloat)
stock_skincare

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_snack"></a>

### lpnpC.stock\_snack : [<code>LPFloat</code>](#LPFloat)
stock_snack

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_soda"></a>

### lpnpC.stock\_soda : [<code>LPFloat</code>](#LPFloat)
stock_soda

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_supplement"></a>

### lpnpC.stock\_supplement : [<code>LPFloat</code>](#LPFloat)
stock_supplement

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_tea"></a>

### lpnpC.stock\_tea : [<code>LPFloat</code>](#LPFloat)
stock_tea

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_tobacco"></a>

### lpnpC.stock\_tobacco : [<code>LPFloat</code>](#LPFloat)
stock_tobacco

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+stock_video"></a>

### lpnpC.stock\_video : [<code>LPFloat</code>](#LPFloat)
stock_video

**Kind**: instance property of [<code>LPNPC</code>](#LPNPC)  
<a name="LPActor+dialogue"></a>

### lpnpC.dialogue(text, [mood])
Text the actor will say in mood.

**Kind**: instance method of [<code>LPNPC</code>](#LPNPC)  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 
| [mood] | <code>string</code> | 

<a name="LPActor+monolog"></a>

### lpnpC.monolog(lines)
Lines of text the actor will say in mood.

**Kind**: instance method of [<code>LPNPC</code>](#LPNPC)  

| Param | Type |
| --- | --- |
| lines | <code>Array.&lt;string&gt;</code> | 
| lines[].text | <code>string</code> | 
| lines[].mood | <code>string</code> | 

**Example**  
```js
let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_monolog'}, (scene) => {    scene.start(() => {        const {Player} = scene        Player.monolog([            {text: "simple line of dialog"},            {text: "simple line of dialog with a mood", mood: 'Happy'},        ])    })})
```
<a name="LPPlayer"></a>

## LPPlayer ⇐ <code>LPActor</code>
Class representing a LifePlay Player.

**Kind**: global class  
**Extends**: <code>LPActor</code>  

* [LPPlayer](#LPPlayer) ⇐ <code>LPActor</code>
    * [.blockContact](#LPPlayer+blockContact)
    * [.chooseContact](#LPPlayer+chooseContact)
    * [.chooseMajor](#LPPlayer+chooseMajor)
    * [.contractSTD](#LPPlayer+contractSTD)
    * [.datingHasHome](#LPPlayer+datingHasHome)
    * [.divorce](#LPPlayer+divorce) ⇒ <code>\*</code>
    * [.endDate](#LPPlayer+endDate)
    * [.endOpenRelationship](#LPPlayer+endOpenRelationship)
    * [.endPrison](#LPPlayer+endPrison)
    * [.enterBusinessName](#LPPlayer+enterBusinessName)
    * [.exchangeContact](#LPPlayer+exchangeContact)
    * [.forgiveAffairs](#LPPlayer+forgiveAffairs)
    * [.getMarried](#LPPlayer+getMarried)
    * [.givePlayerDefaultClothes](#LPPlayer+givePlayerDefaultClothes)
    * [.imprison](#LPPlayer+imprison)
    * [.loseHome](#LPPlayer+loseHome)
    * [.loseHomeDating](#LPPlayer+loseHomeDating)
    * [.loseJob](#LPPlayer+loseJob)
    * [.losePT](#LPPlayer+losePT)
    * [.moveFraternity](#LPPlayer+moveFraternity)
    * [.moveHome](#LPPlayer+moveHome)
    * [.moveJobs](#LPPlayer+moveJobs)
    * [.moveSchools](#LPPlayer+moveSchools)
    * [.moveTo](#LPPlayer+moveTo)
    * [.openRelationship](#LPPlayer+openRelationship) ⇒ <code>boolean</code>
    * [.quitCrime](#LPPlayer+quitCrime)
    * [.quitFraternity](#LPPlayer+quitFraternity)
    * [.quitLecturing](#LPPlayer+quitLecturing)
    * [.quitMedical](#LPPlayer+quitMedical)
    * [.quitSchool](#LPPlayer+quitSchool)
    * [.removeAddedClothes](#LPPlayer+removeAddedClothes)
    * [.setMajor](#LPPlayer+setMajor)
    * [.setRent](#LPPlayer+setRent)
    * [.startBusiness](#LPPlayer+startBusiness)
    * [.startDate](#LPPlayer+startDate)
    * [.startOpenRelationship](#LPPlayer+startOpenRelationship)
    * [.stopBusiness](#LPPlayer+stopBusiness)
    * [.name](#LPActor+name) : <code>string</code>
    * [.animate](#LPActor+animate)
    * [.animateFnt](#LPActor+animateFnt)
    * [.animatePair](#LPActor+animatePair)
    * [.blendAppearanceFrom](#LPActor+blendAppearanceFrom) ⇒ <code>LPActor</code>
    * [.blendPreset](#LPActor+blendPreset) ⇒ <code>LPActor</code>
    * [.changeSex](#LPActor+changeSex)
    * [.cloneFrom](#LPActor+cloneFrom)
    * [.closeEyes](#LPActor+closeEyes)
    * [.clothesContain](#LPActor+clothesContain)
    * [.countPregnancyDays](#LPActor+countPregnancyDays) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.dress](#LPActor+dress)
    * [.dressBondage](#LPActor+dressBondage)
    * [.dressExcept](#LPActor+dressExcept)
    * [.dressGuard](#LPActor+dressGuard)
    * [.dressPrisoner](#LPActor+dressPrisoner)
    * [.dressUniform](#LPActor+dressUniform)
    * [.dressWedding](#LPActor+dressWedding)
    * [.endPregnancy](#LPActor+endPregnancy)
    * [.enterFirstName](#LPActor+enterFirstName)
    * [.generatePersonMatchRace](#LPActor+generatePersonMatchRace) ⇒ [<code>LPNPC</code>](#LPNPC)
    * [.generatePersonTemporaryMatchRace](#LPActor+generatePersonTemporaryMatchRace) ⇒
    * [.generateRelativeMatchRace](#LPActor+generateRelativeMatchRace) ⇒ [<code>LPNPC</code>](#LPNPC)
    * [.getActorVar](#LPActor+getActorVar)
    * [.getBabyDaddy](#LPActor+getBabyDaddy) ⇒ [<code>LPNPC</code>](#LPNPC)
    * [.getBuilding](#LPActor+getBuilding) ⇒ [<code>LPBuilding</code>](#LPBuilding)
    * [.getID](#LPActor+getID) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.getMorphValue](#LPActor+getMorphValue) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.getPregnancyTag](#LPActor+getPregnancyTag) ⇒ [<code>LPString</code>](#LPString)
    * [.getRace](#LPActor+getRace) ⇒ <code>string</code>
    * [.getRelatedPerson](#LPActor+getRelatedPerson) ⇒ [<code>LPNPC</code>](#LPNPC) \| <code>undefined</code>
    * [.getRelatedPersonQuick](#LPActor+getRelatedPersonQuick) ⇒ [<code>LPNPC</code>](#LPNPC) \| <code>undefined</code>
    * [.hadSex](#LPActor+hadSex) ⇒ <code>boolean</code>
    * [.hasSameInterestAs](#LPActor+hasSameInterestAs) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.hide](#LPActor+hide)
    * [.impregnate](#LPActor+impregnate)
    * [.isAsexual](#LPActor+isAsexual) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isAt](#LPActor+isAt) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isBisexual](#LPActor+isBisexual) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isBisexualNonTrans](#LPActor+isBisexualNonTrans) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isDating](#LPActor+isDating) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isDominantSex](#LPActor+isDominantSex) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isEquipped](#LPActor+isEquipped) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isFemale](#LPActor+isFemale) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isGay](#LPActor+isGay) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isGayNonTrans](#LPActor+isGayNonTrans) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isInterestedIn](#LPActor+isInterestedIn) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isInterestedInMen](#LPActor+isInterestedInMen) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isInterestedInTrans](#LPActor+isInterestedInTrans) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isInterestedInWomen](#LPActor+isInterestedInWomen) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isJob](#LPActor+isJob) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isMale](#LPActor+isMale) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isNaked](#LPActor+isNaked) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isNude](#LPActor+isNude) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isOnPeriod](#LPActor+isOnPeriod) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isPlayer](#LPActor+isPlayer) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isPregnant](#LPActor+isPregnant) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isProstitute](#LPActor+isProstitute) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isRace](#LPActor+isRace) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isSameAs](#LPActor+isSameAs) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isSameGender](#LPActor+isSameGender) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isSameRace](#LPActor+isSameRace) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isSlotOccupied](#LPActor+isSlotOccupied) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isStraight](#LPActor+isStraight) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isStraightNonTrans](#LPActor+isStraightNonTrans) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isTrans](#LPActor+isTrans) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isValid](#LPActor+isValid) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isVirgin](#LPActor+isVirgin) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isVisible](#LPActor+isVisible) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.loadPreset](#LPActor+loadPreset) ⇒ <code>LPActor</code>
    * [.makeInterested](#LPActor+makeInterested)
    * [.matchLastName](#LPActor+matchLastName)
    * [.modifyActorVar](#LPActor+modifyActorVar)
    * [.modifySalary](#LPActor+modifySalary)
    * [.moveToPerson](#LPActor+moveToPerson)
    * [.moveToPersonStand](#LPActor+moveToPersonStand)
    * [.randomize](#LPActor+randomize)
    * [.randomizeFace](#LPActor+randomizeFace)
    * [.randomizeHairs](#LPActor+randomizeHairs)
    * [.randomizeRace](#LPActor+randomizeRace)
    * [.randomizeSexy](#LPActor+randomizeSexy)
    * [.setActorVar](#LPActor+setActorVar)
    * [.setCurrentLocation](#LPActor+setCurrentLocation)
    * [.setDatingId](#LPActor+setDatingId)
    * [.setExRelative](#LPActor+setExRelative)
    * [.setJob](#LPActor+setJob)
    * [.setMorphValue](#LPActor+setMorphValue)
    * [.setNoRedress](#LPActor+setNoRedress)
    * [.setWantsBabies](#LPActor+setWantsBabies)
    * [.sex](#LPActor+sex)
    * [.show](#LPActor+show)
    * [.strip](#LPActor+strip)
    * [.stripOne](#LPActor+stripOne)
    * [.wantsBabies](#LPActor+wantsBabies) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.age](#LPActor+age) : [<code>LPFloat</code>](#LPFloat)
    * [.arousal](#LPActor+arousal) : [<code>LPFloat</code>](#LPFloat)
    * [.attractiontoplayer](#LPActor+attractiontoplayer) : [<code>LPFloat</code>](#LPFloat)
    * [.attractiveness](#LPActor+attractiveness) : [<code>LPFloat</code>](#LPFloat)
    * [.car_value](#LPActor+car_value) : [<code>LPFloat</code>](#LPFloat)
    * [.children](#LPActor+children) : [<code>LPFloat</code>](#LPFloat)
    * [.cooking](#LPActor+cooking) : [<code>LPFloat</code>](#LPFloat)
    * [.dance](#LPActor+dance) : [<code>LPFloat</code>](#LPFloat)
    * [.energy](#LPActor+energy) : [<code>LPFloat</code>](#LPFloat)
    * [.fertility](#LPActor+fertility) : [<code>LPFloat</code>](#LPFloat)
    * [.fitness](#LPActor+fitness) : [<code>LPFloat</code>](#LPFloat)
    * [.incest](#LPActor+incest) : [<code>LPFloat</code>](#LPFloat)
    * [.intelligence](#LPActor+intelligence) : [<code>LPFloat</code>](#LPFloat)
    * [.interpersonal](#LPActor+interpersonal) : [<code>LPFloat</code>](#LPFloat)
    * [.intoxication](#LPActor+intoxication) : [<code>LPFloat</code>](#LPFloat)
    * [.jobexperience](#LPActor+jobexperience) : [<code>LPFloat</code>](#LPFloat)
    * [.jobperformance](#LPActor+jobperformance) : [<code>LPFloat</code>](#LPFloat)
    * [.karma](#LPActor+karma) : [<code>LPFloat</code>](#LPFloat)
    * [.martial](#LPActor+martial) : [<code>LPFloat</code>](#LPFloat)
    * [.masochist](#LPActor+masochist) : [<code>LPFloat</code>](#LPFloat)
    * [.money](#LPActor+money) : [<code>LPFloat</code>](#LPFloat)
    * [.mood](#LPActor+mood) : [<code>LPFloat</code>](#LPFloat)
    * [.muscle](#LPActor+muscle) : [<code>LPFloat</code>](#LPFloat)
    * [.music](#LPActor+music) : [<code>LPFloat</code>](#LPFloat)
    * [.perversion](#LPActor+perversion) : [<code>LPFloat</code>](#LPFloat)
    * [.pet_health](#LPActor+pet_health) : [<code>LPFloat</code>](#LPFloat)
    * [.pornfame](#LPActor+pornfame) : [<code>LPFloat</code>](#LPFloat)
    * [.rapportwithplayer](#LPActor+rapportwithplayer) : [<code>LPFloat</code>](#LPFloat)
    * [.sneak](#LPActor+sneak) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_alcohol](#LPActor+stock_alcohol) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_book](#LPActor+stock_book) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_coffee](#LPActor+stock_coffee) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_condom](#LPActor+stock_condom) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_flower](#LPActor+stock_flower) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_gift](#LPActor+stock_gift) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_haircare](#LPActor+stock_haircare) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_ingredient](#LPActor+stock_ingredient) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_juice](#LPActor+stock_juice) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_makeup](#LPActor+stock_makeup) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_meal](#LPActor+stock_meal) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_movie](#LPActor+stock_movie) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_musicalinstrument](#LPActor+stock_musicalinstrument) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_petfood](#LPActor+stock_petfood) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_photo](#LPActor+stock_photo) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_pill](#LPActor+stock_pill) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_skincare](#LPActor+stock_skincare) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_snack](#LPActor+stock_snack) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_soda](#LPActor+stock_soda) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_supplement](#LPActor+stock_supplement) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_tea](#LPActor+stock_tea) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_tobacco](#LPActor+stock_tobacco) : [<code>LPFloat</code>](#LPFloat)
    * [.stock_video](#LPActor+stock_video) : [<code>LPFloat</code>](#LPFloat)
    * [.getAnyRelative(relativeType)](#LPPlayer+getAnyRelative)
    * [.getCompanion()](#LPPlayer+getCompanion)
    * [.getCompanionAny()](#LPPlayer+getCompanionAny)
    * [.getCompanionCreature()](#LPPlayer+getCompanionCreature)
    * [.getNumRelatives()](#LPPlayer+getNumRelatives) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.getRelative(relationshipTypes)](#LPPlayer+getRelative) ⇒ <code>LPActor</code> \| <code>undefined</code>
    * [.getRelativeExcept(relationshipTypes)](#LPPlayer+getRelativeExcept) ⇒ <code>LPActor</code> \| <code>undefined</code>
    * [.getRent()](#LPPlayer+getRent) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.getSalary()](#LPPlayer+getSalary) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.getSelectedNPC()](#LPPlayer+getSelectedNPC) ⇒ [<code>LPNPC</code>](#LPNPC)
    * [.getTarget()](#LPPlayer+getTarget) ⇒ [<code>LPNPC</code>](#LPNPC)
    * [.isAtDatingHome()](#LPPlayer+isAtDatingHome) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isAtHome()](#LPPlayer+isAtHome) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isPlayerMarried()](#LPPlayer+isPlayerMarried) ⇒ <code>boolean</code>
    * [.isStudent()](#LPPlayer+isStudent) ⇒ <code>boolean</code>
    * [.isWithCompanion()](#LPPlayer+isWithCompanion) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isWithCompanionCreature()](#LPPlayer+isWithCompanionCreature) ⇒ <code>boolean</code>
    * [.loseDating()](#LPPlayer+loseDating)
    * [.playerHasHome()](#LPPlayer+playerHasHome) ⇒ <code>boolean</code>
    * [.selectNPC(tag)](#LPPlayer+selectNPC)
    * [.setFraternityFees(fratFee)](#LPPlayer+setFraternityFees)
    * [.setSalary(salary)](#LPPlayer+setSalary)
    * [.setTuition(tuition)](#LPPlayer+setTuition)
    * [.dialogue(text, [mood])](#LPActor+dialogue)
    * [.monolog(lines)](#LPActor+monolog)

<a name="LPPlayer+blockContact"></a>

### lpPlayer.blockContact
Remove this actor from your contact list.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type |
| --- | --- |
| actor | <code>LPActor</code> | 

<a name="LPPlayer+chooseContact"></a>

### lpPlayer.chooseContact
Choose a person from your contact by displaying a option menu while staying in the scene. Must be followed by getSpecific(chooseContact). Probably inferior to selectNPC() unless you really don't want to take the player out of the scene even temporarily.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
Dating(Flirty):: "You naughty <Player.boy_or_girl>! Fancy yourself as a generous <Dating.boyfriend_or_girlfriend> sharer, don't you? Fine then, if that's what turns you on, I can give it a try. Just make sure to find me a cute <Player.boy_or_girl> to date and go home with, okay?""We then went on to discuss potential candidates."chooseContact()Bull = scene.getSpecific(chooseContact)
```
<a name="LPPlayer+chooseMajor"></a>

### lpPlayer.chooseMajor
Pick the Major for the player, both for teaching and studying. Must be followed by setMajor(). The majors available are hardcoded in the GI file.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
Player.chooseMajor()Player.setMajor()scene.narration("I just selected my <Player.Major> as my major.")
```
<a name="LPPlayer+contractSTD"></a>

### lpPlayer.contractSTD
Give the player STD

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
contactSTD()narration("Oh no, I have a STD.")
```
<a name="LPPlayer+datingHasHome"></a>

### lpPlayer.datingHasHome
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

### lpPlayer.endDate
End the current 'date', i.e. get rid of the current companion.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
scene.narration("We already hung out for the whole afternoon. It's time to separate.")Player.endDate()
```
<a name="LPPlayer+endOpenRelationship"></a>

### lpPlayer.endOpenRelationship
Revert your current relationship/ marriage back into a normal closed one (there are now cheating consequences).

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
Player.endOpenRelationship()Player.sex(["NotMyGF"]) // This will NOT be the same as SexNoAffair, your GF could catch you and get upset
```
<a name="LPPlayer+endPrison"></a>

### lpPlayer.endPrison
Remove the player from prison.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
scene.narration("And I did it! The prison guards were long left behind. Usain Bolt would be proud of that run!")scene.narration("My prison escape was close, but ultimately successful. I'm a free <Player.man_or_woman> again!")Player.endPrison()
```
<a name="LPPlayer+enterBusinessName"></a>

### lpPlayer.enterBusinessName
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

### lpPlayer.forgiveAffairs
Clear all affairs committed while in this current relationship. This is done automatically when SetDating().

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
Dating.dialog("Alright, after everything we've been through, I guess I can forgive you this time ...", "Crying")Player.forgiveAffairs()
```
<a name="LPPlayer+getMarried"></a>

### lpPlayer.getMarried
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

### lpPlayer.imprison
Send the player to prison.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
scene.narration("The court-appointed lawyer didn't do me much good. I got the expected sentence and was sent on my way to jail.")Player.imprison()
```
<a name="LPPlayer+loseHome"></a>

### lpPlayer.loseHome
The player moves out of their current home. Set rent to 0. Landlord and neighbours become acquaintances. If the player's SO has a home, they'll move in with them instead.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+loseHomeDating"></a>

### lpPlayer.loseHomeDating
Your SO moves out of their home, and in with you.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+loseJob"></a>

### lpPlayer.loseJob
The player stops working at their current company. Set salary to 0. Boss and colleagues become acquaintances.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+losePT"></a>

### lpPlayer.losePT
The player fires their current personal trainer.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+moveFraternity"></a>

### lpPlayer.moveFraternity
Move into the current building and make it your new fraternity / sorority

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+moveHome"></a>

### lpPlayer.moveHome
Move into the current building and make it your new home. Remember to use SetLandlord() and SetRent() separately.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+moveJobs"></a>

### lpPlayer.moveJobs
Get hired at this current building and make it our new workplace. Remember to use setBoss() and SetSalary() separately.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+moveSchools"></a>

### lpPlayer.moveSchools
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

### lpPlayer.quitCrime
Leave your crime family

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+quitFraternity"></a>

### lpPlayer.quitFraternity
Drop out of the fraternity

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+quitLecturing"></a>

### lpPlayer.quitLecturing
Quit your lecturing job

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+quitMedical"></a>

### lpPlayer.quitMedical
Leave your medical career

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+quitSchool"></a>

### lpPlayer.quitSchool
Drop out of university

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+removeAddedClothes"></a>

### lpPlayer.removeAddedClothes
Remove all clothes from your inventory that were added during this scene. Used for modelling shoots.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+setMajor"></a>

### lpPlayer.setMajor
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
| rent | <code>number</code> \| [<code>LPFloat</code>](#LPFloat) | 

**Example**  
```js
const rent = Player.getRent()rent.mulEq(1.2)Player.setRent(rent)// this is equivalentPlayer.setRent(Player.getRent().mulEq(1.2))
```
<a name="LPPlayer+startBusiness"></a>

### lpPlayer.startBusiness
Make the current building your business.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+startDate"></a>

### lpPlayer.startDate
Start hanging out with this person (make them your current companion)

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+startOpenRelationship"></a>

### lpPlayer.startOpenRelationship
Make your current relationship/ marriage an open one (no cheating consequences and unlocks a number of scenes). Resets when you end this currentrelationship and any new relationship will start off as closed.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+stopBusiness"></a>

### lpPlayer.stopBusiness
Make the current building no longer your business.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+name"></a>

### lpPlayer.name : <code>string</code>
Actors Name

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+animate"></a>

### lpPlayer.animate
Make the actor do something. If no parameter is given current animation will be stopped and actor will go idle.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Description |
| --- | --- |
| animation | undefined or one of: martialart, drinkglass, dance, smoke, pray, sofawatch, browse, call, socialize, work, sweep, bathe, drinkbottle, lecture, theatrewatch, write, groupdance, call, sneak, camera, makeup, eat, toilet, bathe, masturbate, drinktea, smoke, strip, managefinances, receivelapdance, dental, beauty, health, haircut, weights, yoga, na_sleep, na_running |

<a name="LPActor+animateFnt"></a>

### lpPlayer.animateFnt
Make the actor use a furniture animation / pose with a specific object. Use the room editor to get x y z of the furniture. Filter is usually sit, use, lie or work

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param |
| --- |
| x | 
| y | 
| z | 
| filter | 

<a name="LPActor+animatePair"></a>

### lpPlayer.animatePair
Animates a pair of actors

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| secondActor | <code>LPActor</code> |  |
| animation | <code>string</code> | can be one of Kissing, Vaginal, ...? |

<a name="LPActor+blendAppearanceFrom"></a>

### lpPlayer.blendAppearanceFrom ⇒ <code>LPActor</code>
Blends an actors appearance from two actors.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Returns**: <code>LPActor</code> - this actor for chaining  

| Param | Type |
| --- | --- |
| firstActor | <code>LPActor</code> | 
| secondActor | <code>LPActor</code> | 

**Example**  
```js
SceneStart()"I wonder what a future child of me and my date would look like ..."Actor = Player.generateRelativeMatchRace()Actor.blendAppearanceFrom(Player, CurrentCompanion)Actor.show()"Probably like this ..."SceneEnd()
```
<a name="LPActor+blendPreset"></a>

### lpPlayer.blendPreset ⇒ <code>LPActor</code>
Blend this actor with a preset, usually called after generatePerson().Presets are contained in a module's folder for the purpose, and can contain either body morphing or stat-related intel.PresetID is the filename without the extension.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Returns**: <code>LPActor</code> - this actor for chaining  

| Param | Type |
| --- | --- |
| presetID | <code>string</code> | 

**Example**  
```js
// We want a male bodybuilderBodybuilder = generatePerson()  // just so that we get the random stats etc, but this might generate a femaleBodybuilder.blendPreset(bodybuilder)  // if the above is female, then this will reset face and hair to the default male face and hair, so it's best to follow up withActor.randomizeFace()Actor.randomizeHairs()
```
<a name="LPActor+changeSex"></a>

### lpPlayer.changeSex
Change to the opposite sex, used for TF start

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+cloneFrom"></a>

### lpPlayer.cloneFrom
Make an actor identical to another actor (stats, appearance, names, sexual preferences, etc). Used in incest_relationship.lpscene to switch between relative and normal NPC statuses.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type |
| --- | --- |
| actor | <code>LPActor</code> | 

**Example**  
```js
actor2 = generatePerson()actor2.cloneFrom(Actor)  // Actor2 is now a duplicate of Actoractor2.deletePerson() // Bye bye, your clone has replaced youactor2.dress()actor2.show(2)
```
<a name="LPActor+closeEyes"></a>

### lpPlayer.closeEyes
force actor to close or open their eyes

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type |
| --- | --- |
| isClosed | <code>boolean</code> | 

**Example**  
```js
Masseuse.dialog("Just lie down and relax.")Player.CloseEyes(true)Mom.dialog("Hey, wake up, sleepy head! You're about to be late for work!", "Angry")Player.CloseEyes(false)
```
<a name="LPActor+clothesContain"></a>

### lpPlayer.clothesContain
Check if any equipped apparel has an ID that contains the keyword

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param |
| --- |
| keyword | 
| name | 

**Example**  
```js
if (Actor.clothesContain('Jeans')) {    scene.narrative("<Actor.name> is wearing some sorts of jeans")}
```
<a name="LPActor+countPregnancyDays"></a>

### lpPlayer.countPregnancyDays ⇒ [<code>LPFloat</code>](#LPFloat)
Returns the number of days a player has been pregnant.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+dress"></a>

### lpPlayer.dress
If there's nothing in the bracket, it will dress the actor fully appropriate to the current building. If a clothing piece is specified, will put that on only. Check LifePlay\Content\Heavy\Clothes for the names of the items

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type |
| --- | --- |
| clothes | <code>string</code> \| [<code>LPString</code>](#LPString) | 

**Example**  
```js
scene.setBackground("work")Player.dress()  // will put on a full suit with oxford shoes etc and underwear underneath// orPlayer.dress("Casual-Clothes_1_F") // will put on casual clothes only, no shoe or underwear
```
<a name="LPActor+dressBondage"></a>

### lpPlayer.dressBondage
Put a bdsm piece on an actor. List is in LifePlay\Content\Heavy\New2\BDSM\Clothes (the ones with the prefix Bdg_ )

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param |
| --- |
| bondageGearID | 

**Example**  
```js
Actor.dressBondage("Bdg_Blindfold")
```
<a name="LPActor+dressExcept"></a>

### lpPlayer.dressExcept
Dress this person but leave the specified slots unmodified. Used for lingerie modelling.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| slots | <code>Array.&lt;string&gt;</code> | 'Outerwear', 'Headwear', 'Eyewear', 'Top', 'Top_Under', 'Bottom', 'Bottom_Under', 'Foot', 'Foot_Under' |

**Example**  
```js
scene.narration("Looks like they haven't got far at all and are still choosing lingerie ...")Actor.dressExcept(["Outerwear", "Top", "Bottom", "Foot", "Headwear", "Eyewear"])Actor2.dialog("How about this?")
```
<a name="LPActor+dressGuard"></a>

### lpPlayer.dressGuard
Dress the person in prison guard outfit (3d assets not made yet, so this actually just calls normal Dress instead).

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+dressPrisoner"></a>

### lpPlayer.dressPrisoner
Dress the person in prison outfit (3d assets not made yet, so this actually just calls normal Dress instead).

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+dressUniform"></a>

### lpPlayer.dressUniform
Put on appropriate uniform for this person's profession or specific clothing

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| clothing | <code>string</code> \| [<code>LPString</code>](#LPString) | empty or one of Doctor, Nurse, sexwork, Police, Prison, Crime, Wedding, Fast_food, Place_of_worship |

**Example**  
```js
Actor.SetJob(Doctor)Actor.dressUniform()// orActor.dressUniform("Prison")
```
<a name="LPActor+dressWedding"></a>

### lpPlayer.dressWedding
This command puts the actor in a wedding dress or suit.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
scene.narration("It took quite a bit of doing, getting into that corset, but I finally was good to go, and ready to step down the aisle.")scene.setBackground(place_of_worship)Player.dressWedding()
```
<a name="LPActor+endPregnancy"></a>

### lpPlayer.endPregnancy
Ends the pregnancy of the actor or player.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
scene.narration("Sometimes in life difficult choices must be made ...")Player.strip()Player.endPregnancy()scene.narration("Thankfully the procedure went according to plans, with no lasting impact on my future health and fertility.")
```
<a name="LPActor+enterFirstName"></a>

### lpPlayer.enterFirstName
Displays a text box so that the player can type in this actor's first name. Used for naming children and pets.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+generatePersonMatchRace"></a>

### lpPlayer.generatePersonMatchRace ⇒ [<code>LPNPC</code>](#LPNPC)
Generate a new actor that matches the racial preset of another person (for example, to generate a relative of an NPC). The actor generated using this method will be permanent right away, meaning they will remain after the current scene ends and are usable for some functions that only work with permanent actors.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
var Actor = Actor2.generatePersonMatchRace()  // If Actor2 is east asian, Actor will also be east asianActor.dress()Actor.show(2)Player.exchangeContact(Actor) // this will succeed because this is a permanent actor
```
<a name="LPActor+generatePersonTemporaryMatchRace"></a>

### lpPlayer.generatePersonTemporaryMatchRace ⇒
Generate a new actor that matches the racial preset of another person (for example, to generate a relative of an NPC). The actor generated using this method will be permanent right away, meaning they will remain after the current scene ends and are usable for some functions that only work with permanent actors.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Returns**: LPNPC  
**Example**  
```js
var Actor = Actor2.generatePersonMatchRace()  // If Actor2 is east asian, Actor will also be east asianActor.dress()Actor.show(2)Player.exchangeContact(Actor) // this will fail because Actor isn't a permanent actor
```
<a name="LPActor+generateRelativeMatchRace"></a>

### lpPlayer.generateRelativeMatchRace ⇒ [<code>LPNPC</code>](#LPNPC)
Generate a new relative actor that matches the racial preset of another person (for example, to generate my relative). The actor generated using this method will be permanent right away, meaning they will remain after the current scene ends and are usable for some functions that only work with permanent actors.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
let Actor = $let('Actor', Player.generateRelativeMatchRace())  // This way if you're black, your brother wouldn't turn up white.Actor.dress()Actor.show(2)
```
<a name="LPActor+getActorVar"></a>

### lpPlayer.getActorVar
Use this function to get the float value of a variable from a certain actor.The actor can be the Player or any other actor.This function also allows testing it a certain TAG is assigned to an actors.If a tag / value was not assigned the function will return 0.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param |
| --- |
| varOrTag | 

**Example**  
```js
Player.setActorVar("tag_Player", 1) // Set the Tag 'Player' to the Player's characterPlayer.setActorVar("tag_Player", -1) // Remove the Tag 'Player' from the Player's characterPlayer.setActorVar("SomeVariable", 42)     // Set the variable to 42var val = Player.getActorVar("SomeVariable")scene.narration("The value of SomeVariable is <val>.")
```
<a name="LPActor+getBabyDaddy"></a>

### lpPlayer.getBabyDaddy ⇒ [<code>LPNPC</code>](#LPNPC)
Returns the Actor who got the this Actor pregnant.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
var BioDaddy = Actor.getBabyDaddy()
```
<a name="LPActor+getBuilding"></a>

### lpPlayer.getBuilding ⇒ [<code>LPBuilding</code>](#LPBuilding)
Get a building related to this NPC AI-wise. Parameters are Home, Work and Current.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | current, home, work |
| [name] | <code>string</code> | optional variable name |

<a name="LPActor+getID"></a>

### lpPlayer.getID ⇒ [<code>LPFloat</code>](#LPFloat)
Get the ID number of this actor, which can then be saved as a global variable and then called on using getSpecific.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
var ID = Actor.getID()var SugarDaddy = $global('SugarDaddy')SugarDaddy.setGlobal(ID)// another scenevar SugarDaddy = $global('SugarDaddy')var ID = SugarDaddy.getGlobal()var Actor$if('ID != 0', ()=>{    Actor = scene.getSpecific(ID)})
```
<a name="LPActor+getMorphValue"></a>

### lpPlayer.getMorphValue ⇒ [<code>LPFloat</code>](#LPFloat)
Returns morph value as a float. Morph list can be found in any lpcharacter file

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param |
| --- |
| morphName | 

<a name="LPActor+getPregnancyTag"></a>

### lpPlayer.getPregnancyTag ⇒ [<code>LPString</code>](#LPString)
Returns the tag of the Animation that was active when the Actor got pregnant?

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Returns**: [<code>LPString</code>](#LPString) - - Aggressive/AggressiveFM/?  
**Example**  
```js
var Rape = Actor.getPregnancyTag()$if(Rape.isString("Aggressive"), ()=>{    scene.narration('<Actor.name> is pregnant from being raped!')})$if(Rape.isString("AggressiveFM") || , ()=>{    scene.narration('<Actor.name> is pregnant from a rape she committed!')})
```
<a name="LPActor+getRace"></a>

### lpPlayer.getRace ⇒ <code>string</code>
Returns the Actors race.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
var Race = Actor.getRace()scene.narration("I've always had a major thing for a <Actor.handsome_or_beautiful> <Race> like <Actor.name> and couldn't help but fantasize about taking <Actor.him_or_her> to bed. Should I be direct and confess my little <Race> fetish to <Actor.name> now?")
```
<a name="LPActor+getRelatedPerson"></a>

### lpPlayer.getRelatedPerson ⇒ [<code>LPNPC</code>](#LPNPC) \| <code>undefined</code>
Get a single NPC with a relationship of the specified type or another with the specified NPC. The list for 'Type' is:

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| relationshipTypes | <code>Array.&lt;string&gt;</code> | Dating, Spouses, Siblings, ParentChild, Cousins, BossEmployee, Colleagues |

<a name="LPActor+getRelatedPersonQuick"></a>

### lpPlayer.getRelatedPersonQuick ⇒ [<code>LPNPC</code>](#LPNPC) \| <code>undefined</code>
Same as getRelatedPerson() but only load the necessary data for the actor needed for AI stuffs. Only meant for lpai files, actors gotten this way aren't meant to be shown to the player on screen.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| relationshipTypes | <code>Array.&lt;string&gt;</code> | Dating, Spouses, Siblings, ParentChild, Cousins, BossEmployee, Colleagues |

<a name="LPActor+hadSex"></a>

### lpPlayer.hadSex ⇒ <code>boolean</code>
Check if this actor has had sex with the player at any point in this play through

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+hasSameInterestAs"></a>

### lpPlayer.hasSameInterestAs ⇒ [<code>LPBoolean</code>](#LPBoolean)
returns true if two actors have identical sexual orientations

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| actor | <code>LPActor</code> |  |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+hide"></a>

### lpPlayer.hide
Hide the actor or player from the player's view. Opposite to show().

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+impregnate"></a>

### lpPlayer.impregnate
Force impregnate someone. Works even without sex!

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| [target] | <code>LPActor</code> | optional - if target is provided then this Actor will impregnate target actor |

**Example**  
```js
Player.impregnate() // Oh no, I'm Virgin Mary now.
```
<a name="LPActor+isAsexual"></a>

### lpPlayer.isAsexual ⇒ [<code>LPBoolean</code>](#LPBoolean)
returns true if the actor doesn't have any of the gender preferences "interested in male", "interested in female", or "interested in trans".

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isAt"></a>

### lpPlayer.isAt ⇒ [<code>LPBoolean</code>](#LPBoolean)
Used by AI. May not work on player.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| location | <code>string</code> \| [<code>LPString</code>](#LPString) |  |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

**Example**  
```js
Actor.isAt("work")
```
<a name="LPActor+isBisexual"></a>

### lpPlayer.isBisexual ⇒ [<code>LPBoolean</code>](#LPBoolean)
If interested in both same gender and opposite gender

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isBisexualNonTrans"></a>

### lpPlayer.isBisexualNonTrans ⇒ [<code>LPBoolean</code>](#LPBoolean)
Same as isBisexual but stricter, returns false no matter own gender if interested in Trans

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isDating"></a>

### lpPlayer.isDating ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is in a relationship with the player. Can also be used to check if the Player is dating anyone i.e. Player.isDating()Alternatively, if the Actor is Player then it checks whether the player is currently in a relationship at all.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isDominantSex"></a>

### lpPlayer.isDominantSex ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the one actor would take a dominant role in a sexual relationship with another actor. This doesn't take into account sexual orientation. The rule is male is dominant to female, female with penis dominant to female with vagina. When it's male-male or female-female, it compares the masochist / submissive stat, the actor with lower masochist is dominant. Useful for mostly gender-related roles (opening doors, who walks who home etc)

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| actor | <code>LPActor</code> |  |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isEquipped"></a>

### lpPlayer.isEquipped ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if an actor is wearing any clothes in a certain 'slot'. Will return true even if it's an underwear hidden under other clothes. The slots are:

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| slot | <code>string</code> |  |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isFemale"></a>

### lpPlayer.isFemale ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if an actor is a woman. False if trans.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isGay"></a>

### lpPlayer.isGay ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if an actor is only interested in the same sex, i.e. false if bi

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isGayNonTrans"></a>

### lpPlayer.isGayNonTrans ⇒ [<code>LPBoolean</code>](#LPBoolean)
Same as isGay but stricter, returns false no matter own gender if interested in Trans

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isInterestedIn"></a>

### lpPlayer.isInterestedIn ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the one actor is interested sexually in another actor's gender. Does not take into account attractiontoplayer stat, just look at Actor1's sexual orientation and Actor2's gender.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| actor | <code>LPActor</code> |  |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isInterestedInMen"></a>

### lpPlayer.isInterestedInMen ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if an actor is interested in men

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isInterestedInTrans"></a>

### lpPlayer.isInterestedInTrans ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if an actor is interested in trans women

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isInterestedInWomen"></a>

### lpPlayer.isInterestedInWomen ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if an actor is interested in women

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isJob"></a>

### lpPlayer.isJob ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if actor is a doctor or a nurse

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| job | <code>string</code> \| [<code>LPString</code>](#LPString) | doctor or nurse |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isMale"></a>

### lpPlayer.isMale ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if an actor is a man. ??True if trans??

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isNaked"></a>

### lpPlayer.isNaked ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is completely without any clothes

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isNude"></a>

### lpPlayer.isNude ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is nude? How is this different from isNaked?

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isOnPeriod"></a>

### lpPlayer.isOnPeriod ⇒ [<code>LPBoolean</code>](#LPBoolean)
Returns true if actor is on period.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isPlayer"></a>

### lpPlayer.isPlayer ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is the player.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isPregnant"></a>

### lpPlayer.isPregnant ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is pregnant.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isProstitute"></a>

### lpPlayer.isProstitute ⇒ [<code>LPBoolean</code>](#LPBoolean)
Returns true if the actor is a sex worker.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isRace"></a>

### lpPlayer.isRace ⇒ [<code>LPBoolean</code>](#LPBoolean)
Returns true is Actor is race

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| race | <code>string</code> \| [<code>LPString</code>](#LPString) | Human, Elf, Orc, Vampire |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isSameAs"></a>

### lpPlayer.isSameAs ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the two actors are the same person

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| actor | <code>LPActor</code> |  |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isSameGender"></a>

### lpPlayer.isSameGender ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the two actors are the same gender

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| actor | <code>LPActor</code> |  |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isSameRace"></a>

### lpPlayer.isSameRace ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the two actors are the same race

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| actor | <code>LPActor</code> |  |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isSlotOccupied"></a>

### lpPlayer.isSlotOccupied ⇒ [<code>LPBoolean</code>](#LPBoolean)
Checks if a clothing slot is occupied.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| slot | <code>string</code> |  |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isStraight"></a>

### lpPlayer.isStraight ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if an actor is only interested in the opposite sex, i.e. false if bi

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isStraightNonTrans"></a>

### lpPlayer.isStraightNonTrans ⇒ [<code>LPBoolean</code>](#LPBoolean)
Same as isStraight but stricter, returns false no matter own gender if interested in Trans

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isTrans"></a>

### lpPlayer.isTrans ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is transsexual.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isValid"></a>

### lpPlayer.isValid ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if an actor variable is valid. Most commonly used after GetPerson(), GetCompanion() or GetSpecific()

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isVirgin"></a>

### lpPlayer.isVirgin ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor is a virgin.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+isVisible"></a>

### lpPlayer.isVisible ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if an actor is wearing any clothes in a certain 'slot'. Will return false if it's an underwear hidden under other clothes. The slots are:

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| slot | <code>string</code> | Outerwear, Headwear, Eyewear, Top, Top_Under, Bottom, Bottom_Under, Foot, Foot_Under |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+loadPreset"></a>

### lpPlayer.loadPreset ⇒ <code>LPActor</code>
Load the preset(s) onto this character, resetting them to default first before doing so.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Returns**: <code>LPActor</code> - "this" LPActor for chaining  

| Param | Type |
| --- | --- |
| presets | <code>Array.&lt;string&gt;</code> | 

**Example**  
```js
Actor.loadPreset(["bodybuilder_F"])$random(()=>{    Actor.loadPreset(["hourglass_F"]) // Just a normal hourglass girl    Actor.blendPreset(["hourglass_F"]) // There is still signs of the beefcake})
```
<a name="LPActor+makeInterested"></a>

### lpPlayer.makeInterested
Changes this Actor's sexual orientation so that they become interested in Actor.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type |
| --- | --- |
| actor | <code>LPActor</code> | 

<a name="LPActor+matchLastName"></a>

### lpPlayer.matchLastName
Change this Actor's last name to match that of actor

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type |
| --- | --- |
| actor | <code>LPActor</code> | 

<a name="LPActor+modifyActorVar"></a>

### lpPlayer.modifyActorVar
Use this function to modify the float value of a variable by a given value.The actor can be the Player or any other actor.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| value | <code>number</code> \| [<code>LPFloat</code>](#LPFloat) | 

<a name="LPActor+modifySalary"></a>

### lpPlayer.modifySalary
Multiply the actors salary by value ie salary of 100 * value of 1.1 would become 110.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type |
| --- | --- |
| value | <code>number</code> \| [<code>LPFloat</code>](#LPFloat) | 

<a name="LPActor+moveToPerson"></a>

### lpPlayer.moveToPerson
Moves this actor towards actor and head tracks actor.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type |
| --- | --- |
| actor | <code>LPActor</code> | 

<a name="LPActor+moveToPersonStand"></a>

### lpPlayer.moveToPersonStand
Make this actor move toward another actors position.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| actor | <code>LPActor</code> |  |
| distance | <code>number</code> \| [<code>LPFloat</code>](#LPFloat) | Distance to stay away from 'target'. 0 = Move to exact the same spot as 'target'. |

<a name="LPActor+randomize"></a>

### lpPlayer.randomize
Randomize the actor's one or more of (face and skin), (hair and pubic hair), (skin colour and nose / eyes racial features), (genitals). Commonly called after blendpreset (which might change the gender which resets the actor to the default face and hair for that gender)

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
let Helper = Player.getCompanion()if (!Helper.isValid()) {     Helper = scene.generatePersonTemporary()     while (!Helper.isInterestedIn(Player) || Helper.age > 35) {         Helper = generatePersonTemporary()     }     Helper.randomize({race: false, hairs: true, sexy: true, face: true})     Helper.dress()     Helper.show(2)}
```
<a name="LPActor+randomizeFace"></a>

### lpPlayer.randomizeFace
Randomize the actor's face and skin. Commonly called after blendpreset (which might change the gender which resets the actor to the default face and hair for that gender)

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
let Helper = Player.getCompanion()if (!Helper.isValid()) {     Helper = scene.generatePersonTemporary()     while (!Helper.isInterestedIn(Player) || Helper.age > 35) {         Helper = scene.generatePersonTemporary()     }     Helper.randomizeRace()     Helper.randomizeHairs()     Helper.randomizeSexy()     Helper.randomizeFace()     Helper.dress()     Helper.show(2)}
```
<a name="LPActor+randomizeHairs"></a>

### lpPlayer.randomizeHairs
Randomize the actor's hair and pubic hair. Commonly called after blendpreset (which might change the gender which resets the actor to the default face and hair for that gender)

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
let Helper = Player.getCompanion()if (!Helper.isValid()) {     Helper = scene.generatePersonTemporary()     while (!Helper.isInterestedIn(Player) || Helper.age > 35) {         Helper = generatePersonTemporary()     }     Helper.randomizeRace()     Helper.randomizeHairs()     Helper.randomizeSexy()     Helper.randomizeFace()     Helper.dress()     Helper.show(2)}
```
<a name="LPActor+randomizeRace"></a>

### lpPlayer.randomizeRace
Randomize skin colour and nose / eyes racial features

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
let Helper = Player.getCompanion()if (!Helper.isValid()) {     Helper = scene.generatePersonTemporary()     while (!Helper.isInterestedIn(Player) || Helper.age > 35) {         Helper = generatePersonTemporary()     }     Helper.randomizeRace()     Helper.randomizeHairs()     Helper.randomizeSexy()     Helper.randomizeFace()     Helper.dress()     Helper.show(2)}
```
<a name="LPActor+randomizeSexy"></a>

### lpPlayer.randomizeSexy
Randomize genitals for this character

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
let Helper = Player.getCompanion()if (!Helper.isValid()) {     Helper = scene.generatePersonTemporary()     while (!Helper.isInterestedIn(Player) || Helper.age > 35) {         Helper = generatePersonTemporary()     }     Helper.randomizeRace()     Helper.randomizeHairs()     Helper.randomizeSexy()     Helper.randomizeFace()     Helper.dress()     Helper.show(2)}
```
<a name="LPActor+setActorVar"></a>

### lpPlayer.setActorVar
Use this function to set a float variable to a certain actor.The actor can be the Player or any other actor.This function also allows setting TAGs to actors.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param |
| --- |
| name | 
| value | 

**Example**  
```js
Player.setActorVar("tag_Player", 1) // Set the Tag 'Player' to the Player's characterPlayer.setActorVar("tag_Player", -1) // Remove the Tag 'Player' from the Player's characterPlayer.setActorVar("SomeVariable", 42)     // Set the variable to 42var val = Player.getActorVar("SomeVariable")scene.narration("The value of SomeVariable is <val>.")
```
<a name="LPActor+setCurrentLocation"></a>

### lpPlayer.setCurrentLocation
Change an actor's current location. Used with findNearbyBuilding or getBuilding(Home) or getBuilding(Work), mostly in lpai files.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type |
| --- | --- |
| buildingVariable | [<code>LPBuilding</code>](#LPBuilding) | 

<a name="LPActor+setDatingId"></a>

### lpPlayer.setDatingId
Used for polyamorous for setting up which lover to break up with before you use loseDating()

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+setExRelative"></a>

### lpPlayer.setExRelative
Make this Actor remember that they used to be related to the actor.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type |
| --- | --- |
| actor | <code>LPActor</code> | 

<a name="LPActor+setJob"></a>

### lpPlayer.setJob
Set the job for this NPC. Only Doctor and Nurse are available now

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param |
| --- |
| job | 

<a name="LPActor+setMorphValue"></a>

### lpPlayer.setMorphValue
Morph list can be found in any lpcharacter file.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param |
| --- |
| morphName | 
| value | 

<a name="LPActor+setNoRedress"></a>

### lpPlayer.setNoRedress
Prevents an Actor from redressing. May not work on player.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+setWantsBabies"></a>

### lpPlayer.setWantsBabies
If wantsBaby is true then the actor wants a baby

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param |
| --- |
| wantsBaby | 

<a name="LPActor+sex"></a>

### lpPlayer.sex
Start a sex scene involving these actors. If the player is involved, it will also check whether the player is cheating or not and add to the affair list accordingly.The order in which roles are given to actors for the sex scene (important for descriptions and dirtytalk) depends largely on gender and domincance. Males are given roles before transsexuals, then women. Between people of the same gender, the most dominant one (lowest submission stat) is given a role first.However, the order of the actor parameters to the Sex() function matters somewhat in group sex: Sex(Male1, Player, Male2) will be different from Sex(Male2, Player, Male1).

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type |
| --- | --- |
| actors | <code>Array.&lt;LPActor&gt;</code> | 

<a name="LPActor+show"></a>

### lpPlayer.show
Show this actor on screen. The player's default position is 0. 1 - 6 is counted from right to left of the screen.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param |
| --- |
| positionIndex | 

<a name="LPActor+strip"></a>

### lpPlayer.strip
Strip this actor of all clothes

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stripOne"></a>

### lpPlayer.stripOne
Strip this actor of a single currently equipped piece of clothes (but still follows logical order, so no stripping underwear before outerwear etc). Used for strip poker.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+wantsBabies"></a>

### lpPlayer.wantsBabies ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if the actor wants a baby.

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> \| [<code>LPString</code>](#LPString) | handled by script preprocessor for vars |

<a name="LPActor+age"></a>

### lpPlayer.age : [<code>LPFloat</code>](#LPFloat)
age

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+arousal"></a>

### lpPlayer.arousal : [<code>LPFloat</code>](#LPFloat)
arousal

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+attractiontoplayer"></a>

### lpPlayer.attractiontoplayer : [<code>LPFloat</code>](#LPFloat)
attractiontoplayer

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+attractiveness"></a>

### lpPlayer.attractiveness : [<code>LPFloat</code>](#LPFloat)
attractiveness

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+car_value"></a>

### lpPlayer.car\_value : [<code>LPFloat</code>](#LPFloat)
car_value

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+children"></a>

### lpPlayer.children : [<code>LPFloat</code>](#LPFloat)
children

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+cooking"></a>

### lpPlayer.cooking : [<code>LPFloat</code>](#LPFloat)
cooking

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+dance"></a>

### lpPlayer.dance : [<code>LPFloat</code>](#LPFloat)
dance

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+energy"></a>

### lpPlayer.energy : [<code>LPFloat</code>](#LPFloat)
energy

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+fertility"></a>

### lpPlayer.fertility : [<code>LPFloat</code>](#LPFloat)
fertility

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+fitness"></a>

### lpPlayer.fitness : [<code>LPFloat</code>](#LPFloat)
fitness

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+incest"></a>

### lpPlayer.incest : [<code>LPFloat</code>](#LPFloat)
incest

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+intelligence"></a>

### lpPlayer.intelligence : [<code>LPFloat</code>](#LPFloat)
intelligence

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+interpersonal"></a>

### lpPlayer.interpersonal : [<code>LPFloat</code>](#LPFloat)
interpersonal

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+intoxication"></a>

### lpPlayer.intoxication : [<code>LPFloat</code>](#LPFloat)
intoxication

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+jobexperience"></a>

### lpPlayer.jobexperience : [<code>LPFloat</code>](#LPFloat)
jobexperience

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+jobperformance"></a>

### lpPlayer.jobperformance : [<code>LPFloat</code>](#LPFloat)
jobperformance

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+karma"></a>

### lpPlayer.karma : [<code>LPFloat</code>](#LPFloat)
karma

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+martial"></a>

### lpPlayer.martial : [<code>LPFloat</code>](#LPFloat)
martial

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+masochist"></a>

### lpPlayer.masochist : [<code>LPFloat</code>](#LPFloat)
masochist

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+money"></a>

### lpPlayer.money : [<code>LPFloat</code>](#LPFloat)
money

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+mood"></a>

### lpPlayer.mood : [<code>LPFloat</code>](#LPFloat)
mood

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+muscle"></a>

### lpPlayer.muscle : [<code>LPFloat</code>](#LPFloat)
muscle

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+music"></a>

### lpPlayer.music : [<code>LPFloat</code>](#LPFloat)
music

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+perversion"></a>

### lpPlayer.perversion : [<code>LPFloat</code>](#LPFloat)
perversion

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+pet_health"></a>

### lpPlayer.pet\_health : [<code>LPFloat</code>](#LPFloat)
pet_health

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+pornfame"></a>

### lpPlayer.pornfame : [<code>LPFloat</code>](#LPFloat)
pornfame

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+rapportwithplayer"></a>

### lpPlayer.rapportwithplayer : [<code>LPFloat</code>](#LPFloat)
rapportwithplayer

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+sneak"></a>

### lpPlayer.sneak : [<code>LPFloat</code>](#LPFloat)
sneak

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_alcohol"></a>

### lpPlayer.stock\_alcohol : [<code>LPFloat</code>](#LPFloat)
stock_alcohol

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_book"></a>

### lpPlayer.stock\_book : [<code>LPFloat</code>](#LPFloat)
stock_book

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_coffee"></a>

### lpPlayer.stock\_coffee : [<code>LPFloat</code>](#LPFloat)
stock_coffee

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_condom"></a>

### lpPlayer.stock\_condom : [<code>LPFloat</code>](#LPFloat)
stock_condom

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_flower"></a>

### lpPlayer.stock\_flower : [<code>LPFloat</code>](#LPFloat)
stock_flower

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_gift"></a>

### lpPlayer.stock\_gift : [<code>LPFloat</code>](#LPFloat)
stock_gift

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_haircare"></a>

### lpPlayer.stock\_haircare : [<code>LPFloat</code>](#LPFloat)
stock_haircare

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_ingredient"></a>

### lpPlayer.stock\_ingredient : [<code>LPFloat</code>](#LPFloat)
stock_ingredient

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_juice"></a>

### lpPlayer.stock\_juice : [<code>LPFloat</code>](#LPFloat)
stock_juice

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_makeup"></a>

### lpPlayer.stock\_makeup : [<code>LPFloat</code>](#LPFloat)
stock_makeup

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_meal"></a>

### lpPlayer.stock\_meal : [<code>LPFloat</code>](#LPFloat)
stock_meal

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_movie"></a>

### lpPlayer.stock\_movie : [<code>LPFloat</code>](#LPFloat)
stock_movie

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_musicalinstrument"></a>

### lpPlayer.stock\_musicalinstrument : [<code>LPFloat</code>](#LPFloat)
stock_musicalinstrument

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_petfood"></a>

### lpPlayer.stock\_petfood : [<code>LPFloat</code>](#LPFloat)
stock_petfood

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_photo"></a>

### lpPlayer.stock\_photo : [<code>LPFloat</code>](#LPFloat)
stock_photo

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_pill"></a>

### lpPlayer.stock\_pill : [<code>LPFloat</code>](#LPFloat)
stock_pill

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_skincare"></a>

### lpPlayer.stock\_skincare : [<code>LPFloat</code>](#LPFloat)
stock_skincare

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_snack"></a>

### lpPlayer.stock\_snack : [<code>LPFloat</code>](#LPFloat)
stock_snack

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_soda"></a>

### lpPlayer.stock\_soda : [<code>LPFloat</code>](#LPFloat)
stock_soda

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_supplement"></a>

### lpPlayer.stock\_supplement : [<code>LPFloat</code>](#LPFloat)
stock_supplement

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_tea"></a>

### lpPlayer.stock\_tea : [<code>LPFloat</code>](#LPFloat)
stock_tea

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_tobacco"></a>

### lpPlayer.stock\_tobacco : [<code>LPFloat</code>](#LPFloat)
stock_tobacco

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPActor+stock_video"></a>

### lpPlayer.stock\_video : [<code>LPFloat</code>](#LPFloat)
stock_video

**Kind**: instance property of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+getAnyRelative"></a>

### lpPlayer.getAnyRelative(relativeType)
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

### lpPlayer.getCompanion()
Get the current companion. Not entirely necessary as the current companion has a special variable "CurrentCompanion" that is always available.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
var Actor = Player.getCompanion()Actor.dress()// is the same asCurrentCompanion.dress()
```
<a name="LPPlayer+getCompanionAny"></a>

### lpPlayer.getCompanionAny()
Get the current companion, regardless of whether they are human or not.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+getCompanionCreature"></a>

### lpPlayer.getCompanionCreature()
Get the current companion, but only if they are a creature.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+getNumRelatives"></a>

### lpPlayer.getNumRelatives() ⇒ [<code>LPFloat</code>](#LPFloat)
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

### lpPlayer.getRent() ⇒ [<code>LPFloat</code>](#LPFloat)
Get the current rent into a float variable.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
**Returns**: [<code>LPFloat</code>](#LPFloat) - rent  
**Todo**

- [ ] this is special ie Rent.setRent()

**Example**  
```js
var Rent = Player.getRent()Rent *= 1.2                                  // todo this wont workRent.setRent()                               // todo this wont workscene.narration("Damn, the rent was increased by 20%.")
```
<a name="LPPlayer+getSalary"></a>

### lpPlayer.getSalary() ⇒ [<code>LPFloat</code>](#LPFloat)
Get the current salary into a float variable.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
**Returns**: [<code>LPFloat</code>](#LPFloat) - Salary  
**Todo**

- [ ] this is special ie Salary.setSalary()

**Example**  
```js
var Salary = Player.getSalary()Salary *= 1.2                                  // todo this wont workSalary.setSalary()                             // todo this wont workscene.narration("Yay, my salary was increased by 20%.")
```
<a name="LPPlayer+getSelectedNPC"></a>

### lpPlayer.getSelectedNPC() ⇒ [<code>LPNPC</code>](#LPNPC)
Choose a person from your contacts by leaving the scene temporarily and opening the Contacts menu. Must be preceded by selectNPC(). Basically superior to chooseContact() unless you really don't want to take the player out of the scene even temporarily.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
scene.narration("Who should be my first guest?")Player.selectNPC()var Guest1 = Player.getSelectedNPC()
```
<a name="LPPlayer+getTarget"></a>

### lpPlayer.getTarget() ⇒ [<code>LPNPC</code>](#LPNPC)
Get the current interaction target (i.e. the actor the player just clicked on)

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
**Example**  
```js
var Actor = Player.getTarget()
```
<a name="LPPlayer+isAtDatingHome"></a>

### lpPlayer.isAtDatingHome() ⇒ [<code>LPBoolean</code>](#LPBoolean)
Checks if player is at significant other's home rather than their own. (The WHERE : home trigger catches both)

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+isAtHome"></a>

### lpPlayer.isAtHome() ⇒ [<code>LPBoolean</code>](#LPBoolean)
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

### lpPlayer.isWithCompanion() ⇒ [<code>LPBoolean</code>](#LPBoolean)
Checks if the player is with a companion.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+isWithCompanionCreature"></a>

### lpPlayer.isWithCompanionCreature() ⇒ <code>boolean</code>
Checks if the player is with a companion creature.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+loseDating"></a>

### lpPlayer.loseDating()
Break up with current boyfriend / girlfriend. All affairs and SO's friends are cleared and become acquaintances.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+playerHasHome"></a>

### lpPlayer.playerHasHome() ⇒ <code>boolean</code>
Check if player player has a home.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  
<a name="LPPlayer+selectNPC"></a>

### lpPlayer.selectNPC(tag)
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
| fratFee | <code>number</code> \| [<code>LPFloat</code>](#LPFloat) | 

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
| salary | <code>number</code> \| [<code>LPFloat</code>](#LPFloat) | 

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
| tuition | <code>number</code> \| [<code>LPFloat</code>](#LPFloat) | 

**Example**  
```js
Player.setTuition(1000)scene.narrative("I agreed to pay $1000 per month for tuition")
```
<a name="LPActor+dialogue"></a>

### lpPlayer.dialogue(text, [mood])
Text the actor will say in mood.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 
| [mood] | <code>string</code> | 

<a name="LPActor+monolog"></a>

### lpPlayer.monolog(lines)
Lines of text the actor will say in mood.

**Kind**: instance method of [<code>LPPlayer</code>](#LPPlayer)  

| Param | Type |
| --- | --- |
| lines | <code>Array.&lt;string&gt;</code> | 
| lines[].text | <code>string</code> | 
| lines[].mood | <code>string</code> | 

**Example**  
```js
let scene = new Scene({lpMod, modsDir: lpMod.modsDir, name: 'LPActor_monolog'}, (scene) => {    scene.start(() => {        const {Player} = scene        Player.monolog([            {text: "simple line of dialog"},            {text: "simple line of dialog with a mood", mood: 'Happy'},        ])    })})
```
<a name="LPString"></a>

## LPString : [<code>LPString</code>](#LPString)
Class representing a LifePlay string.

**Kind**: global class  

* [LPString](#LPString) : [<code>LPString</code>](#LPString)
    * [.isSameString](#LPString+isSameString) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.isString](#LPString+isString) ⇒ [<code>LPBoolean</code>](#LPBoolean)
    * [.assign(rhs)](#LPString+assign) ⇒ [<code>LPString</code>](#LPString)

<a name="LPString+isSameString"></a>

### lpString.isSameString ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check if two string variables are the same, case insensitive

**Kind**: instance property of [<code>LPString</code>](#LPString)  

| Param | Type | Description |
| --- | --- | --- |
| otherString | <code>string</code> \| [<code>LPString</code>](#LPString) |  |
| [name] | <code>string</code> | optional name handled by parser |

<a name="LPString+isString"></a>

### lpString.isString ⇒ [<code>LPBoolean</code>](#LPBoolean)
Check the value of a string, case insensitive

**Kind**: instance property of [<code>LPString</code>](#LPString)  

| Param | Type | Description |
| --- | --- | --- |
| str | [<code>LPString</code>](#LPString) \| <code>string</code> |  |
| [name] | <code>string</code> | optional name handled by parser |

<a name="LPString+assign"></a>

### lpString.assign(rhs) ⇒ [<code>LPString</code>](#LPString)
Assigns the value of rhs to this

**Kind**: instance method of [<code>LPString</code>](#LPString)  

| Param | Type |
| --- | --- |
| rhs | <code>string</code> \| [<code>LPString</code>](#LPString) | 

