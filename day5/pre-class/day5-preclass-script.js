var bankRoll = 10;
//starting state
var currentGameMode = "waiting for user name";
//starting state, blank because you want it to input something
var userName = "";

var rollDice = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger;
};

var main = function (input) {
  var myOutputValue = "";

  // do this if game mode is waiting for user input
  if (currentGameMode == "waiting for user name") {
    // set the name
    userName = input;
    // now that we have the name, switch the mode
    currentGameMode = "dice game";

    myOutputValue = "Hello " + userName;
  } else if (currentGameMode == "dice game") {
    var randomDiceRoll = rollDice();
    myOutputValue =
      userName +
      " you lost! you guessed: " +
      input +
      " you rolled: " +
      randomDiceRoll;

    if (input == randomDiceRoll) {
      bankRoll = bankRoll + 1;
      myOutputValue =
        userName +
        " you won! you guessed: " +
        input +
        " you rolled: " +
        randomDiceRoll;
    }
  }
  return myOutputValue;
};

// the game starts in green
var gameMode = "green";

var main = function (input) {
  // if the user types r the mode switches to red
  if (input == "r") {
    gameMode = "red";
  }
  // if the user types in g the mode switches to green
  if (input == "g") {
    gameMode = "green";
  }
  var myOutputValue = "hello world - current mode: " + gameMode;
  return myOutputValue;
};

// Declare outside the function to keep track of the previous dice roll. But why is it 0?
var prevDiceNumber = 0;

var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var main = function (input) {
  var randomDiceNumber = rollDice();
  console.log("roll", randomDiceNumber);
  console.log(input);

  // why would the dice number be 0? And why does the prevDiceNumber have ++?
  var getPrevDiceRollInfo = function () {
    // Handle the scenario where this is the first roll and hence there isn't a previous roll value.
    if (prevDiceNumber == 0) {
      return "This was your first roll.";
    }
    // Since this is not the first roll, display the previous roll's value to the user
    return "Your previous roll was " + prevDiceNumber + ".";
  };

  // must be a variable that calls for a function?
  var LOSTTEXT =
    getPrevDiceRollInfo() +
    ` You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose!`;

  var WINNINGTEXT =
    getPrevDiceRollInfo() +
    ` You just rolled a ${randomDiceNumber}. You guessed ${input}. You win!`;

  // if prevDiceNumber is same as randomDiceNumber then how can this store the previous diceNumber?
  if (randomDiceNumber == input) {
    prevDiceNumber = randomDiceNumber;
    console.log("win");
    return WINNINGTEXT;
  }
  prevDiceNumber = randomDiceNumber;
  return LOSTTEXT;
};
