// Code your solution in this file!



let returnFirstTwoDrivers = (drivers) => drivers.filter(driver => drivers.indexOf(driver) < 2)

let returnLastTwoDrivers = (drivers) => drivers.filter(driver => drivers.indexOf(driver) > drivers.length - 3)

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = (a) => (b) => a*b

let fareDoubler = (f) => f*2

let fareTripler = (f) => f*3

let selectDifferentDrivers = (drivers, func) => func(drivers)