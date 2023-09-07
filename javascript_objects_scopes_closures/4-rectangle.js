class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0) {
      // Create an empty object if w or h is not a positive integer
      return {};
    }

    this.width = w;
    this.height = h;
  }

  print() {
    for (let i = 0; i < this.height; i++) {
      console.log("X".repeat(this.width));
    }
  }

  rotate() {
    // Swap the values of width and height
    [this.width, this.height] = [this.height, this.width];
  }

  double() {
    // Double the width and height of the rectangle
    this.width *= 2;
    this.height *= 2;
  }
}

module.exports = Rectangle;
