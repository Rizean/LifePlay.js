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
    * [.findNearbyBuilding(types)](#LPScene+findNearbyBuilding) ⇒ <code>LPBuilding</code>
    * [.followUp(sceneID)](#LPScene+followUp)
    * [.forcedTrigger()](#LPScene+forcedTrigger) ⇒ <code>LPBoolean</code>
    * [.generateCreature(optionalRace)](#LPScene+generateCreature) ⇒ <code>LPActor</code>
    * [.generateCreatureTemporary(optionalRace)](#LPScene+generateCreatureTemporary) ⇒ <code>LPActor</code>
    * [.generatePerson(presets)](#LPScene+generatePerson) ⇒ <code>LPActor</code>
    * [.generatePersonTemporary(presets)](#LPScene+generatePersonTemporary) ⇒ <code>LPActor</code>
    * [.getActorAlias(aliasStr)](#LPScene+getActorAlias) ⇒ <code>LPNPC</code>
    * [.getAssignee(location)](#LPScene+getAssignee)
    * [.getCreature()](#LPScene+getCreature)
    * [.getPerson(hasContactExchangedOrTag)](#LPScene+getPerson) ⇒ <code>LPActor</code> \| <code>undefined</code>
    * [.getPersonHere(isPermanent)](#LPScene+getPersonHere) ⇒ <code>LPNPC</code>
    * [.getRelatedPeople(types)](#LPScene+getRelatedPeople) ⇒ <code>Array.&lt;LPNPC&gt;</code> \| <code>undefined</code>
    * [.getSpecific(keywordOrID)](#LPScene+getSpecific) ⇒ <code>LPNPC</code>
    * [.isModEnabled(modID)](#LPScene+isModEnabled) ⇒ <code>void</code> \| <code>\*</code>
    * [.isQuestCompleted(quest)](#LPScene+isQuestCompleted) ⇒ <code>LPBoolean</code>
    * [.isTimingOut(sceneID)](#LPScene+isTimingOut) ⇒ <code>LPBoolean</code>
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
    * [.TfGame()](#LPScene+TfGame) ⇒ <code>LPBoolean</code>
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
addNpcRelationship(Dating, John, Maria)
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
scene.blockPregnancy()
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
cameraMove( 0, 0, 800 ) // Move camera to the middle of the room
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
cameraMove( 0, 0, 800 ) // Move camera to the middle of the room
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
scene.dressFormal() // formal on
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
scene.narrative("A while later in front of her place.")
```
<a name="LPScene+findNearbyBuilding"></a>

### lpScene.findNearbyBuilding(types) ⇒ <code>LPBuilding</code>
Find a building near to another building that is of a certain type. Used with setCurrentLocation()

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param | Type | Description |
| --- | --- | --- |
| types | <code>Array.&lt;string&gt;</code> | hospital, restaurant, hotel, nightclub, restaurant, sports_centre, etc |

**Example**  
```js
var loc = scene.findNearbyBuilding(restaurant, bar, nightclub)
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
Dating.dialog("You betrayed me, you humiliated me ... now you die!", "Furious")
```
<a name="LPScene+forcedTrigger"></a>

### lpScene.forcedTrigger() ⇒ <code>LPBoolean</code>
Returns whether a scene was force triggered with an action that has the SCENE_ALWAYS field filled (which overrides the conditions at the top of a scene). Use it to know if the scene was consciously triggered by the player or randomly triggered.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
**Example**  
```js
// The "organize_a_house_party.lpaction" file has the following field filled:
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
let Actor = scene.generateCreature(Dogs)
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
Actor = generateCreatureTemporary(Dogs)
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
let Actor = $let('Actor', scene.generatePerson())  // OR Actor = scene.generatePerson(["easterneuropean", "twenties", "fitness_model"])
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
let Actor = $let('Actor', scene.generatePersonTemporary())  // OR Actor = scene.generatePersonTemporary(["easterneuropean", "twenties", "fitness_model"])
```
<a name="LPScene+getActorAlias"></a>

### lpScene.getActorAlias(aliasStr) ⇒ <code>LPNPC</code>
For quests. Return an actor from a previously set actor alias.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param | Type |
| --- | --- |
| aliasStr | <code>LPString</code> \| <code>string</code> | 

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
Get a random person in your current game (i.e. could be anyone that has been created with GeneratePerson() or GeneratePersonTemporary() then MakePermanent() ).

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param | Type | Description |
| --- | --- | --- |
| hasContactExchangedOrTag | <code>boolean</code> \| <code>tag</code> | to filter for whether their contact has been exchanged to you or not. Tag (any): to filter for persons that have the given tag assigned. The tag command was introduced with LifePlay 2.18 and can be used to iterate over all persons with a certain tag. |

**Example**  
```js
var Actor = scene.getPerson()       // get anyone
```
<a name="LPScene+getPersonHere"></a>

### lpScene.getPersonHere(isPermanent) ⇒ <code>LPNPC</code>
Returns a person in the current building / location.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param | Type | Description |
| --- | --- | --- |
| isPermanent | <code>boolean</code> \| <code>undefined</code> | If true only permanent actors will be returned. If false only temporary NPCs will be returned. If omitted all NPCs will be returned. |

<a name="LPScene+getRelatedPeople"></a>

### lpScene.getRelatedPeople(types) ⇒ <code>Array.&lt;LPNPC&gt;</code> \| <code>undefined</code>
Get a group of NPCs with special relationship of specific type or another with each other. The actor variable you give will receive a number suffix starting from 0 when the actors are returned. The list for 'Type' is:

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
**Todo**

- [ ] this one is weird as it returns multiple actors ie if getRelatedPeople(Spouses, Dating) this would create Actor0 and Actor1, it will be complex to handle


| Param | Type | Description |
| --- | --- | --- |
| types | <code>Array.&lt;string&gt;</code> \| <code>undefined</code> | Dating, Spouses, Siblings, ParentChild, Cousins, BossEmployee, Colleagues |

<a name="LPScene+getSpecific"></a>

### lpScene.getSpecific(keywordOrID) ⇒ <code>LPNPC</code>
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

### lpScene.isQuestCompleted(quest) ⇒ <code>LPBoolean</code>
Returns true if quest is complete

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param | Type |
| --- | --- |
| quest | <code>string</code> | 

<a name="LPScene+isTimingOut"></a>

### lpScene.isTimingOut(sceneID) ⇒ <code>LPBoolean</code>
Check if the specified is still in cool down period and shouldn't be triggered again yet.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  

| Param | Type |
| --- | --- |
| sceneID | <code>LPString</code> \| <code>string</code> | 

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
scene.narrative("The party continues ...")
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
scene.setBackground("work")
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
Start a sex scene involving these actors. If the player is involved, it will also check whether the player is cheating or not and add to the affair list accordingly.

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
Start a sex scene involving these actors. Even if the player is involved, it will not check whether the player is cheating or not. The order in which roles are given to

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
$if(Random(0, 100).lt(sneak), ()=>{
```
<a name="LPScene+talkNonConsensual"></a>

### lpScene.talkNonConsensual()
call this command before starting a sex scene to make sure that none of the regular 'dirtytalk' (ie both ppl wanting it) is played, and only rape talk is.

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
<a name="LPScene+TfGame"></a>

### lpScene.TfGame() ⇒ <code>LPBoolean</code>
Check if the current game was started with the TF New Game

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  
<a name="LPScene+wasCondomUsedDuringLastSex"></a>

### lpScene.wasCondomUsedDuringLastSex() ⇒ <code>boolean</code>
Returns true if condoms were used during last sex

**Kind**: instance method of [<code>LPScene</code>](#LPScene)  