export default class ImageGenerator {
  static pixelArray = [[]];
  static x = 3024;
  static y = 2618;

  static initializeImage() {
    let pixelArray = Array(x)
      .fill()
      .map(() => Array(y).fill(0));
  }

  static changePixel(x, y) {
    pixelArray[x][y] = Math.floor(Math.random() * 256);
  }
}
