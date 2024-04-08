const express = require("express");
const app = express();
const server = require("http").createServer(app);
app.use(express.static("."));
const io = require("socket.io")(server);
let users=0;
io.on("connection", (socket) => {
    users++;
  console.log("a user connected");
  socket.emit("message", "Hello from server");
  socket.broadcast.emit("message", `${users} users connected`);
  //socket.emit("message", `${users} users connected`);
  //io.socket.emit("message", `${users} users connected`);
    //io.sockets.emit("message", `${users} users connected`);
//   setTimeout(() => {
//     //socket.send("Hello from server"), 4000;
//     socket.emit("message", "Hello from server");
//   },3000);
  socket.on("disconnect", () => {
    console.log("user disconnected");
    users--;
    io.sockets.emit("message", `${users} users connected`);
  });
});

server.listen(3000);
