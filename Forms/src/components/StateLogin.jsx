import { useState } from "react";

export default function Login() {
  // State to store input values for email and password
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  // State to track if the user has interacted (blurred) with the fields
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  // Email validation logic – show error only after blur and if '@' is missing
  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');

  // Handle form submit
  function handleSubmit(event) {
    event.preventDefault(); // Prevents default form submission
    console.log('submitted');

    // Reset form fields after submission
    setEnteredValues({
      email: '',
      password: ''
    });
  }

  // Handle input change dynamically for both fields
  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }));

    // Reset 'didEdit' flag while user is typing again
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false
    }));
  }

  // Handle blur (when user leaves input field)
  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }));
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
            onBlur={() => handleInputBlur('email')}
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={enteredValues.email}
          />
          {/* Error message shown only if email is invalid and blurred */}
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address</p>}
          </div>
        </div>

        {/* Password Field */}
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputChange('password', event.target.value)}
            value={enteredValues.password}
          />
        </div>
      </div>

      {/* Form buttons */}
      <p className="form-actions">
        <button className="button button-flat" type="reset">Reset</button>
        <button className="button" type="submit">Login</button>
      </p>
    </form>
  );
}
