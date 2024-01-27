// var main = function (input) {
//   var myOutputValue = "hello world";

//   if (input == "banana") {
//     console.log("done!");
//     myOutputValue = "special message";
//   }
//   return myOutputValue;
// };

// var main = function (input) {
//   if (input == "banana") {
//     console.log("done!");
//   }
//   var myOutputValue = "hello";
//   return myOutputValue;
// };

var main = function (input) {
  var randomDiceRoll = diceRoll();

  console.log("dice roll!");
  console.log(randomDiceRoll);
  var myOutputValue = "You lost! It's  " + randomDiceRoll;

  // Or if the user guesses the exact or plus one or minus one, the user wins
  if (
    input == randomDiceRoll + 1 ||
    input == randomDiceRoll - 1 ||
    input == randomDiceRoll
  ) {
    console.log("yay");
    myOutputValue = "You won! It's  " + randomDiceRoll;
  }
  return myOutputValue;
};

// If the guess plus one equals the dice roll, the user wins.
if (input == randomDiceRoll + 1) {
  console.log("winner1!");
  myOutputValue = "You won! It's  " + randomDiceRoll;
}
// If the guess minus one equals the dice roll, the user wins.
if (input == randomDiceRoll - 1) {
  console.log("winner2!");
  myOutputValue = "You won! It's  " + randomDiceRoll;
}
// If the guess is correct, the user wins.
if (input == randomDiceRoll) {
  console.log("winner3!");
  myOutputValue = "You won! It's  " + randomDiceRoll;
}

