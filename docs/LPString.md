<a name="LPString"></a>

## LPString : [<code>LPString</code>](#LPString)
Class representing a LifePlay string.

**Kind**: global class  

* [LPString](#LPString) : [<code>LPString</code>](#LPString)
    * [.isSameString](#LPString+isSameString) ⇒ <code>LPBoolean</code>
    * [.isString](#LPString+isString) ⇒ <code>LPBoolean</code>
    * [.assign(rhs)](#LPString+assign) ⇒ [<code>LPString</code>](#LPString)

<a name="LPString+isSameString"></a>

### lpString.isSameString ⇒ <code>LPBoolean</code>
Check if two string variables are the same, case insensitive

**Kind**: instance property of [<code>LPString</code>](#LPString)  

| Param | Type | Description |
| --- | --- | --- |
| otherString | <code>string</code> \| [<code>LPString</code>](#LPString) |  |
| [name] | <code>string</code> | optional name handled by parser |

<a name="LPString+isString"></a>

### lpString.isString ⇒ <code>LPBoolean</code>
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

