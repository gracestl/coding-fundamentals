// Solution Ice Machine
var main = function (input) {
  var numGuest = input;
  var drinkPerPax = 2;
  var iceCubesPerDrink = 4;
  var weightPerCube = 1.5;
  var icePerPaxGram = drinkPerPax * iceCubesPerDrink * weightPerCube;
  var machineSpeedLb = 5;
  var machineSpeedGram = machineSpeedLb * 453.592;
  var timeNeedForIce = (numGuest * icePerPaxGram) / machineSpeedGram;
  var myOutputValue =
    "You need " +
    timeNeedForIce.toFixed(2) +
    " hours to make enough ice for " +
    numGuest +
    " guests.";
  return myOutputValue;
};

// Solution Temperature
var main = function (input) {
  var tempFahren = input;
  var tempCelsius = ((tempFahren - 32) * 5) / 9;
  var myOutputValue =
    tempFahren + " degree Fahrenheit is " + tempCelsius + " degree Celsius.";
  return myOutputValue;
};

// Solution Sonnet
var main = function (input) {
  var wordsPerMin = input;
  var totalWords = 17677;
  var timeNeeded = totalWords / (wordsPerMin * 60);
  var myOutputValue =
    "You need " +
    timeNeeded +
    " hours to type out the entire sonnet!" +
    " degree Celsius.";
  return myOutputValue;
};

//Solution Minutes to Weeks

var main = function (input) {
  var weeks = input;
  var daysInWks = 7;
  var hrsInDay = 24;
  var minsInHr = 60;
  var minsInWks = weeks * daysInWks * hrsInDay * minsInHr;
  var myOutputValue = `In ${weeks} week(s), there are ${minsInWks} minutes!`;
  //   return myOutputValue;
};

//Solution Road Trip Cost
var main = function (input) {
  var tripInKM = input;
  var fuelConKMperL = 9;
  var fuelCostPerL = 2.2;
  var cost = (tripInKM / fuelConKMperL) * fuelCostPerL;
  var myOutputValue = `A ${tripInKM}KM trip will cost $${cost.toFixed(2)}.`;
  return myOutputValue;
};

// Solution Cost of Air Con
var main = function (input) {
  var AChoursUsed = input;
  var energyUse = 2;
  var energyCostperHr = energyUse * 0.2;
  var myOutputValue = `You used your A/C for ${AChoursUsed} hour(s) and it cost $${energyCostperHr.toFixed(
    2
  )}.`;
  return myOutputValue;
};

//Solution Screen Time
var main = function (input) {
  var avgLifeExp = 82;
  var numHrs = input;
  var lifeExpDays = avgLifeExp * 365;
  var timeSpent = (numHrs * lifeExpDays) / 24;
  var myOutputValue = `You will spend ${timeSpent.toFixed(
    2
  )} days of your life on this app!`;
  return myOutputValue;
};

// Solution Beer
var main = function (input) {
  var pintsPerGuest = 2;
  var pintsPerHalfkeg = 124;
  var daysInQtr = 91;
  var numCust = input;
  var pintsPerDay = numCust * pintsPerGuest;
  var pintsPerKeg = pintsPerHalfkeg * 2;
  var kegsPerDay = pintsPerDay / pintsPerKeg;
  var kegsPerQtr = (kegsPerDay / 2) * daysInQtr;
  var myOutputValue = `For an average of ${numCust} customers per day, we need to order ${kegsPerDay.toFixed(
    2
  )} kegs each day and ${kegsPerQtr.toFixed(2)} half-kegs each quarter.`;
  return myOutputValue;
};
