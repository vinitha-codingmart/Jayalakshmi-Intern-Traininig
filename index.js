var express = require("express");
var app = express();
var cors = require("cors");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "video"
});
connection.connect(function(err) {
  if (err) throw err;

  console.log("Connected..");
});
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
app.post("/", function(req, res) {
  console.log("video title", req.body.url1);
  console.log("video url", req.body.url);
  res.send(req.body.url);

  connection.query(
    "INSERT INTO names(name1,name2) values ('" +
      req.body.url +
      "','" +
      req.body.url1 +
      "')",
    function(err, result, fields) {
      if (err) throw err;
      console.log(result);
    }
  );
});

app.listen(5000, () => console.log(`Example app listening on port 5000`));
