const express = require("express");
const logger = require('morgan');
const routes = require('./routes')
var db = require("./models");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB


// Start the API server
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
  });
