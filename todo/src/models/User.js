const Sequelize = require("sequelize");
const con = require("../database/connection");

module.exports = con.sequelize.define("users", {
  id1: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name1: Sequelize.STRING(300),
  email: Sequelize.STRING(30),
  password1: Sequelize.STRING(30),
  createdAt: Sequelize.DATE(),
  updatedAt: Sequelize.DATE()
});
