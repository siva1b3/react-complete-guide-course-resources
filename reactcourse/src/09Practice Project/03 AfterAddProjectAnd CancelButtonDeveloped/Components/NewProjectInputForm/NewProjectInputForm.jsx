import React from "react";
import "./newProjectInputForm.css";

function NewProjectInputForm({
  handleCancelNewProjectClick,
  handleSaveClick,
  projectName,
  description,
  dueDate,
}) {
  return (
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
  );
}

export default NewProjectInputForm;
