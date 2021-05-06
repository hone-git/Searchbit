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
function doBinarySearch () {
    doSort(0, LEN - 1)
    for (let y = 0; y <= 4; y++) {
        onLED(y + indexLED, 64)
    }
    pl = 0
    pr = LEN - 1
    while (true) {
        pc = Math.trunc((pl + pr) / 2)
        onLED(pc, 255)
        basic.pause(200)
        onLED(pc, 64)
        if (ls[pc] == key) {
            return pc
        } else if (ls[pc] < key) {
            pl = pc + 1
        } else {
            pr = pc - 1
        }
        if (pl > pr) {
            break;
        }
    }
    return -1
}
function doSort (left: number, right: number) {
    pl = left
    pr = right
    p = ls[Math.trunc((pl + pr) / 2)]
    while (true) {
        while (ls[pl] < p) {
            pl += 1
        }
        while (ls[pr] > p) {
            pr += -1
        }
        if (pl <= pr) {
            temp = ls[pl]
            ls[pl] = ls[pr]
            ls[pr] = temp
            pl += 1
            pr += -1
        }
        if (pl > pr) {
            break;
        }
    }
    if (left < pr) {
        doSort(left, pr)
    }
    if (pl < right) {
        doSort(pl, right)
    }
}
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
    if (algorithm[cnt] == "Sentinel") {
        ans = doSentinelSearch()
    } else {
        ans = doBinarySearch()
    }
    basic.showString("Searched")
    basic.showNumber(ans + 1)
})
function doSentinelSearch () {
    ls.push(key)
    i = 0
    while (true) {
        onLED(i, 255)
        basic.pause(200)
        onLED(i, 64)
        if (ls[i] == key) {
            break;
        }
        i += 1
    }
    if (i == LEN) {
        return -1
    } else {
        return i
    }
}
let i = 0
let ans = 0
let temp = 0
let p = 0
let pc = 0
let pr = 0
let pl = 0
let algorithm: string[] = []
let cnt = 0
let key = 0
let indexLED = 0
let angle = 0
let ls: number[] = []
let MAX_NUM = 0
let LEN = 0
LEN = 10
MAX_NUM = 5
ls = []
for (let index = 0; index < LEN; index++) {
    ls.push(randint(1, MAX_NUM))
}
angle = input.rotation(Rotation.Pitch)
indexLED = 0
for (let y = 0; y <= 4; y++) {
    onLED(y + indexLED, 64)
}
basic.pause(1000)
key = randint(1, MAX_NUM)
basic.showNumber(key)
cnt = 0
algorithm = ["Sentinel", "Binary"]
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
