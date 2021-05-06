input.onButtonPressed(Button.A, function () {
    cnt += 1
    if (cnt >= algorithm.length) {
        cnt = 0
    }
    basic.showString(algorithm[cnt].charAt(0))
    for (let y = 0; y <= 4; y++) {
        onLED(y + indexLED, 64)
    }
})
function onLED (row: number, brightness: number) {
    for (let x = 0; x <= MAX_NUM - 1; x++) {
        led.unplot(x, row - indexLED)
        if (x < ls[row]) {
            led.plotBrightness(x, row - indexLED, brightness)
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    angle = input.rotation(Rotation.Pitch)
})
input.onButtonPressed(Button.B, function () {
    if (algorithm[cnt] == "Bubble") {
    	
    } else if (algorithm[cnt] == "Shell") {
    	
    } else if (algorithm[cnt] == "Quick") {
    	
    } else if (algorithm[cnt] == "Merge") {
    	
    } else {
    	
    }
    basic.showString("Sorted")
    for (let y = 0; y <= 4; y++) {
        onLED(y + indexLED, 64)
    }
})
let indexLED = 0
let angle = 0
let algorithm: string[] = []
let cnt = 0
let ls: number[] = []
let MAX_NUM = 0
let LEN = 10
MAX_NUM = 5
ls = []
for (let index = 0; index < LEN; index++) {
    ls.push(randint(1, MAX_NUM))
}
cnt = 0
algorithm = ["Bubble", "Shell", "Quick", "Merge", "Heap"]
angle = input.rotation(Rotation.Pitch)
indexLED = 0
for (let y = 0; y <= 4; y++) {
    onLED(y + indexLED, 64)
}
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) > angle + 15 && indexLED > 0) {
        indexLED += -1
        for (let y = 0; y <= 4; y++) {
            onLED(y + indexLED, 64)
        }
        basic.pause(200)
    }
    if (input.rotation(Rotation.Pitch) < angle - 15 && indexLED < LEN - 5) {
        indexLED += 1
        for (let y = 0; y <= 4; y++) {
            onLED(y + indexLED, 64)
        }
        basic.pause(200)
    }
})
