import Places from './Places.jsx';
import { useState, useEffect } from 'react';
import Error from './Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  //maintaing state for loading and non loading while data
  const [isloading, setIsLoading] = useState();
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isError, setIsError] = useState();
// using this useEffect we can ensure that this code will executed only once after the component executes

//Another method to fetch data using async and await keyword
 useEffect(() => {
  async function fetchPlaces() {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3000/places');
      const resData = await response.json();
      if (!response.ok) {
        throw new Error('Failed to fetch places');
      }
      setAvailablePlaces(resData.places);
    } catch (error) {
      setIsError({message : error.message || "An error occured while fetching data"});//Fallback text if the error message is not produced then it will take
    } finally {
      setIsLoading(false);
    }
  }

  fetchPlaces();
}, []);

  if (isError) {
    return <Error title="An Error Occurred" message={isError.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isloading}
      loadingText="loading places please wait ..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
