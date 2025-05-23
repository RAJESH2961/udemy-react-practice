import { useRef, useState, useCallback, useEffect} from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { fetchUserPlaces, updateUserPlaces } from './http.js';
import Error from './components/Error.jsx';

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() =>{
    async function fetchPlaces(){
      setIsLoading(true);
      try{
      const places = await fetchUserPlaces();
      setUserPlaces(places);
      } catch (error){
        setIsError({message : error.message || 'Failed to fetch user places'})
      }
    setIsLoading(false);

    }
    fetchPlaces();
  }, []);


  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try{
    await updateUserPlaces([selectedPlace, ...userPlaces]);
    } catch(error) {
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({message: error.message || 'failed to update places.'});
    }

  }

const handleRemovePlace = useCallback(async function handleRemovePlace() {
  setUserPlaces((prevPickedPlaces) => {
    const updatedPlaces = prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id);
    
    // Immediately update the backend with the correct updatedPlaces
    updateUserPlaces(updatedPlaces).catch(error => {
      setErrorUpdatingPlaces({ message: error.message || 'Failed to delete place' });
      // Restore previous state if needed
      setUserPlaces(prevPickedPlaces);
    });

    return updatedPlaces;
  });

  setModalIsOpen(false);
}, [updateUserPlaces]);

function handleError(){
  setErrorUpdatingPlaces(null);
}

  return (
    <>
    <Modal open={errorUpdatingPlaces} onClose={handleError}>
    { errorUpdatingPlaces && (<Error title="An error occured"
    message={errorUpdatingPlaces.message}/>)}
    </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {isError && <Error title="An error occured!" message={isError.message} />}
        {!isError && (
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          isLoading={isLoading}
          loadingText="Fetching your places..."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />)}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
