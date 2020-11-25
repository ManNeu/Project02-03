module.exports = function(sequelize, DataTypes) {
    var Recomendation = sequelize.define("Recomendation", {
      country_id: DataTypes.STRING,
      disease_id: DataTypes.INTEGER,
      priority: DataTypes.STRING
    }, {
      timestamps: false
    });
    return Recomendation;
  };
  