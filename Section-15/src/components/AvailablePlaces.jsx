import Places from './Places.jsx';
import { useState, useEffect } from 'react';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
// using this useEffect we can ensure that this code will executed only once after the component executes

//Another method to fetch data using async and await keyword
  useEffect(() => {
    async function fetchPlaces(){
      const response = await fetch('http://localhost:3000/places') // Step 1: Send a GET request to your backend
      const resData = await response.json(); // Step 2: Convert the HTTP response to JSON
      setAvailablePlaces(resData.places); // Step 3: Update state with the "places" data

    }
    fetchPlaces();
      // .then((response) => response.json()) 
      // .then((resData) => {
      // })
      // .catch((error) => {
      //   console.error('Error fetching places:', error); // Step 4: Handle any errors
      // });
  }, []); // 👈 Empty dependency array = run only once when component mounts

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