var diceRoll = function () {
  // random decimal no larger than 20
  var randomDecimal = Math.random() * 20;
  // rounded down to an integer that will be between 0 to 19
  var randomInteger = Math.floor(randomDecimal);

  // add 1 so that the integer will be 1 to 2-
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

// var main = function (input) {
//   var randomDiceRoll = diceRoll();

//   console.log("dice roll!");
//   console.log(randomDiceRoll);
//   var myOutputValue = "You lost! It's  " + randomDiceRoll;

//   // Or if the user guesses the exact or plus one or minus one, the user wins
//   if (
//     input == randomDiceRoll + 1 ||
//     input == randomDiceRoll - 1 ||
//     input == randomDiceRoll
//   ) {
//     console.log("yay");
//     myOutputValue = "You won! It's  " + randomDiceRoll;
//   }
//   return myOutputValue;
// };

// // // If the guess plus one equals the dice roll, the user wins.
// // if (input == randomDiceRoll + 1) {
// //   console.log("winner1!");
// //   myOutputValue = "You won! It's  " + randomDiceRoll;
// // }
// // // If the guess minus one equals the dice roll, the user wins.
// // if (input == randomDiceRoll - 1) {
// //   console.log("winner2!");
// //   myOutputValue = "You won! It's  " + randomDiceRoll;
// // }
// // // If the guess is correct, the user wins.
// // if (input == randomDiceRoll) {
// //   console.log("winner3!");
// //   myOutputValue = "You won! It's  " + randomDiceRoll;
// // }

// var diceRoll = function () {
//   // random decimal no larger than 6
//   var randomDecimal = Math.random() * 6;
//   // rounded down to an integer that will be between 0 to 5
//   var randomInteger = Math.floor(randomDecimal);

//   // add 1 so that the integer will be 1 to 6
//   var diceNumber = randomInteger + 1;
//   return diceNumber;
// };

// var main = function (input) {
//   var diceRoll1 = diceRoll();
//   var diceRoll2 = diceRoll();

//   myOutputValue = "You lost!";

//   console.log("dice roll 1!");
//   console.log(diceRoll1);
//   console.log("dice roll 2!");
//   console.log(diceRoll2);

//   if (input == diceRoll1 && input == diceRoll2) {
//     console.log("wow");
//     myOutputValue = "You won!";
//   }

//   return myOutputValue;
// };

// function diceRoll() {
//   // random decimal no larger than 6
//   var randomDecimal = Math.random() * 6;
//   // rounded down to an integer that will be between 0 to 5
//   var randomInteger = Math.floor(randomDecimal);

//   // add 1 so that the integer will be 1 to 6
//   var diceNumber = randomInteger + 1;
//   return diceNumber;
// }

// var main = function (input) {
//   var diceRoll1 = diceRoll();
//   var diceRoll2 = diceRoll();

//   myOutputValue = "You lost!";

//   console.log("dice roll 1!");
//   console.log(diceRoll1);
//   console.log("dice roll 2!");
//   console.log(diceRoll2);

// User wins if guess is within 1 for all 2 dice.
// if (
//   (input == diceRoll1 && input == diceRoll2) ||
//   (input == diceRoll1 - 1 && input == diceRoll2 - 1) ||
//   (input == diceRoll1 + 1 && input == diceRoll2 + 1)
// ) {
//   console.log("wow");
//   myOutputValue = "You won!";
// }

//   return myOutputValue;
// };

// function diceRoll() {
//   // random decimal no larger than 6
//   var randomDecimal = Math.random() * 6;
//   // rounded down to an integer that will be between 0 to 5
//   var randomInteger = Math.floor(randomDecimal);

//   // add 1 so that the integer will be 1 to 6
//   var diceNumber = randomInteger + 1;
//   return diceNumber;
// }

// var main = function (input) {
//   var diceRoll1 = diceRoll();
//   var diceRoll2 = diceRoll();

//   myOutputValue = "You lost!";

//   console.log("dice roll 1!");
//   console.log(diceRoll1);
//   console.log("dice roll 2!");
//   console.log(diceRoll2);

//   // User wins if guess is within 1 for any of 2 dice.
//   if (
//     input == diceRoll + 1 ||
//     input == diceRoll1 - 1 ||
//     input == diceRoll1 ||
//     input == diceRoll2 ||
//     input == diceRoll2 + 1 ||
//     input == diceRoll2 - 1
//   ) {
//     console.log("wow");
//     myOutputValue = "You won!";
//   }

//   return myOutputValue;
// };

// function diceRoll() {
//   // random decimal no larger than 6
//   var randomDecimal = Math.random() * 6;
//   // rounded down to an integer that will be between 0 to 5
//   var randomInteger = Math.floor(randomDecimal);

//   // add 1 so that the integer will be 1 to 6
//   var diceNumber = randomInteger + 1;
//   return diceNumber;
// }

// var main = function (input) {
//   var diceRoll1 = diceRoll();
//   var diceRoll2 = diceRoll();

//   myOutputValue = "You lost!";

//   console.log("dice roll 1!");
//   console.log(diceRoll1);
//   console.log("dice roll 2!");
//   console.log(diceRoll2);

// //  User wins if guess is within 1 for any of 2 dice.
// if (
//   (input == diceRoll + 1 ||
//   input == diceRoll1 - 1 ||
//   input == diceRoll1 ||
//   input == diceRoll2 ||
//   input == diceRoll2 + 1 ||
//   input == diceRoll2 - 1 && !(diceRoll1 == 1 && diceRoll2 == 1))
// ) {
//   console.log("wow");
//   myOutputValue = "You won!";
// }

// // but the user does not roll snake eyes
// if (diceRoll1 == 1 && diceRoll2 == 1) {
//   console.log("snake eyes");
//   myOutputValue = "You got snake eyes!";
// }

//   return myOutputValue;
// };

// function diceRoll() {
//   return 2;
//   // random decimal no larger than 6
//   var randomDecimal = Math.random() * 6;
//   // rounded down to an integer that will be between 0 to 5
//   var randomInteger = Math.floor(randomDecimal);

//   // add 1 so that the integer will be 1 to 6
//   var diceNumber = randomInteger + 1;
//   return diceNumber;
// }

var main = function (input) {
  var diceRoll1 = diceRoll();
  var diceRoll2 = diceRoll();

  myOutputValue = "You lost!";
  console.log("input");
  console.log(input);
  console.log("dice roll 1!");
  console.log(diceRoll1);
  console.log("dice roll 2!");
  console.log(diceRoll2);

  //  User wins if guess is within 1 for any of 2 dice.
  if (
    input == diceRoll + 1 ||
    input == diceRoll1 - 1 ||
    input == diceRoll1 ||
    input == diceRoll2 ||
    input == diceRoll2 + 1 ||
    input == diceRoll2 - 1 ||
    (diceRoll1 == 1 && diceRoll2 == 1)
  ) {
    console.log("wow");
    myOutputValue = "You won!";
  }
  return myOutputValue;
};

function diceRoll() {
  return 1;
  // random decimal no larger than 6
  var randomDecimal = Math.random() * 6;
  // rounded down to an integer that will be between 0 to 5
  var randomInteger = Math.floor(randomDecimal);

  // add 1 so that the integer will be 1 to 6
  var diceNumber = randomInteger + 1;
  return diceNumber;
}

//   //  User wins if guess is within 1 for any of 2 dice.
//   if (
//     (input == diceRoll + 1 ||
//       input == diceRoll1 - 1 ||
//       input == diceRoll1 ||
//       input == diceRoll2 ||
//       input == diceRoll2 + 1 ||
//       input == diceRoll2 - 1) &&
//     !(diceRoll1 == 1 && diceRoll2 == 1)
//   ) {
//     console.log("wow");
//     myOutputValue = "You won!";
//   }
//   return myOutputValue;
// };
