import React from "react";
import noProjectSelectedLogo from "../../assets/no-projects.png";
import "./noProjectSelected.css";

function NoProjectSelected({ handleCreateProjectClick }) {
  return (
    <div className="noProjectSelected">
      <img src={noProjectSelectedLogo} alt="noProjectSelectedLogo" />
      <h2>No project Selected</h2>
      <p>Select a Project (OR) Start a new Project</p>
      <button
        type="button"
        onClick={() => {
          handleCreateProjectClick();
        }}
      >
        Create a new Project
      </button>
    </div>
  );
}

export default NoProjectSelected;
