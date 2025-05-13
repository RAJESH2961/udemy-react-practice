import Places from './Places.jsx';
import { useState, useEffect } from 'react';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
// using this useEffect we can ensure that this code will executed only once after the component executes
  useEffect(() => {
    fetch('http://localhost:3000/places') // Step 1: Send a GET request to your backend
      .then((response) => response.json()) // Step 2: Convert the HTTP response to JSON
      .then((resData) => {
        setAvailablePlaces(resData.places); // Step 3: Update state with the "places" data
      })
      .catch((error) => {
        console.error('Error fetching places:', error); // Step 4: Handle any errors
      });
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
