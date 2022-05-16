"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  destination.init(
    {
      name: DataTypes.STRING,
      imagesPng: DataTypes.STRING,
      imagesWebp: DataTypes.STRING,
      description: DataTypes.STRING,
      distance: DataTypes.STRING,
      travel: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "destination",
    }
  );
  return destination;
};
