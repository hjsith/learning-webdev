import axios from "axios";
import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

const CountryData = ({ country }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get("http://api.weatherstack.com/current", {
        params: {
          access_key: process.env.REACT_APP_API_KEY,
          query: country.capital,
        },
      })
      .then((response) => {
        const apiWeather = response.data;
        console.log(apiWeather);
        setWeather([apiWeather]);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  if (weather.length > 0) {
    const currentWeather = weather[0].current;
    console.log(currentWeather);
    return (
      <>
        <h1>{country.name}</h1>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h1>languages</h1>
        <ul>
          {country.languages.map((language) => (
            <ListItem key={language.name} item={language.name} />
          ))}
        </ul>
        <img
          src={country.flag}
          height="150"
          width="150"
          alt={country.name + "'s flag"}
        />
        <h2>Weather in {country.capital}</h2>
        <p>temperature: {currentWeather.temperature}° Celcius</p>
        <img src={currentWeather.weather_icons[0]} alt="Weather icon"></img>
        <p>
          wind: {currentWeather.wind_speed} mph direction{" "}
          {currentWeather.wind_dir}
        </p>
      </>
    );
  } else {
    return (
      <>
        <h1>{country.name}</h1>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h1>languages</h1>
        <ul>
          {country.languages.map((language) => (
            <ListItem key={language.name} item={language.name} />
          ))}
        </ul>
        <img
          src={country.flag}
          height="150"
          width="150"
          alt={country.name + "'s flag"}
        />
      </>
    );
  }
};

export default CountryData;
