import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
const fetchedEvents = useLoaderData();
  return (
    <>
    <EventsList events={fetchedEvents} />
    </>
  );
}

export default EventsPage;
export async function loader() {
  try {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
      throw new Error('Could not fetch events');
    }

    const resData = await response.json();

    // Ensure resData.events is an array
    return resData.events || [];
  } catch (error) {
    console.error(error); // Optional: log the error
    return []; // Fallback
  }
}
