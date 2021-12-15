class ImageGenerator {
  static x = 1080;
  static y = 1080;
  static numPixels = 1166400;
  static numChannels = 4665600;
  // static x = 2;
  // static y = 2;
  // static numChannels = 16;
  // static numPixels = 4;
  // static step = 0;

  static initializeImage() {
    this.pixelArray = Array(this.numChannels).fill(144);
    console.log(this.pixelArray);
  }
  static changePixels() {
    var pixelPos = Math.floor(Math.random() * this.numPixels);
    var value = Math.floor(Math.random() * 256);
    this.pixelArray[pixelPos * 4] = value;
    this.pixelArray[pixelPos * 4 + 1] = value;
    this.pixelArray[pixelPos * 4 + 2] = value;
    this.pixelArray[pixelPos * 4 + 3] = 255;
    return [pixelPos, value];
  }

  static getPixelArray() {
    const array = this.pixelArray;
    return array;
  }
}

module.exports = ImageGenerator;
