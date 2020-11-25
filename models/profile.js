module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define("Profile", {
    person_id: DataTypes.INTEGER,
    disease_id: DataTypes.INTEGER,
    protected: DataTypes.BOOLEAN,
    vaxdate: DataTypes.DATE,
    expdate: DataTypes.DATE,
    lifetime: DataTypes.BOOLEAN
  }, {
    timestamps: false
  });
  return Profile;
};

