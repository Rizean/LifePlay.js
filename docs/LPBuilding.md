<a name="LPBuilding"></a>

## LPBuilding : [<code>LPBuilding</code>](#LPBuilding)
Class representing a LifePlay building.

**Kind**: global class  

* [LPBuilding](#LPBuilding) : [<code>LPBuilding</code>](#LPBuilding)
    * [.calculateExpenses](#LPBuilding+calculateExpenses) ⇒ <code>LPFloat</code>
    * [.calculateRent](#LPBuilding+calculateRent) ⇒ <code>LPFloat</code>
    * [.calculateRevenue](#LPBuilding+calculateRevenue) ⇒ <code>LPFloat</code>
    * [.calculateWages](#LPBuilding+calculateWages) ⇒ <code>LPFloat</code>
    * [.getBuildingType](#LPBuilding+getBuildingType) ⇒ <code>LPString</code>
    * [.isOpen](#LPBuilding+isOpen) ⇒ <code>LPBoolean</code>
    * [.isSameBuilding](#LPBuilding+isSameBuilding) ⇒ <code>LPBoolean</code>
    * [.modifyReputation](#LPBuilding+modifyReputation) ⇒ [<code>LPBuilding</code>](#LPBuilding)
    * [.removeObjective](#LPBuilding+removeObjective) ⇒ [<code>LPBuilding</code>](#LPBuilding)
    * [.setHomeDating](#LPBuilding+setHomeDating)
    * [.generateBuildingAlias(alias, buildingType)](#LPBuilding+generateBuildingAlias)

<a name="LPBuilding+calculateExpenses"></a>

### lpBuilding.calculateExpenses ⇒ <code>LPFloat</code>
Calculate the expenses for the current building.

**Kind**: instance property of [<code>LPBuilding</code>](#LPBuilding)  
<a name="LPBuilding+calculateRent"></a>

### lpBuilding.calculateRent ⇒ <code>LPFloat</code>
Calculate the rent for the current building.

**Kind**: instance property of [<code>LPBuilding</code>](#LPBuilding)  
<a name="LPBuilding+calculateRevenue"></a>

### lpBuilding.calculateRevenue ⇒ <code>LPFloat</code>
Calculate the revenue for the current building.

**Kind**: instance property of [<code>LPBuilding</code>](#LPBuilding)  
**Example**  
```js
var revenue = float('rent', scene.building.calculateRevenue())var revenueC = revenue.convertToLocalCurrency(true)scene.narration("Estimated gross revenue for this month is <revenueC>.")
```
<a name="LPBuilding+calculateWages"></a>

### lpBuilding.calculateWages ⇒ <code>LPFloat</code>
Calculate the wages for the current building.

**Kind**: instance property of [<code>LPBuilding</code>](#LPBuilding)  
<a name="LPBuilding+getBuildingType"></a>

### lpBuilding.getBuildingType ⇒ <code>LPString</code>
Used with getBuilding() and isString("") for lpai files

**Kind**: instance property of [<code>LPBuilding</code>](#LPBuilding)  
<a name="LPBuilding+isOpen"></a>

### lpBuilding.isOpen ⇒ <code>LPBoolean</code>
Check if a building type is open at the current hour

**Kind**: instance property of [<code>LPBuilding</code>](#LPBuilding)  

| Param |
| --- |
| type | 

<a name="LPBuilding+isSameBuilding"></a>

### lpBuilding.isSameBuilding ⇒ <code>LPBoolean</code>
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
| value | <code>LPFloat</code> \| <code>number</code> | 

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

