
const chalk = require('./chalk'); // for underlining and coloring text

const prompt = require("prompt-sync")();


function intro () {
    console.clear();
    console.log(chalk.red("Welcome to TicTacToe"));
    console.log("\n" + "Please enter s to start the game.");
    console.log("\n\n" + "You can quit the game by entering quit.");

    let yourChoice = "Your choice: ";
    let userStartInput = prompt(yourChoice).toLowerCase();

    if (userStartInput === "quit") {
        endGame();
    }
}

function inputPlayers() {
    let players = [];
    for (let playerId = 1; playerId <=2; playerId++) {
        console.log(`Who is player ${playerId}?`);
        console.log("Type in your name or chose an AI.")
        console.log("List of AI\'s:\nBabybot\nMoronbot\nGolem XIV\nHonest Annie")
        let nameInput = prompt();
        const player = {"name": nameInput, "playerId": playerId}
        players.push(player);
    }
    return players;
}

let board = [[null, null, null], [null, null, null], [null, null, null]];
let exampleBoard = [[1, 0, 0], [1, 0, null], [null, 1, 1]] // remove after finished

function isWon(board) {
  let winningCondition =
    (board[0][0] === 1 && board[0][1] === 1 && board[0][2] === 1) ||
    (board[1][0] === 1 && board[1][1] === 1 && board[1][2] === 1) ||
    (board[2][0] === 1 && board[2][1] === 1 && board[2][2] === 1) ||
    (board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1) ||
    (board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1) ||
    (board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1) ||
    (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) ||
    (board[2][0] === 1 && board[1][1] === 1 && board[0][2] === 1);
  return winningCondition;
}

function drawBoard(board) {
  let drawnBoard = "  " + chalk.underline(" A B C ") + "\n"; // head row
  const verticalLine = "|";
  for (let row = 0; row <= 2; row++) {
      let leftDescription = `${row + 1} ${chalk.underline("|")}`;
      drawnBoard += leftDescription
      for (let column = 0; column <= 2; column++) {
          if (board[row][column] === 1) {
            drawnBoard += chalk.underline("x" + verticalLine);
          } else if (board[row][column] === 0) {
            drawnBoard += chalk.underline(String.fromCharCode(11096) + verticalLine);
          } else {
            drawnBoard += chalk.underline(" " + verticalLine);
          }
    }
  drawnBoard += "\n";
  }
  return drawnBoard;
}

let allowedSquares = new Set ("A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3");


function inputSquare() {
    let input = "";
    while (input === "") {
        input = prompt("Which square do you chose? ");
        if (input.toUpperCase() === "QUIT") {
            break;
        }
        input = input.trim();
        input = input.toUpperCase();
        if (!allowedSquares.has(input)) {
            input = "";
        }
    }
  allowedSquares.delete(input);
  return input;
}

//*********endGame******** */
function endGame() {
    console.log("Game is over, as you wish master");
}

function newBoard (board, move, playerId) {
    let coordinatesMove = move.split("");
    let convertedCoordinates = [Number(coordinatesMove.pop()) - 1];
    if  (coordinatesMove[0] === "A") {
        convertedCoordinates.push(0);
    } else if (coordinatesMove[0] === "B") {
        convertedCoordinates.push(1);
    } else if (coordinatesMove[0] === "C") {
        convertedCoordinates.push(2);
    }

    if (playerId === 1) {
        board[convertedCoordinates[0]][convertedCoordinates[1]] = 1;
    } else {
        board[convertedCoordinates[0]][convertedCoordinates[1]] = 0;
    }
    console.log(coordinatesMove[0], coordinatesMove[1], board);
    return board;
}
console.log(drawBoard(newBoard(exampleBoard,"A3",1)));

// main
// *********************************************
/*
intro();
inputPlayers();
let chosenSquare = inputSquare();

*/