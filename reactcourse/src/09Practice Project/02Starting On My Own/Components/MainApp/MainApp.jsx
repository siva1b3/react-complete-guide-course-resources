/* eslint-disable no-unused-vars */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from "react";
import DisplayProjectSection from "../DisplayProjectSection/DisplayProjectSection";
import ProjectViewSection from "../ProjectViewSection/ProjectViewSection";

import "./mainApp.css";

function MainApp() {
  const [ProjectSelected, setProjectSelected] = useState(false);
  const [SaveNewProject, setSaveNewProject] = useState([]);
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
    console.log(value);
    // setSaveNewProject((latestStateOfProjectList) => {
    //   const list = latestStateOfProjectList;
    //   return list.push(value);
    // });
  }

  return (
    <div className="app">
      <ProjectViewSection
        ProjectSelected={ProjectSelected}
        handleCreateProjectClick={() => handleCreateProjectClick()}
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
