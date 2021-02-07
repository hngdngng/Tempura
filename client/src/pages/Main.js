import React, { useState } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Form from "../components/Form";
import Forecast from "../components/Forecast";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


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
        setErrorMessage(err.response.data.message);
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
        setErrorMessage(err.response.data.message);
      });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    getCoord();
  };

  const handleNewSearch = event => {
    event.preventDefault();
    setWeather([]);
  };

  return (
    <div>
      <div>
        {weather.length !== 0 ? (
          <div>
            <Hero text={weather.date} sub={query} />
            <Forecast temp={weather.temp} mean={weather.mean} median={weather.median} mode={weather.mode} desc={titleCase(weather.desc)}/>
            <IconButton
              type="submit"
              aria-label="search"
              onClick={handleNewSearch}>
              <SearchIcon />
            </IconButton>

          </div>
        ) : (
            <div>
              <Hero text="Weather made easy" sub="Let's find your city" />
              <Form handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                query={query} 
                error={error}
                errorMessage={errorMessage}/>
            </div>
          )}
      </div>
    </div>
  );
}

export default Main;