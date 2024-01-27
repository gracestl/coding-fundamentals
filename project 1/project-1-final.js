/*
How many hours did you spend on this assignment?: +/- 6 hours
What part of the assignment did you spend the most time on?: Customised output message, game logic and ensuring no bugs...
How comfortable did you feel with this assignment? (1-5): 4.5 
Is there anything in this code that you feel pleased about?: I think it works...
What's one aspect of your code you would like specific, elaborate feedback on?: How to refactor and reduce the length and repetition.
*/

// Assigning variables to each game state
const SCISSORS = "scissors";
const PAPER = "paper";
const STONE = "stone";
const NORMAL = "normal";
const KOREAN = "korean";
const REVERSE = "reverse";

// Assigning variables to store scores
let userScore = 0;
let computerScore = 0;
let totalGames = 0;

// Assigning variables to store states
let userPrevState = "";
let compPrevState = "";
let gameState = "Please enter username";
let userName = "";

// Set up repeated messages
let ERRORMESSAGE = `${userName} Please enter "scissors" "paper" or "stone" to play!`;
let ERRORMESSAGE2 = `Please enter "normal" or "korean" to select game mode!`;
// Set up play again message
let PLAYAGAINMESSAGE = `<br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;

// Computer generation of scissors paper or stone
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

//Run main function
let main = function (input) {
  // check for blank submission and return error message
  console.log("validation");
  if (!input.trim()) {
    console.log("validation done");
    return "Please enter a valid username.";
  }

  // check for user name and return error message
  if (gameState == "Please enter username") {
    gameState = "Select mode";
    userName = input;
    console.log(userName);
    return `Hello ${userName}! Please enter 'normal' or 'korean' to select game mode!`;
  }

  // convert all input for game mode to lower case
  let modeInput = input.toLowerCase();

  // check for selection of mode and return error message
  if (gameState == "Select mode") {
    if (modeInput != NORMAL && modeInput != KOREAN && modeInput != REVERSE) {
      console.log(`Error2 detected`);
      return ERRORMESSAGE2;
    }
  }
  // If user input "normal", normal mode is activated
  if (modeInput == NORMAL) {
    gameState = NORMAL;
    return `Hello ${userName}! ${gameState} mode activated! Enter scissors, paper or stone to start playing!`;
  }

  // If user input "korean", korean mode is activated
  if (modeInput == KOREAN) {
    gameState = KOREAN;
    userPrevState = "";
    compPrevState = "";
    return `Hello ${userName}! ${gameState} mode activated! Enter scissors, paper or stone to start playing!`;
  }

  // If user input "reverse", reverse mode is activated
  if (modeInput == REVERSE) {
    gameState = REVERSE;
    return `Hello ${userName}! ${gameState} mode activated! Enter scissors, paper or stone to start playing!`;
  }

  // convert all user input for game to lower case
  let userInput = input.toLowerCase();
  console.log(`User chose ` + userInput);
  let computerInput = genRandomNum();

  // standard message to inform what user and computer chose
  let STANDARDMESSAGE = `<br><br>The computer chose: ${computerInput}<br>You chose: ${userInput}`;

  // calculation of percentage wins of user over total games
  let calculateUserPercentage = function () {
    let userPercentage = (userScore / totalGames) * 100;
    let userWins = userPercentage.toFixed(0);
    console.log(`percentage`);
    return userWins;
  };

  // Reverse mode gameplay to win
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
    // Reverse mode gameplay to lose
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
  // Korean mode gameplay to win
  if (gameState == KOREAN && userInput == computerInput) {
    if (userPrevState == "win" && userScore > 0) {
      userScore = 0;
      computerScore = 0;
      userPrevState = "";
      compPrevState = "";
      return `Hi ${userName}! ${STANDARDMESSAGE}<br><br>Muk-jji-ppa! You are the final winner!<br>${PLAYAGAINMESSAGE}`;
    }
    // Korean mode gameplay to lose
    if (compPrevState == "win" && computerScore > 0) {
      userScore = 0;
      computerScore = 0;
      userPrevState = "";
      compPrevState = "";
      return `Hi ${userName}! ${STANDARDMESSAGE}<br><br>Muk-jji-ppa! Computer is the final winner!<br>${PLAYAGAINMESSAGE}`;
    }
    // Normal and reverse mode gameplay to draw
    else userInput == computerInput;
    console.log(`User draw`);
    totalGames += 1;
    userPrevState = "";
    let winnings = calculateUserPercentage();
    return `Hi ${userName}! ${STANDARDMESSAGE}<br><br>It's a draw!<br><br>🫵🏼 score: ${userScore} <br>🤖 score: ${computerScore}<br>(You have been winning ${winnings}% of the time.${PLAYAGAINMESSAGE}`;
  }
  // Korean mode gameplay to draw without win or loss state
  if (userInput == computerInput && gameState != KOREAN) {
    console.log(`User draw`);
    totalGames += 1;
    userPrevState = "";
    let winnings = calculateUserPercentage();
    return `Hi ${userName}! ${STANDARDMESSAGE}<br><br>It's a draw!<br><br>🫵🏼 score: ${userScore} <br>🤖 score: ${computerScore}<br>(You have been winning ${winnings}% of the time.${PLAYAGAINMESSAGE}`;
  }

  // Normal mode gameplay to win
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
  // Normal mode gameplay to lose
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
