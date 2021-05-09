import React from "react";
import CountryData from "./CountryData";

const Countries = ({ countries, setCountries }) => {
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
        {countries.map((country, i) => (
          <div>
            {" "}
            {country.name}{" "}
            <button onClick={() => setCountries([country])}>show</button>
          </div>
        ))}
      </div>
    );
  }
};

export default Countries;
