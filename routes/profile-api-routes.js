// ************ *********************************************************************
// profile-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Protection model
var db = require("../models");
const passport = require("../config/passport");
const moment = require("moment");



// Routes
// =============================================================
module.exports = function (app) {
  // GET route for getting all of the protections
  app.get("/api/protection", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Profile.findAll({
      attributes: ["id", "disease_id", "vaxdate", "protected"],
      where: {
        protected: 1,
        // person_id: "10"
      },
      order: [
        ['vaxdate', 'DESC'],
        ['id', 'DESC'],
    ],
      include: [db.Disease],
      // include: [db.Person],
    }).then(function (dbProfile) {
      // db.Profile.findAll({}) use SQL fiormula here to filter out data true/false
      // We have access to the Profiles as an argument inside of the callback function
      console.log(dbProfile);
      res.json(dbProfile);
    });
  });

  // GET route for getting all of the shopping list items
  app.get("/api/profile", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Profile.findAll({
      attributes: ["id", "disease_id", "person_id", "vaxdate", "protected"],
      where: {
        protected: 0,
        // person_id: "10"
        // person_id: req.params.id
      },
      include: [db.Disease],
    }).then(function (dbProfile) {
      // db.Profile.findAll({}) use SQL fiormula here to filter out data true/false
      // We have access to the Profiles as an argument inside of the callback function
      console.log(dbProfile);
      res.json(dbProfile);
    });
  });

  app.post("/api/profile", function (req, res) {
    console.log(req.body);
    db.Profile.create({
      person_id: req.body.person_id,
      disease_id: req.body.disease_id,
      protected: req.body.protected,
    }).then(function (diseaseList) {
      res.json(diseaseList);
    });
  });

  // DELETE FROM SHOPPING LIST
  app.delete("/api/profiles/:id", function (req, res) {
    console.log(req.params.id);
    db.Profile.destroy({
      where: {
        id: req.params.id,
        // id: shopping.Disease.id
      },
    }).then(function (dbProfile) {
      res.json(dbProfile);
    });
    // .catch(err){
    //   res.403
    // }
  });

  app.put("/api/profiles/:id", function (req, res) {
    const now = moment();
    const date = now.format("YYYY-MM-DD");
    db.Profile.update(
      {
        protected: 1,
        vaxdate: date
      },
      {
        where: {
          id: req.params.id,
        },
        // }).update({vaxdate: Sequelize.literal('CURRENT_TIMESTAMP')}, {
        // }).update({vaxdate: Sequelize.literal('CURRENT_TIMESTAMP')}, {
        //   where: {
        //     id: req.params.id,
        //   },
      }
    ).then(function (dbProfile) {
      res.json(dbProfile);
    });
  });

  // Sequelize.literal('CURRENT_TIMESTAMP'),
};
