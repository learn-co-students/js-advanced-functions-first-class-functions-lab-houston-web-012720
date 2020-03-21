const returnFirstTwoDrivers = (drivers) => {
  return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = (drivers) => {
  return [drivers[drivers.length - 2], drivers[drivers.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => {
  return function fareMultiplier(fare) {
    return fare * multiplier
  }
}

const fareDoubler = (fare) => {
  return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => {
  return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = (drivers, fn) => {
  return fn(drivers)
}