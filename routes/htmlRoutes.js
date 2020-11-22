
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

