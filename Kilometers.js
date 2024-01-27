console.log("hello");

var main = function (input) {
  var distanceInKm = 1;
  var distanceInMiles = input * 0.62;
  var myOutputValue =
    "Hi there! " +
    input +
    " kilometers is equals to " +
    distanceInMiles +
    " miles.";
  return myOutputValue;
};
