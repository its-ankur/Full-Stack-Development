 const express=require("express");
 const app=express();
//const app=require("express")();

// const http=require("http");
// const server=http.createServer(app);
const server=require("http").createServer(app);
app.use(express.static("."));
// const sockets=require("socket.io");
// const io=sockets(server);
const io=require("socket.io")(server);
//namespace /

let users=0;
io.on("connection",(socket)=>{
    users++;
    console.log("A User Connected");
    socket.emit("mymessage","Welcome to Chat Server...");
    socket.broadcast.emit("mymessage",`${users} user connected`)
    //socket.emit("mymessage",`${users} user connected`);
    //io.sockets.emit("mymessage",`${users} user connected`);

    // setTimeout(()=>{

    
    // //socket.send("Welcome from Server...");
    //     socket.emit("mymessage","Welcome from server");

    // },3000);

    socket.on("disconnect",()=>{
        users--;
        io.sockets.emit("mymessage",`${users} user connected`);

        console.log("User Disconnected");

    })
})


server.listen(3000);
