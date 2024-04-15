const express = require("express");
const app = express();
const server = require("http").createServer(app);
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1/socket")
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
let schema = new mongoose.Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);
let Model = mongoose.model("user", schema);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("."));
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  //users++;
  //console.log("a user connected");
  //socket.emit("message", "Hello from server");
  socket.on("connect", async () => {
    let d = await Model.find();
    socket.emit("message", d);
  });
  socket.on("message",async (data) => {
    let newDocument = new Model({ name: data });
    socket.emit("single", data);
    socket.broadcast.emit("single", data);
    try{
      await newDocument.save();
      console.log("Data saved successfully");
    }
    catch(error){
      console.error("Error saving data:", error);
    }
    
  });
  //socket.emit("message", `${users} users connected`);
  //io.socket.emit("message", `${users} users connected`);
  //io.sockets.emit("message", `${users} users connected`);
  //   setTimeout(() => {
  //     //socket.send("Hello from server"), 4000;
  //     socket.emit("message", "Hello from server");
  //   },3000);
  // socket.on("disconnect", () => {
  //   console.log("user disconnected");
  //   //users--;
  //   //io.sockets.emit("message", `${users} users connected`);
  //   socket.broadcast.emit("message", `${users} users connected`);
  // });
});

server.listen(3000);
