var BANANA = "banana";
var CHISEL = "chisel";
var FAUCET = "faucet";

var gameScore = 0;
var winningScore = 2;
var prevGameResult = 0;

var ERRORMESSAGE = `Please enter banana, chisel or faucet to play!`;
var REFRESHMESSAGE = `You have won! Refresh the page to restart the game!`;

var compGen = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.ceil(randomDecimal);

  if (randomInteger == 1) {
    return BANANA;
  }
  if (randomInteger == 2) {
    return CHISEL;
  }
  if (randomInteger == 3) {
    return FAUCET;
  }
};

var main = function (userGuess) {
  var secretWord = compGen();
  var message = `You guessed: ${userGuess}<br>Secret word: ${secretWord}`;

  if (checkErrorInput(userGuess)) {
    return ERRORMESSAGE;
  }
  // condition 1, guess must match comp
  if (secretWord == userGuess) {
    gameScore += 1;

    // if game score hits
    if (gameScore >= winningScore) {
      gameScore = 0;
      return `${message}<br>You won by guessing correctly twice! Please play again!`;
    }
    if (gameScore == 1) {
      return `${message}<br>You guessed correctly. Now you need 1 more guess to win!`;
    }
    return `${message}<br>You guessed correctly. You need ${guessesToWin} more correct guesses to win.`;
  }

  if (secretWord != userGuess) {
    gameScore = 0;
    return `${message}<br>You guessed incorrectly. You need 2 consecutive correct guesses to win.`;
  }
};

// the previous state must be secretWord == userGuess

//check error input and return error message
var checkErrorInput = function (input) {
  var lowercaseInput = input.toLowerCase();
  if (
    lowercaseInput != BANANA &&
    lowercaseInput != CHISEL &&
    lowercaseInput != FAUCET
  ) {
    return ERRORMESSAGE;
  }
  // no error
};

// var main = function (input) {
//   var lowercaseInput = input.toLowerCase();
//   var computerInput = compGen();
//   var pointsNeed = 2 - gameScore;
//   var newScore = gameScore;

//   var genErrorMessage = checkErrorInput(lowercaseInput);
//   if (genErrorMessage) {
//     return ERRORMESSAGE;
//   }

// var MESSAGE = `You guessed ${lowercaseInput} and the correct answer is ${computerInput}. You guessed correctly for ${newScore} time(s). You need ${pointsNeed} to win.`;

// var WINMESSAGE = `Hurray, you won! You guessed ${lowercaseInput} and the correct answer is ${computerInput}. You guessed correctly for ${newScore} time(s).`;

//   if (gameScore === 2) {
//     return `Hurray, you won! You guessed ${lowercaseInput} and the correct answer is ${computerInput}. You guessed correctly for ${gameScore} time(s).`;
//   }
//   if (gameScore === 0 && gameScore < 0) {
//     return REFRESHMESSAGE;
//   }
//   if (userWin(lowercaseInput, computerInput) && gameScore < 1) {
//     return `You guessed ${lowercaseInput} and the correct answer is ${computerInput}. You guessed correctly for ${gameScore} time(s). You need ${
//       2 - gameScore
//     } to win.`;
//   }

//   if (userWin(lowercaseInput, computerInput)) {
//     gameScore = gameScore + 1;
//     console.log("win! gamescore is " + gameScore);
//     return `You guessed ${lowercaseInput} and the correct answer is ${computerInput}. You guessed correctly for ${gameScore} time(s). You need ${
//       2 - gameScore
//     } to win.`;
//   }

//   console.log("gamescore is " + gameScore);
//   console.log("lose");
//   return `You guessed ${lowercaseInput} and the correct answer is ${computerInput}. You guessed correctly for ${gameScore} time(s). You need ${pointsNeed} to win.`;
// };

// var bankRoll = 10;
// //starting state
// var currentGameMode = "waiting for user name";
// //starting state, blank because you want it to input something
// var userName = "";

// var rollDice = function () {
//   var randomDecimal = Math.random() * 3;
//   var randomInteger = Math.floor(randomDecimal);
//   return randomInteger;
// };

// var main = function (input) {
//   var myOutputValue = "";

//   // do this if game mode is waiting for user input
//   if (currentGameMode == "waiting for user name") {
//     // set the name
//     userName = input;
//     // now that we have the name, switch the mode
//     currentGameMode = "dice game";

