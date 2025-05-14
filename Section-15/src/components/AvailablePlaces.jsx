import Places from './Places.jsx';
import { useState, useEffect } from 'react';
import Error from './Error.jsx';
import {sortPlacesByDistance} from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isLoading, setIsLoading] = useState(true);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    async function fetchPlaces() {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:3000/places');
        const resData = await response.json();

        if (!response.ok) {
          throw new Error('Failed to fetch places');
        }

        // Handle geolocation using callback style
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const sortedPlaces = sortPlacesByDistance(
              resData.places,
              position.coords.latitude,
              position.coords.longitude
            );
            setAvailablePlaces(sortedPlaces);
            setIsLoading(false); // ✅ Moved here to ensure it's only called after geolocation succeeds
          },
          (geoError) => {
            setIsError({
              message: geoError.message || 'Failed to get your location',
            });
            setIsLoading(false);
          }
        );
      } catch (error) {
        setIsError({
          message: error.message || 'An error occurred while fetching data',
        });
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
      isLoading={isLoading}
      loadingText="Loading places, please wait..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
