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


export async function fetchUserPlaces() {
  try {
    const response = await fetch('http://localhost:3000/user-places');
    const resData = await response.json();

    if (!response.ok) {
      throw new Error(resData.message || 'Failed to fetch user places');
    }

    return resData.places;
  } catch (error) {
    console.error('Error fetching user places:', error);
    throw error;
  }
}

//method to send data to backend
export async function updateUserPlaces(places) {
  const response = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({places}),//Passing the data by converting into json
    headers: {
      'content-Type': 'application/json'
    }
  });
  const resData = await response.json();
  if (!response.ok) {
      throw new Error('Failed to Update useer data ');
    }
    return resData.message;
}
