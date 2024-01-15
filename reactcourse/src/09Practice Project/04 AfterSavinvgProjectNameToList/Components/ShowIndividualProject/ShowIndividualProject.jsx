/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TaskList from "../TaskList/TaskList";

function ShowIndividualProject({
  selectExistingProject: { projectName, description, dueDate, id, tasks },
  deleteButtonClickHandler,
}) {
  const [taskList, setTaskList] = useState(tasks);
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
  }

  return (
    <div className="showIndividualProject">
      <h1>{projectName}</h1>
      <h2>{description}</h2>
      <h3>{dueDate}</h3>
      <h3>{id}</h3>
      <button type="button" onClick={() => deleteButtonClickHandler(id)}>
        delete
      </button>
      <TaskList
        taskList={taskList}
        addTasks={(value) => addTasks(value)}
        deleteTasks={(value) => deleteTasks(value)}
      />
    </div>
  );
}

export default ShowIndividualProject;
