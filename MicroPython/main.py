"""
Created by: Jayden Okafor
Created on: Feb 2026
This module shows the temperature in celcius
"""

from microbit import *

display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        temp = temperature()
        display.scroll("The temperature is: " + str(temp) + " C")

        display.clear()
        