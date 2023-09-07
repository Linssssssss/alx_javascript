// Import the Square class from 5-square.js
const BaseSquare = require("./5-square");

class Square extends BaseSquare {
  constructor(size) {
    super(size); // Call the constructor of the BaseSquare class with the size argument
  }

  // Override the charPrint method
  charPrint(c) {
    if (c === undefined) {
      c = "X";
    }

    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
}

module.exports = Square;
