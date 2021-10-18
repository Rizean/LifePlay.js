# 
## todo
### Review 4.12
All work so a far is based on 4.11

### Missing Method/Functions
* clearGlobal
* clothesContain
* generateBuildingAlias
* setActorAlias
* setGlobal
* setGlobalString
* setHomeCity
* setHomeDating
* showMapView
* TfGame
* StringVariable = enterString()

### Modules
* LPTalk
* LPDescription
* LPStat
* LPAI
* LPAction
* LPMod
* LPCharacter
* LPGlobal
* LPQuest

#### LPTalk
* Tag(tag1, tag2, ..., tagN)

#### LPQuest
* AliasName.generateBuildingAlias(buildingtype) - example NatH.generateBuildingAlias(home); NatH.addObjective(bggw_film)
* AliasName.getActorAlias() returns Actor
* questEnd()
* AliasName.setActorAlias(Actor) - example: Damian = generatePerson(bggw_damian); DamianA.setActorAlias(Damian)
* BuildingAlias.addObjective(Lpactionfilename)
* BuildingAlias.removeObjective(Lpactionfilename)
* isQuestCompleted - example isQuestCompleted(legalized)

#### LPGlobal
* GlobalVariableName.clearGlobal() - SugarBabe.clearGlobal()
* ~~GlobalVariable.getGlobal()~~ return float - Get the float value of a global variable. If there's no global variable under such name, returns 0. - SugarBabe = SugarBabe.getGlobal(); If SugarBabe > 0; Actor = getSpecific(SugarBabe)
* GlobalVariableName.setGlobal(float or floatvariable) - SugarBabe = Actor.getID();  SugarBabe.setGlobal(SugarBabe)
* (not used) ~~GlobalVariable.getGlobalString()~~ returns String - Same as getGlobal(), just string instead of float
* (not used) GlobalVariable.setGlobalString(String) Same as setGlobal(), just string instead of float


## Done

### Other
* ~~Needs Review - isIncest() Only used for lptalk and lpdesc, check if the current sex scene is an incest one~~
* ~~While Expressions~~

### Actor Condition
* NP? ~~Actor.hadSex()~~ Check if this actor has had sex with the player at any point in this playthrough
* ~~Actor.hasRelationship(Type1, Type2, ..., TypeN)~~
* NU ~~Actor1.hasSameInterestAs(Actor2)~~
* NU ~~Actor.isAffair()~~
* NP ~~Actor.isAsexual()~~

* ~~Actor.isBoss()~~
* ~~Actor.isColleague()~~
* ~~Actor.isContactExchanged()~~ - maybe use isContactExchanged() but looks like error
* ~~Actor.isCreature()~~
* ~~Actor.isCreatureType(Type) Parameters: Dog or Horse~~
  
* NP ~~Actor.isDating()~~
* NU ~~Actor.isDatingFriend()~~
* NP ~~Actor1.isDominantSex(Actor2)~~
* NP ~~Actor.isEquipped(Slot)~~
* ~~Actor.isExRelative()~~
* NP ~~Actor.isFemale()~~

* NP ~~Actor1.isInterestedIn(Actor2)~~

  
* NU ~~Actor.isJob()~~
* ~~Actor.isLandlord()~~

* ~~Actor.isMarried()~~

* ~~Actor.isNeighbour()~~

* NU ~~Actor1.isRelationshipWith(Actor2, RelationshipTypes)~~
* ~~Actor.isRelative()~~
* NU ~~Actor.isRelativeType(Type)~~
* ~~Actor1.isSameAs(Actor2)~~

* NP ~~Actor.isPlayer()~~
* NP ~~Actor.isPregnant()~~
* NP ~~Actor.isNaked()~~
* NP ~~Actor.isMale()~~
* NP ~~Actor1.isSameGender(Actor2)~~
* NP ~~Actor.isInterestedInMen()~~
* NP ~~Actor.isInterestedInTrans()~~
* NU ~~Actor.isInterestedInWomen()~~
* NP ~~Actor.isGay()~~
* NU ~~Actor.isGayNonTrans()~~
* NU ~~Actor.isBisexual()~~
* NU ~~Actor.isBisexualNonTrans()~~
* NP ~~Actor.isStraight()~~
* NP ~~Actor.isStraightNonTrans()~~
* ~~Actor.isTemporary()~~
* NP ~~Actor.isTrans()~~

