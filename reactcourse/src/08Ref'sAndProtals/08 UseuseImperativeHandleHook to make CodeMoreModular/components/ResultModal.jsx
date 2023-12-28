/* eslint-disable react/jsx-one-expression-per-line */
import React, { forwardRef } from "react";

const ResultModal = forwardRef(({ result, targetTime }, ref) => (
  <dialog ref={ref} className="result-modal">
    <h2>You {result}</h2>
    <p>
      The Target Time was <strong>{targetTime} seconds</strong>
    </p>
    <p>
      You stopped time with <strong>x seconds left</strong>
    </p>
    <form method="dailog">
      <button type="submit">Close</button>
    </form>
  </dialog>
));

export default ResultModal;
