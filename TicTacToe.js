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

console.log(isWon(tot10))

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
