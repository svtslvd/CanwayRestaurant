const offsets = [
[-1, -1], [-1, 0], [-1, 1], 
[ 0, -1],          [ 0, 1], 
[ 1, -1], [ 1, 0], [ 1, 1]  
];
const GameRules = {
  0: {
    0: 0,
    1: 0,
    2: 0,
    3: 1,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0
  },
  1: {
    0: 0,
    1: 0,
    2: 1,
    3: 1,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0
  }
};


function createRandomBoard(LifeIndex,rows,cols){
    return Array.from({length: rows}, ()=>Array.from({length: cols}, ()=>randomState(LifeIndex)));
};

function updateBoard(board,rows,cols){
    const next = Array.from({length: rows}, ()=>new Array(cols).fill(0));

    for (let row = 0; row<rows; row++){
        for (let col = 0; col<cols; col++){
            const LifeNeighbors = countlifeNeighbors(row,col,board,rows,cols);
            const currentState = board[row][col];
            next[row][col]=GameRules[currentState][LifeNeighbors];
        }
    }
    
    return next;
};

function randomState(LifeIndex){
    const state = +(Math.random()>(1-LifeIndex));
    return state;
};

function countlifeNeighbors(row, col, board,rows,cols){
    let c = 0;
    for (const [Orow,Ocol] of offsets){
        /*confined space*/
        const neighborRow = (row+Orow+rows) % rows; 
        const neighborCol = (col+Ocol+cols) % cols;
        if (board[neighborRow][neighborCol] == 1) c++; 
    }
    return c;
};

export {createRandomBoard, updateBoard};
