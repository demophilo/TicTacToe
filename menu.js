const prompt = require("prompt-sync")();

//*************first menu on display********
function intro () {
  console.log("Welcome to TicTacToe");
  console.log("\n" + "Please enter s to start the game.");
  console.log("\n\n" + "You can quit the game by entering quit.");

  let yourChoice = "Your choice: ";
  let userStartInput = prompt(yourChoice).toLowerCase();

  if (userStartInput === "s") {
    displayMenu();
  } else if (userStartInput === "quit") {
    endGame();
  } else {
    console.log("\n" + "Please enter s to start Tic Tac Toe");
  }

}

//*************DISPLAY MENU****************

function inputPlayers() {
  let players = [];
  for (let playerId = 1; playerId <=2; playerId++) {
    console.log(`Who is player ${playerId}?`);
    console.log("Type in your name or chose an AI.")
    console.log("List of AI's:\nBabybot\nMoronbot\nGolem XIV\nHonest Annie")
    let nameInput = prompt();
    const player = {"name": nameInput, "playerId": playerId}
  }
}



//*********endGame******** */
function endGame() {
   console.log("Game is over, as you wish master");
}


/*
module.exports = {
  getMenuOption: getMenuOption,
  getUserChoice: getUserChoice,
};


*/