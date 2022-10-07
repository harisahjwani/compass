let degrees = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    degrees = input.compassHeading()
    basic.pause(100)
    if (degrees <= 45) {
        basic.showString("N")
    }
    if (degrees <= 135) {
        basic.showString("W")
    }
    if (degrees <= 225) {
        basic.showString("S")
    }
    if (degrees <= 315) {
        basic.showString("E")
    } else {
        basic.showString("N")
    }
})
