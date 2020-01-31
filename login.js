var express = require("express");
var app = express();
var cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

const SECRETKEY = "stalwart";

const verifyTheToken = (req, res, next) => {
  const bearer = req.header["authorization"];
  if (bearer) {
    const bearerToken = bearer.split(" ");
    const token = bearerToken[1];
    jwt.verify(token, SECRETKEY, (err, data) => {
      if (err) {
        res.sendStatus(403);
      } else {
        req.userData = data;
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
};

app.post("/delete-user", verifyTheToken, (req, res) => {
  console.log("user data block 2:", req.userData);
  res.send("user Deleted");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (username === "jaya" && password === "123") {
    const user = {
      username,
      age: 22
    };
    jwt.sign({ user }, SECRETKEY, (err, token) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({
          token
        });
      }
    });
  } else {
    res.sendStatus(403);
  }
});

app.listen(8080, () => console.log(`Example app listening on port 8080`));
/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiamF5YSIsImFnZSI6MjJ9LCJpYXQiOjE1Nzk4NDk5NTh9.nLTGuaIxoMwj8VMDzukSF9qyjk3-KQX4P2J9PFryVRM
*/
