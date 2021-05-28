input.onGesture(Gesture.TiltRight, function () {
	
})
input.onGesture(Gesture.TiltLeft, function () {
	
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . . # . .
        # # . # #
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . . . . .
        # . # . #
        . . . . .
        . . # . .
        `)
    basic.clearScreen()
})
