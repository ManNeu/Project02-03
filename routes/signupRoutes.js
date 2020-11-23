const db = require("../models");

module.exports = function (app) {
  app.post("/api/login", (req, res) => {
    res.json({
      fname: req.body.name,
      email: req.body.email,
      id: req.body.id,
    });
  });

  app.post("/api/signup", (req, res) => {
    db.Person.create({
      fname: req.body.fname,
      email: req.body.email,
      pass: req.body.pass,
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  app.get("logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
