import { useEffect, useState } from "react";
export default function DeleteConfirmation({ onConfirm, onCancel }) {
useEffect(() => {
  // Start a 3-second timer
  console.log('Timer set');
  
  const timer = setTimeout(() => {
    onConfirm(); // Call the provided function after 3 seconds
  }, 3000);
  console.log(timer);
  

  // Cleanup function: runs if component unmounts or re-renders
  return () => {
    clearTimeout(timer); // Prevent the function from being called
    console.log('Cleaning up timer');
  };

}, [onConfirm]);

const TIMER = 3000;
const[remainingTime, setRemainingTime] = useState(TIMER);
//Here if we dont use useEffect it will go to infinite loop so we need to use useEffect()
useEffect(() => {
  const interval = setInterval(() => {
    console.log(TIMER);
    
  setRemainingTime(prevTime => prevTime-10);
}, 10);
return () => {
  clearInterval(interval);  
}

}, []);



  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
        {/* <progress/>//Built in function */}
        <progress value={remainingTime} max={TIMER} />
      </div>
    </div>
  );
}
