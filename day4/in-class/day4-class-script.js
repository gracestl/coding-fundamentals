// // Lucky 11
// // User rolls 2 dices
// var main = function (input) {
//   var diceRoll1 = diceRoll();
//   var diceRoll2 = diceRoll();

//   var myOutputValue = "You lost!";

//   console.log(diceRoll1);
//   console.log("dice roll 1");
//   console.log(diceRoll2);
//   console.log("dice roll 2");

//   //  One of the dice roll matches their guess, or If the total dice roll is 11.

//   if (input == diceRoll1 || input == diceRoll2 || diceRoll1 + diceRoll2 == 11) {
//     console.log("I won!");
//     myOutputValue = "You won!";
//   }

//   return myOutputValue;
// };

// // Function for a dice
// function diceRoll() {
//   return 1;
//   // random decimal no larger than 6
//   var randomDecimal = Math.random() * 6;
//   // rounded up to an integer that will be between 1 to 6
//   var diceNumber = Math.ceil(randomDecimal);

// //   return diceNumber;
// // }
// // Hawker Food Categorisation
// // If user input "chicken rice" or "nasi lemak", output is "rice".
// // If user input "hokkien mee" or "laksa", output is "noodle".
// // If user input "roti prata" or "bak kut teh", output is "other".

// var main = function (input) {
//   var myOutputValue = "Unknown";

//   if (input == "chicken rice" || input == "nasi lemak") {
//     console.log("rice");
//     myOutputValue = `${input} is a rice type.`;
//   }

//   if (input == "hokkien mee" || input == "laksa") {
//     console.log("noodle");
//     myOutputValue = `${input} is a noodle type.`;
//   }

//   if (input == "roti prata" || input == "bak kut teh") {
//     console.log("other");
//     myOutputValue = `${input} is an others type.`;
//   }

//   return myOutputValue; // Return the result
// };

// 4D is a popular betting game in Singapore run by Singapore Pools. Rocket Academy does not endorse gambling.
// Create a version of 4D where the player wins if their guess matches any of the 4 digits. The player will input a single digit, and the computer generates 4 random digits between 0 and 9. If the player-inputted digit matches any of the randomly-generated digits, the player wins.
// In addition to the win/loss result, output the player guess and all randomly-generated digits so the player can see how close they were.

// var main = function (input) {
//   var firstNum = randomNum();
//   console.log("1");
//   console.log(firstNum);
//   var secondNum = randomNum();
//   console.log("2");
//   console.log(secondNum);
//   var thirdNum = randomNum();
//   console.log("3");
//   console.log(thirdNum);
//   var fourthNum = randomNum();
//   console.log("4");
//   console.log(fourthNum);

//   var myOutputValue = `You lost! The winning number is ${firstNum}${secondNum}${thirdNum}${fourthNum}!`;

//   if (
//     input == firstNum ||
//     input == secondNum ||
//     input == thirdNum ||
//     input == fourthNum
//   ) {
//     console.log("won");
//     myOutputValue = `You won! The winning number is ${firstNum}${secondNum}${thirdNum}${fourthNum}!`;
//   }

//   return myOutputValue;
// };
// // Function for 4D
// function randomNum() {
//   // random decimal no larger than 10
//   var randomDecimal = Math.random() * 10;
//   // rounded down to an integer that will be between 0 to 9
//   var randomNum = Math.floor(randomDecimal);
//   return randomNum;
// }

// // Hawker Food Randomness
// // The uncle at your favourite hawker stall has decided to challenge himself and serve a random hawker dish to each customer. The dishes in his repertoire are: "chicken rice", "roti prata", "nasi lemak", "hokkien mee", "bak kut teh", and "laksa". Customers that correctly guess Uncle's dish receive a free meal.
// // Create an app that uses random numbers to help Uncle decide which dish to cook. The customer can only input dish names. If the customer correctly guesses Uncle's dish, let her know that she gets a free meal!

// var main = function (input) {
//   var diceNum = randomDice();
//   console.log(diceNum);
//   var myOutputValue = `Better luck next time.`;

//   if (diceNum == 1 && input == "chicken rice") {
//     console.log("chicken rice");
//     return `You won a plate of chicken rice`;
//   }
//   if (diceNum == 2 && input == "roti prata") {
//     console.log("roti prata");
//     return `You won a plate of roti prata`;
//   }
//   if (diceNum == 3 && input == "nasi lemak") {
//     console.log("nasi lemak");
//     return `You won a plate of nasi lemak`;
//   }
//   if (diceNum == 4 && input == "hokkien mee") {
//     console.log("hokkien mee");
//     return `You won a plate of hokkien mee`;
//   }
//   if (diceNum == 5 && input == "bak kut teh") {
//     console.log("bak kut teh");
//     return `You won a bowl of bak kut teh`;
//   }
//   if (diceNum == 6 && input == "laksa") {
//     console.log("laksa");
//     return `You won a bowl of laksa`;
//   }

//   return myOutputValue;
// };
// function randomDice() {
//   // random decimal no larger than 6
//   var randomDecimal = Math.random() * 6;
//   // rounded down to an integer that will be between 1 to 6
//   var diceNumber = Math.floor(randomDecimal + 1);
//   return diceNumber;
// }

var main = function (input) {
  var winningNum = randomNum();
  var myOutputValue = "You won!";

  if (input > winningNum + 1000 || input < winningNum - 1000) {
    console.log("lost");
    myOutputValue = `Opps, better luck next time. The winning number is ${winningNum}!`;
  }
  return myOutputValue;
};

// Function for 4D
function randomNum() {
  // random decimal no larger than 10000
  var randomDecimal = Math.random() * 10000;
  // rounded down to an integer that will be between 0000 to 9999
  var randomNum = Math.floor(randomDecimal);
  return randomNum;
}
