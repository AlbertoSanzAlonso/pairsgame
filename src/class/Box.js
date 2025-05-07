class Box {
    #col;
    #row;
    #color;
    #free;
    #open;
    #element;

    constructor(row, col, color, free=true, open=false) {
        this.#col = col;
        this.#row = row;
        this.#color = color;
        this.#free = free;
        this.#open = open;
    }

    get col() {
        return this.#col;
    }
    
    get row() {
        return this.#row;
    }

    get open() {
        return this.#open;
    }

    set open(choice) {
        this.#open = choice;
    }

    get color() {
        return this.#color;
    }

    get free() {
        return this.#free;
    }

    set element(element) {
        this.#element = element;
    }

    set free(newValue) {
        this.#free = newValue;
    }

    addEventClick() {
        if (this.#element) {
          this.#element.addEventListener("click", (e) => {
            if (!this.#open) {
              this.#element.style.backgroundColor = this.#color;
              this.#open = true;

            }
            return false;
          });
        }
      }

    resetColor() {
        this.#element.style.backgroundColor = 'black';
        this.#open = false;
    }
}

export default Box