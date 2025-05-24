
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import {useQuery} from '@tanstack/react-query'
// fetch events functions to fetch data from backend
import fetchEvents from '../../util/http.js';

export default function NewEventsSection() {
  // use Query will return an object containt lot of values
  // the main is the data which is returned when fetching data from backednd in http.js file
  // and it returns some status like error(it is true only when we check manually and thrown an error in http.js else it wont return)

  const {data, isPending, isError, error} = useQuery({
    // required key to cache in future use
    queryKey: ['events'],
    // useQuery accepts an function that return promise
    queryFn: fetchEvents

  });

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message || 'Failed to fetch events'} />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
