// DEPENDENCIES
var path = require("path");
const axios = require("axios");
const api = require("./api");
const methods = require("./methods");


// ROUTING
module.exports = app => {
    app.get("/api/coord/:str", (req, res) => {
        api.coordCall(req.params.str)
        .then(data => {
            return res.json(data)
        })
    });
    
    app.get("/api/weather/:lat/:lon", (req, res) => {
        api.weatherCall(req.params.lat, req.params.lon)
        .then(data => {
            data.mean = methods.mean(data.forecast);
            data.median = methods.median(data.forecast);
            data.mode = methods.mode(data.forecast);
            return res.json(data)
        })
        .catch(err => console.log(err))
    });
}