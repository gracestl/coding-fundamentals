// var main = function (input) {
//   var finalResult = generateResult();
//   myOutputValue = "";
//   console.log("lost");
//   var myOutputValue = `The computer chose ${finalResult}.<br>You chose ${input}.<br><br>You lose! Bummer. <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;

//   // Check if user enters 1 of 6 assigned string values
//   if (
//     !(
//       input == "scissors" ||
//       input == "paper" ||
//       input == "stone" ||
//       input == "reversed scissors" ||
//       input == "reversed paper" ||
//       input == "reversed stone"
//     )
//   ) {
//     myOutputValue = `Please only enter scissors, paper or stone!`;
//   } else {
//     // Pass 2 checks, proceed with game
//     var randomNum = generateRandomNum();
//     console.log("random number", randomNum);

//     // User wins if input scissors and computer gives paper
//     // User wins if input paper and computer givesstone)
//     // User wins if input stone and computer gives scissors
//     // SPS - user wins if input reversed scissors and computer gives stone
//     // SPS - user wins if input reversed paper and computer gives scissors
//     // SPS - user wins if input reversed stone and computer gives paper
//     if (
//       (input == "scissors" && finalResult == "paper") ||
//       (input == "paper" && finalResult == "stone") ||
//       (input == "stone" && finalResult == "scissors") ||
//       (input == "reversed scissors" && finalResult == "stone") ||
//       (input == "reversed paper" && finalResult == "scissors") ||
//       (input == "reversed stone" && finalResult == "paper")
//     ) {
//       console.log("won");
//       var myOutputValue = `The computer chose ${finalResult}.<br>You chose ${input}.<br><br>You won! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
//     }
//     // User draws if input and computer output is the same
//     if (
//       (input == "scissors" && finalResult == "scissors") ||
//       (input == "paper" && finalResult == "paper") ||
//       (input == "stone" && finalResult == "stone") ||
//       (input == "reversed scissors" && finalResult == "scissors") ||
//       (input == "reversed paper" && finalResult == "paper") ||
//       (input == "reversed stone" && finalResult == "stone")
//     ) {
//       console.log("draw");
//       var myOutputValue = `The computer chose ${finalResult}.<br>You chose ${input}.<br><br>Its a draw! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
//     }
//   }
//   return myOutputValue;
// };
// // A function to generate any an integer from 0 to 2. Each number corresponding to a string of "scissors", "paper" or "stone".
// function generateRandomNum() {
//   // System to generate a random decimal no larger than 2
//   var randomDecimal = Math.random() * 3;
//   // Decimal rounded down to an integer that will be between 0 to 2
//   var randomNum = Math.floor(randomDecimal);
//   return randomNum;
// }

// // Function to assign "scissors" to 0, "paper" to 1, "stone" to 2
// var generateResult = function (randomNum) {
//   // need to call generateRandomNum function and name variable to assign value e
//   var randomNum = generateRandomNum();
//   if (randomNum == 0) {
//     console.log("computer scissors");
//     result = `scissors`;
//   }
//   if (randomNum == 1) {
//     console.log("computer paper");
//     result = `paper`;
//   }
//   if (randomNum == 2) {
//     console.log("computer stone");
//     result = `stone`;
//   }
//   return result;
// };
// // END

// Assigning variables to each game state
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var reversedSCISSORS = "reversed scissors";
var reversedPAPER = "reversed paper";
var reversedSTONE = "reversed stone";

var userScore = 0;
var computerScore = 0;
var totalGames = 0;

//Starting state, blank because you want it to input something
var userName = "";
var gameState = "Please enter username";

// Set up error message
var ERRORMESSAGE = `${userName} Please enter "scissors" "paper" or "stone" to play!`;
// Set up play again message
var PLAYAGAINMESSAGE = `<br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;

// Set up computerGen function and assign values to number
var genRandomNum = function () {
  var randomNum = Math.ceil(Math.random() * 3);
  if (randomNum == 1) {
    console.log("Computer chose scissors");
    return SCISSORS;
  }
  if (randomNum == 2) {
    console.log("Computer chose paper");
    return PAPER;
  }
  if (randomNum == 3) {
    console.log("Computer chose stone");
    return STONE;
  }
};

var main = function (input) {
  // check for blank submission and return error message
  if (!input.trim()) {
    return "Please enter a valid username.";
  }
  // check for user name
  if (gameState == "Please enter username") {
    gameState = "Start game";
    userName = input;
    return `Hello ${userName}! Enter scissors, paper or stone to start playing!`;
  }
  // start the game
  if (gameState == "Start game") {
    var userInput = input.toLowerCase();
    console.log(`User chose ` + userInput);
    var computerInput = genRandomNum();
    console.log(`Computer generating`);

    var STANDARDMESSAGE = `<br><br>The computer chose: ${computerInput}<br>You chose: ${userInput}`;
  }
  //check error input and return error message
  if (
    userInput != SCISSORS &&
    userInput != PAPER &&
    userInput != STONE &&
    userInput != reversedSCISSORS &&
    userInput != reversedPAPER &&
    userInput != reversedSTONE
  ) {
    console.log(`Error detected`);
    return ERRORMESSAGE;
  }
  var calculateUserPercentage = function () {
    var userPercentage = (userScore / totalGames) * 100;
    var userWins = userPercentage.toFixed(0);
    console.log(`percentage`);
    return userWins;
  };

  // check for a draw and return feedback message
  if (
    userInput == computerInput ||
    (computerInput == STONE && userInput == reversedSTONE) ||
    (computerInput == SCISSORS && userInput == reversedSCISSORS) ||
    (computerInput == PAPER && userInput == reversedPAPER)
  ) {
    console.log(`User draw`);
    totalGames += 1;
    var winnings = calculateUserPercentage();
    return `Hi ${userName}! ${STANDARDMESSAGE}<br><br>It's a draw!<br><br>🫵🏼 score: ${userScore} <br>🤖 score: ${computerScore}<br>(You have been winning ${winnings}% of the time.${PLAYAGAINMESSAGE}`;
  }
  // check for a win and return feedback message
  if (
    (computerInput == SCISSORS && userInput == STONE) ||
    (computerInput == PAPER && userInput == SCISSORS) ||
    (computerInput == STONE && userInput == PAPER) ||
    (computerInput == STONE && userInput == reversedSCISSORS) ||
    (computerInput == SCISSORS && userInput == reversedPAPER) ||
    (computerInput == PAPER && userInput == reversedSTONE)
  ) {
    console.log(`User win`);
    userScore += 1;
    totalGames += 1;
    var winnings = calculateUserPercentage();
    return `Hi ${userName}! ${STANDARDMESSAGE}<br><br>You win!<br><br>🫵🏼 score: ${userScore}<br>🤖 score: ${computerScore}<br>(You have been winning ${winnings}% of the time.)<br>${PLAYAGAINMESSAGE}`;
  }
  // check for a loss and return feedback message
  console.log(`User lose`);
  computerScore += 1;
  totalGames += 1;
  var winnings = calculateUserPercentage();
  return `Hi ${userName}! ${STANDARDMESSAGE}<br><br>You lose!<br><br>🫵🏼 score: ${userScore}<br>🤖 score: ${computerScore}<br>(You have been winning ${winnings}% of the time.)<br>${PLAYAGAINMESSAGE}`;
};
