import React from 'react';
import {json, redirect, useRouteLoaderData} from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetailPage() {
    // const params = useParams();
    const data = useRouteLoaderData('event-detail');

  return <>
  <EventItem event={data.event} />
  </>
}

export default EventDetailPage;


// eventDetail.js
export async function loader({ request, params }) {
//Request, params are automatically passed by react-router
// params	Provided by React Router (based on :eventId in path)
// why we are using like this we cant use useparams inside the loader() so..
  const id = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event' },
      { status: 500 }
    );
  }

  const data = await response.json();
  return data; // Should contain: { event: {...} }
}


// action() called in App.jsx

export async function action({ params, request }) {
  const eventId = params.eventId;
    // console.log("Action method");

  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
    
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not Delete event' },
      { status: 500 }
    );
  }

  return redirect('/events');
}
