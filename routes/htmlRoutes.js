
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

//   app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/profile.html"));
//   });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/profile.html"));
  });

};

// var path = require("path");

// module.exports = function (app) {
//   app.get("/:disease", function (req, res) {
//     res.sendFile(path.join(__dirname, "disease.html"));
//   });
// };

const path = require("path");

const authentication = require("../config/middleware/authentication");

module.exports = function (app) {
    app.get("/", (req, res) => {
        if (req.user) {
            res.redirect("");
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    app.get("/login", (req, res) => {
        if (req.user) {
            res.redirect("")
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("", authentication, (req, res) => {
        res.sendFile(path.join(__dirname, ""));
    });
};


