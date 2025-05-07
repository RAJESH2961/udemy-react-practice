import { useState, useRef } from "react";
import ResultModal from "./ResultModal";
export default function TimerChallenge({ title, targetTime }) {
//   const [timerStarted, setTimerStarted] = useState(false);
//   const [timerExpired, setTimerExpired] = useState(false);

  const timerRef = useRef(null); // Persist timer across renders
  const dialog = useRef();

  function handleStart() {
    // setTimerExpired(false);
    // setTimerStarted(true);
  
    timerRef.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open(); // ✅ correctly using the exposed method
    }, targetTime * 1000);
  }
  

  function handleStop() {
    clearTimeout(timerRef.current);        // Stop the timer
    setTimerStarted(false);                // Switch button label back to "Start"
    dialog.current.open();                 // Open the result modal (optional)
  }
  

  return (
    <>
<ResultModal ref={dialog} targetTime={targetTime} result="lost" />
    <section className="challenge">
      <h2>{title}</h2>

    {/* //   {timerExpired && <p>You lost!</p>} */}

      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>

      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>

      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running" : "Timer inactive"}
      </p>
    </section>
    </>
  );
}
