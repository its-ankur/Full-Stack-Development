const fs = require("fs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.set("view engine", "ejs");
mongoose
  .connect(
    "mongodb://127.0.0.1:27017/test",
  )
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
let Model = mongoose.model("mode", schema);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", async (req, res) => {
  let allData = await Model.find();
  res.render("index", { data: allData });
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
