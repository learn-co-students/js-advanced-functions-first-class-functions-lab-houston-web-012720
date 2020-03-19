
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2)
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier() {
  return function(value) { return value*value }
}

function fareDoubler(value) {
  return value*2
}

function fareTripler(value) {
  return value*3
}

function selectDifferentDrivers(drivers, funct) {
  return funct(drivers)
}

