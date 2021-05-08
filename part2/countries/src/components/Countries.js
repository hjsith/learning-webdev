import React from "react";
import Country from "./Country";
import CountryData from "./CountryData";

const Countries = ({ countries }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countries.length === 1) {
    return (
      <div>
        <CountryData country={countries[0]} />
      </div>
    );
  } else {
    return (
      <div>
        {countries.map((country) => (
          <Country key={country.name} country={country} />
        ))}
      </div>
    );
  }
};

export default Countries;
