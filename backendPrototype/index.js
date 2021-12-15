const ImageGenerator = require("./modules/ImageGenerator");
const path = require("path");
const process = require("process");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

io.on("connection", (socket) => {
  console.log("a user connected");
  var pixelArray = ImageGenerator.getPixelArray();
  io.emit("current image", { pixelArray: pixelArray });
  socket.on("disconnect", () => console.log("disconnected"));
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log("Initalizing Image");
  ImageGenerator.initializeImage();
  console.log("Image ready!");
});

var requestLoop = setInterval(async () => {
  var pixels = ImageGenerator.changePixels();
  io.emit("new pixel", { pixel: pixels[0], value: pixels[1] });
}, 1);
