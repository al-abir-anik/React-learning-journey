import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h2>Total Countries: {countries.length}</h2>
      {countries.map((ct) => (
        <Country key={ct.cca3} country={ct}></Country>
      ))}
    </div>
  );
};

export default Countries;
