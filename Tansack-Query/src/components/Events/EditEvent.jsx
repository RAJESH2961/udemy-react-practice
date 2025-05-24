import { Link, redirect, useNavigate, useParams, useSubmit, useNavigation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { fetchEvent, updateEvent } from '../../util/http.js';
// import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { queryClient } from '../../util/http.js';

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();
  // use submit()
  const submit = useSubmit();

  // useNavigation() tells the curretn state of the react router ex: - who are all submitting data
  const { state } = useNavigation();

  const {data, isError, error} = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({signal}) => fetchEvent({
      signal,
      id: params.id
    })
  });
  // // updating functionality
  // const {mutate} = useMutation({
  //   mutationFn: updateEvent,
  //   // navigate();
  //   onMutate: async (data) => {
  //     const newEvent = data.event;
  //     // cancelling all ongoing queries
  //     await queryClient.cancelQueries({ queryKey: ['events', params.id] });
  //     const previousEvent = queryClient.getQueryData(['events', params.id]);
  //     // setting new event data 
  //     queryClient.setQueriesData(['events', params.id], newEvent);

  //     return {previousEvent}
  //   },
  //   // If it fails rolled back
  //   // COntext will have previous event returned by return onMutate() 
  //   // context will have previousEvent
  //   onError: (error, data, context) => {
  //     queryClient.setQueriesData(['events', params.id], context.previousEvent);
  //   },
  //   // No matter if the Mutation failed or not it will always execute when it is called
  //   onSettled: () => {
  //     queryClient.invalidateQueries(['evetns', params.id]);
  //   }
  // })

  function handleSubmit(formData) {
  //   mutate({ id: params.id, event: formData });
  //   navigate('../');
  submit(formData, { method: 'PUT' });
  }
  // }

  function handleClose() {
    navigate('../');
  }
  let content;
 
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
      {state === 'submitting' ? (<p>Sending data ....</p>) :(
        <>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
        </>
      )  }
        
      </EventForm>
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}

// params are automatically passed by react
export function loader({ params }){
  // programitaclly triggeting useQuery() 
  // fetchQuery is same as useQuery but we can trigger it by our own
  // the parametes are ll same
  return queryClient.fetchQuery({
    queryKey: ['events', params.id],
    queryFn: ({signal}) => fetchEvent({
      signal,
      id: params.id
    })
  });
}


// action to send a data which is called by App,jsx
// this function will automaically triggered by react when the form data is submitted in this page
// the object is passed automatically by react
export async function action({ request, params }) {
  const formData = await request.formData();// Extracing from data from submitted data
  // the below code converts the complex data provided in Form data into an key value pair data simply to send it in backend
  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({id: params.id, event: updatedEventData});// imported in http.js
  await queryClient.invalidateQueries(['events']);
  return redirect('../'); // redirecting to parent page

}