"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("destinations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      imagesPng: {
        type: Sequelize.STRING,
      },
      imagesWebp: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      distance: {
        type: Sequelize.STRING,
      },
      travel: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("destinations");
  },
};