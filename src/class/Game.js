import { shuffleArray } from "../utils/utils.js";
import Box from "./Box.js";

class Game {
    #rows;
    #cols;
    #idElement;
    #boxes;


    constructor(rows, cols, idElement='game') {
        this.#rows = rows;
        this.#cols = cols;
        this.#idElement = idElement;
        this.element = document.getElementById(this.#idElement);
        this.#boxes = [];
        this.createBoxes();
        this.paintBoxes();
        let rc = this.createRandomColors();
        
    }

    get cols() {
        return this.#cols;
    }
    
    get rows() {
        return this.#rows;
    }

    createRandomColors() {
        let randomColors = [];
        for (let index = 0; index < this.#cols * this.#rows / 2; index++) {
          let red = Math.floor(Math.random() * 256);
          let green = Math.floor(Math.random() * 256);
          let blue = Math.floor(Math.random() * 256);
          let color = `rgb(${red}, ${green}, ${blue})`;
          randomColors.push(color);
        }
        randomColors = [...randomColors, ...randomColors];
        shuffleArray(randomColors); 
        return randomColors
    }

    createBoxes() {
        let randomColors = this.createRandomColors();
        for (let row = 0; row < this.#rows; row++) {
            for (let col = 0; col < this.#cols; col++) {
                let color = randomColors.shift();
                let newBox = new Box(row, col, color);
                this.#boxes.push(newBox);
            }
            
        }
    }

    paintBoxes() {
        this.setCSSBoxTemplate()
        this.#boxes.map((box) => {
            let newBoxDiv = document.createElement('div');
            newBoxDiv.classList.add('box');
            newBoxDiv.dataset.col = box.col;
            newBoxDiv.dataset.row = box.row;
            this.element.appendChild(newBoxDiv);
        })
    }

    setCSSBoxTemplate() {
        this.element.style.gridTemplateColumns = `repeat(${this.cols}, 1fr)`
        this.element.style.gridTemplateRows = `repeat(${this.rows}, 1fr)`
    }

    static getRowsCols() {
        let rows = parseInt(prompt('Introduzca filas'));
        let cols = parseInt(prompt('Introduzca columnas'));
        while(rows*cols % 2 !== 0) {
            alert('El número total debe ser par, vuelva a introducir los datos.');
            rows = parseInt(prompt('Introduzca filas'));
            cols = parseInt(prompt('Introduzca columnas'));
        }

        return {
            'rows': rows,
            'cols': cols
        }
    }
}

export default Game