const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./src/database/connection");
const Task = require("./src/models/Tasks");
const User = require("./src/models/User");
const Newtasks = require("./src/models/Newtasks");
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
app.post("/signup", (req, res) => {
  console.log(req.body);
  User.create({
    name1: req.body.name,
    email: req.body.email,
    password1: req.body.pass
  })
    .then(User => {
      res.status(200).send("success");
    })
    .catch(err => {
      res.send(err);
    });
});

app.post("/login", (req, res) => {
  User.findAll({
    where: {
      email: req.body.username
    }
  })
    .then(result => {
      console.log("This is the resultttttt:", result);
      res.send(result);
      // res.end();
    })
    .catch(err => {
      res.send(err);
    });
});

app.post("/add", (req, res) => {
  console.log(req.body);
  Newtasks.create({
    uid: req.body.uid,
    task: req.body.task,
    isdel: 0
  })
    .then(Task => {
      res.status(200).send("inserted");
    })
    .catch(err => {
      res.send(err);
    });
});

app.post("/data", (req, res) => {
  Newtasks.findAll({ where: { isdel: 0 } })
    .then(result => {
      console.log("This is the resultttttt:", result);
      res.send(result);
      // res.end();
    })
    .catch(err => {
      res.send(err);
    });
});

app.post("/profile", (req, res) => {
  Newtasks.findAll({
    where: {
      uid: req.body.id,
      isdel: 0
    }
  })
    .then(Task => {
      res.send(Task);
    })
    .catch(err => {
      res.send(err);
    });
});

app.post("/delete", (req, res) => {
  Newtasks.destroy({ where: { id1: req.body.delid } });
  Newtasks.update({ isdel: 1 }, { where: { id1: req.body.delid } });

  Newtasks.findAll({
    where: {
      uid: req.body.id,
      isdel: 0
    }
  })
    .then(Task => {
      res.send(Task);
    })
    .catch(err => {
      res.send(err);
    });
});

app.post("/dellist", (req, res) => {
  Newtasks.findAll({
    paranoid: false
  })
    .then(Task => {
      res.send(Task);
    })
    .catch(err => {
      res.send(err);
    });
});
//require("./src/bootstrap");

// const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "todo",
//   password: "abc123",
//   port: 5432
// });

// app.post("/signup", function(req, res) {
//   console.log("Inserting into userdetails!");
//   console.log("This is the name:", req.body.name);
//   pool.query(
//     "INSERT INTO userdetails(name1,email,password1) values ('" +
//       req.body.name +
//       "','" +
//       req.body.email +
//       "','" +
//       req.body.pass +
//       "');",
//     function(err, result, fields) {
//       // if (err) throw err;
//       console.log(result);
//     }
//   );

//   res.send("Successfully registered!!!");
// });

// app.post("/login", function(req, res) {
//   const user = req.body.username;
//   const pass = req.body.password;
//   // const sample = "admin";
//   console.log("Username:", req.body.username);
//   console.log("Password:", req.body.password);

//   pool.query(
//     `SELECT * FROM userdetails WHERE email='${user}';`,
//     function(err, row, fields) {
//       if (err) {
//         console.log("error occured!!", err);
//       } else {
//         console.log("The solution is:", row);
//         res.send(row);
//         // if (row.length > 0)
//         //   if (row[0].password1 == pass) {
//         //     console.log("this is the password:", row[0].password);
//         //     res.send(row);
//         //   } else {
//         //     res.send("Password Mismatch!!!");
//         //   }
//       }
//       // res.send("Signup Please!");
//     }
//     //console.log("Data fetched from database", row);
//   );
// });

// app.post("/add", function(req, res) {
//   console.log("Inserting into headings!", req.body.task);
//   console.log("Heyyyy this is the user id", req.body.uid);
//   pool.query(
//     "INSERT INTO task(uid,task,isdel) values ('" +
//       req.body.uid +
//       "','" +
//       req.body.task +
//       "','" +
//       0 +
//       "');",
//     function(err, result, fields) {
//       // if (err) throw err;
//       console.log(result);
//     }
//   );

//   res.send("Successfully insterted the title");
// });

// app.post("/data", function(req, res) {
//   console.log("Hello", req.id1);
//   pool.query(`SELECT * FROM task WHERE isdel='${0}';`, function(
//     err,
//     row,
//     fields
//   ) {
//     if (err) {
//       console.log("error occured!!", err);
//     } else {
//       console.log("The solution is:", row);
//       res.send(row);
//     }
//   });
// });

// app.post("/profile", function(req, res) {
//   console.log("Hello profile", req.body.id);
//   pool.query(
//     `SELECT * FROM task WHERE uid='${req.body.id}' AND isdel='${0}';`,
//     function(err, row, fields) {
//       if (err) {
//         console.log("error occured!!", err);
//       } else {
//         console.log("The solution is:", row);
//         res.send(row);
//       }
//     }
//   );
// });

// app.post("/dellist", function(req, res) {
//   console.log("Hello profile", req.body.id);
//   pool.query(`SELECT * FROM task WHERE isdel='${1}';`, function(
//     err,
//     row,
//     fields
//   ) {
//     if (err) {
//       console.log("error occured!!", err);
//     } else {
//       console.log("The solution is:", row);
//       res.send(row);
//     }
//   });
// });

// app.post("/delete", function(req, res) {
//   console.log("Hello deleted profile", req.body.id);

//   pool.query(`UPDATE task SET isdel='${1}' WHERE id1='${req.body.delid}';`);

//   pool.query(
//     `SELECT * FROM task WHERE uid='${req.body.id} AND isdel='${0}';`,
//     function(err, row, fields) {
//       if (err) {
//         console.log("error occured!!", err);
//       } else {
//         console.log("The solution is:", row);
//         res.send(row);
//       }
//     }
//   );
// });

app.listen(7000, () => console.log(`Example app listening on port 7000`));
