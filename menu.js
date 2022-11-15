const prompt = require("prompt-sync")();

//*************first menu on display********

console.log("welcome to TicTacToe");
console.log("\n" + "Please enter s to start the game.");
console.log("\n\n" + "You can quit the game by entering quit.");

let yourChoice = "Your choice: ";
let userStartInput = prompt(yourChoice).toLowerCase();

if (userStartInput === "s") {
  displayMenu();
} else if (userStartInput === "quit") {
  endGame();
} else {
  console.log("\n" + "Please enter just s for Start Game");
}

//*************DISPLAY MENU****************
function displayMenu() {
  console.log("TIC TAC TOE Menu");
  let gameMode0 = "please choose your game mode";
  console.log("\n" + gameMode0);
  let gameMode1 = "1 for Human vs Human";
  console.log("\n" + gameMode1);
  let gameMode2 = "2 for Random AI vs Random AI";
  console.log("\n" + gameMode2);
  let gameMode3 = "3 for Human vs Random AI";
  console.log("\n" + gameMode3);
  let gameMode4 = "4 for Human vs unbeatable AI";
  console.log("\n" + gameMode4);
}

//************userChoice************
function getUserChoice() {
  let userSecondInput = prompt(yourChoice).toLowerCase();
  if (userSecondInput === 1) {
    console.log("human vs Human");
  }
  if (userSecondInput === 2) {
    console.log("Random AI vs Random AI");
  }
  if (userSecondInput === 3) {
    console.log("Human vs Random AI");
  }
  if (userSecondInput === 4) {
    console.log("Human vs unbeatable AI");
  }
  if (userSecondInput !== 0 || 1 || 2 || 3 || 4) {
    console.log("please choose one of the choices between 1 or 2 or 3 or 4");
  }
  return userSecondInput;
}

//*********endGame******** */
function endGame() {
  return alert("END");
}

function getMenuOption() {
  console.log("TicTacToe");
  console.log("\n");
  let UserChoice = prompt(yourChoice);
  return UserChoice;
}

module.exports = {
  getMenuOption: getMenuOption,
  getUserChoice: getUserChoice,
};

// run this function to test whether you have correctly implemented the other function
function checkOptions() {
  let option = getMenuOption();
  console.log("If the user selected 1, it should print 1");
  console.log(option);
}
checkOptions();
