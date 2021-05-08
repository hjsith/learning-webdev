import React from "react";
import CountryData from "./CountryData";

const Country = ({ country }) => {
  return (
    <div>
      {country.name}
      <button onClick={<CountryData country={country} />}>show</button>
    </div>
  );
};

export default Country;
