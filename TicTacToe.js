
const chalk = require('./chalk'); // for underlining and coloring text
const prompt = require("prompt-sync")();
let board = [[null, null, null], [null, null, null], [null, null, null]];


function intro () {
    console.clear();
    console.log(chalk.red("Welcome to TicTacToe"));
    console.log(`Please enter s to start the game or q to quit.`);

    let yourChoice = "Your choice: ";
    let userStartInput = prompt(yourChoice).toLowerCase();

    if (userStartInput === "q") {
        endGame();
    }
}

function inputPlayers() {
    console.clear();
    let players = [];
    for (let playerId = 0; playerId <=1; playerId++) {
        console.log(`Who is player ${playerId + 1}?`);
        // console.log("List of AI\'s:\nBabybot\nMoronbot\nGolem XIV\nHonest Annie");
        let player = prompt("Type in your name or chose an AI.");
        players.push(player);
    }
    return players;
}

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
    console.clear();
    let displayBoard = "  " + chalk.underline(" A B C ") + "\n"; // head row
    const verticalLine = "|";
    for (let row = 0; row <= 2; row++) {
        let leftDescription = `${row + 1} ${chalk.underline("|")}`;
        displayBoard += leftDescription
        for (let column = 0; column <= 2; column++) {
            if (board[row][column] === 1) {
                displayBoard += chalk.underline("x" + verticalLine);
            } else if (board[row][column] === 0) {
                displayBoard += chalk.underline(String.fromCharCode(11096) + verticalLine);
            } else {
                displayBoard += chalk.underline(" " + verticalLine);
            }
        }
        displayBoard += "\n";
    }
    console.log(displayBoard);
}

let allowedSquares = new Set (["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]);
console.log(allowedSquares);


function inputSquare(playerId) {
    let input = "";
    while (input === "") {
        input = prompt(`${players[playerId]} chose a square: `);
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

function newBoard (board, chosenSquare, playerId) {
    let coordinatesMove = chosenSquare.split("");
    let convertedCoordinates = [Math.floor(Number(coordinatesMove[1])) - 1];
    coordinatesMove.pop();
    if  (coordinatesMove[0] === "A") {
        convertedCoordinates.push(0);
    } else if (coordinatesMove[0] === "B") {
        convertedCoordinates.push(1);
    } else if (coordinatesMove[0] === "C") {
        convertedCoordinates.push(2);
    }
    if (playerId === 0) {
        board[convertedCoordinates[0]][convertedCoordinates[1]] = 1;
    } else {
        board[convertedCoordinates[0]][convertedCoordinates[1]] = 0;
    }
    return board;
}

function endGame(ending) {
    console.log("The game is over");
    if (ending === "draw") {
        console.log("It\'s a draw");
    } else if (ending === "q") {
        console.log("bye");
    } else {
        console.log(chalk.yellow(`${players[ending]} `)+ "has won");
    }

}

// main
// *********************************************

intro();
const players = inputPlayers();
for (let move = 0; move < 9; move++) {
    let playerId = move % 2;
    let chosenSquare = inputSquare(playerId);
    board = newBoard(board, chosenSquare, playerId);
    drawBoard(board);
    if (isWon(board)) {
        endGame(playerId);
        break;
    }
}





