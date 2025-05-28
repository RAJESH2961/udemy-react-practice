import AuthForm from '../components/AuthForm';
import { json, redirect } from 'react-router-dom';
function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

// request have the data which is submitted in form
export async function action({request}) {

 const searchParams = new URL(request.url).searchParams;
 const mode = searchParams.get('mode') || 'login';

 // Error message if user enterd wrong url
 if(mode !=='login' && mode !== 'signup'){
  // if user entered wron url we can also set to signup also..
  throw json({message : 'Unsupported mode.'}, { status:422 });
 }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };
// Sending data to backend
  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(authData)
  });

  //if there is error while sending data the response will be captured by useActionData hook() in AuthForm.js file
  if(response.status === 422 || response.status === 401){
    return response;
  }

  if(!response.ok){
    throw json({message: 'Could not authenticate user'}, {status: 500});
  }
  // manage token
  const resData = await response.json();
  const token = resData.token;
  // we can store token in lot of ways memory cookies...
  // here we are storing in localStorage that we use it to send for outgoing requests
  localStorage.setItem('token', token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());
  //once wh have logged in we redirect to login page
  return redirect('/');
  
}