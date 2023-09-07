// Import the Rectangle class from 4-rectangle.js
const Rectangle = require("./4-rectangle");

class Square extends Rectangle {
  constructor(size) {
    super(size, size); // Call the constructor of the Rectangle class with the size argument for both width and height
  }

  // Additional methods specific to the Square class
  double() {
    this.width *= 2;
    this.height *= 2;
  }
}

module.exports = Square;
