/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useRef, useState } from "react";

function TimerChallenge({ challengeTitle, targetTimeInSeconds }) {
  const startTimeRef = useRef(null);
  const endTimeRef = useRef(null);
  const diffRef = useRef(null);
  const timeoutIdRef = useRef(null);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isTimerExpired, setIsTimerExpired] = useState(false);

  const toggleTimer = () => {
    if (isTimerActive === false && isTimerExpired === false) {
      startTimeRef.current = Date.now();
      timeoutIdRef.current = setTimeout(() => {
        setIsTimerExpired(true);
        setIsTimerActive(false);
      }, targetTimeInSeconds * 1000 + 200);
      diffRef.current = null;
      setIsTimerActive(true);
    } else if (isTimerActive === false && isTimerExpired === true) {
      setIsTimerExpired(false);
    } else {
      endTimeRef.current = Date.now();
      diffRef.current = endTimeRef.current - startTimeRef.current;
      console.log(`Time Diff in seconds ${diffRef.current / 1000}`);
      startTimeRef.current = null;
      endTimeRef.current = null;
      setIsTimerActive(false);
      clearTimeout(timeoutIdRef.current);
    }
  };

  return (
    <section className="challenge">
      <h2>{challengeTitle}</h2>
      <p className="challenge-time">
        {targetTimeInSeconds} second{targetTimeInSeconds > 1 ? "s" : ""}
      </p>
      {isTimerExpired && <p>You Lost</p>}
      <p>
        <button type="button" onClick={toggleTimer}>
          {!isTimerActive
            ? isTimerExpired
              ? "ReStart Match"
              : "Start Challenge"
            : "Stop Timer"}
        </button>
      </p>
      {diffRef.current > 0 && (
        <p>{Number((diffRef.current / 1000).toFixed(2))}</p>
      )}
      <p className={isTimerActive && !isTimerExpired ? "active" : undefined}>
        {isTimerActive && !isTimerExpired
          ? "Time is running..."
          : "Timer inactive"}
      </p>
    </section>
  );
}

export default TimerChallenge;