* ~~Actor.isValid()~~
* NU ~~Actor.isVisible(slot)~~
* ~~Actor.livesWithPlayer()~~

### Actor Command
* ~~Actor.addColleague()~~
* ~~Actor.addCriminal()~~
* ~~Actor.addDatingFriend()~~
* ~~Actor.addEmployee(Salary)~~
* ~~Actor.addNeighbour()~~
* ~~Actor.blendPreset(PresetID)~~
* NP ~~Actor.changeSex()~~
* ~~Actor.cloneFrom(Actor2)~~
* ~~NP Actor.closeEyes(bool)~~
* ~~NU Actor.countPregnancyDays()~~
* ~~Actor.Delete()~~
* ~~Actor.DeletePerson()~~
* NP ~~Actor.dress(optional_item)~~
* NP ~~Actor.dressBondage(BondageGearID)~~
* NP ~~Actor.dressExcept(Slot1, Slot2, ..., SlotN)~~
* NP ~~Actor.dressGuard()~~
* NP ~~Actor.dressPrisoner()~~
* NP ~~Actor.dressUniform()~~
* NP ~~Actor.dressWedding()~~
* ~~Actor.enterFirstName()~~
* ~~Actor.generatePersonMatchRace()~~
* ~~NP Actor.generateRelativeMatchRace()~~
* ~~NP? Actor.getActorVar(name)~~
* ~~Actor.getBuilding(Type) returns Building Get a building related to this NPC AI-wise. Parameters are Home, Work and Current.~~
* ~~Actor.getID()~~
* ~~NU Actor.getMorphValue(MorphName) returns float~~
* ~~Actor.getRelatedPerson(Type1, Type2, ..., TypeN)~~
* ~~Actor.getRelatedPersonQuick(RelationshipTypes) - can be used alone ie getRelatedPersonQuick(Spouses, Dating)~~
* ~~Actor.getUntil() returns float Returns the time this person will stop being at their current location and AI would look for a new location again. The value returned isn't the time of the day, but total hours elapsed since the start of the current game, i.e. HoursElapsed + HoursStayed HoursElapsed being a special variable~~
* ~~NP Actor.hide()~~
* ~~NP Actor.impregnate()~~
* ~~NU Actor.loadPreset(Preset1, Preset2, ..., PresetN)~~
* ~~Actor1.makeInterested(Actor2) - Change Actor1's sexual orientation so that they become interested in Actor2~~
* ~~Actor.makePermanent()~~
* ~~NP Actor.matchLastName(Actor2)~~
* ~~NU Actor.modifyActorVar(name, value)~~
* ~~NP Actor1.movetoPerson(Actor2) Actor1 moves towards Actor2 and headtracks Actor2~~
* ~~Actor.randomizeFace()~~
* ~~Actor.randomizeHairs()~~
* ~~Actor.randomizeRace()~~
* ~~Actor.randomizeSexy()~~
* ~~Actor.removeColleague()~~
* ~~Actor.removeDatingFriend()~~
* ~~Actor.removeEmployee()~~
* ~~Actor.removeNeighbour()~~
* ~~Actor.saveAndDelete()~~
* ~~Actor.setBoss()~~
* ~~Actor.setCrimeBoss()~~
* ~~Actor.setCurrentLocation(BuildingVariable)~~
* ~~Actor.setDating()~~
* ~~Actor.setDifferentMajor()~~
* ~~Actor.setExRelative(Actor2)~~
  
