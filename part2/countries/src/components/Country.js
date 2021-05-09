import React from "react";
import CountryData from "./CountryData";

const Country = ({ country, setCountries }) => {
  let countryView = false;

  if (!countryView) {
    return (
      <div>
        {country.name}
        <button onClick={() => setCountries([country])}>show</button>
      </div>
    );
  } else {
    return <CountryData country={country} />;
  }
};

export default Country;
