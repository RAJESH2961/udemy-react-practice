import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    // Set up a timeout to trigger quiz completion
    const timeoutId = setTimeout(onTimeout, timeout);

    // Set up interval to decrement time
    const intervalId = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 100);
    }, 100);

    // Cleanup function: clear both timeout and interval
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [timeout, onTimeout]);

  return (
    <progress id="question-time" max={timeout} value={remainingTime} />
  );
}