* ~~NP Actor.setJob(Job) job = Doctor/Nurse~~
* ~~NP Actor.setLandlord()~~
* ~~Actor.setLivingWithPlayer(bool)~~
* ~~NU Actor.setMorphValue(MorphName, Value) Morph list can be found in any lpcharacter file.~~
* ~~Actor.setPT()~~
* ~~Actor.setRelativeType(Type) Set which type of relative this person is (must already be a relative actor, not a normal NPC). Used for giving birth. example Actor2 = Actor.generateRelativeMatchRace(); Actor2.setRelativeType(Child)~~
* ~~Actor.setSameMajor()~~
* ~~Actor.setSubject()~~
* ~~Actor.setUntil(floatvariable)~~
* ~~NP Actor.show(position_index) Show this actor on screen. The player's default position is 0. 1 - 6 is counted from right to left of the screen.~~
* ~~Actor.startDate()~~
* ~~NP Actor.strip()~~
* ~~NP Actor.stripOne()~~
* ~~Actor.passOn() - simple - Used to pass an actor from one scene to the next scene, used with followUp() and getSpecific(PassedOn)~~
* ~~NP Actor.setActorVar(name, value)~~
  
### Actor Other
* ~~generateCreature(optional_Race) optional_Race = dog/horse or none~~
* ~~generateCreatureTemporary(optional_Race)~~ optional_Race = dog/horse or none
* ~~generatePerson(preset1, preset2, ..., presetN)~~
* ~~generatePersonTemporary(preset1, preset2, ..., presetN)~~
* ~~getCreature(optional_Race) optional_Race = dog/horse or none~~
* ~~getPerson(optional bool/tag) - Boolean (true/false): to filter for whether their contact has been exchanged to you or not. tag example: Actor.setActorVar(tag_warden, 0); Colleague4 = getPerson(tag_warden)~~ 
* ~~getRelatedPeople(Type1, Type2, ..., TypeN) - Actor = getRelatedPeople(Spouses, Dating);~~
* ~~getTarget() <LPAction> returns Actor Used for WHO: conditions for interactions, get the current interaction target (i.e. the actor the player just clicked on)~~
* ~~removeNpcRelationship(Actor1, Actor2, ..., ActorN)~~
* ~~addNpcRelationship(Type, Actor1, Actor2, ..., ActorN)~~
* ~~blockNPCRelationships(Actor) - looks like it should be Actor.blockNPCRelationships() not sure only used once - a very weird command~~

### Building
* ~~NU BuildingVariable.isBuildingValid() Check if a building variable is valid at all (i.e. referring to an actual building on the map), used to check if things like FindNearbyBuilding were successful or not~~
* ~~isOpen(BuildingType) Check if a building type is open at the current hour - example Type == "brothel"; If isOpen(Type) && AI:perversion > 50~~
* ~~BuildingVariable1.isSameBuilding(BuildingVariable2) - Dest = SO.getBuilding(current); Work = SO.getBuilding(work); If !Dest.isSameBuilding(Work)~~
* ~~calculateExpenses()~~
* ~~calculateRent()~~
* ~~calculateRevenue()~~
* ~~calculateWages()~~
* ~~BuildingVariable.findNearbyBuilding(Type) or findNearbyBuilding(Type)  returns Building - Find a building near to another building that is of a certain type. Used with setCurrentLocation() examples - Loc = findNearbyBuilding(restaurant) or Dest = Current.findNearbyBuilding(stripclub, brothel)~~ 
* ~~BuildingVariable.getBuildingType() returns string - Used with getBuilding() and isString("") for lpai files - example Type = Work.getBuildingType()~~
* ~~modifyReputation(floatvar) - example: Change = 0.5;  ModifyReputation(Change)~~


### Other
* ~~NU StringVariable1.isSameString(StringVariable2) - example? isSameString(test, test2) or maybe StringVariable1.isSameString(StringVariable2)~~
* ~~StringVariable.isString("DirectText")~~
* ~~(LPTalk) Tag(tag1, tag2, ..., tagN)~~
* ~~TfGame()~~
* ~~assignResidents() - ?? assigns random people to different parts of the building?~~
* ~~assignWhat() - Actor.assignWhat() - ActorWhat = Actor.assignWhat(); If ActorWhat.isString("having sex") || ActorWhat.isString("masturbating")~~
* ~~assignWhere() - Actor.assignWhere() - ActorWhere = Actor.assignWhere(); If ActorWhere.isString("bedroom")~~
* ~~getAssignee() - example: Actor = getAssignee("bathroom")~~

