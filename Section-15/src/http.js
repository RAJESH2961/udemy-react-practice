export async function fetchAvailablePlaces() {
  try {
    const response = await fetch('http://localhost:3000/places');
    const resData = await response.json();

    if (!response.ok) {
      throw new Error(resData.message || 'Failed to fetch places');
    }

    return resData.places;
  } catch (error) {
    console.error('Error fetching places:', error);
    throw error;
  }
}
