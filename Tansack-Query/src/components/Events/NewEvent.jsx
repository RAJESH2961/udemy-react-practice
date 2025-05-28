import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query'

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { createNewEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { queryClient } from '../../util/http.js';
export default function NewEvent() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    // on success ensures the fucntion will be executed only if the mutation is success
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['events']}); // invalidate queries refreshes the data it tells to reach that the data is outdated and refreshes
      navigate('/events');
    }
  })

  function handleSubmit(formData) {
    mutate({ event: formData });
    // no matter if the mutataion success or not it always redirect to navigate page
    // navigate('/events'); // it will redirect to events if didnt entered valid data also
    // we need to wait until mutataion gets completed
    // to solve this useMutataion provides onSuccess()
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && 'Submitting...'}
        {!isPending && (
        <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Create
          </button>
        </>
        )}
      </EventForm>
      {isError && <ErrorBlock title="FAiled to create event" message={error.info?.message || 'Failed to create event. Please check your inputs and try again later'} />}
    </Modal>
  );
}
