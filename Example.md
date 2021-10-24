# Example Module

In `examples` there is a test mod called `rizean_LifePlay_test`. This can be
used for testing out LifePlay.js. If you want lpjs to output the final lifeplay
mod files into a lifeplay mods folder for example then you would need to change
the modsDir variable.

## Variable: modsDir

This variable controls the output of the final source files.

### Example

If you lifeplay is installed at `D:\other\LifePlay_4_14_64bit` then change the
modsDir from `D:\\projects\\LifePlay.js\\build`
to `D:\\other\\LifePlay_4_14_64bit\\LifePlay\\Content\\Modules`

`examples/rizean_LifePlay_test/src/rizean_LifePlay_test.lpmod.js`

### Before

```javascript

// Note: DOUBLE BACK SLASH IS CRITICAL!
// This is where the output of the mod will go.
// For example if you wanted to write you mod into the lifeplay mod dir
// and your lifeplay is installed to D:\other\LifePlay_4_14_64bit
// then use: modsDir = 'D:\\other\\LifePlay_4_14_64bit\\LifePlay\\Content\\Modules'
let modsDir = 'D:\\projects\\LifePlay.js\\build'
if (process.env.NODE_ENV === 'test') {
    modsDir = path.resolve(__dirname, '../../../build')
}
```

### After

```javascript

// Note: DOUBLE BACK SLASH IS CRITICAL!
// This is where the output of the mod will go.
// For example if you wanted to write you mod into the lifeplay mod dir
// and your lifeplay is installed to D:\other\LifePlay_4_14_64bit
// then use: modsDir = 'D:\\other\\LifePlay_4_14_64bit\\LifePlay\\Content\\Modules'
let modsDir = 'D:\\other\\LifePlay_4_14_64bit\\LifePlay\\Content\\Modules'
if (process.env.NODE_ENV === 'test') {
    modsDir = path.resolve(__dirname, '../../../build')
}
```

## Running The Example

After you have set up the project i.e. followed the installation directions in
README.MD then run the following command from the root project directory.
`npm run example:dev`

Once you see the
line `[nodemon] clean exit - waiting for changes before restart` this means the
mod has successful been compiled without error. If you
see `[nodemon] app crashed - waiting for file changes before starting...` this
means there is an error in your code. Unlike writing a pure lifeplay mod writing
a mod with lpjs, lpjs will catch most errors before you even load the game. It's
not magic though, and most logic errors will not be caught.

Keep in mind that everytime nodemon detects a change it will cause a rebuild. On
Windows you may need to use the save function in your IDE even if it auto saves
to force nodemon to detect the changes.

### Example Run

```text
D:\projects\LifePlay.js>npm run example:dev

> lifeplayjs@1.0.0 example:dev
> nodemon --ignore build/ ./examples/rizean_LifePlay_test/src/rizean_LifePlay_test.lpmod.js

[nodemon] 2.0.14
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node ./examples/rizean_LifePlay_test/src/rizean_LifePlay_test.lpmod.js`
Writing cinema_with_date_passive.lpscene
Writing badcop.lpscene
Writing tests.lpstat to "D:\projects\LifePlay.js\build\rizean_LifePlay_test\stats\tests.lpstat"
Writing bugs.lpstat to "D:\projects\LifePlay.js\build\rizean_LifePlay_test\stats\bugs.lpstat"
Writing onlyfans.lpaction to "D:\projects\LifePlay.js\build\rizean_LifePlay_test\actions\onlyfans.lpaction"
Writing open_relationship.lpaction to "D:\projects\LifePlay.js\build\rizean_LifePlay_test\actions\open_relationship.lpaction"
Writing cinema_with_date_passive.lpscene to "D:\projects\LifePlay.js\build\rizean_LifePlay_test\scenes\cinema_with_date_passive.lpscene"
scene generateBadCop [Function: generateBadCop]
Writing badcop.lpscene to "D:\projects\LifePlay.js\build\rizean_LifePlay_test\scenes\badcop.lpscene"
[nodemon] clean exit - waiting for changes before restart
```

### Example Error

```text
[nodemon] restarting due to changes...
[nodemon] starting `node ./examples/rizean_LifePlay_test/src/rizean_LifePlay_test.lpmod.js`
D:\projects\LifePlay.js\examples\rizean_LifePlay_test\src\rizean_LifePlay_test.lpmod.js:24
const aStr = "some unclosed string
             ^^^^^^^^^^^^^^^^^^^^^

SyntaxError: Invalid or unexpected token
    at Object.compileFunction (node:vm:352:18)
    at wrapSafe (node:internal/modules/cjs/loader:1031:15)
    at Module._compile (node:internal/modules/cjs/loader:1065:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
[nodemon] app crashed - waiting for file changes before starting...
```
