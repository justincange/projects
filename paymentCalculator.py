# -*- coding: utf-8 -*-
"""
Created on Tue Apr 28 21:24:44 2020

@author: justin
"""

annual_salary = float(input("Annual salary?: "))
j = 0
annual_raise = float(input("Decimal for semi-annual raise?: "))
portion_down_payment = int(input("How much is your payment?: "))
r = 1 + float(input("What percent do you earn back on savings per year?: ")) 
low = 0
high = 10000 
guess = (high + low) / 2.0
rate = guess / 10000.0 #convert integer guess to a percent decimal 
t = 3 # how many years desired to save for
savings = 0
semi_annual_length = (2 * t) -1
for i in range (0, semi_annual_length):
                savings += (annual_salary / 2) * r * ((1 + annual_raise) ** i) * rate


test = (savings - portion_down_payment)
while abs(test) >= 100: #bisection search, accuracy within $100 of down payment
    if savings < portion_down_payment:
        low = guess
    else: high = guess
    guess = (high + low) / 2.0
    j += 1 #guess counter
    rate = guess / 10000.0
    savings = 0 
    for i in range (0, semi_annual_length):
                    savings += (annual_salary / 2) * r * ((1 + annual_raise) ** i) * rate
    test = (savings - portion_down_payment)
    if j > 1000:
        print("This can not be afforded within the given time.")
        break
print("You can afford the payment by saving", rate, " of your earnings per year, and this took", j, "guesses.")
    
