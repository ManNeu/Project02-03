"use strict";

const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

const basename = path.basename(module.filename);
const config = {
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'my_database_name',
  host: process.env.DB_HOSTNAME || 'localhost',
  port: process.env.DB_PORT || 3306,
};
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: 'mysql',
});

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


// JOINING TABLES FOR PROFILE
db.Disease.hasMany(db.Profile, { foreignKey: 'disease_id' })
db.Profile.belongsTo(db.Disease, { foreignKey: 'disease_id' })
// Post.find({ where: { ...}, include: [Disease]})

// JOINING TABLES FOR DESTINATIONS
db.Disease.hasMany(db.Recomendation, { foreignKey: 'disease_id' })
db.Recomendation.belongsTo(db.Disease, { foreignKey: 'disease_id' })

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
