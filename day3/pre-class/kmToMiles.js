var kilometersToMiles = function (distanceInKilometers) {
  var distanceInMiles = distanceInKilometers * 0.62;
  console.log("dist in miles");
  console.log(distanceInMiles);
  return distanceInMiles;
};

var main = function (input) {
  var myOutputValue = kilometersToMiles(input);
  console.log("kilo to miles");
  console.log(myOutputValue);
  return myOutputValue;
};
