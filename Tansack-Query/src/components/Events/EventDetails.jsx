import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header.jsx';
import { useQuery, useMutation } from '@tanstack/react-query';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EventDetails() {
  // used to get id from url
  const params = useParams();
  // use to navigate to other pages
  const navigation = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id })
  });
  // here it is returning an mutate funciton which we used to call the mutationFn 
  // A function only be called by mutate function
  const {mutate} = useMutation({
    mutationFn: deleteEvent,
    // once the mutataion is success we can refetch the data in background bases on id
    //  also redirects to events
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['events']
      });
      navigation('/events')
    }
  });

  function handleDelete() {
    mutate({ id: params.id });
  }

  let content;

  if (isPending) {
    content = (
      <div id="event-details-content" className="center">
        <p>Fetching event data...</p>
      </div>
    );
  }

  if (isError) {
    content = (
      <div id="event-details-content" className="center">
        <ErrorBlock
          title="Failed to load event"
          message={error.info?.message || 'Failed to fetch data, please try again later'}
        />
      </div>
    );
  }

  if (data) {
    const formattedDate = new Date(data.date).toLocaleDateString('en-us', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>

        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={data.date}>{formattedDate} @ {data.time}</time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">{content}</article>
    </>
  );
}
