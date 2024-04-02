const fs = require("fs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
  console.log("Connected to database!");
});

let schema = new mongoose.Schema({
  name: String,
},{
    versionKey: false
});

let Model = mongoose.model("Model", schema);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/insert", async (req, res) => {
  console.log(req.body);
  let newDocument = new Model(req.body);
  try {
    await newDocument.save();
    console.log("Data saved successfully");
    res.json({ message: "Data received" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Error saving data" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
