var litersOfWaterInABottle = 6
var litersOfWaterPerDayForAdults = 2
var litersOfWaterPerDayForKids = 1
var adults = 2
var kids = 1
var litersOfWaterPerWeek = ((litersOfWaterPerDayForAdults * adults) + (litersOfWaterPerDayForKids * kids)) * 7
var numberOfBottlesPerWeek = litersOfWaterPerWeek / litersOfWaterInABottle
console.log(numberOfBottlesPerWeek)