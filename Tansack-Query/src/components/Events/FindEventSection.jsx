import { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
// import { fetchEvents } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import EventItem from './EventItem';
import {fetchEvents} from '../../util/http';

export default function FindEventSection() {
  const searchElement = useRef();
  // use State to update State based on when user Entered new keyword
  const [ searchTerm, setSearchTerm ] = useState();
  const {data, isError, isLoading, error} = useQuery({
    queryKey: ['events', {search: searchTerm }], // Key should be unique if we use same query key multiple places the data will be mismatched
    // If we call fetchEvents without passing any args then the react will automatically pass object 
    // queryFn: fetchEvents,
    
    queryFn: ({ signal, queryKey }) => fetchEvents({signal, ...queryKey[1]}),
    // signal is received by react default

    // Enabling and disabling query based on this if there is no string then it will be false
    enabled: searchTerm !== undefined
  })

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchElement.current.value);
  }

  let content = <p>Please enter a serach term and to find events</p>
  if(isLoading){
    content = <LoadingIndicator/>
  }
  if(isError){
    content = <ErrorBlock title="An error occured" message={error.info?.message || 'Fialed to fetch events'} />
  }
  if(data){
    content = <ul className='events-list'>
      {data.map(event => <li key={event.id}><EventItem event={event}/></li>)}
    </ul>
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
