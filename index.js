// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
    // return drivers.slice((drivers.length - 2), (drivers.length))
    return drivers.slice(-2)
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

const createFareMultiplier = function(integer) {
    return function(number) {
        return integer * number
    }
}

const fareDoubler = createFareMultiplier(2)


// const fareTripler = createFareMultiplier(3)


const fareTripler = function(number) {
    return createFareMultiplier(3)(number)
}

const selectDifferentDrivers = function(arrayOfDrivers, FirstTwoDrivers) {
    return FirstTwoDrivers(arrayOfDrivers)
}































// // outter()()

// const createFareMultiplier = function(integer) {
//         let inner = function(number) {
//             return integer * number
//         }
//         return inner
//     }
//     // outter()()