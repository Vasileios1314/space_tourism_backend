"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class crew extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  crew.init(
    {
      name: DataTypes.STRING,
      role: DataTypes.STRING,
      bio: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "crew",
    }
  );
  return crew;
};
