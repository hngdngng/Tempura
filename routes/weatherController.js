// DEPENDENCIES
const weatherService = require("./weatherService");
const methods = require("./methods");


// ROUTING
module.exports = app => {
    app.get("/api/coord/:str", (req, res) => {
        weatherService.coordCall(req.params.str)
        .then(data => {
            return res.json(data)
        })
        .catch(err => {
            return res.status(404).json({
                message: err.response.data.message
            });
        });
    });
    
    app.get("/api/weather/:lat/:lon", (req, res) => {
        weatherService.weatherCall(req.params.lat, req.params.lon)
        .then(data => {
            data.mean = methods.mean(data.forecast);
            data.median = methods.median(data.forecast);
            data.mode = methods.mode(data.forecast);
            return res.json(data)
        })
        .catch(err => {
            return res.status(404).json({
                message: err.response.data.message
            });
        });
    });
}