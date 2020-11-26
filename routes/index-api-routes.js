// *********************************************************************************
// index-api-routes.js - this file offers a set of routes for displaying data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Protection model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the countries
  app.get("/api/asia", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Profile.findAll({
      attributes: ['country', 'continent'],
      where: {
        continent: 'asia'
    },
    }).then(function (dbProfile) {   
      // We have access to the Profiles as an argument inside of the callback function
      console.log(dbProfile);
      res.json(dbProfile);
    });
  });

  app.get("/api/country", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Profile.findAll({
      attributes: ['country', 'continent'],
    }).then(function (dbProfile) {   
      // We have access to the Profiles as an argument inside of the callback function
      console.log(dbProfile);
      res.json(dbProfile);
    });
  });

  app.get("/api/disease", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Disease.findAll({
      //attributes: ['disease', 'id']
    }).then(function (dbDisease) {   
      // We have access to the Profiles as an argument inside of the callback function
      console.log(dbDisease);
      res.json(dbDisease);
    });
  });

};