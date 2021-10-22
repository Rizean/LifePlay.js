#
## WIP
* LPStat - Need some way for users to add stats
* ~~LPAction~~
* ~~LPMod~~

## todo

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
* AliasName.generateBuildingAlias(buildingtype) - example NatH.generateBuildingAlias(home); NatH.addObjective(bggw_film)
* AliasName.getActorAlias() returns Actor
* questEnd()
* AliasName.setActorAlias(Actor) - example: Damian = generatePerson(bggw_damian); DamianA.setActorAlias(Damian)
* BuildingAlias.addObjective(Lpactionfilename)
* BuildingAlias.removeObjective(Lpactionfilename)
* isQuestCompleted - example isQuestCompleted(legalized)

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