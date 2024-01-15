import React, { useRef, useState } from "react";
import "./validateForm.css";
import NewProjectInputForm from "../NewProjectInputForm/NewProjectInputForm";
import ErrorModalForNewProjectInputForm from "../errorModalForNewProjectInputForm/ErrorModalForNewProjectInputForm"; // Adjust the path based on your project structure

function ValidateForm({ handleCancelNewProjectClick, handleSaveNewproject }) {
  const projectName = useRef();
  const description = useRef();
  const dueDate = useRef();
  const [showErrorModal, setShowErrorModal] = useState(false);

  function handleSaveClick() {
    const projectNameValue = projectName.current.value;
    const descriptionValue = description.current.value;
    const dueDateValue = dueDate.current.value;

    if (!projectNameValue || !descriptionValue || !dueDateValue) {
      // If any of the fields is empty, setFormValid to false
      setShowErrorModal(true);
      return;
    }

    const FormResultObj = {
      projectName: projectNameValue,
      description: descriptionValue,
      dueDate: dueDateValue,
    };

    handleSaveNewproject(FormResultObj);

    // Clearing input values
    projectName.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";

    setShowErrorModal(false);
  }

  return (
    <>
      {showErrorModal && (
        <ErrorModalForNewProjectInputForm
          onClose={() => setShowErrorModal(false)}
        />
      )}
      <NewProjectInputForm
        handleCancelNewProjectClick={() => handleCancelNewProjectClick()}
        handleSaveClick={() => handleSaveClick()}
        projectName={projectName}
        description={description}
        dueDate={dueDate}
      />
    </>
  );
}

export default ValidateForm;
