const express = require("express");
var mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "pug");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "blogs"
});
connection.connect(function(err) {
  if (err) throw err;

  console.log("Connected..");
});
app.get("/", function(req, res) {
  res.sendFile("index.html", {
    root: __dirname
  });
});

app.get("/users", function(req, res) {
  connection.query("SELECT * FROM users", function(err, rows, fields) {
    if (err) throw err;
    res.render("users", {
      title: "User Details",
      items: rows
    });
  });
});

app.post("/submit", function(req, res) {
  console.log(req.body);

  var sql =
    "insert into users values(null,'" +
    req.body.name +
    "','" +
    req.body.email +
    "'," +
    req.body.mobile +
    ")";
  connection.query(sql, function(err) {
    if (err) throw err;
    res.render("index", {
      title: "Data Saved",
      message: "Data Saved successfully"
    });
  });

  //connection.end();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
