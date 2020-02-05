"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tasks", {
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
      updatedAt: Sequelize.DATE()
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tasks");
  }
};
