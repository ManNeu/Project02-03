const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  var Person = sequelize.define("Person", {
    fname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  Person.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Person.addHook("beforeCreate", user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return Person;
};
