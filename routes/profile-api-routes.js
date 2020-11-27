// ************ *********************************************************************
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
  app.get("/api/protection", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Profile.findAll({
      attributes: [ 'id', 'disease_id', 'vaxdate', 'protected'],
      where: {
        protected: 1,
        // person_id: "2"
    },
      include: [db.Disease]
    }).then(function (dbProfile) {    // db.Profile.findAll({}) use SQL fiormula here to filter out data true/false
      // We have access to the Profiles as an argument inside of the callback function
      console.log(dbProfile);
      res.json(dbProfile);
    });
  });

  // GET route for getting all of the shopping list items
  app.get("/api/profile", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Profile.findAll({
      attributes: [ 'id', 'disease_id', 'person_id', 'vaxdate', 'protected'],
      where: {
        protected: 0,
        // person_id: "2"
        // person_id: req.params.id
    },
      include: [db.Disease]
    }).then(function (dbProfile) {    // db.Profile.findAll({}) use SQL fiormula here to filter out data true/false
      // We have access to the Profiles as an argument inside of the callback function
      console.log(dbProfile);
      res.json(dbProfile);
    });
  });

  // DELETE FROM SHOPPING LIST
  app.delete("/api/profiles/:id", function(req, res) {
    // console.log(req.params.id);
    db.Profile.destroy({
      where: {
        id: req.params.id
        // id: shopping.Disease.id
      }
    }).then(function(dbProfile) {
      res.json(dbProfile);
    })
    // .catch(err){
    //   res.403
    // }
     
  });


// app.delete("/api/disease", function (req, res) {
//   // findAll returns all entries for a table when used with no options
//   db.Disease.findAll({
//     attributes: ['disease']
//   }).then(function (dbDisease) {    // db.Profile.findAll({}) use SQL fiormula here to filter out data true/false
//     // We have access to the Profiles as an argument inside of the callback function
//     console.log(dbDisease);
//     res.json(dbDisease);
//   });
// });

// router.delete("/api/profile", function(req, res) {
//   var listItem = "id = " + req.params.id;

//   app.delete(listItem, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });


};