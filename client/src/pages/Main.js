import React, { useState } from "react";
import API from "../utils/API";
import Form from "../components/Form";

const Main = () => {
  const [weather, setWeather] = useState([]);
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const getWeather = (lat, lon) => {
    API.getWeather(lat, lon)
      .then(res =>
        setWeather(res.data)
      )
      .catch(() => {
        setWeather([]);
        setMessage("Let's try that again")
      });
  };

  const getCoord = () => {
    API.getCoord(query)
      .then(res => {
        getWeather(res.data.lat, res.data.lon);
      })
      .catch(() => {
        setWeather([]);
        setMessage("Let's try that again")
      });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    getCoord();
  };

  console.log(weather)
  return (
    <div>
      <Form
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        query={query}
      />
      <div>
        {weather.length !== 0 ? (
          <div>
          <h2>{weather.date}</h2>
          <h2>{weather.temp}</h2>
          </div>
        ) : (
            <h2 className="text-center">{message}</h2>
          )}
      </div>
    </div>
  );
}

export default Main;
