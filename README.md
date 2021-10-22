# LifePlay.js

A tool for writing [LifePlay](https://github.com/vinfamy/LifePlay) mods in
Javascript

## Current State

This is a **TECH DEMO!** It is not ready for usage beyond testing. There will be
many breaking changes before it is released in an Alpha state.

* Core functionality is mostly complete
* Tools for using LifePlay.js are not started ie there is no way to use this
  beyond a single file
* There is a ton of JSDOC documentation, but a lot of it is outdated due to
  changes or improvements that have been made since when the documentation was
  initial written. Any references to `LPFloat`, `LPString`, `LPBoolean`,
  and `$if` are effectively deprecated. In general the docs are seriously out of
  date.
* See [Todo] for more details

## Philosophy

Why does this exist? It is far too easy to make simple syntax or grammatical
errors while writing LifePlay code due to the lack of any IDE support. Yes, I
could have written a parser and plugin for an IDE, but then it would only work
for that specific IDE. On top of that by using Javascript as the base there is a
lot of existing tools and other features that can be leveraged without having to
reinvent the wheel.

Where is this going? Initially the goal is just to make it easier and less error
prone to write LifePlay mods. Part of that will be adding syntax sugar i.e.
shortcut commands to make coding faster.

## Installation

* Install Nodejs and yarn or the package manager of your choice
* clone the project
* yarn install

## Usage

### Test

* `yarn test` - this will run all the test with coverage

### Examples

There are a few examples with `cinema_with_date_passive` example being the
closest to what scene code will look like once LifePlay.js is released. To run
an example see below:

* `yarn example:cinema_with_date_passive`
* `yarn example:optionChoice`
* `yarn example:simpleScene`
* `yarn example:while`


## API
### Global Variable
#### Example
LifePlay.js (lpjs) makes it easier to use global variables and warns you when you are making mistakes.

Example Scene 1
```javascript
scene.start((scene) => {
    var gf2 = 2
    setGlobal('globalF1', 1)
    setGlobal('globalF2', gf2)
    setGlobalString('globalF3', "Not a float.")
})
```

Generated LifePlay code
```text
sceneStart()
  gf2 = 2
  globalF1.setGlobal(1)
  globalF2.setGlobal(gf2)
  globalF3.setGlobalString("Not a float.")
sceneEnd()
```

Example Scene 2
```javascript
scene.start((scene) => {
    var gf1 = getGlobal('globalF1')
    var gf2 = getGlobal('globalF2')
    var gf3 = getGlobal('globalF3')
    var gf4 = getGlobal('globalF4')
})
```

Generated LifePlay code
```text
sceneStart()
  gf1 = globalF1.getGlobal()
  gf2 = globalF2.getGlobal()
  // Expected global globalF3 to be a float but found a string!
  gf3 = globalF3.getGlobal()
  // Unknown global globalF4!
  gf4 = globalF4.getGlobal()
sceneEnd()
```

lpjs adds these comment to the final LifePlay source output and you will see warnings in the build output console.

See test `Globals setGlobal(key, value) and getGlobal(key)` and `Globals setGlobalString(key, value) and getGlobalString(key)` in `tests/core/gloabals.test.js`