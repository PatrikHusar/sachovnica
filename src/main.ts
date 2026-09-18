const canvas = document.getElementById('chessboard')
const ctx = canvas.getContext('2d')

const squareSize = 100

for (let column = 0; column < 8; column++) {
    for (let row = 0; row < 8; row++) {
        if ((column + row) % 2 === 0) {
            ctx.fillStyle = 'white'
        } else {
            ctx.fillStyle = 'black'
        }
        ctx.fillRect(column * squareSize, row * squareSize, squareSize, squareSize)    }
}
