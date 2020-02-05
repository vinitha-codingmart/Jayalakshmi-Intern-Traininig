"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
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
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("user");
  }
};
