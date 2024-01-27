// Assigning variables to each game state
const SCISSORS = "scissors";
const PAPER = "paper";
const STONE = "stone";
const NORMAL = "normal";
const KOREAN = "korean";
const REVERSE = "reverse";

// variable to store scores
let userScore = 0;
let computerScore = 0;
let totalGames = 0;

let userPrevState = "";
let compPrevState = "";

//Starting state, blank because you want it to input something
let userName = "";
let gameState = "Please enter username";

// Set up error message
let ERRORMESSAGE = `${userName} Please enter "scissors" "paper" or "stone" to play!`;
let ERRORMESSAGE2 = `Please enter "normal" or "korean" to select game mode!`;
// Set up play again message
let PLAYAGAINMESSAGE = `<br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;

// Set up computerGen function and assign values to number
let genRandomNum = function () {
  let randomNum = Math.ceil(Math.random() * 3);
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

let main = function (input) {
  // check for blank submission and return error message
  console.log("validation");
  if (!input.trim()) {
    console.log("validation done");
    return "Please enter a valid username.";
  }

  // check for user name
  if (gameState == "Please enter username") {
    gameState = "Select mode";
    userName = input;
    console.log(userName);
    return `Hello ${userName}! Please enter 'normal' or 'korean' to select game mode!`;
  }

  let modeInput = input.toLowerCase();

  // check for selection of mode
  if (gameState == "Select mode") {
    if (modeInput != NORMAL && modeInput != KOREAN && modeInput != REVERSE) {
      console.log(`Error2 detected`);
      return ERRORMESSAGE2;
    }
  }
  // Select normal
  if (modeInput == NORMAL) {
    gameState = NORMAL;
    return `Hello ${userName}! ${gameState} mode activated! Enter scissors, paper or stone to start playing!`;
  }

  // Select korean
  if (modeInput == KOREAN) {
    gameState = KOREAN;
    userPrevState = "";
    compPrevState = "";
    return `Hello ${userName}! ${gameState} mode activated! Enter scissors, paper or stone to start playing!`;
  }

  // Select reverse (secret mode)
  if (modeInput == REVERSE) {
    gameState = REVERSE;
    return `Hello ${userName}! ${gameState} mode activated! Enter scissors, paper or stone to start playing!`;
  }

  let userInput = input.toLowerCase();
  console.log(`User chose ` + userInput);
  let computerInput = genRandomNum();

  let STANDARDMESSAGE = `<br><br>The computer chose: ${computerInput}<br>You chose: ${userInput}`;

  let calculateUserPercentage = function () {
    let userPercentage = (userScore / totalGames) * 100;
    let userWins = userPercentage.toFixed(0);
    console.log(`percentage`);
    return userWins;
  };

  // Reverse mode
  if (gameState == REVERSE) {
    // Reverse mode win
    if (
      (computerInput == PAPER && userInput == STONE) ||
      (computerInput == STONE && userInput == SCISSORS) ||
      (computerInput == SCISSORS && userInput == PAPER)
    ) {
      console.log(`User win reverse mode`);
      userScore += 1;
      totalGames += 1;
      userPrevState = "win";
      let winnings = calculateUserPercentage();
      return `Hi ${userName}! ${STANDARDMESSAGE}<br><br>You win!<br><br>🫵🏼 score: ${userScore}<br>🤖 score: ${computerScore}<br>(You have been winning ${winnings}% of the time.)<br>${PLAYAGAINMESSAGE}`;
    }
    // Reverse mode lose
    if (
      (computerInput == SCISSORS && userInput == STONE) ||
      (computerInput == PAPER && userInput == SCISSORS) ||
      (computerInput == STONE && userInput == PAPER)
    ) {
      console.log(`User lose`);
      computerScore += 1;
      totalGames += 1;
      compPrevState = "win";
      var winnings = calculateUserPercentage();
      return `Hi ${userName}! ${STANDARDMESSAGE}<br><br>You lose!<br><br>🫵🏼 score: ${userScore}<br>🤖 score: ${computerScore}<br>(You have been winning ${winnings}% of the time.)<br>${PLAYAGAINMESSAGE}`;
    }
  }
  // korea mode user win
  if (gameState == KOREAN && userInput == computerInput) {
    if (userPrevState == "win" && userScore > 0) {
      userScore = 0;
      computerScore = 0;
      userPrevState = "";
      compPrevState = "";
      return `Hi ${userName}! ${STANDARDMESSAGE}<br><br>Muk-jji-ppa! You are the final winner!<br>${PLAYAGAINMESSAGE}`;
    }
    // korea mode user lose
    if (compPrevState == "win" && computerScore > 0) {
      userScore = 0;
      computerScore = 0;
      userPrevState = "";
      compPrevState = "";
      return `Hi ${userName}! ${STANDARDMESSAGE}<br><br>Muk-jji-ppa! Computer is the final winner!<br>${PLAYAGAINMESSAGE}`;
    }
    // normal and reverse mode draw
    else userInput == computerInput;
    console.log(`User draw`);
    totalGames += 1;
    userPrevState = "";
    let winnings = calculateUserPercentage();
    return `Hi ${userName}! ${STANDARDMESSAGE}<br><br>It's a draw!<br><br>🫵🏼 score: ${userScore} <br>🤖 score: ${computerScore}<br>(You have been winning ${winnings}% of the time.${PLAYAGAINMESSAGE}`;
  }
  if (userInput == computerInput && gameState != KOREAN) {
    console.log(`User draw`);
    totalGames += 1;
    userPrevState = "";
    let winnings = calculateUserPercentage();
    return `Hi ${userName}! ${STANDARDMESSAGE}<br><br>It's a draw!<br><br>🫵🏼 score: ${userScore} <br>🤖 score: ${computerScore}<br>(You have been winning ${winnings}% of the time.${PLAYAGAINMESSAGE}`;
  }

  // normal mode win
  if (
    (computerInput == SCISSORS && userInput == STONE) ||
    (computerInput == PAPER && userInput == SCISSORS) ||
    (computerInput == STONE && userInput == PAPER)
  ) {
    console.log(`User win`);
    userScore += 1;
    totalGames += 1;
    userPrevState = "win";
    winnings = calculateUserPercentage();
    return `Hi ${userName}! ${STANDARDMESSAGE}<br><br>You win!<br><br>🫵🏼 score: ${userScore}<br>🤖 score: ${computerScore}<br>(You have been winning ${winnings}% of the time.)<br>${PLAYAGAINMESSAGE}`;
  }
  // normal mode lose
  if (
    (userInput == SCISSORS && computerInput == STONE) ||
    (userInput == PAPER && computerInput == SCISSORS) ||
    (userInput == STONE && computerInput == PAPER)
  ) {
    console.log(`User lose`);
    computerScore += 1;
    totalGames += 1;
    compPrevState = "win";
    winnings = calculateUserPercentage();
    return `Hi ${userName}! ${STANDARDMESSAGE}<br><br>You lose!<br><br>🫵🏼 score: ${userScore}<br>🤖 score: ${computerScore}<br>(You have been winning ${winnings}% of the time.)<br>${PLAYAGAINMESSAGE}`;
  }
};

garce;
