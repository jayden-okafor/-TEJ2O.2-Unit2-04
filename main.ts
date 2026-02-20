/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Jayden
 * Created on: Feb 2026
 * This program tells you the temperature using the microbit
*/

basic.clearScreen();
basic.showIcon(IconNames.Happy)

let Temperature: number;

input.onButtonPressed(Button.A, function() {
    Temperature = input.temperature()
    basic.showString('The temperature is: ' + Temperature.toString() + ' C')
})

basic.clearScreen();