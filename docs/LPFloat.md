<a name="LPFloat"></a>

## LPFloat : [<code>LPFloat</code>](#LPFloat)
Class representing a LifePlay float.

**Kind**: global class  

* [LPFloat](#LPFloat) : [<code>LPFloat</code>](#LPFloat)
    * [.add(rhs)](#LPFloat+add) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.sub(rhs)](#LPFloat+sub) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.div(rhs)](#LPFloat+div) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.mul(rhs)](#LPFloat+mul) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.addEq([name], rhs)](#LPFloat+addEq)
    * [.subEq(rhs)](#LPFloat+subEq)
    * [.mulEq(rhs)](#LPFloat+mulEq)
    * [.divEq(rhs)](#LPFloat+divEq)
    * [.assign(n)](#LPFloat+assign) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.gt(rhs)](#LPFloat+gt) ⇒ <code>LPBoolean</code>
    * [.gte(rhs)](#LPFloat+gte) ⇒ <code>LPBoolean</code>
    * [.lt(rhs)](#LPFloat+lt) ⇒ <code>LPBoolean</code>
    * [.lte(rhs)](#LPFloat+lte) ⇒ <code>LPBoolean</code>
    * [.ne(rhs)](#LPFloat+ne) ⇒ <code>LPBoolean</code>
    * [.eq(rhs)](#LPFloat+eq) ⇒ <code>LPBoolean</code>
    * [.floor()](#LPFloat+floor) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.power(rhs)](#LPFloat+power) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.round()](#LPFloat+round) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.convertToLocalCurrency()](#LPFloat+convertToLocalCurrency) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.setFraternityFees(fratFee)](#LPFloat+setFraternityFees) ⇒ [<code>LPFloat</code>](#LPFloat)
    * [.setRent()](#LPFloat+setRent)
    * [.setSalary()](#LPFloat+setSalary)
    * [.setTuition()](#LPFloat+setTuition)

<a name="LPFloat+add"></a>

### lpFloat.add(rhs) ⇒ [<code>LPFloat</code>](#LPFloat)
this + rhs

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  

| Param | Type |
| --- | --- |
| rhs | <code>number</code> \| <code>LPObject</code> | 

<a name="LPFloat+sub"></a>

### lpFloat.sub(rhs) ⇒ [<code>LPFloat</code>](#LPFloat)
this - rhs

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  

| Param | Type |
| --- | --- |
| rhs | <code>number</code> \| <code>LPObject</code> | 

<a name="LPFloat+div"></a>

### lpFloat.div(rhs) ⇒ [<code>LPFloat</code>](#LPFloat)
this / rhs

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  

| Param | Type |
| --- | --- |
| rhs | <code>number</code> \| <code>LPObject</code> | 

<a name="LPFloat+mul"></a>

### lpFloat.mul(rhs) ⇒ [<code>LPFloat</code>](#LPFloat)
this * rhs

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  

| Param | Type |
| --- | --- |
| rhs | <code>number</code> \| <code>LPObject</code> | 

<a name="LPFloat+addEq"></a>

### lpFloat.addEq([name], rhs)
this += rhs

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | optional name handled by parser |
| rhs | <code>number</code> \| <code>LPObject</code> |  |

<a name="LPFloat+subEq"></a>

### lpFloat.subEq(rhs)
this -= rhs

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  

| Param | Type |
| --- | --- |
| rhs | <code>number</code> \| <code>LPObject</code> | 

<a name="LPFloat+mulEq"></a>

### lpFloat.mulEq(rhs)
this *= rhs

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  

| Param | Type |
| --- | --- |
| rhs | <code>number</code> \| <code>LPObject</code> | 

<a name="LPFloat+divEq"></a>

### lpFloat.divEq(rhs)
this /= rhs

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  

| Param | Type |
| --- | --- |
| rhs | <code>number</code> \| <code>LPObject</code> | 

<a name="LPFloat+assign"></a>

### lpFloat.assign(n) ⇒ [<code>LPFloat</code>](#LPFloat)
Assigns the value of n to this

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  

| Param | Type |
| --- | --- |
| n | <code>number</code> \| <code>LPObject</code> | 

<a name="LPFloat+gt"></a>

### lpFloat.gt(rhs) ⇒ <code>LPBoolean</code>
this > rhs

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  

| Param | Type |
| --- | --- |
| rhs | <code>number</code> \| <code>LPObject</code> | 

<a name="LPFloat+gte"></a>

### lpFloat.gte(rhs) ⇒ <code>LPBoolean</code>
this >= rhs

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  

| Param | Type |
| --- | --- |
| rhs | <code>number</code> \| <code>LPObject</code> | 

<a name="LPFloat+lt"></a>

### lpFloat.lt(rhs) ⇒ <code>LPBoolean</code>
this < rhs

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  

| Param | Type |
| --- | --- |
| rhs | <code>number</code> \| <code>LPObject</code> | 

<a name="LPFloat+lte"></a>

### lpFloat.lte(rhs) ⇒ <code>LPBoolean</code>
this <= rhs

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  

| Param | Type |
| --- | --- |
| rhs | <code>number</code> \| <code>LPObject</code> | 

<a name="LPFloat+ne"></a>

### lpFloat.ne(rhs) ⇒ <code>LPBoolean</code>
this != rhs

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  

| Param | Type |
| --- | --- |
| rhs | <code>number</code> \| <code>LPObject</code> | 

<a name="LPFloat+eq"></a>

### lpFloat.eq(rhs) ⇒ <code>LPBoolean</code>
this == rhs

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  

| Param | Type |
| --- | --- |
| rhs | <code>number</code> \| <code>LPObject</code> | 

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

### lpFloat.setFraternityFees(fratFee) ⇒ [<code>LPFloat</code>](#LPFloat)
Set this as your current monthly fraternity fees.

**Kind**: instance method of [<code>LPFloat</code>](#LPFloat)  
**Returns**: [<code>LPFloat</code>](#LPFloat) - - reference to this for chaining  

| Param | Type |
| --- | --- |
| fratFee | <code>number</code> \| [<code>LPFloat</code>](#LPFloat) | 

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
