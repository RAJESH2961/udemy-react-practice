import React from 'react';
import EventForm from '../components/EventForm';
function NewEventPage() {
  //Event form sedning method type to make form reusable
  return <EventForm method="post" />;
}

export default NewEventPage;


// Action() which is callled in App.jsx like loader()
// it is client side code as loader which is executeed on Browser 
// we can call browser functions like localstorage
// But we cant use useEffect like that

