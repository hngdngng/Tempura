import React, { useState } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Form from "../components/Form";

const Main = () => {
  const [weather, setWeather] = useState([]);
  const [query, setQuery] = useState("");

  const handleInputChange = event => {
    setQuery(titleCase(event.target.value));
  };

  const titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); //capitalize first letter and joins with index[1] to end of string
    }
    return str.join(' ');
}

  const getWeather = (lat, lon) => {
    API.getWeather(lat, lon)
      .then(res =>
        setWeather(res.data)
      )
      .catch(() => {
        setWeather([]);
      });
  };

  const getCoord = () => {
    API.getCoord(query)
      .then(res => {
        getWeather(res.data.lat, res.data.lon);
      })
      .catch(() => {
        setWeather([]);
      });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    getCoord();
  };
  
  return (
    <div>
      <div>
        {weather.length !== 0 ? (
          <div>
          <Hero text={weather.date} sub={query}/>
          </div>
        ) : (
          <div>
          <Hero text="Weather made easy" sub="Let's find your city"/>
          <Form handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            query={query}/>
            </div>
          )}
      </div>
    </div>
  );
}

export default Main;