* ~~clearGetList()~~
* ~~NU StringVariable = enterString() - ??~~
* ~~NU ~~FilterDesc(FilenameofLpdescfile)~~ Scene?~~
* ~~NU FilterTalk(FilenameofLptalkfile) Scene?~~

* ~~getRent() - seems specific to player? ie locations doesn't matter~~
* ~~getSalary() - seems specific to player? ie locations doesn't matter~~
  
* ~~selectNPC(optional tag) - Choose a person from your contacts by leaving the scene temporarily and opening the Contacts menu. Must be followed by getSelectedNPC().~~
* ~~getSelectedNPC() - Must be preceded by selectNPC()~~

* ~~getSpecific(keyword/float/float variable) Get a specific person in your current game. Available keywords are: Dating, Dating_Friend, Boss, Colleague, Neighbour, PT, ExDating, Landlord, CurrentBabyDaddy, Impregnated, Affair Alternatively, you can input an ID number or a float variable containing it to get the actor with that ID.~~
* ~~openMenu(menu) menu = CharGen, City, Contacts, Stat, Inventory, ModManager~~
* ~~Random(float, float) returns a random float number between the entered float parameters. Commonly used to influence the chance a condition is true based on an actor stat.~~
* ~~saveOldPlayer() -- tfgame?~~
* ~~NU setHomeCity ?? - and not in docs~~
* ~~SneakGame() - SneakGame(); If Random(0, 100) < sneak~~

## Scene
* ~~blockPregnancy()~~ - simple
* ~~Filter(Tag)~~ - Filter(Aggressive) ie filter sex talk for a scene
* ~~followUp(SceneID)~~
* ~~passTime(hours_min, hours_max)~~ Used to pass time during a scene. passTime(0.25, 1)
* ~~sceneEndLoadLastSave()~~ - load last save
* ~~secondScreen(Actor)~~ - seems actor is optional or turns it off?
* ~~secondScreenIfHidden(Actor)~~ - example secondScreenIfHidden(Dating)
* ~~setBackground(where)~~
* ~~setBackgroundCustom()~~ Same as setBackground(), but some extra parameters like livingroom, kitchen
* ~~setBackground3D(relative/path/to/3d-scene.lpworld)~~
* ~~Sex(Actor1, Actor2, ..., ActorN)~~
* ~~SexNoAffair(Actor1, Actor2, ..., ActorN)~~
* ~~TalkNonConsensual()~~ - example: Filter(Aggressive); TalkNonConsensual()
* ~~timeout(hours, sceneid1, sceneid2, ..., sceneidN)~~ - example: timeout(12, call_invite_co, call_invite)
* NU ~~timeoutActor(hours, sceneID, Actor1, ..., ActorN)~~
* NU ~~timeoutActorPrecise(hours, sceneID, actor1, ..., actorN)~~
* ~~timeoutPrecise(hours, sceneid1, sceneid2, ..., sceneidN)~~ - example: timeoutprecise(8760, anniversary)
* ~~isTimingOut(sceneID)~~ - example: If isTimingOut(prison_warden_cms)
* ~~dressFormal()~~

### Floats
* ~~{float variable}.floor()~~
* ~~{float variable}.round()~~
* ~~FloatVar.setFraternityFees()~~
* ~~FloatVar.setRent()~~
* ~~Floatvar.setSalary()~~
* ~~FloatVar.setTuition()~~
* ~~Float.convertToLocalCurrency()~~


### Special in scene
* ~~WHAT - example: If WHAT == childcare or Random(0, 100) < 15 || [WHAT == childcare && Random(0, 100) < 50]~~
* ~~WHEN - example: If WHEN < 6 || WHEN > 20~~
* ~~WHERE - If WHERE == brothel~~
* ~~Type.isString("post_office")~~

