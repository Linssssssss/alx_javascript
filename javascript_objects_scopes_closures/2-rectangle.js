#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || typeof w !== "number" || typeof h !== "number") {
      throw new Error("Width and height must be positive integers");
    }

    this.width = w;
    this.height = h;
  }
}

module.exports = Rectangle;
