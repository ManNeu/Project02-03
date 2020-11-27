module.exports = function (app) {

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

  app.get("/api/recomendationSome/:country", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Recomendation.findAll({
      attributes: ['country_id', 'disease_id', 'priority'],
      where: {
        priority: "some",
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
}