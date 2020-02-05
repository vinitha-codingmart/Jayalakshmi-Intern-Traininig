const Sequelize = require("sequelize");
const con = require("../database/connection");

module.exports = con.sequelize.define(
  "newtasks",
  {
    id1: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    uid: {
      type: Sequelize.INTEGER
    },
    task: Sequelize.STRING(300),

    isdel: {
      type: Sequelize.INTEGER
    },
    createdAt: Sequelize.DATE(),
    updatedAt: Sequelize.DATE(),
    deletedAt: Sequelize.DATE()
  },
  { paranoid: true }
);
