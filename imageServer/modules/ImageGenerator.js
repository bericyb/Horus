class ImageGenerator {
  static pixelArray;
  static x = 3024;
  static y = 2618;

  static initializeImage() {
    let pixelArray = Array(this.x)
      .fill()
      .map(() => Array(this.y).fill(0));
  }

  static changePixels() {
    var x = Math.floor(Math.random() * 3025);
    var y = Math.floor(Math.random() * 2618);
    return [x, y];
  }

  static getPixelArray() {
    return pixelArray;
  }
}

module.exports = ImageGenerator;
