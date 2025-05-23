import { useState } from 'react';
import { Form, Link, useSearchParams, useActionData, useNavigation } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  // const [isLogin, setIsLogin] = useState(true);

  // function switchAuthHandler() {
  //   setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  // }

  // if the action data throws in Authentication.js an error the useActionData will capture
  // All the error response will be stored in data
  const data = useActionData();

  // useNavigation() is an hook use to get the current status
  const navigation = useNavigation();
  //there will be 3 idle loading submittng
  const isSubmitting = navigation.state === 'submitting'

  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  return (
    <>
      <Form method="POST" className={classes.form}>
        {/* // Displaying errors in webpage */}
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>

        {/* If there is an error thrown by action them */}
          {data && data.errors && (
            <ul>
              {Object.values(data.errors).map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          )}


        {/* If there is an message like email exist */}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled={isSubmitting}>{isSubmitting? 'submitting...' : 'Save'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
