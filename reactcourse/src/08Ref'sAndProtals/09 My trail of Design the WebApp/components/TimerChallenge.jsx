/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();
  const dailog = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dailog.current.openDialog();
    }, targetTime * 1000);

    setTimerStarted(true);
  }
  function HandleStop() {
    clearTimeout(timer.current);
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
            onClick={() => (timerStarted ? HandleStop() : handleStart())}
          >
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
