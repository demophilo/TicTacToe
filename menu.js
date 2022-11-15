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
console.log("TIC TAC TOE Menu");
function displayMenu() {
  let players = [];
  let player = {"name":"", "id":};
  for (let playerId = 1; playerId <=2; playerId++) {
    player.prompt(`Who is player ${playerId}?`);
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
