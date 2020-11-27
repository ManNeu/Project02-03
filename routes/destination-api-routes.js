module.exports = function (app) {

  // var userChoiceCountry;
  // window.onload = function () {
  // var userChoiceCountry = localStorage.getItem("country");
  // $(".contInfo h2").append(userChoiceCountry);
  // };
  // // GET route for getting all of the protections
  // app.get("/api/destinations", function (req, res) {
  //   // findAll returns all entries for a table when used with no options
  //   db.Profile.findAll({
  //     attributes: ['country_id', 'disease_id', 'priority'],
  //     where: {
  //       protected: 1
  //   },
  //     include: [db.Disease]
  //   }).then(function (dbProfile) {    // db.Profile.findAll({}) use SQL fiormula here to filter out data true/false
  //     // We have access to the Profiles as an argument inside of the callback function
  //     console.log(dbProfile);
  //     res.json(dbProfile);
  //   });
  // });

  var db = require("../models");

  // GET route for getting all of the recomendation for All travellers
  app.get("/api/recomendationAll/:country", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Recomendation.findAll({
      attributes: ['country_id', 'disease_id', 'priority'],
      where: {
        priority: "all",
        country_id: req.params.country
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
      attributes: ['disease']
    }).then(function (dbDisease) {    // db.Profile.findAll({}) use SQL fiormula here to filter out data true/false
      // We have access to the Profiles as an argument inside of the callback function
      console.log(dbDisease);
      res.json(dbDisease);
    });
  });

  app.get("/api/recomendationMost/:country", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Recomendation.findAll({
      attributes: ['country_id', 'disease_id', 'priority'],
      where: {
        priority: "most",
        country_id: req.params.country
      },
      include: [db.Disease]
    }).then(function (dbRecomendation) {    // db.Profile.findAll({}) use SQL fiormula here to filter out data true/false
      // We have access to the Profiles as an argument inside of the callback function
      console.log(dbRecomendation);
      res.json(dbRecomendation);
    });
  });

  
  
  
  
  
  // app.get("/api/recomendation", function (req, res) {

  //   // findAll returns all entries for a table when used with no options
  //   db.Recomendation.findAll({
  //     attributes: ['country_id', 'disease_id', 'priority'],
  //     where: {
  //       priority: "most",
  //       country_id: req.params.country
  //     },
  //     include: [db.Disease]
  //   }).then(function (dbRecomendation) {    // db.Profile.findAll({}) use SQL fiormula here to filter out data true/false
  //     // We have access to the Profiles as an argument inside of the callback function
  //     console.log(dbRecomendation);
  //     res.json(dbRecomendation);
  //   });
  // });

  // // GET route for getting all of the recoms
  // app.get("/api/disease", function (req, res) {
  //   // findAll returns all entries for a table when used with no options
  //   db.Disease.findAll({
  //     attributes: ['disease']
  //   }).then(function (dbDisease) {    // db.Profile.findAll({}) use SQL fiormula here to filter out data true/false
  //     // We have access to the Profiles as an argument inside of the callback function
  //     console.log(dbDisease);
  //     res.json(dbDisease);
  //   });
  // });

//   app.get("/api/recomendation", function (req, res) {
//     // findAll returns all entries for a table when used with no options
//     db.Recomendation.findAll({
//       attributes: ['country_id', 'disease_id', 'priority'],
//       where: {
//         priority: "some",
//         country_id: "angola"
//       },
//       include: [db.Disease]
//     }).then(function (dbRecomendation) {    // db.Profile.findAll({}) use SQL fiormula here to filter out data true/false
//       // We have access to the Profiles as an argument inside of the callback function
//       console.log(dbRecomendation);
//       res.json(dbRecomendation);
//     });
//   });

//  // GET route for getting all of the recoms
//   app.get("/api/disease", function (req, res) {
//     // findAll returns all entries for a table when used with no options
//     db.Disease.findAll({
//       attributes: ['disease', 'id']
//     }).then(function (dbDisease) {    // db.Profile.findAll({}) use SQL fiormula here to filter out data true/false
//       // We have access to the Profiles as an argument inside of the callback function
//       console.log(dbDisease);
//       res.json(dbDisease);
//     });
//   });
};
