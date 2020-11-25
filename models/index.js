"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// JOINING TABLES FOR PROFILE
db.Disease.hasMany(db.Profile, {foreignKey: 'disease_id'})
db.Profile.belongsTo(db.Disease, {foreignKey: 'disease_id'})
// Post.find({ where: { ...}, include: [Disease]})

// JOINING TABLES FOR DESTINATIONS
db.Disease.hasMany(db.Recomendation, {foreignKey: 'disease_id'})
db.Recomendation.belongsTo(db.Disease, {foreignKey: 'disease_id'})

// db.Disease.belongsToMany(db.Profile, {through: 'Profile', foreignKey: 'disease_id'});
// db.Profile.belongsToMany(db.Disease, {through: 'Profile', foreignKey: 'person_id'});


// var Disease = sequelize.define('disease', {foreignKey: 'disease_id'})
// var Profile = sequelize.define('proflie', {foreignKey: 'profile_id'})
//  // OK. Now things get more complicated (not really visible to the user :)).
// // First let's define a hasMany association
// Profile.hasMany(Disease, {as: 'vaccine'})

// sequelize.sync({force: true
// })

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
    