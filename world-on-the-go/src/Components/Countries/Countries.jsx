import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log("handle clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flag) => {
    // console.log("flags clicked", flag);
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <>
      <h1>In the countries: {countries.length}</h1>
      <h3>Total country visited : {visitedCountries.length} </h3>
      <h3>Total flags visited : {visitedFlags.length} </h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}> {country.name.common} </li>
        ))}
      </ol>
      <div className="visitedFlagsContainer">
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag} alt="Not found"></img>
        ))}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
