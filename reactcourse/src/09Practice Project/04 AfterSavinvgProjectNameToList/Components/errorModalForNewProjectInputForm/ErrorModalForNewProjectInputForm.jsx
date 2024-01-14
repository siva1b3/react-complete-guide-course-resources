// ErrorModalForNewProjectInputForm.jsx
import React, { useEffect } from "react";
import "./errorModalForNewProjectInputForm.css";

function ErrorModalForNewProjectInputForm({ onClose }) {
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Add event listener when component mounts
    document.addEventListener("keydown", handleEscapeKey);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  return (
    <div className="errorModalForNewProjectInputForm">
      <div className="modalContent">
        <p>Please fill in all the required fields.</p>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ErrorModalForNewProjectInputForm;
