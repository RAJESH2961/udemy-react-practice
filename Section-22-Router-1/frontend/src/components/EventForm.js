import { Form, useNavigate, useNavigation, useActionData } from 'react-router-dom';
import classes from './EventForm.module.css';
import { json, redirect } from 'react-router-dom';

function EventForm({ method , event }) {
  // const navigate = useNavigate();

  const data = useActionData();

  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    // navigate('..'); // Go back to parent route
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
  <ul>
    {Object.values(data.errors).map(err => (
      <li key={err}>{err}</li>
    ))}
  </ul>
)}

      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event?.title || ''}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event?.image || ''}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event?.date || ''}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event?.description || ''}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submiting...' : 'Save' }
        </button>
      </div>
    </Form>
  );
}

export default EventForm;



//Request and params are automatically passed bt router
//Using same form for POST and PATCH
export async function action({ request, params }) {
  console.log("Request", request);
  
  const formData = await request.formData(); // FormData is an method in request
  console.log("Data", formData);

  const method = request.method;
    console.log("Method",method);


  const eventData = {
    //title, image are all names in Form
    title: formData.get('title'),
    image : formData.get('image'),
    date : formData.get('date'),
    description : formData.get('description'),
  };

  // Dynamically adjusting the url to send form based on method

  let url = 'http://localhost:8080/events';
  if(method === 'PATCH'){
    const eventId = params.eventId;
    url = 'http://localhost:8080/events/' + eventId;
  }
// Sending data to frontend
  const response = await fetch(url, {
    method: method,
    headers:{
      'content-type' : 'application/json'
    },
    body: JSON.stringify(eventData)
  });
    // console.log(response);

  // Status code is seted in backend validation
  if(response.status === 422) {
    return response;
  }

  if(!response.ok) {
    throw json({message: 'Could not save event'}, {status: 500})
  }

  return redirect('/events');
}