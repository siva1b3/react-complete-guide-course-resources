/* eslint-disable no-unused-vars */
import React from "react";
import ListofProjects from "../ListofProjects/ListofProjects";
import "./projectViewSection.css";

function ProjectViewSection({
  ProjectSelected,
  handleCreateProjectClick,
  SaveNewProject,
}) {
  const projectList = [...SaveNewProject];
  projectList.shift();
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
      {SaveNewProject.length > 0 ? (
        <ListofProjects projectList={projectList} />
      ) : (
        ""
      )}
    </aside>
  );
}

export default ProjectViewSection;
