import { useState } from "react";

export default function Signup() {
    const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event);
    // console.log(event.target);
    

// Create a new FormData object from the submitted form (event.target refers to the <form> element)
const fd = new FormData(event.target);
// Get all checked values from checkboxes with the name "acquisition"
// This returns an array of all selected options (e.g., ['google', 'friend'])
const acquisitionChannel = fd.getAll('acquisition');
// Convert the FormData entries (key-value pairs) into a plain JavaScript object
// Note: For fields with multiple values (like checkboxes), only the first one will be included here
const data = Object.fromEntries(fd.entries());
// Replace the single acquisition value with the array of all selected values
// This ensures we capture all selected checkboxes, not just the first one
data.acquisition = acquisitionChannel;
// Log the final form data object to the console for debugging or further processing

if(data.password !== data['confirm-password']) {
    setPasswordsAreNotEqual(true);
    return;
}
console.log(data);
//Resetting form
event.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required minLength={6} maxLength={12} />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
          />
          <div className="control-error">{passwordsAreNotEqual && <p>Passwords must match</p>}</div>
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" required />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" required />
        </div>
      </div>

      <div className="control">
        <label htmlFor="role">What best describes your role?</label>
        <select id="role" name="role" required>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset required>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" required />
          I agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
