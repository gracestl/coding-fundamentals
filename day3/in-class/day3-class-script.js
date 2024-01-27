// Solution Cost of Air Con
// var main = function (AChoursUsed) {
//   var energyUse = 2;
//   var costPerKilowatt = 0.2;
//   var energyCostperHr = energyUse * costPerKilowatt;

//   var totalCost = energyCostperHr * AChoursUsed;
//   return `You used your A/C for ${AChoursUsed} hour(s) and it cost $${totalCost.toFixed(
//     2
//   )}.`;
// };

// Solution Screen Time
// calculate the days in an average life expectancy
// var calDaysInLifeExp = function () {
//   var avgLifeExp = 82;
//   var daysPerYr = 365;
//   var DaysInLifeEx = avgLifeExp * daysPerYr;
//   return DaysInLifeEx;
// };
// // convert hours to days
// var convHoursToDays = function (hours) {
//   var hoursPerDay = 24;
//   var HoursToDays = hours / hoursPerDay;
//   return HoursToDays;
// };
// // convert hours spent on app in lifetime to days
// var convHoursOnAppToDays = function (hours) {
//   var totalHoursOnApp = calDaysInLifeExp(hours);
//   var totalHoursOnAppInDays = convHoursToDays(totalHoursOnApp);
//   return totalHoursOnAppInDays;
// };

// var main = function (hours) {
//   var myOutputValue = `You will spend ${convHoursOnAppToDays(
//     hours
//   ).toFixed()} days of your life on this app if you spend ${hours} hours on it per day!`;
//   return myOutputValue;
// };

//Ice Machine
// calculate how much ice guest needs in pounds
// var calcIcePerPaxPounds = function () {
//   var drinkPerPax = 2;
//   var iceCubesPerDrink = 4;
//   var weightPerCube = 1.5;
//   var icePerPaxGrams = drinkPerPax * iceCubesPerDrink * weightPerCube;
//   var icePerPaxPounds = convGramsToPounds(icePerPaxGrams);
//   return icePerPaxPounds;
// };

// // convert grams to pounds
// var convGramsToPounds = function (gramsInput) {
//   var gramsPerPound = 453.592;
//   return gramsInput / gramsPerPound;
// };

// // calculate long the machine needs to run for guest input
// var calcmachineRunTime = function (numGuest) {
//   var iceMadePerHourPounds = 5;
//   var machineRunTime = calcIcePerPaxPounds(numGuest) / iceMadePerHourPounds;
//   return machineRunTime.toFixed(2);
// };

// var main = function (input) {
//   var myOutputValue = `You need ${calcmachineRunTime(
//     input
//   )} hours to make enough ice for ${input} guests using the ice machine.`;
//   return myOutputValue;
// };

// // Solution Beer
// calculate customer per quarter-year
// var calcCustPerQuarter = function (Numcust) {
//   var daysPerYear = 365;
//   var quartersPerYear = 4;
//   var custPerQuarter = Numcust * (daysPerYear / quartersPerYear);
//   return custPerQuarter;
// };

// // convert pints to kegs
// var convPintsToKegs = function (pintsInput) {
//   var pintsPerKeg = 124;
//   var pintsToKegs = pintsInput / pintsPerKeg;
//   return pintsToKegs.toFixed(2);
// };

// // calculate kegs needed based on customers
// var calcKegsNeeded = function (numCust) {
//   var numcustPerQuarter = calcCustPerQuarter(numCust);
//   var aveDrinksPerPax = 2;
//   var numDrinksPerQuarter = numcustPerQuarter * aveDrinksPerPax;
//   var numKegsPerQuarter = convPintsToKegs(numDrinksPerQuarter);
//   return numKegsPerQuarter;
// };

// var main = function (numCust) {
//   var kegsNeeded = calcKegsNeeded(numCust);
//   var myOutputValue = `For an average of ${numCust} customers per day, we need to order ${kegsNeeded} kegs each quarter.`;
//   return myOutputValue;
// };

// Solution Cost of Cellular Data

// round up data used
// var roundUpGb = function (gBInput) {
//   var roundedUpGbused = Math.ceil(gBInput);
//   console.log(1);
//   return roundedUpGbused;
// };

// // calculate total bill
// var calcTotalBill = function (gBInput) {
//   var costPer50Gb = 19.99;
//   var costPerGb = costPer50Gb / 50;
//   var totalBill = roundUpGb(gBInput) * costPerGb;
//   console.log(2);
//   return totalBill;
// };

// // calculate average cost per GB used
// var calcAveCostPerGb = function (gBInput) {
//   var bill = calcTotalBill(gBInput);
//   console.log(3);
//   var roundedUpGb = roundUpGb(gBInput);
//   console.log(4);
//   var aveCostPerGb = bill / roundedUpGb;
//   console.log(5);
//   return aveCostPerGb;
// };

// var main = function (input) {
//   var aveCost = calcAveCostPerGb(input);
//   console.log(6);
//   var myOutputValue = `You are paying $${aveCost.toFixed(
//     2
//   )} per GB per month for ${input} GB of data used.`;
//   console.log(7);
//   return myOutputValue;
// };

// Mortage calculator
