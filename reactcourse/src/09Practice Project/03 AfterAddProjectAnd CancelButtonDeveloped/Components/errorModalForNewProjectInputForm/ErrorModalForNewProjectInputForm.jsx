import React from "react";
import "./errorModalForNewProjectInputForm.css"; // You can create a CSS file for styling

function ErrorModalForNewProjectInputForm({ onClose }) {
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
