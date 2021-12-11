const ImageGenerator = require("./modules/ImageGenerator");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log("Initalizing Image");
  ImageGenerator.initializeImage();
  console.log("Image ready!");
});

var requestLoop = setInterval(async () => {
  var pixels = ImageGenerator.changePixels();
  io.emit("new pixel", { x: pixels[0], y: pixels[1] });
  console.log("new Pixel!");
}, 20);
