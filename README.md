# LifePlay.js

A tool for writing [LifePlay](https://github.com/vinfamy/LifePlay) mods in
Javascript

## Current State

While LifePlay.js is getting close to alpha it is still a **TECH DEMO!** It is
not ready for usage beyond testing. While it's unlikely there could still be
breaking changes before it is released in an Alpha state.

* A lot has changed and much of the code has been completely redone. Most of the
  JSDoc example are invalid/wrong. To get an idea how to use the project
  see `Example.md`.
* Core functionality is mostly complete
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

* Install Nodejs [Nodejs](https://nodejs.org/en/download/)
* Install Git if you don't have
  it [Git Windows](https://git-scm.com/download/win) [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* Clone the project to the location of your
  choosing `git clone https://github.com/Rizean/LifePlay.js.git`
* npm install
* Optional: `npm run example:dev`

### Example Installation

```text
D:\other>git clone https://github.com/Rizean/LifePlay.js.git
Cloning into 'LifePlay.js'...
remote: Enumerating objects: 282, done.
remote: Counting objects: 100% (282/282), done.
remote: Compressing objects: 100% (166/166), done.
Receiving objects:  94% (266/282)used 244 (delta 112), pack-reused 0 eceiving objects:  86% (243/282)
Receiving objects: 100% (282/282), 173.43 KiB | 4.33 MiB/s, done.
Resolving deltas: 100% (148/148), done.

D:\other>cd LifePlay.js

D:\other\LifePlay.js>npm install

added 391 packages, and audited 392 packages in 29s

35 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

D:\other\LifePlay.js>npm run example:dev

> lifeplayjs@1.0.0 example:dev
> nodemon --ignore build/ ./examples/rizean_LifePlay_test/src/rizean_LifePlay_test.lpmod.js

[nodemon] 2.0.14
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node ./examples/rizean_LifePlay_test/src/rizean_LifePlay_test.lpmod.js`
Writing cinema_with_date_passive.lpscene
Writing badcop.lpscene
Writing tests.lpstat to "D:\other\LifePlay.js\build\rizean_LifePlay_test\stats\tests.lpstat"
Writing bugs.lpstat to "D:\other\LifePlay.js\build\rizean_LifePlay_test\stats\bugs.lpstat"
Writing onlyfans.lpaction to "D:\other\LifePlay.js\build\rizean_LifePlay_test\actions\onlyfans.lpaction"
Writing open_relationship.lpaction to "D:\other\LifePlay.js\build\rizean_LifePlay_test\actions\open_relationship.lpaction"
Writing cinema_with_date_passive.lpscene to "D:\other\LifePlay.js\build\rizean_LifePlay_test\scenes\cinema_with_date_passive.lpscene"
scene generateBadCop [Function: generateBadCop]
Writing badcop.lpscene to "D:\other\LifePlay.js\build\rizean_LifePlay_test\scenes\badcop.lpscene"
[nodemon] clean exit - waiting for changes before restart
```

## Updating

In the root directory of LifePlay.js run `git pull`. If you have made changes to
the example mod you may get an error. Running `git stash` should fix those
errors. To restore your changes after an update with stash run `git stash pop`.
Any issues beyond that are well beyond this README.

### Updating Example with Stash

```text
D:\other\LifePlay.js>git pull
remote: Enumerating objects: 190, done.
...
error: Your local changes to the following files would be overwritten by merge:
        examples/cinema_with_date_passive.scene.js
        yarn.lock
Please commit your changes or stash them before you merge.
Aborting
Updating d07fe17..9a1237f

D:\other\LifePlay.js>git stash
Saved working directory and index state WIP on main: d07fe17 added clearGlobal/getGlobal/getGlobalString/setGlobal/setGlobalString to Globals and removed LPGlobal

D:\other\LifePlay.js>git pull
Updating d07fe17..9a1237f
Fast-forward
 examples/cinema_with_date_passive.scene.js         |  84 ---
... create mode 100644 tests/core/objects/LPVariable.test.js

D:\other\LifePlay.js>git stash pop
CONFLICT (modify/delete): examples/cinema_with_date_passive.scene.js deleted in Updated upstream and modified in Stashed changes. Version Stashed changes of examples/cinema_with_date_passive.scene.js left in tree.
The stash entry is kept in case you need it again.

```

Keep in mind that stash may not work as was the case in the example due to the
file that was changed was deleted from the project.

### -----------------------------------------------------------------------------

### Below is outdated and needs to be redone!

### -----------------------------------------------------------------------------

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

LifePlay.js (lpjs) makes it easier to use global variables and warns you when
you are making mistakes.

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

lpjs adds these comment to the final LifePlay source output and you will see
warnings in the build output console.

See test `Globals setGlobal(key, value) and getGlobal(key)`
and `Globals setGlobalString(key, value) and getGlobalString(key)`
in `tests/core/gloabals.test.js`