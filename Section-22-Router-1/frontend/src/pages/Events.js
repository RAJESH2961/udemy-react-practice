import { json, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
const data = useLoaderData();

// if(data.isError){
//     return <p>{data.message}</p>
// }
const fetchedEvents = data.events;
  return (
    <>
    <EventsList events={fetchedEvents} />
    </>
  );
}

export default EventsPage;



// This function is called by App.jsx loader() to fetch data
export async function loader() {
  try {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
    //   return {isError : true, message: 'Could not fetch events'}

    //this thrown error is captured by useRouteError() which we are calling in Error.js
    // throw new Response(JSON.stringify({ message: 'Could not fetch events' }), {status: 500,});

    throw json(
        { message: 'Could not fetch events' },
        {status: 500,}
    )
    }

    const resData = await response.json();

    // Ensure resData.events is an array
    return resData;
  } catch (error) {
    console.error(error); // Optional: log the error
    return []; // Fallback
  }
}
