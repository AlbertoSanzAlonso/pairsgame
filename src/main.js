import '../sass/main.scss'
import Game from './class/Game'
import Box from './class/Box'
import Timer from './class/Timer';

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', (e) => {
    Game.resetGame();
})

let timer = new Timer('timer');
let data = Game.getRowsCols();
let game = new Game(data.rows, data.cols, 'game')
// let game2 = new Game(data.rows, data.cols, 'game2')


