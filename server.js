// Dependencies
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// Set up the Express app to handle data parsing for requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API route
require("./routes/apiRouting")(app);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});