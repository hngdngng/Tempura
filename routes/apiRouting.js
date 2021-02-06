// DEPENDENCIES
var path = require("path");
const axios = require("axios");
const api = require("./api");
const methods = require("./methods");


// ROUTING
module.exports = app => {
    app.get("/", (req, res) => {
        api.weatherCall(30.2240897, -92.01984270000003)
        .then(data => {
            data.mean = methods.mean(data.forecast);
            data.median = methods.median(data.forecast);
            data.mode = methods.mode(data.forecast);
            return res.json(data)
        })
    });
}