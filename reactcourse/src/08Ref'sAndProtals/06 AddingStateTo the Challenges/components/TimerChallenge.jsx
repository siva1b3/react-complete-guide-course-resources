/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

export default function TimerChallenge({ title, targetTime }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button type="button">Start Challenge</button>
      </p>
      <p className="">Time is running... / Timer inactive</p>
    </section>
  );
}
