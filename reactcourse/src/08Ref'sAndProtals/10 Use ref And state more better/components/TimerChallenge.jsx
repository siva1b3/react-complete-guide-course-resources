/* eslint-disable react/jsx-one-expression-per-line */
import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dailog = useRef();
  const newStateLoadTime = useRef(10);
  const [timerRunning, setTimmerRunning] = useState(targetTime * 1000);

  const isActive = timerRunning > 0 && timerRunning < targetTime * 1000;

  if (timerRunning < -1) {
    clearInterval(timer.current);
    dailog.current.openDialog();
    setTimmerRunning(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimmerRunning((prevState) => prevState - newStateLoadTime.current);
    }, targetTime * newStateLoadTime.current);
  }
  function HandleStop() {
    clearInterval(timer.current);
    setTimmerRunning(targetTime * 1000);
  }

  return (
    <>
      <ResultModal targetTime={targetTime} result="Lost" ref={dailog} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button
            type="button"
            onClick={() => (isActive ? HandleStop() : handleStart())}
          >
            {isActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isActive ? "active" : undefined}>
          {isActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
