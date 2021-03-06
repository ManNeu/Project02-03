// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
require('dotenv').config();
var express = require("express");
var session = require("express-session");
const db = require("./models");
var passport = require("./config/passport");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3032;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({ secret: process.env.SECRET, resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
// Static directory to be served
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/profile-api-routes.js")(app);
// require("./routes/index-api-routes.js")(app);
require("./routes/destination-api-routes.js")(app);
require("./routes/htmlRoutes.js")(app);
require("./routes/signupRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("App is listening on http://localhost:" + PORT);
  });
});
