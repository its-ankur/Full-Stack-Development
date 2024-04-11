const express=require("express");
const app=express();
app.use(express.static("."));

const server=require("http").createServer(app);
const io=require("socket.io")(server);
let roomno=1;
let users=0;
io.on("connection",(socket)=>{
    socket.join("R"+roomno);
    socket.emit("mymessage",`you are in room no ${roomno}`);

    users++;
    if(users==2)
    {
        roomno++;
        users=0;
    }

})
// const customio=io.of("/custom-namespace")
// customio.on("connection",(socket)=>{
//     console.log("User connected..")
//     socket.emit("mymessage","Welcome to sockets");

// })

// const scustomio=io.of("/custom-support")
// scustomio.on("connection",(socket)=>{
//     console.log("User connected..")
//     socket.emit("mymessage","Welcome to Suppport sockets");

// })

app.get("/sendMessage",(req,res)=>{
    io.sockets.in(req.query.room).emit("mymessage",req.query.message);

})
server.listen(3000);

