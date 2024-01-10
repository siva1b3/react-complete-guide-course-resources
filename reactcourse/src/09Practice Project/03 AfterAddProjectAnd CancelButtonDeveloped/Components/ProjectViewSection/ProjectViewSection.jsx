/* eslint-disable no-unused-vars */
import React from "react";
import ListofProjects from "../ListofProjects/ListofProjects";
import "./projectViewSection.css";

function ProjectViewSection({ ProjectSelected, handleCreateProjectClick }) {
  return (
    <aside className="projectViewSection">
      <h1>Your Projects</h1>
      {ProjectSelected ? (
        ""
      ) : (
        <button
          type="button"
          onClick={() => {
            handleCreateProjectClick();
          }}
        >
          Add Project
        </button>
      )}
    </aside>
  );
}

export default ProjectViewSection;
