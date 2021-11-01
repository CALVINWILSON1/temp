let current_tempurtre = 0
basic.forever(function () {
    current_tempurtre = input.temperature()
    basic.showNumber(current_tempurtre)
    basic.pause(100)
    basic.clearScreen()
})
