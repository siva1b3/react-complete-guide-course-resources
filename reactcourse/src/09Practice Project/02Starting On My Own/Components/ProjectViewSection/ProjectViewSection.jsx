/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ListofProjects from "../ListofProjects/ListofProjects";
import "./projectViewSection.css";

function ProjectViewSection() {
  const [projectList, setProjectList] = useState();
  function handleClick() {
    setProjectList(true);
  }
  return (
    <aside className="projectViewSection">
      <h1>Your Projects</h1>
      <button type="button" onClick={() => handleClick()}>
        Add Project
      </button>
    </aside>
  );
}

export default ProjectViewSection;
