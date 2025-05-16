import { useRef, useState } from "react";

export default function Login() {
  // Create refs for direct access to input fields
  const email = useRef();
  const password = useRef();

  // State to control email validation UI
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default page reload behavior

    // Access values directly using refs
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    // Basic email validation
    const emailIsValid = enteredEmail.includes('@');
    if (!emailIsValid) {
      setEmailIsInvalid(true); // Trigger error message in UI
      return; // Stop form submission if invalid
    }

    setEmailIsInvalid(false); // Clear error if email is valid

    // Do something with the data (e.g., send HTTP request)
    console.log("Submitted:", { enteredEmail, enteredPassword });

    // Clear input fields manually
    email.current.value = '';
    password.current.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">

        {/* Email Field */}
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={email} // Use ref instead of state
          />
          {/* Conditional rendering of error message */}
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email</p>}
          </div>
        </div>

        {/* Password Field */}
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password} // Use ref instead of state
          />
        </div>
      </div>

      <p className="form-actions">
        {/* These buttons have no custom handler yet */}
        <button className="button button-flat" type="reset">Reset</button>
        <button className="button" type="submit">Login</button>
      </p>
    </form>
  );
}
