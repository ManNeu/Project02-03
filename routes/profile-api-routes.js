// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Protection model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the protections
  app.get("/api/profile", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Profile.findAll({
      attributes: ['disease_id']
    }).then(function (dbProfile) {    // db.Profile.findAll({}) use SQL fiormula here to filter out data true/false
      // We have access to the Profiles as an argument inside of the callback function
      res.json(dbProfile);
    });
  });

  // // POST route for saving a new todo
  // app.post("/api/protections", function(req, res) {
  //   console.log(req.body);
  //   // create takes an argument of an object describing the item we want to
  //   // insert into our table. In this case we just we pass in an object with a text
  //   // and complete property (req.body)
  //   db.Protections.create({
  //     text: req.body.text,
  //     complete: req.body.complete
  //   }).then(function(dbProtection) {
  //     // We have access to the new todo as an argument inside of the callback function
  //     res.json(dbProtection);
  //   });
  // });

  // // DELETE route for deleting protections. We can get the id of the todo we want to delete from
  // // req.params.id
  // app.delete("/api/protection/:id", function(req, res) {

  // });

  // // PUT route for updating protections. We can get the updated todo from req.body
  // app.put("/api/protections", function(req, res) {

  // });
};
