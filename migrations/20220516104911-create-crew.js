"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("crews", {
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
      role: {
        type: Sequelize.STRING,
      },
      bio: {
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
    await queryInterface.dropTable("crews");
  },
};
