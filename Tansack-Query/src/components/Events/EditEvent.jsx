import { Link, useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { fetchEvent, updateEvent } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { queryClient } from '../../util/http.js';

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();

  const {data, isPending, isError, error} = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({signal}) => fetchEvent({
      signal,
      id: params.id
    })
  });
  // updating functionality
  const {mutate} = useMutation({
    mutationFn: updateEvent,
    // navigate();
    onMutate: async (data) => {
      const newEvent = data.event;
      // cancelling all ongoing queries
      await queryClient.cancelQueries({ queryKey: ['events', params.id] });
      const previousEvent = queryClient.getQueryData(['events', params.id]);
      // setting new event data 
      queryClient.setQueriesData(['events', params.id], newEvent);

      return {previousEvent}
    },
    // If it fails rolled back
    // COntext will have previous event returned by return onMutate() 
    // context will have previousEvent
    onError: (error, data, context) => {
      queryClient.setQueriesData(['events', params.id], context.previousEvent);
    },
    // No matter if the Mutation failed or not it will always execute when it is called
    onSettled: () => {
      queryClient.invalidateQueries(['evetns', params.id]);
    }
  })

  function handleSubmit(formData) {
    mutate({ id: params.id, event: formData });
  }

  function handleClose() {
    navigate('../');
  }
  let content;
  if(isPending) {
    content = <div className='center'>
      <LoadingIndicator/>
    </div>
  }
  if(isError) {
    content = <>
    <ErrorBlock title="Failed to load event" message={error.info?.message || 'Failed to load event. Please check your inputs and try again later'}/>
    <div className="form-actions">
      <Link to="../" className='button'>
      Okay
      </Link>
    </div>
    </>
  }

  if(data) {
    content =       <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}
