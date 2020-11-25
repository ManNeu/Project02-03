
// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// module.exports = function (app) {
//   app.get("/:disease", function (req, res) {
//     res.sendFile(path.join(__dirname, "disease.html"));
//   });
// };
const authentication = require("../config/middleware/authentication");

module.exports = function (app) {

    app.get("/profile", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/profile.html"));
    });

    app.get("/login", (req, res) => {
        if (req.user) {
            res.redirect("../public/assets/index.html")
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/", (req, res) => {
        if (req.user) {
            res.redirect("../public/assets/index.html");
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    app.get("/index", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/assets/index.html"));
    });

    app.get("/index", authentication, (req, res) => {
        res.sendFile(path.join(__dirname, "../public/assets/index.html"));
    });

    app.get("/destination", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/assets/destination.html"));
    });

};


