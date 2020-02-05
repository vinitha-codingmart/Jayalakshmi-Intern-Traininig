const Sequelize = require("sequelize");
const con = {};
const sequelize = new Sequelize("todos", "postgres", "abc123", {
  host: "localhost",
  dialect: "postgres",
  operatorAliases: false
});
con.sequelize = sequelize;
con.Sequelize = Sequelize;
module.exports = con;
//module.exports = sequelize;
//global.sequelize = sequelize;
