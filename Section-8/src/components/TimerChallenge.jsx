import { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timerRef = useRef(null); // Persist timer across renders

  function handleStart() {
    // Reset expiration state in case of a restart
    setTimerExpired(false);
    timerRef.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timerRef.current); // Access saved timer
    setTimerStarted(false);
    setTimerExpired(false); // Optional: Reset status on stop
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>

      {timerExpired && <p>You lost!</p>}

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
  );
}
