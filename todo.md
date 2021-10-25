#
## WIP
* LPStat - Need some way for users to add stats
* ~~LPAction~~
* ~~LPMod~~

## todo
### Missing functions
* ~~randomizeFace~~
* ~~randomizeHairs~~
* ~~randomizeRace~~
* ~~randomizeSexy~~

### Syntax Sugar
* LPActor.faceEachOther(LPActor)

### Modules
* LPTalk
* LPDescription
* LPAI
* LPCharacter - Complex and a lot of work.
* LPQuest
* LPAlias

#### LPTalk
* Tag(tag1, tag2, ..., tagN)
* isIncest

#### LPQuest
* AliasName.generateBuildingAlias(buildingtype) - 
  * B1.removeObjective(skag_awaken)
  * B2.generateBuildingAlias(stripclub)
  * B2.addObjective(skag_awaken)
* AliasName.getActorAlias() returns Actor
* questEnd()
* AliasName.setActorAlias(Actor) - example: Damian = generatePerson(bggw_damian); DamianA.setActorAlias(Damian)
* BuildingAlias.addObjective(Lpactionfilename)
* BuildingAlias.removeObjective(Lpactionfilename)
* isQuestCompleted - example isQuestCompleted(legalized)

notes
```text
// sttt_start.lpscene
sttt_stage.setGlobal(0)

B1.generateBuildingAlias(work)
B1.addObjective(sttt_obj)
sttt_stage.setGlobal(1)

// sttt_main.lpscene
stage = sttt_stage.getGlobal()
If stage == 1 // GET DIRT ON Boss
sttt_stage.setGlobal(2)
sttt_stage.setGlobal(3)
sttt_stage.setGlobal(4)

```

#### LPGlobal
* ~~GlobalVariableName.clearGlobal() - SugarBabe.clearGlobal()~~
* ~~GlobalVariable.getGlobal()~~ return float - Get the float value of a global variable. If there's no global variable under such name, returns 0. - SugarBabe = SugarBabe.getGlobal(); If SugarBabe > 0; Actor = getSpecific(SugarBabe)
* ~~GlobalVariableName.setGlobal(float or floatvariable) - SugarBabe = Actor.getID();  SugarBabe.setGlobal(SugarBabe)~~
* ~~GlobalVariable.getGlobalString() returns String - Same as getGlobal(), just string instead of float~~
* ~~GlobalVariable.setGlobalString(String) Same as setGlobal(), just string instead of float~~

### Other
* LPMod needs JSDoc
* need JSDoc's that works on the injected Globals

### Review 4.14 Missing Syntax
* ~~addObjective~~
* ~~animateFnt~~
* ~~clearGlobal~~
* ~~clothesContain~~
* ~~StringVariable = enterString()~~
* ~~generateBuildingAlias~~
* ~~isIncest~~
* ~~movetoPerson~~
* ~~setDatingId~~
* ~~setGlobal~~
* ~~setGlobalString~~
* ~~setHomeCity~~
* ~~setHomeDating~~
* ~~showMapView~~
* ~~Tag~~
* ~~TfGame~~