//     myOutputValue = "Hello " + userName;
//   } else if (currentGameMode == "dice game") {
//     var randomDiceRoll = rollDice();
//     myOutputValue =
//       userName +
//       " you lost! you guessed: " +
//       input +
//       " you rolled: " +
//       randomDiceRoll;

//     if (input == randomDiceRoll) {
//       bankRoll = bankRoll + 1;
//       myOutputValue =
//         userName +
//         " you won! you guessed: " +
//         input +
//         " you rolled: " +
//         randomDiceRoll;
//     }
//   }
//   return myOutputValue;
// };

// // the game starts in green
// var gameMode = 'green'

// var main = function (input){
// // if the user types r the mode switches to red
// if (input == 'r'){
// gameMode = 'red'
// }
// // if the user types in g the mode switches to green
// if (input == "g") {
// gameMode = 'green'
// }
// var myOutputValue = "hello world - current mode: " + gameMode
// return myOutputValue
// }

// // Declare outside the function to keep track of the previous dice roll. But why is it 0?
// var prevDiceNumber = 0;

// var rollDice = function () {
//   var randomDecimal = Math.random() * 6;
//   var randomInteger = Math.floor(randomDecimal);
//   var diceNumber = randomInteger + 1;
//   return diceNumber;
// };

// var main = function (input) {
//   var randomDiceNumber = rollDice();
//   console.log("roll", randomDiceNumber);
//   console.log(input);

//   // why would the dice number be 0? And why does the prevDiceNumber have ++?
//   var getPrevDiceRollInfo = function () {
//     // Handle the scenario where this is the first roll and hence there isn't a previous roll value.
//     if (prevDiceNumber == 0) {
//       return "This was your first roll.";
//     }
//     // Since this is not the first roll, display the previous roll's value to the user
//     return "Your previous roll was " + prevDiceNumber + ".";
//   };

//   // must be a variable that calls for a function?
//   var LOSTTEXT =
//     getPrevDiceRollInfo() +
//     ` You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose!`;

//   var WINNINGTEXT =
//     getPrevDiceRollInfo() +
//     ` You just rolled a ${randomDiceNumber}. You guessed ${input}. You win!`;

//   // if prevDiceNumber is same as randomDiceNumber then how can this store the previous diceNumber?
//   if (randomDiceNumber == input) {
//     prevDiceNumber = randomDiceNumber;
//     console.log("win");
//     return WINNINGTEXT;
//   }
//   prevDiceNumber = randomDiceNumber;
//   return LOSTTEXT;
// };

// //
// var BANANA = "banana";
// var CHISEL = "chisel";
// var FAUCET = "faucet";

// var gameScore = 0;
// var winningScore = 2;
// var previousResult = 0;

// var ERRORMESSAGE = `Please enter banana, chisel or faucet to play!`;
// var REFRESHMESSAGE = `You have won! Refresh the page to restart the game!`;

// var compGen = function () {
//   var randomDecimal = Math.random() * 3;
//   var randomInteger = Math.ceil(randomDecimal);

//   if (randomInteger == 1) {
//     return BANANA;
//   }
//   if (randomInteger == 2) {
//     return CHISEL;
//   }
//   if (randomInteger == 3) {
//     return FAUCET;
//   }
// };

// var main = function (userGuess) {
//   var secretWord = compGen();
//   var message = `You guessed ${userGuess}.<br>Secret word: ${secretWord}`;

//   if (checkErrorInput(userGuess)) {
//     return ERRORMESSAGE;
//   }

//   if (secretWord == userGuess) {
//     gameScore += 1;

//     if (gameScore >= winningScore) {
//       gameScore = 0;
//       return `${message}<br>You won by guessing correctly twice! Please play again!`;
//     }
//     if (gameScore == 1) {
//       return `${message}<br>You guessed correctly. Now you need 1 more guess to win!`;
//     }
//     return `${message}<br>You guessed correctly. You need ${guessesToWin} more correct guesses to win.`;
//   }

//   var guessesToWin = winningScore - gameScore;

//   return `${message}<br>You guessed incorrectly. You need ${guessesToWin} more correct guesses to win.`;
// };

// // the previous state must be secretWord == userGuess

// //check error input and return error message
// var checkErrorInput = function (input) {
//   var lowercaseInput = input.toLowerCase();
//   if (
//     lowercaseInput != BANANA &&
//     lowercaseInput != CHISEL &&
//     lowercaseInput != FAUCET
//   ) {
//     return ERRORMESSAGE;
//   }
//   // no error
// };
