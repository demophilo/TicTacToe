
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


function inputSquare(players, playerId, board) {
    let chosenSquare = "";
    if (players[playerId] === "BabyBot") {
        chosenSquare = babyBot(board);
    } else { // human

        while (chosenSquare === "") {
            chosenSquare = prompt(`${players[playerId]} chose a square: `);
            if (chosenSquare.toUpperCase() === "QUIT") {
                break;
            }
            chosenSquare = chosenSquare.trim();
            chosenSquare = chosenSquare.toUpperCase();
            if (!allowedSquares.has(chosenSquare)) {
                chosenSquare = "";
            }
        }
    }

    allowedSquares.delete(chosenSquare);
  return chosenSquare;
}

//*********endGame******** */

function newBoard (board, chosenSquare, playerId) {
    if (playerId === 0) {
        board[chosenSquare[0]][chosenSquare[1]] = 1;
    } else {
        board[chosenSquare[0]][chosenSquare[1]] = 0;
    }
    return board;
}

function coordinatesLetterNumToNumNum(letterNum) {
    let coordinatesMove = letterNum.split("");
    let numNum = [Math.floor(Number(coordinatesMove[1])) - 1];
    coordinatesMove.pop();
    if  (coordinatesMove[0] === "A") {
        numNum.push(0);
    } else if (coordinatesMove[0] === "B") {
        numNum.push(1);
    } else if (coordinatesMove[0] === "C") {
        numNum.push(2);
    }
    return numNum;
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

// AI

function availableSquares (board) {
    let nullSquares =[];
    for (let coordHor = 0; coordHor <= 2; coordHor++) {
        for (let coordVer = 0; coordVer <= 2; coordVer++)  {
            if (board[coordHor][coordVer] === null) {
                   nullSquares.push([coordHor, coordVer]);
            }
        }
    }
    console.log(nullSquares);
    return nullSquares;
}

function getRandomItem(list) {
    let randomItem = list[Math.floor(Math.random() * list.length)];
    return randomItem;
}

function babyBot(board) {
    let squaresToChose = availableSquares(board);
    return getRandomItem(squaresToChose);
}

// main
// *********************************************

intro();
const players = inputPlayers();
for (let move = 0; move < 9; move++) {
    let playerId = move % 2;
    let chosenSquare = inputSquare(players, playerId, board);
    board = newBoard(board, chosenSquare, playerId);
    drawBoard(board);
    if (isWon(board)) {
        endGame(playerId);
        break;
    }
}





