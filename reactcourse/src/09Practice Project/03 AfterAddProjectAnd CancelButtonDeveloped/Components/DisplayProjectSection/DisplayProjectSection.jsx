import React from "react";
import NoProjectSelected from "../NoProjectSelected/NoProjectSelected";
import ValidateForm from "../ValidateForm/ValidateForm";
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
        <ValidateForm
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
