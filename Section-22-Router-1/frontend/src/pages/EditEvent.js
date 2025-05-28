import React from 'react';
import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router-dom';
function EditEventPage() {
  const data = useRouteLoaderData('event-detail');
  //Event form sedning method type to make form reusable
  return <EventForm event={data.event} method="PATCH"/>
}

export default EditEventPage;
