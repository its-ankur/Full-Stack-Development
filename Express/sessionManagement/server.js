const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const path = require("path");
const app = express();
app.use(cookieParser());
app.use(express.static("."));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    saveUninitialized: true,
    resave: false,
    secret: "qwertyuhgfdazxcvbn",
    cookie: { maxAge: 60000 },
  })
);

app.post("/login", (req, res) => {
  fs.readFile("user.txt", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    let users = [];
    try {
      users = JSON.parse(data);
    } catch (e) {
      console.error("Error parsing user data:", e);
    }

    const result = users.filter(
      (user) =>
        user.username === req.body.username &&
        user.password === req.body.password
    );

    if (result.length === 0) {
      res.status(401).send("Invalid username or password");
    } else {
      res.sendFile(path.join(__dirname, "Dashboard.html"));
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
