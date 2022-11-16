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



//*********endGame******** */
function endGame() {
    console.log("Game is over, as you wish master");
}


let gameProgress

let board = [[null, null, null], [null, null, null], [null, null, null]];
let exampleBoard = [[1, 0, 0], [1, 0, ], [, 1, 1]] // remove after finished

function isWon(board) {
    let winningCondition =    board[0][0] === 1 && board[0][1] === 1 && board[0][2] === 1 ||
                                board[1][0] === 1 && board[1][1] === 1 && board[1][2] === 1 ||
                                board[2][0] === 1 && board[2][1] === 1 && board[2][2] === 1 ||
                                board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1 ||
                                board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1 ||
                                board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1 ||
                                board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1 ||
                                board[2][0] === 1 && board[1][1] === 1 && board[0][2] === 1 ;
    return winningCondition;
}



function drawBoard(board) {
    let drawnBoard = "  " + chalk.underline(" A B C ") + "\n";
    const verticalLine = "|"
    for (let row = 0; row <= 2; row++) {
        drawnBoard = `${drawnBoard}` + `${row+1} ` + chalk.underline("|");
        for (let column = 0; column <=2; column++) {
            if (board[row][column] === 1) {
                drawnBoard = drawnBoard + chalk.underline("x" + verticalLine);
            }
            else if (board[row][column] === 0) {
                drawnBoard = drawnBoard + chalk.underline(String.fromCharCode(11096) + verticalLine);
            }
            else {
                drawnBoard = drawnBoard + chalk.underline(" " + verticalLine);
            }
        }
        drawnBoard = drawnBoard +"\n"
    }
    return drawnBoard;
}

console.log(drawBoard(exampleBoard))



function allowedInputs () {
    let allowedCombinations = [];
    for (column of ["A", "B", "C"]) {
        for (row of ["1", "2", "3"]) {
            allowedCombinations.push(column + row);
        }
    }
    return allowedCombinations;
}
console.log(allowedInputs());

function inputSqare() {
    let input ="";

    while (input === "") {
        input = prompt("Which square do you chose? ");
        if (input.toUpperCase() === "QUIT") {
            break;
        }
        input = input.trim();
        input = input.toUpperCase();
        allowedSquares = allowedInputs();
        if (!allowedSquares.includes(input)) {
            input = "";
        }
    }
    return input;
}

console.log(inputSqare());


