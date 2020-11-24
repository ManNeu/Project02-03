module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define("Profile", {
    person_id: DataTypes.INTEGER,
    disease_id: DataTypes.INTEGER,
    protected: DataTypes.BOOLEAN,
    vaxdate: DataTypes.DATE,
    expdate: DataTypes.DATE,
    // // Attempt to reformat date
    // expdate: {
    //   type: DataTypes.DATEONLY,
    //   get: function() {
    //     return moment.utc(this.getDataValue('regDate')).format('DD-MM-YYYY');
    //   }
    // },
    lifetime: DataTypes.BOOLEAN
  }, {
    timestamps: false
  });
  return Profile;
};

