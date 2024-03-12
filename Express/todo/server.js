const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.static("."));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/addData", (req, res) => {
  // let data;
  try {
    data = fs.readFileSync("todo.txt", "utf8");
    data = JSON.parse(data);
  } catch (err) {
    data = [];
  }
  data.push(req.body);
  fs.writeFileSync("todo.txt", JSON.stringify(data));
  res.status(200).json(req.body);
});
app.get("/showData", (req, res) => {
  let data;
  try {
    data = fs.readFileSync("todo.txt", "utf8");
    data = JSON.parse(data);
  } catch (err) {
    data = [];
  }
  res.status(200).json(data);
});
app.post("/deleteData", (req, res) => {
  let data;
  try {
    data = fs.readFileSync("todo.txt", "utf8");
    data = JSON.parse(data);
  } catch (err) {
    data = [];
  }
  let data1=data.filter((item)=>item.id!=req.body.id);
  fs.writeFileSync("todo.txt", JSON.stringify(data1));
  res.status(200).json(req.body);
});
app.post("/editData", (req, res) => {
  let data;
  try {
    data = fs.readFileSync("todo.txt", "utf8");
    data = JSON.parse(data);
  } catch (err) {
    data = [];
  }
  let index=data.findIndex((item)=>item.id==req.body.id);
  data[index]=req.body;
  fs.writeFileSync("todo.txt", JSON.stringify(data));
  res.status(200).json(req.body);
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
