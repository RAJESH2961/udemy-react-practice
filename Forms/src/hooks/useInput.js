import { useState } from "react";

export function useInput(defaultValue) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
      // State to track if the user has interacted (blurred) with the fields
      const [didEdit, setDidEdit] = useState(false);

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
}