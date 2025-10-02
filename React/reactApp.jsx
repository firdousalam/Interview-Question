import React from 'react';
import { useState } from 'react'

function App() {
  
  

  const [selectedCountry, setSelectedCountry] = useState('Select Country');
  const [selectedCity, setSelectedCity] = useState('Select City');
  const [city, setCity] = useState([]);

  const countries = {
    India: ['Delhi', 'Mumbai', 'Kolkata', 'Bangalore'],
    US: ['NewYork', 'LA', 'Dallas'],
    Australia: ['Sydney', 'Melbourne', 'Canderra', 'Perth'],
  };
  updateCity = () => {};
  return (
    <div >
      <h1>Hello React.</h1>
      <h2>Creating dropdown for Country and City</h2>
     
      
        <div>Country Selected = {selectedCountry} </div>
      
    </div>
  );
  
}

export default App
