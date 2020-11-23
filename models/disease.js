module.exports = function(sequelize, DataTypes) {
    var Disease = sequelize.define("Disease", {
      disease: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return Disease;
  };
  