import React from 'react';
import EventForm from '../components/EventForm';
import { json, redirect } from 'react-router-dom';
function NewEventPage() {
  return <EventForm/>;
}

export default NewEventPage;


// Action() which is callled in App.jsx like loader()
// it is client side code as loader which is executeed on Browser 
// we can call browser functions like localstorage
// But we cant use useEffect like that

//Request and params are automatically passed bt router
export async function action({ request }) {
  const formData = await request.formData(); // FormData is an method in request

  const eventData = {
    //title, image are all names in Form
    title: formData.get('title'),
    image : formData.get('image'),
    date : formData.get('date'),
    description : formData.get('description'),
  };

  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers:{
      'content-type' : 'application/json'
    },
    body: JSON.stringify(eventData)
  });

  // Status code is seted in backend validation
  if(response.status === 422) {
    return response;
  }

  if(!response.ok) {
    throw json({message: 'Could not save event'}, {status: 500})
  }

  return redirect('/events');
}