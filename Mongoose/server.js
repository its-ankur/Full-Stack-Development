const express = require("express");
const app = express();
const UserModel = require("./models/UserModel");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/EC")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => {
    console.log("Error connecting to database");
    console.log(e);
  });

app.get("/insertRecord",(req,res)=>{
    let obj=[];
    obj.email="test@gmail.com",
    obj.password="123456";
    let user=new UserModel(obj);
    user.save().then((data)=>{
        res.send(data);
    }).catch((e)=>{
        res.send(e);
    });
});
app.listen(3000, () => console.log("Server is running on port 3000"));