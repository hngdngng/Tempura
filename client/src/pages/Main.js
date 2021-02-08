import React, { useState } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Form from "../components/Form";
import Forecast from "../components/Forecast";
import SearchAgain from "../components/SearchAgain";
import { Container } from "@material-ui/core";


const Main = () => {
  const [weather, setWeather] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      .then(res => {
        setError(false);
        setWeather(res.data);
        setErrorMessage("");
      })
      .catch((err) => {
        setWeather([]);
        setError(true);
        setErrorMessage(titleCase(err.response.data.message));
      });
  };

  const getCoord = () => {
    API.getCoord(query)
      .then(res => {
        setError(false);
        getWeather(res.data.lat, res.data.lon);
        setErrorMessage("");
      })
      .catch((err) => {
        setWeather([]);
        setError(true);
        setErrorMessage(titleCase(err.response.data.message));
      });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (query) {
      getCoord();
    }
  };

  const handleNewSearch = event => {
    event.preventDefault();
    setWeather([]);
  };

  return (
    <div>
      <Container>
        {weather.length !== 0 ? (
          <div>
            <SearchAgain handleNewSearch={handleNewSearch} />
            <Hero text={weather.date} sub={query} />
            <Forecast temp={weather.temp} mean={weather.mean} median={weather.median} mode={weather.mode} desc={titleCase(weather.desc)} />
          </div>
        ) : (
            <div>
              <Hero text="Keep Looking Up" sub="Let's find your city" />
              <Form handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                query={query}
                error={error}
                errorMessage={errorMessage} />
            </div>
          )}
      </Container>
    </div>
  );
}

export default Main;