### Stats/Props? ie Actor:props - Dani:attractiontoplayer => -100 or Actor:attractiontoplayer += Random(0, 5)
* ~~age arousal attractiontoplayer attractiveness car_value children cooking dance energy fertility fitness incest intelligence interpersonal intoxication jobexperience jobperformance martial masochist money mood muscle music perversion pet_health pornfame rapportwithplayer sneak stock_alcohol stock_book stock_coffee stock_condom stock_flower stock_gift stock_haircare stock_ingredient stock_juice stock_makeup stock_meal stock_movie stock_musicalinstrument stock_petfood stock_photo stock_pill stock_skincare stock_snack stock_soda stock_supplement stock_tea stock_tobacco stock_video~~


### New
* ~~DatingHasHome() - Checks to see if the player's significant other lives in their own apartment.~~
* ~~ForcedTrigger() - Returns whether a scene was force triggered with an action that has the SCENE_ALWAYS field filled (which overrides the conditions at the top of a scene). Use it to know if the scene was consciously triggered by the player or randomly triggered.~~
* ~~wasCondomUsedDuringLastSex() - Returns true if condoms were used during last sex~~
* ~~cameraFocus(Actor) - Makes the camera focus on the given actor.~~
* ~~cameraMove(LocX,LocY,LocZ,RotX,RotY,RotZ) -~~
  * ~~Moves and rotates the camera.~~
  * ~~First three parameters are the position of the camera.~~
  * ~~Following three parameters are the roation.~~
  * ~~Note that the default Camera (main menu scene) is Loc(X=-3131132.000000,Y=-14967241.000000,Z=50.000000) and Rot(Pitch=0.000000,Yaw=-180.000000,Roll=0.000000)~~
  * ~~cameraMove( 0, 0, 800 ) // Move camera to the middle of the room~~
  * ~~cameraFocus(MainActor)  // Make cam point to the main actor~~

### Special
* ~~isIncest() Only used for lptalk and lpdesc, check if the current sex scene is an incest one~~
* ~~isModEnabled(modID) - Check if a mod, identified by its ID in its .lpmod file, is enabled.~~


## Expressions

// ~~While count < interpersonal*Random(0.01, 0.1)~~
// ~~interpersonal -= Random(0, 0.25)~~
// ~~Random(0, 300) < attractiveness~~
// ~~Colleague:rapportwithplayer += Random(0, 2)~~
// ~~Random(0, 100) < 0.01*(intelligence+jobexperience+jobperformance)*ActionDuration~~
// ~~If intelligence - Colleague:intelligence> Random(0, 20) || Boss:rapportwithplayer > Random(50, 100) || Boss.isDating()~~
// ~~isWithCompanion() && CurrentCompanion.isDating() && CurrentCompanion.isDominantSex(Player) && CurrentCompanion:attractiontoplayer + CurrentCompanion:intelligence + CurrentCompanion:interpersonal < Random(0, 200)~~
// ~~Actor:attractiontoplayer += 0.03*[intelligence + interpersonal]~~
// ~~relation -= 0.1*(100 - Stay:perversion)~~
// ~~This is a choice: Elseif 3 && Random(0,100)*Difficulty < interpersonal~~
// ~~Elseif 3 || Random(0, 100) < choice*modelfame~~
// ~~Price = 0.2*[fitness + attractiveness + intelligence]*CostOfLiving~~
// ~~isWithCompanion() && CurrentCompanion.isInterestedIn(Player) && [[!CurrentCompanion.isRelative() && CurrentCompanion:attractiontoplayer > 30] || CurrentCompanion:incest > 50] && Random(50, 200) < CurrentCompanion:perversion~~
// ~~Actor = getSpecific(Neighbour); SO = Actor.getRelatedPerson(Dating, Spouses); If [SO:martial - SO:masochist > Random(100, 200) && Actor:masochist - Actor:martial > Random(50, 100)] || [Actor:martial - Actor:masochist > Random(100, 200) && SO:masochist - SO:martial > Random(50, 100)]~~