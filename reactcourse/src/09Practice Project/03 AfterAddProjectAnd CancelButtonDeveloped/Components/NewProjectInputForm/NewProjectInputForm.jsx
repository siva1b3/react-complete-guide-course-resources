/* eslint-disable no-unused-vars */
// NewProjectInputForm.jsx
import React, { useRef, useState } from "react";
import "./newProjectInputForm.css";
import ErrorModalForNewProjectInputForm from "../errorModalForNewProjectInputForm/ErrorModalForNewProjectInputForm"; // Adjust the path based on your project structure

function NewProjectInputForm({
  handleCancelNewProjectClick,
  handleSaveNewproject,
}) {
  const projectName = useRef();
  const description = useRef();
  const dueDate = useRef();
  const [formValid, setFormValid] = useState(true);
  const [showErrorModal, setShowErrorModal] = useState(false);

  function handleSaveClick() {
    const projectNameValue = projectName.current.value;
    const descriptionValue = description.current.value;
    const dueDateValue = dueDate.current.value;

    if (!projectNameValue || !descriptionValue || !dueDateValue) {
      // If any of the fields is empty, setFormValid to false
      setFormValid(false);
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

    // Reset form validity
    setFormValid(true);
  }

  return (
    <>
      {!formValid && showErrorModal && (
        <ErrorModalForNewProjectInputForm
          onClose={() => setShowErrorModal(false)}
        />
      )}
      {/* bookmark point 1 */}
      <div className="newProjectInputForm">
        <form action="">
          <div className="cancelSaveButtons">
            <button
              type="button"
              onClick={() => {
                handleCancelNewProjectClick();
              }}
            >
              cancel
            </button>
            <button type="button" onClick={() => handleSaveClick()}>
              save
            </button>
          </div>
          <label htmlFor="projectName">
            <div className="label">TITLE</div>
            <div className="input">
              <input
                type="text"
                ref={projectName}
                name="projectName"
                id="projectName"
                required
              />
            </div>
          </label>
          <label htmlFor="description">
            <div className="label">Description</div>
            <div className="input">
              <input
                type="text"
                ref={description}
                name="description"
                id="description"
                required
              />
            </div>
          </label>
          <label htmlFor="dueDate">
            <div className="label">Date</div>
            <div className="input">
              <input
                type="date"
                required
                ref={dueDate}
                name="dueDate"
                id="dueDate"
              />
            </div>
          </label>
        </form>
      </div>
      {/* bookmark point 2 */}
    </>
  );
}

export default NewProjectInputForm;
