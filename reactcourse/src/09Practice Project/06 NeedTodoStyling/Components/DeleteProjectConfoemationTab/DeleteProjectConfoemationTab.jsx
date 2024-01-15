/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from "react";
import "./deleteProjectConfoemationTab.css";

function DeleteProjectConfoemationTab({ onClose, terminateDeleteProcess }) {
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        terminateDeleteProcess();
      }
    };

    // Add event listener when component mounts
    document.addEventListener("keydown", handleEscapeKey);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [terminateDeleteProcess]);

  return (
    <div className="deleteProjectConfoemationTab">
      <div className="modalContent">
        <p>
          Are You sure You want to delete the <strong>Project</strong>
        </p>
        <button type="button" onClick={onClose}>
          DELETE
        </button>
      </div>
    </div>
  );
}

export default DeleteProjectConfoemationTab;
