import React, { useState, useEffect } from "react";
import Countries from "./components/Countries";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  const countryHook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  };

  const nameFilterChange = (e) => {
    setNameFilter(e.target.value);
  };

  useEffect(countryHook, []);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(nameFilter)
  );

  return (
    <div>
      <form>
        <div>
          find countries
          <input onChange={nameFilterChange} />
        </div>
      </form>
      <Countries countries={filteredCountries} setCountries={setCountries} />
    </div>
  );
}

export default App;
