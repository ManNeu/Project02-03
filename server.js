
// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/profile-api-routes.js")(app);
require("./routes/htmlRoutes.js")(app);
require("./routes/signupRoutes.js")(app);
// require("./routes/apiRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);


  // db.sequelize.sync().then(() => {
  //     app.listen(PORT, () => {
  //         console.log("App is listening on http://localhost:" + PORT);
  //     });
  //   });
});

