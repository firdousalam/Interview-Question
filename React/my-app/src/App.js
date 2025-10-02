
import React, { useState } from "react";

import './App.css';

function App() {
  const countries = {
    India: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    USA: ["New York", "Los Angeles", "Chicago", "Houston"],
    Australia: ["Sydney", "Melbourne", "Brisbane", "Perth"],
  };

  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  
  // const handleCountryChange = (e) => {
  //   const country = e.target.value;
  //   setSelectedCountry(country);
  //   setCities(countries[country] || []);
  //   setSelectedCity(""); // Reset city when country changes
  // };

  // const handleCityChange = (e) => {
  //   setSelectedCity(e.target.value);
  // };
  const UpdateCity = (e)=>{
    const country = e.target.value
    setSelectedCountry(e.target.value);
    setSelectedCity('');
    setCities(countries[country] || []);

  }
  const handleCityChange = (e)=>{
    selectedCity(e.target.value);
  }

  return (
    <div className="App">
     
       <div style={{ padding: "20px" }}>
      <h2>Country and City Dropdown</h2>

      {/* Country Dropdown */}
      <label>
        Country:
        <select value={selectedCountry}  onChange={UpdateCity}>
          <option value=""> Select Country1</option>
         {Object.keys(countries).map((country) => (
           <option key={country} value={country} > {country}</option>
         ))}
        </select>

      </label>

      <br /><br />

      {/* City Dropdown */}
      <label>
        City:
        <select value={selectedCity} onChange={handleCityChange} disabled={!selectedCountry}>
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </label>

      <br /><br />

      {/* Display Selected Values */}
      {selectedCountry && selectedCity && (
        <p>
          You selected: <strong>{selectedCity}</strong>, <strong>{selectedCountry}</strong>
        </p>
      )}
    </div>
    </div>
  );
}

export default App;
