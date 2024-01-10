import React from "react";
import NoProjectSelected from "../NoProjectSelected/NoProjectSelected";
import NewProjectInputForm from "../NewProjectInputForm/NewProjectInputForm";
import "./displayProjectSection.css";

function DisplayProjectSection({
  ProjectSelected,
  handleCancelNewProjectClick,
  handleCreateProjectClick,
  handleSaveNewproject,
}) {
  return (
    <section className="displayProjectSection">
      {ProjectSelected ? (
        <NewProjectInputForm
          handleSaveNewproject={(value) => handleSaveNewproject(value)}
          handleCancelNewProjectClick={() => handleCancelNewProjectClick()}
        />
      ) : (
        <NoProjectSelected
          handleCreateProjectClick={() => handleCreateProjectClick()}
        />
      )}
    </section>
  );
}

export default DisplayProjectSection;
