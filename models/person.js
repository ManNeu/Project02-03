module.exports = function(sequelize, DataTypes) {
    var Person = sequelize.define("Person", {
      fname: DataTypes.STRING,
      lname: DataTypes.STRING,
      email: DataTypes.STRING,
      pass: DataTypes.STRING
    });
    return Person;
  };
  