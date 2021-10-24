const Scene = require('../src/core/LPScene')
const scene = new Scene()

scene.WHAT(['all', '-sleep', '-nap'])
scene.WHERE(['home'])
scene.WHEN(['0', '24'])
scene.WHO()
scene.OTHER()

scene.start((scene)=>{
    const {$while, narrative} = scene;
    let count = 0
    $while(count < 10, () => {
        count += 1 //without this line, the loop will continue forever will remain less than 10 forever
        narrative("The count is <count>")
    })
})

// some IDEs remove extra line breaks
console.info(scene.code)
