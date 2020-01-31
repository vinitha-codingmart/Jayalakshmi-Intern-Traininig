var express = require("express");
var app = express();
var cors = require("cors");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "userdetails"
});
connection.connect(function(err) {
  if (err) throw err;

  console.log("Connected..");
});
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 1000000
  })
);

app.use(bodyParser.json());
app.use(cors());

app.post("/signup", function(req, res) {
  const usr = req.body.username;
  const pass = req.body.password;
  const role = req.body.role;
  console.log("this is the role of the user:");
  var flag = 0;
  const sample = "admin";
  if (usr === sample) {
    flag = 1;
  } else {
    flag = 0;
  }
  connection.query(
    "INSERT INTO details(usr,pass,c) values ('" +
      req.body.username +
      "','" +
      req.body.password +
      "','" +
      flag +
      "')",
    function(err, result, fields) {
      if (err) throw err;
      console.log(result);
    }
  );
  connection.query(
    "INSERT INTO role(role) values ('" + req.body.role + "')",
    function(err, result, fields) {
      if (err) throw err;
      console.log(result);
    }
  );
  res.send("Successfully registered!!!");
});

app.post("/login", function(req, res) {
  const user = req.body.username;
  const pass = req.body.password;
  // const sample = "admin";
  console.log("Username:", req.body.username);
  console.log("Password:", req.body.password);

  connection.query("SELECT * FROM details WHERE usr=?", [user], function(
    err,
    row,
    fields
  ) {
    if (err) {
      console.log("error occured!!", err);
    } else {
      console.log("The solution is:", row);
      if (row.length > 0) {
        var flag;
        if (row[0].pass == pass) {
          flag = "1";
          console.log("this is the password:", row[0].pass);
          res.send(row);
        } else {
          flag = "0";
          res.send("Password Mismatch!!!");
        }
      }
      // res.send("Signup Please!");
    }
    //console.log("Data fetched from database", row);
  });
});

app.post("/upload", function(req, res) {
  console.log("hello everyone");
  console.log("Name:", req.body.name);
  // console.log("URL:", req.body.url);
  console.log("id:", req.body.id);
  //const vname = req.body.name;
  //const vurl = req.body.url;
  const uid = req.body.id;

  connection.query(
    "INSERT INTO videos(name,url,id) values('" +
      req.body.name +
      "','" +
      req.body.url +
      "','" +
      req.body.id +
      "')",
    function(err, result, fields) {
      if (err) throw err;
      console.log(result);
    }
  );
  connection.query("SELECT * FROM videos WHERE id=?", [uid], function(
    err,
    row,
    fields
  ) {
    if (err) {
      console.log("error occured!!", err);
    } else {
      console.log("The solution is:", row);
      res.send(row);
    }
  });
});

app.post("/loader", function(req, res) {
  //const vname = req.body.name;
  //const vurl = req.body.url;
  const id = req.body.id1;
  const c = req.body.c;
  console.log("not displaying", req.body.id1);
  if (c === 1) {
    connection.query("SELECT * FROM videos", function(err, row, fields) {
      if (err) {
        console.log("error occured!!", err);
      } else {
        //console.log("The solution is:", row);
        res.send(row);
      }
    });
  } else {
    connection.query("SELECT * FROM videos WHERE id=?", [id], function(
      err,
      row,
      fields
    ) {
      if (err) {
        console.log("error occured!!", err);
      } else {
        //console.log("The solution is:", row);
        res.send(row);
      }
    });
  }
});

app.listen(7000, () => console.log(`Example app listening on port 7000`));
