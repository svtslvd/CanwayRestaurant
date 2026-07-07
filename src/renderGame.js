const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const screenHeight = window.innerHeight;
const CELL_SIZE = Math.floor(screenHeight/100);
document.documentElement.style.setProperty('--screen-height', `${CELL_SIZE*100}px`);

const finalSize = CELL_SIZE*100;
canvas.width = finalSize;
canvas.height = finalSize;

function renderLife(matrix) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#1a1a1c';

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] === 1) { 
                ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
            }
        }
    }
}

export {renderLife};