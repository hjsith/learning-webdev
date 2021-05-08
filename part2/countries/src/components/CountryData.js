import React from "react";
import ListItem from "./ListItem";

const CountryData = ({ country }) => (
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

export default CountryData;
