// Dependencies
const express = require("express");
const app = express();
const path = require("path");

// Set up the Express app to handle data parsing for requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API route
require("./routes/weatherController")(app);

app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});