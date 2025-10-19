// Practice #1

class Game {
  constructor() {
    this.try = 0;
    this.mas = {};
  }

  click(x, y) {
    if (this.try % 2 != 0) {
      if ((this.mas["A" + x + "" + y] = null)) this.mas["A" + x + "" + y] = 1;
      else {
        console.log("Клеточка уже занята");
        return;
      }
    } else if (this.mas["A" + x + "" + y] == null) {
      this.mas["A" + x + "" + y] = 0;
    } else {
      console.log("Клеточка уже занята");
      return;
    }

    // Проверка победителя
    this.try++;
    if (
      this.mas["A00"] === this.mas["A01"] &&
      this.mas["A00"] === this.mas["A02"] &&
      this.mas["A00"] !== undefined
    ) {
      console.log(`Игрок ${this.mas["A00"] + 1} выиграл!`);
    } else if (
      this.mas["A10"] === this.mas["A11"] &&
      this.mas["A10"] === this.mas["A12"] &&
      this.mas["A10"] !== undefined
    ) {
      console.log(`Игрок ${this.mas["A10"] + 1} выиграл!`);
    } else if (
      this.mas["A20"] === this.mas["A21"] &&
      this.mas["A20"] === this.mas["A22"] &&
      this.mas["A20"] !== undefined
    ) {
      console.log(`Игрок ${this.mas["A20"] + 1} выиграл!`);
    } else if (
      this.mas["A00"] === this.mas["A10"] &&
      this.mas["A00"] === this.mas["A20"] &&
      this.mas["A00"] !== undefined
    ) {
      console.log(`Игрок ${this.mas["A00"] + 1} выиграл!`);
    } else if (
      this.mas["A01"] === this.mas["A11"] &&
      this.mas["A01"] === this.mas["A21"] &&
      this.mas["A01"] !== undefined
    ) {
      console.log(`Игрок ${this.mas["A01"] + 1} выиграл!`);
    } else if (
      this.mas["A02"] === this.mas["A12"] &&
      this.mas["A02"] === this.mas["A22"] &&
      this.mas["A02"] !== undefined
    ) {
      console.log(`Игрок ${this.mas["A02"] + 1} выиграл!`);
    } else if (
      this.mas["A00"] === this.mas["A11"] &&
      this.mas["A00"] === this.mas["A22"] &&
      this.mas["A00"] !== undefined
    ) {
      console.log(`Игрок ${this.mas["A00"] + 1} выиграл!`);
    } else if (
      this.mas["A02"] === this.mas["A11"] &&
      this.mas["A02"] === this.mas["A20"] &&
      this.mas["A02"] !== undefined
    ) {
      console.log(`Игрок ${this.mas["A02"] + 1} выиграл!`);
    }
  }
}

const game = new Game();

game.click(0, 0); // X
game.click(1, 0); // O
game.click(0, 1); // X
game.click(1, 1); // O
game.click(2, 2); // X
game.click(1, 2); // O
