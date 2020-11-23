// *********************************************************************************
// profile-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Protection model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the protections
  app.get("/api/profile", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Profile.findAll({
      attributes: ['disease_id']
    }).then(function(dbProfile) {    // db.Profile.findAll({}) use SQL fiormula here to filter out data true/false
      // We have access to the Profiles as an argument inside of the callback function
      console.log(dbProfile);
      res.json(dbProfile);
    });
  });
};
