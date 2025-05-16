import { useState } from "react";
import Input from "./Input"; // Assumes you have a reusable Input component

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

  // Email and Password validation rules
  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
  const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length < 6;

  // Handle form submit
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Force show validation errors
    setDidEdit({
      email: true,
      password: true
    });

    const emailValid = enteredValues.email.includes('@');
    const passwordValid = enteredValues.password.trim().length >= 6;

    if (!emailValid || !passwordValid) {
      // Stop submission if validation fails
      return;
    }

    // Proceed only if inputs are valid
    console.log('Form submitted successfully!', enteredValues);

    // Reset form values and interaction tracking
    setEnteredValues({
      email: '',
      password: ''
    });

    setDidEdit({
      email: false,
      password: false
    });
  }

  // Handle input change dynamically for both fields
  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }));

    // Reset 'didEdit' while typing again
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false
    }));
  }

  // Handle blur (user leaves input field)
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
        <Input 
          label="Email" 
          id="email" 
          type="email" 
          name="email" 
          onBlur={() => handleInputBlur('email')}
          onChange={(event) => handleInputChange('email', event.target.value)}
          value={enteredValues.email} 
          error={emailIsInvalid && 'Please enter a valid email address!'}
        />

        {/* Password Field */}
        <Input 
          label="Password" 
          id="password" 
          type="password" 
          name="password" 
          onBlur={() => handleInputBlur('password')}
          onChange={(event) => handleInputChange('password', event.target.value)}
          value={enteredValues.password} 
          error={passwordIsInvalid && 'Password must be at least 6 characters long!'}
        />
      </div>

      {/* Form buttons */}
      <p className="form-actions">
        <button className="button button-flat" type="reset">Reset</button>
        <button className="button" type="submit">Login</button>
      </p>
    </form>
  );
}
