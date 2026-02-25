/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Jayden
 * Created on: Feb 2026
 * This program tells you the temperature using the microbit
 */

basic.clearScreen()
basic.showIcon(IconNames.Happy)

let temperatureInCelcius: number

input.onButtonPressed(Button.A, function() {
    temperatureInCelcius = input.temperature()
    basic.clearScreen()
    basic.showString('The temperature is: ' + temperatureInCelcius.toString() + ' C')
})
