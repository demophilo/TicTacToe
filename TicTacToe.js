const chalk = require('./chalk');


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
/*
for (let pattern =0; pattern < winningPattern.length; pattern++) {
    let temp = winningPattern[pattern]
   console.log(isWon(temp))
}


*/
