/* eslint-disable object-curly-newline */
import React, { useState } from "react";
import TaskList from "../TaskList/TaskList";
import DeleteProjectConfoemationTab from "../DeleteProjectConfoemationTab/DeleteProjectConfoemationTab";

function ShowIndividualProject({
  selectExistingProject: { projectName, description, dueDate, id, tasks },
  deleteButtonClickHandler,
}) {
  const [taskList, setTaskList] = useState(tasks);
  const [deleteConFormation, setDeleteConformation] = useState(false);

  function addTasks(value) {
    setTaskList((latestStateOfList) => {
      const newList = [...latestStateOfList, value];
      return newList;
    });
  }

  function deleteTasks(value) {
    setTaskList((latestStateOfList) => {
      const newList = latestStateOfList
        .slice(0, value)
        .concat(latestStateOfList.slice(value + 1));
      return newList;
    });
    setDeleteConformation(false);
  }

  function ShowModal() {
    setDeleteConformation(true);
  }

  function terminateDeleteProcess() {
    setDeleteConformation(false);
  }

  return (
    <div className="showIndividualProject">
      <h1>{projectName}</h1>
      <h2>{description}</h2>
      <h3>{dueDate}</h3>
      <h3>{id}</h3>
      <button type="button" onClick={() => ShowModal()}>
        delete
      </button>
      {deleteConFormation && (
        <DeleteProjectConfoemationTab
          onClose={() => deleteButtonClickHandler(id)}
          terminateDeleteProcess={() => terminateDeleteProcess()}
        />
      )}
      <TaskList
        taskList={taskList}
        addTasks={(value) => addTasks(value)}
        deleteTasks={(value) => deleteTasks(value)}
      />
    </div>
  );
}

export default ShowIndividualProject;
