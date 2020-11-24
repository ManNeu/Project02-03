module.exports = function(sequelize, DataTypes) {
    var Country = sequelize.define("Country", {
      country: DataTypes.STRING,
      continent: DataTypes.STRING
    }, {
      timestamps: false
    });
    return Country;
  };
  

