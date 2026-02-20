/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Jayden
 * Created on: Feb 2026
 * This program tells you the temperature using the microbit
*/

basic.clearScreen();
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
    basic.showNumber(input.temperature())
})

basic.clearScreen();