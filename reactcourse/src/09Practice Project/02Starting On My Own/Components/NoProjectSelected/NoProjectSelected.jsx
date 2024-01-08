import React from "react";
import noProjectSelectedLogo from "../../assets/no-projects.png";
import "./noProjectSelected.css";

function NoProjectSelected() {
  return (
    <div className="noProjectSelected">
      <img src={noProjectSelectedLogo} alt="noProjectSelectedLogo" />
      <h2>No project Selected</h2>
      <p>Select a project of get stated a new one</p>
      <button type="button">Create a new Project</button>
    </div>
  );
}

export default NoProjectSelected;
