const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  class Disease extends Model {}
  Disease.init(
    {
      disease: DataTypes.STRING,
      
      // complete: DataTypes.BOOLEAN,
    },
    {
      timestamps: false,
      sequelize,
      modelName: "Disease",
    }
  );

  return Disease;
};
