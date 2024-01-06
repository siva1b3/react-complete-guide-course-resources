/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(
  ({ targetTime, remaingTime, resetTimer }, ref) => {
    const customDialogRef = useRef();

    const score = ((1 - remaingTime / (targetTime * 1000)) * 100).toFixed(0);

    const customFunctions = {
      openDialog() {
        return customDialogRef.current.showModal();
      },
      closeDialog() {
        customDialogRef.current.close();
      },
    };

    function handleClose(event) {
      event.preventDefault(); // Prevent the form submission and page refresh
      customFunctions.closeDialog();
      resetTimer();
    }

    useImperativeHandle(ref, () => customFunctions);

    return createPortal(
      <dialog
        ref={customDialogRef}
        className="result-modal"
        onReset={(event) => handleClose(event)}
      >
        {remaingTime < 0 && <h2>You Lost</h2>}
        {remaingTime >= 0 && <h2>your score:- {score}</h2>}
        <p>
          The Target Time was <strong>{targetTime} seconds</strong>
        </p>
        {remaingTime < 0 ? (
          <p>You didn&apos;t stopped the timer with in specified time</p>
        ) : (
          <p>
            You stopped time with
            <strong>{(remaingTime / 1000).toFixed(2)} seconds left</strong>
          </p>
        )}
        <form method="dailog" onSubmit={(event) => handleClose(event)}>
          <button type="submit">Close</button>
        </form>
      </dialog>,
      document.getElementById("modal1")
    );
  }
);

export default ResultModal;
