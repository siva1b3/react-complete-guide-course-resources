/* eslint-disable react/jsx-one-expression-per-line */
import React, { forwardRef, useRef, useImperativeHandle } from "react";

const ResultModal = forwardRef(({ result, targetTime }, ref) => {
  const customDialogRef = useRef();

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
  }

  useImperativeHandle(ref, () => customFunctions);

  return (
    <dialog ref={customDialogRef} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The Target Time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped time with <strong>x seconds left</strong>
      </p>
      <form method="dailog" onSubmit={(event) => handleClose(event)}>
        <button type="submit">Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
