/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from "react";
import DisplayProjectSection from "../DisplayProjectSection/DisplayProjectSection";
import ProjectViewSection from "../ProjectViewSection/ProjectViewSection";

import "./mainApp.css";

function MainApp() {
  const [ProjectSelected, setProjectSelected] = useState(false);
  const [SaveNewProject, setSaveNewProject] = useState([
    {
      description: "",
      dueDate: "",
      projectName: "",
    },
  ]);
  function handleCreateProjectClick() {
    if (ProjectSelected === false) {
      setProjectSelected(true);
    }
  }

  function handleCancelNewProjectClick() {
    setProjectSelected((latestStateOfProjectSelected) =>
      latestStateOfProjectSelected === true
        ? false
        : latestStateOfProjectSelected
    );
  }

  function handleSaveNewproject(value) {
    setSaveNewProject((latestStateOfProjectList) => {
      const newList = [...latestStateOfProjectList, value];
      return newList;
    });
    setProjectSelected((latestStateOfProjectSelected) =>
      latestStateOfProjectSelected === true
        ? false
        : latestStateOfProjectSelected
    );
  }

  console.log(SaveNewProject);
  return (
    <div className="app">
      <ProjectViewSection
        ProjectSelected={ProjectSelected}
        handleCreateProjectClick={() => handleCreateProjectClick()}
        SaveNewProject={SaveNewProject}
      />
      <DisplayProjectSection
        handleSaveNewproject={(value) => handleSaveNewproject(value)}
        handleCancelNewProjectClick={() => handleCancelNewProjectClick()}
        handleCreateProjectClick={() => handleCreateProjectClick()}
        ProjectSelected={ProjectSelected}
      />
    </div>
  );
}

export default MainApp;
