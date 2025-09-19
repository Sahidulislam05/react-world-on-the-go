import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  //   console.log(country.area.area);
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    // setVisited(visited ? false : true);

    setVisited(!visited);
  };

  return (
    <div
      //   className={`country ${
      //     visited ? "country-visited" : "country-not-visited"
      //   }`}
      className={`country ${visited && "country-visited"}`}
    >
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h1>Name: {country.name.common} </h1>
      <p>Population: {country.population.population} </p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}{" "}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not visited"}
      </button>
    </div>
  );
};

export default Country;
