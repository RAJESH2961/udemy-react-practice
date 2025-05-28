import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header.jsx';
import { useQuery, useMutation } from '@tanstack/react-query';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { useState } from 'react';
import Modal from '../UI/Modal.jsx';

export default function EventDetails() {

  // state to confirm user
  const [isDeleting, setIsDeleting] = useState(false); 
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
  const {mutate, isPending: isPendingDeletion, isError: isErrorDeleting, error: deleteError} = useMutation({
    mutationFn: deleteEvent,
    // once the mutataion is success we can refetch the data in background bases on id
    //  also redirects to events
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['events'],
        refetchType: 'none'
      });
      navigation('/events')
    }
  });

  function handleStartDelete() {
    setIsDeleting(true);
  }
  function handleStopDelete() {
    setIsDeleting(false);
  }

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
            <button onClick={handleStartDelete}>Delete</button>
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
    {/* Modal to ask confirmation */}
    {isDeleting && (<Modal onClose={handleStopDelete}>
      <h2>Are you sure ?</h2>
      <p>Do you want to delete this event ?? This action cannot be undone.</p>
      <div className='form-actions'>
        {isPendingDeletion && <p>Deleting, Please wait...</p>}
        {!isPendingDeletion && (
          <>
        <button onClick={handleStopDelete} className='button-text'>Cancel</button>
        <button onClick={handleDelete} className='button'>Delete</button>
        </>
        )}
      </div>
      {isErrorDeleting && <ErrorBlock title="Failed to delete event" message={deleteError.info?.message || 'Failed to delete event, Please try again later.'}/>}
      </Modal>
)}
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
