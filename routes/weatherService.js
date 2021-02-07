const axios = require("axios");

const APIKey = "e6182f94e241fdadf1c2eb9e58710edc";
// used onecall API to get 7 day data, documentation here: https://openweathermap.org/api/one-call-api

//Function to get lat lon coordinates
const coordCall = (cityName) => {
    //Build URL we need to query the weather database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
    return axios.get(queryURL)
    .then(response => {
        return {
            lat: response.data.coord.lat,
            lon: response.data.coord.lon
        };
    });
}

// grab forecasted city data
const getForecast = (response) => {
    let cityForecast = new Array;
    const days = [1, 2, 3];

    days.forEach(day => {
        const foreTempF = Math.floor((response.data.daily[day].temp.day - 273.15) * 1.80 + 32);
        cityForecast.push(foreTempF);
    });
    return cityForecast;
}    

//Function to get weather data from API
const weatherCall = (lat, lon) => {
    //Build URL we need to query the weather database
    const queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely" + "&appid=" + APIKey;
    //Axios call, works with Node.js
    return axios.get(queryURL)
    .then(response => {
        // log data that would be nice-to-have in part 3 (must-have: temp)
        const date = new Date(response.data.current.dt * 1000);
        const dateConverted = date.toDateString(); //Mon Feb 04 2021
        const tempF = Math.floor((response.data.current.temp - 273.15) * 1.80 + 32) + "\u00B0F"; //temp in degrees F
        const desc = response.data.current.weather[0].description;
        const icon = response.data.current.weather[0].icon;

        const cityForecast = getForecast(response);//function to grab forecast data

        return {
            date: dateConverted,
            temp: tempF,
            desc: desc,
            icon: icon,
            forecast: cityForecast
        };
    });
}

// // // module.exports is an object used to store variables or methods
module.exports = {
    weatherCall,
    coordCall
}