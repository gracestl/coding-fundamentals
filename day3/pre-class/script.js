// Solution 1 - Juice Wedding
var main = function (input) {
  var myOutputValue = `You need ${oranges(input)} oranges to make ${juice(
    input
  )} liters of juice for ${input} guests.`;
  return myOutputValue;
};
// calculate number of oranges needed based on guests
var oranges = function (guestNum) {
  var orangesPerGlass = 4;
  var orangesNeeded = guestNum * orangesPerGlass;
  return orangesNeeded;
};

// calculate amount of juice based on guests
var juice = function (guestNum) {
  var mlPerGlass = 90;
  var mlPerLitre = 1000;
  var juiceNeededLitre = (guestNum * mlPerGlass) / mlPerLitre;
  return juiceNeededLitre.toFixed(2);
};

// Solution 2 - SG Hugs
var main = function (input) {
  var myOutputValue = `You need ${hugsInYears(
    hugsTime(input)
  )} years to hug everyone in Singapore if you like to hug ${input} seconds on average!`;
  return myOutputValue;
};
// calculate total seconds needed to hug SG population
var hugsTime = function (seconds) {
  var singaporePopulation = 5454000;
  var hugTimeNeeded = singaporePopulation * seconds;
  return hugTimeNeeded;
};
// calculate preferred hug time into years
var secsToYears = function (hugTimeNeeded) {
  var secPerMin = 60;
  var minPerHour = 60;
  var hoursPerDay = 9;
  var dayPerYear = 365;
  return hugTimeNeeded / (secPerMin * minPerHour * hoursPerDay * dayPerYear);
};
// calculate total hug time in years to hug SG population
var hugsInYears = function (hugTimeNeeded) {
  return secsToYears(hugTimeNeeded).toFixed(2);
};

// Solution 3 - House Paint
var main = function (input) {
  var cost = totalCost(input);
  var myOutputValue = `You need $${cost} to paint the interior of your house if it costs $${input} per litre of paint.`;
  return myOutputValue;
};

// calculate Cm to M
var cmtoM = function (lengthInCm) {
  return lengthInCm / 100;
};

// calculate paintable surface area
var surfaceArea = function (paintCostPerL) {
  // calculate surface areas for all rooms only
  var roomsNum = 6;
  var areaPerRm = 3 * 3;

  var sumOfAreaRm = areaPerRm * roomsNum;

  // calculate surface areas for doors and windows
  var windowNum = 6;
  var doorNum = 8;

  var lengthWinDoor = cmtoM(150);
  var widthWinDoor = cmtoM(90);

  var areaPerWinDoor = lengthWinDoor * widthWinDoor;
  var sumOfAreaWinDoor = areaPerWinDoor * (windowNum + doorNum);

  // calculate sum total
  var totalArea = sumOfAreaWinDoor + sumOfAreaRm;

  // multiply with layers needed
  var layersOfPaint = 2;
  var totalSurfaceArea = totalArea * layersOfPaint;

  return totalSurfaceArea;
};
// calculate amount of paint needed for house in L
var paintedNeeded = function (totalSurfaceArea) {
  var paintAreaPerL = 300;
  var paintNeededL = totalSurfaceArea / paintAreaPerL;
  return paintNeededL;
};

// calculate cost of paintable surface area
var totalCost = function (paintCostPerL) {
  var totalCost = paintedNeeded(paintCostPerL);
  return totalCost.toFixed(2);
};

// Solution 4 - Train 2 Speed
var main = function (input) {
  var train2Speed = calTrain2Speed(input);
  var myOutputValue = `You need to travel at ${train2Speed}kph to reach Tokyo the same time as Train 1 based on the delay of ${input} mins.`;
  return myOutputValue;
};

// convert minute to hour
var minToHr = function (timeInMin) {
  return timeInMin / 60;
};

// calculate distance, time given and speed of train 2
var calTrain2Speed = function (timeDelayedInMin) {
  var train1Kph = 200;
  var train1TimeTaken = 2;

  var distToTokyo = train1Kph * train1TimeTaken;

  var timeInHr = train1TimeTaken - minToHr(timeDelayedInMin);

  var train2SpeedKph = distToTokyo / minToHr(timeDelayedInMin);
  return train2SpeedKph;
};
