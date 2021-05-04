input.onButtonPressed(Button.A, function () {
    fahrenheit = 1.8 * input.temperature() + 32
    basic.showNumber(fahrenheit)
    basic.showString("F")
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    kelvin = 0
    fahrenheit = 0
})
input.onButtonPressed(Button.B, function () {
    kelvin = input.temperature() + 273.15
    basic.showNumber(kelvin)
    basic.showString("K")
    basic.pause(1000)
    basic.clearScreen()
})
let kelvin = 0
let fahrenheit = 0
fahrenheit = 0
kelvin = 0
basic.showNumber(input.temperature())
basic.showString("C")
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
	
})
