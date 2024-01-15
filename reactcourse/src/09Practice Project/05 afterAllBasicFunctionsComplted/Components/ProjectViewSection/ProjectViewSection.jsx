/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from "react";
import ListofProjects from "../ListofProjects/ListofProjects";
import "./projectViewSection.css";

function ProjectViewSection({
  ProjectSelected,
  handleCreateProjectClick,
  SaveNewProject,
  projectButtonClickHandle,
}) {
  const projectList = [...SaveNewProject];
  projectList.shift(); // we are removing first element over here
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
        <ListofProjects
          projectList={projectList}
          projectButtonClickHandle={
            (value) => projectButtonClickHandle(value)
            // we are adding 1 because we are removing first element on the starting
          }
        />
      ) : (
        ""
      )}
    </aside>
  );
}

export default ProjectViewSection;
