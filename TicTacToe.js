
const chalk = require('./chalk'); // for underlining and coloring text
const prompt = require("prompt-sync")();
let board = [[null, null, null], [null, null, null], [null, null, null]];


function intro () {
    console.clear();
    console.log(chalk.red("Welcome to TicTacToe"));
    console.log("Please hit enter to start the game or q to quit.");
    console.log("If you want to play against an AI type in the Name of the AI");
    console.log("List of AI\'s:");
    console.log("BabyBot");
    console.log("MoronBot");
    console.log("GolemBot");
    console.log("AnnieBot");
    console.log("BigBot");

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
        //console.log("List of AI\'s:\nBabybot\nMoronbot\nGolem XIV\nHonest Annie");
        let player = prompt("Type in your name or chose an AI:   ");
        players.push(player);
    }
    return players;
}

function isWon(board, playerId) {
    playerId = (playerId+1) % 2
    let winningCondition =
    (board[0][0] === playerId && board[0][1] === playerId && board[0][2] === playerId) ||
    (board[1][0] === playerId && board[1][1] === playerId && board[1][2] === playerId) ||
    (board[2][0] === playerId && board[2][1] === playerId && board[2][2] === playerId) ||
    (board[0][0] === playerId && board[1][0] === playerId && board[2][0] === playerId) ||
    (board[0][1] === playerId && board[1][1] === playerId && board[2][1] === playerId) ||
    (board[0][2] === playerId && board[1][2] === playerId && board[2][2] === playerId) ||
    (board[0][0] === playerId && board[1][1] === playerId && board[2][2] === playerId) ||
    (board[2][0] === playerId && board[1][1] === playerId && board[0][2] === playerId);
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



function inputSquare(players, playerId, board) {
    let chosenSquare = "";
    let chosenSquareNumNum =[];
    if (players[playerId] === "BabyBot") {
        chosenSquareNumNum = babyBot(board);
        chosenSquare = coordinatesNumNumToLetterNum(chosenSquareNumNum);
    } else if (players[playerId] === "MoronBot") {
        chosenSquareNumNum = moronBot(board, playerId);
        chosenSquare = coordinatesNumNumToLetterNum(chosenSquareNumNum);
    } else if (players[playerId] === "GolemBot") {
        chosenSquareNumNum = golemBot(board, playerId);
        chosenSquare = coordinatesNumNumToLetterNum(chosenSquareNumNum);
    } else if (players[playerId] === "AnnieBot") {
        chosenSquareNumNum = annieBot(board, playerId);
        chosenSquare = coordinatesNumNumToLetterNum(chosenSquareNumNum);
    } else if (players[playerId] === "BigBot") {
        chosenSquareNumNum = bigBot(board, playerId);
        chosenSquare = coordinatesNumNumToLetterNum(chosenSquareNumNum);
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
            } else {
                chosenSquareNumNum = coordinatesLetterNumToNumNum(chosenSquare);
            }
        }
    }
    allowedSquares.delete(chosenSquare);
  return chosenSquareNumNum;
}

//*********endGame******** */

function newBoard (board, chosenSquareNumNum, playerId) {
    if (playerId === 0) {
        board[chosenSquareNumNum[0]][chosenSquareNumNum[1]] = 1;
    } else {
        board[chosenSquareNumNum[0]][chosenSquareNumNum[1]] = 0;
    }
    return board;
}


function coordinatesNumNumToLetterNum(numNum) {
    let letterCoordinate = "";
    if  (numNum[1] === 0) {
        letterCoordinate = "A";
    } else if (numNum[1] === 1) {
        letterCoordinate = "B";
    } else if (numNum[1] === 2) {
        letterCoordinate = "C";
    }
    let numCoordinate = `${numNum[0] + 1}`
    return letterCoordinate + numCoordinate;
}

function coordinatesLetterNumToNumNum(letterNum) {
    let coordinatesMove = letterNum.split("");
    let numNum = [Number(coordinatesMove[1]) - 1];
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
        console.log(chalk.yellow(`${ending} `)+ "has won");
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
function moronBot (board, playerId) {
    let squaresToChose = availableSquares(board);
    for (let square of squaresToChose) {
        let tempValue = board[square[0]][square[1]]
        let tempBoard = newBoard(board, square, playerId)
        if (isWon(tempBoard, playerId)) {
            return square;
        }
        tempBoard[square[0]][square[1]] = tempValue;
    }
    return getRandomItem(squaresToChose);
}

function golemBot (board, playerId) {
    let squaresToChose = availableSquares(board);
    for (let square of squaresToChose) {
        let tempValue = board[square[0]][square[1]]
        let tempBoard = newBoard(board, square, playerId)
        if (isWon(tempBoard, playerId)) {
            return square;
        }
        tempBoard[square[0]][square[1]] = tempValue;
    }
    playerId = (playerId + 1) % 2;
    for (let square of squaresToChose) {
        let tempValue = board[square[0]][square[1]]
        let tempBoard = newBoard(board, square, playerId)
        if (isWon(tempBoard, playerId)) {
            return square;
        }
        tempBoard[square[0]][square[1]] = tempValue;
    }
    return getRandomItem(squaresToChose);
}

function annieBot (board, playerId) {
    let squaresToChose = availableSquares(board);
    for (let square of squaresToChose) {
        if (square[0] === 1 && square[1] ===1) {
            return square;
        }
    }
    for (let square of squaresToChose) {
        let tempValue = board[square[0]][square[1]]
        let tempBoard = newBoard(board, square, playerId)
        if (isWon(tempBoard, playerId)) {
            return square;
        }
        tempBoard[square[0]][square[1]] = tempValue;
    }
    playerId = (playerId + 1) % 2;
    for (let square of squaresToChose) {
        let tempValue = board[square[0]][square[1]]
        let tempBoard = newBoard(board, square, playerId)
        if (isWon(tempBoard, playerId)) {
            return square;
        }
        tempBoard[square[0]][square[1]] = tempValue;
    }
    return getRandomItem(squaresToChose);
}

function bigBot (board, playerId) {
    let squaresToChose = availableSquares(board);
    for (let square of squaresToChose) {
        if (square[0] === 1 && square[1] ===1) {
            return square;
        }
    }
    for (let square of squaresToChose) {
        let tempValue = board[square[0]][square[1]]
        let tempBoard = newBoard(board, square, playerId)
        if (isWon(tempBoard, playerId)) {
            return square;
        }
        tempBoard[square[0]][square[1]] = tempValue;
    }
    playerId = (playerId + 1) % 2;
    for (let square of squaresToChose) {
        let tempValue = board[square[0]][square[1]]
        let tempBoard = newBoard(board, square, playerId)
        if (isWon(tempBoard, playerId)) {
            return square;
        }
        tempBoard[square[0]][square[1]] = tempValue;
    }
    for (let square of squaresToChose) {
        if (square[0] !== 1 && square[1] ===1 || square[0] === 1 && square[1] !==1) {
            return square;
        }
    }
    return getRandomItem(squaresToChose);
}
// main
// *********************************************

intro();
const players = inputPlayers();
console.clear();
drawBoard(board);
for (let move = 0; move < 9; move++) {
    let playerId = move % 2;
    let chosenSquare = inputSquare(players, playerId, board);
    board = newBoard(board, chosenSquare, playerId);
    drawBoard(board);
    if (isWon(board, playerId)) {
        endGame(players[playerId]);
        break;
    } else if (move === 8) {
        endGame("draw");
    }
}

