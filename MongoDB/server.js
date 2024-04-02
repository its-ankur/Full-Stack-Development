const express = require("express");
const client = require("mongodb").MongoClient;
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const mongoUrl =
  "mongodb+srv://ankur1037:Ankurqwerty2003@cluster0.apokfz1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let dbInstance;
client
  .connect(mongoUrl)
  .then((server) => {
    dbInstance = server.db("Demo");
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/getData", (req, res) => {
  dbInstance
    .collection("students")
    .find({})
    .toArray()
    .then((data) => {
      console.log(data);
      res.send(data);
    });
});

app.get("/saveData", (req, res) => {
  let obj = {};
  obj.name = req.query.name;
  dbInstance
    .collection("students")
    .insertOne(obj)
    .then((response) => {
      res.redirect("/getData");
    });
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
