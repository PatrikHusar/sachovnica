"use strict";
const canvas = document.getElementById('chessboard');
const ctx = canvas.getContext('2d');
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const startingDis = 50;
const squareSize = 70;
for (let column = 0; column < 8; column++) {
    for (let row = 0; row < 8; row++) {
        if ((column + row) % 2 === 0) {
            ctx.fillStyle = 'white';
        }
        else {
            ctx.fillStyle = 'black';
        }
        ctx.fillRect(startingDis + column * squareSize, startingDis + row * squareSize, squareSize, squareSize);
    }
}
ctx.fillStyle = 'black';
for (let row = 0; row < 8; row++) {
    ctx.fillText(letters.at(row), startingDis + row * squareSize + squareSize / 2, squareSize * 8 + startingDis * 1.5);
}
