/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from "react";
import DisplayProjectSection from "../DisplayProjectSection/DisplayProjectSection";
import ProjectViewSection from "../ProjectViewSection/ProjectViewSection";
import ShowIndividualProject from "../ShowIndividualProject/ShowIndividualProject";

import "./mainApp.css";

function MainApp() {
  const [ProjectSelected, setProjectSelected] = useState(false);
  const [SaveNewProject, setSaveNewProject] = useState([
    {
      id: 0,
      description: "",
      dueDate: "",
      projectName: "",
      tasks: [],
    },
    {
      id: 1,
      projectName: "Siva",
      description: "Full Stack",
      dueDate: "2024-01-20",
      tasks: [],
    },
    {
      id: 2,
      projectName: "Mukesh",
      description: "DataEngineer",
      dueDate: "2024-10-20",
      tasks: [],
    },
    {
      id: 3,
      projectName: "Pradeep",
      description: "DataScience (MBA)",
      dueDate: "2023-01-20",
      tasks: [],
    },
  ]);

  const [selectExistingProject, setSelectExistingProject] = useState(
    SaveNewProject[0]
  );

  function getElementById(id) {
    return SaveNewProject.find((element) => element.id === id);
  }

  function handleCreateProjectClick() {
    if (ProjectSelected === false) {
      setProjectSelected(true);
    }
    setSelectExistingProject(SaveNewProject[0]);
  }

  function handleCancelNewProjectClick() {
    setProjectSelected((latestStateOfProjectSelected) =>
      latestStateOfProjectSelected === true
        ? false
        : latestStateOfProjectSelected
    );
    setSelectExistingProject(SaveNewProject[0]);
  }

  function handleSaveNewproject(value) {
    const objectToInsert = {
      ...value,
      id: SaveNewProject[SaveNewProject.length - 1].id + 1,
      tasks: [],
    };
    setSaveNewProject((latestStateOfProjectList) => {
      const newList = [...latestStateOfProjectList, objectToInsert];
      return newList;
    });
    setProjectSelected((latestStateOfProjectSelected) =>
      latestStateOfProjectSelected === true
        ? false
        : latestStateOfProjectSelected
    );
    setSelectExistingProject(objectToInsert);
  }

  function projectButtonClickHandle(value) {
    setSelectExistingProject(getElementById(value));
  }

  function deleteButtonClickHandler(value) {
    setSaveNewProject((latestStateOfProjectSelected) => {
      const newListOfprojects = latestStateOfProjectSelected.filter(
        ({ id }) => id !== value
      );
      return newListOfprojects;
    });
    setProjectSelected((latestStateOfProjectSelected) =>
      latestStateOfProjectSelected === true
        ? false
        : latestStateOfProjectSelected
    );
    setSelectExistingProject(SaveNewProject[0]);
  }

  return (
    <div className="app">
      <ProjectViewSection
        ProjectSelected={ProjectSelected}
        handleCreateProjectClick={() => handleCreateProjectClick()}
        SaveNewProject={SaveNewProject}
        projectButtonClickHandle={(value) => projectButtonClickHandle(value)}
      />
      {selectExistingProject.projectName.length > 0 ? (
        <ShowIndividualProject
          selectExistingProject={selectExistingProject}
          deleteButtonClickHandler={(value) => deleteButtonClickHandler(value)}
        />
      ) : (
        <DisplayProjectSection
          handleSaveNewproject={(value) => handleSaveNewproject(value)}
          handleCancelNewProjectClick={() => handleCancelNewProjectClick()}
          handleCreateProjectClick={() => handleCreateProjectClick()}
          ProjectSelected={ProjectSelected}
        />
      )}
    </div>
  );
}

export default MainApp;
