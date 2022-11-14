const chalk = require('C:\\Users\\karl\\node_modules\\@babel\\highlight\\node_modules\\chalk');


let tictactoe = [[null, null, null], [null, null, null], [null, null, null]];

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

let tot1 = [[1, 1, 1], [1, 0, 0], [0, 1, 0]];
let tot2 = [[1, 1, 1], [1, 0, 0], [0, 0, 1]];
let tot3 = [[1, 1, 1], [1, 0, 0], [0, 1, 0]];
let tot4 = [[1, 1, 1], [1, 0, 1], [0, 0, 0]];
let tot5 = [[1, 1, 1], [1, 1, 0], [0, 1, 0]];
let tot6 = [[1, 0, 1], [1, 1, 1], [0, 0, 0]];
let tot7 = [[1, 0, 0], [1, 1, 1], [0, 1, 0]];
let tot8 = [[1, 1, 0], [1, 1, 1], [0, 0, 0]];
let tot9 = [[1, 0, 0], [0, 1, 1], [1, 0, 1]];
let tot10 = [[1, 1, 0], [0, 1, 1], [0, 0, 1]];
let tot11= [[1, 0, 0], [0, 1, 1], [0, 1, 1]];

function drawBoard(board) {
    let drawnBoard = "  " + chalk.underline(" A B C ") + "\n";
    for (let row = 0; row <= 2; row++) {
        drawnBoard = `${drawnBoard}` + `${row+1} ` + chalk.underline(`${String.fromCharCode(9474)}`);
        for (let column = 0; column <=2; column++) {
            drawnBoard =drawnBoard +
                chalk.underline(`${"x".repeat(board[row][column] === 1)}${"O".repeat(board[row][column] === 0)}${" ".repeat(board[row][column] !== 1 && board[row][column] !== 0)}${String.fromCharCode(9474)}`);
        }
        drawnBoard = drawnBoard +"\n"
    }

    return drawnBoard;
}

console.log(drawBoard(tot1))

const winningPattern = [
    [[1, 1, 1], [1, 0, 0], [0, 1, 0]],
    [[1, 1, 1], [1, 0, 0], [0, 0, 1]],
    [[1, 1, 1], [1, 0, 0], [0, 1, 0]],
    [[1, 1, 1], [1, 0, 1], [0, 0, 0]],
    [[1, 1, 1], [1, 1, 0], [0, 1, 0]],
    [[1, 0, 1], [1, 1, 1], [0, 0, 0]],
    [[1, 0, 0], [1, 1, 1], [0, 1, 0]],
    [[1, 1, 0], [1, 1, 1], [0, 0, 0]],
    [[1, 0, 0], [0, 1, 1], [1, 0, 1]],
    [[1, 1, 0], [0, 1, 1], [0, 0, 1]],
    [[1, 0, 0], [0, 1, 1], [0, 1, 1]]];

/*
for (let pattern =0; pattern < winningPattern.length; pattern++) {
    let temp = winningPattern[pattern]
   console.log(isWon(temp))
}


*/
