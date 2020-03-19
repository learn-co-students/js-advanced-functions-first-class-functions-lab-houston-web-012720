// Code your solution in this file!
const returnFirstTwoDrivers = (array) => array.slice(0,2)

const returnLastTwoDrivers = (array) => array.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = (number1) => 
    (number2) => number1 * number2 

const fareDoubler = (num) => num * 2

const fareTripler = (num) => num * 3

const selectDifferentDrivers = (arr,fuction_name) => fuction_name(arr)