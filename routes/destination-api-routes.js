// *********************************************************************************
// profile-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Protection model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  // GET route for getting all of the protections
  app.get("/api/recomendation", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Recomendation.findAll({
      attributes: ['country_id', 'disease_id', 'priority'],
      where: {
        priority: "all",
        country_id: "angola"
      },
      include: [db.Disease]
    }).then(function (dbRecomendation) {    // db.Profile.findAll({}) use SQL fiormula here to filter out data true/false
      // We have access to the Profiles as an argument inside of the callback function
      console.log(dbRecomendation);
      res.json(dbRecomendation);
    });
  });

  app.get("/api/recomendation", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Recomendation.findAll({
      attributes: ['country_id', 'disease_id', 'priority'],
      where: {
        priority: "most",
        country_id: "angola"
      },
      include: [db.Disease]
    }).then(function (dbRecomendation) {    // db.Profile.findAll({}) use SQL fiormula here to filter out data true/false
      // We have access to the Profiles as an argument inside of the callback function
      console.log(dbRecomendation);
      res.json(dbRecomendation);
    });
  });

  app.get("/api/recomendation", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Recomendation.findAll({
      attributes: ['country_id', 'disease_id', 'priority'],
      where: {
        priority: "some",
        country_id: "angola"
      },
      include: [db.Disease]
    }).then(function (dbRecomendation) {    // db.Profile.findAll({}) use SQL fiormula here to filter out data true/false
      // We have access to the Profiles as an argument inside of the callback function
      console.log(dbRecomendation);
      res.json(dbRecomendation);
    });
  });

 // GET route for getting all of the recoms
  app.get("/api/disease", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Disease.findAll({
      attributes: ['disease', 'id']
    }).then(function (dbDisease) {    // db.Profile.findAll({}) use SQL fiormula here to filter out data true/false
      // We have access to the Profiles as an argument inside of the callback function
      console.log(dbDisease);
      res.json(dbDisease);
    });
  });
};