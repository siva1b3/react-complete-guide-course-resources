/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from "react";

function TaskList({ taskList, addTasks, deleteTasks }) {
  const NewTask = useRef();

  function addNewTasks() {
    const { value } = NewTask.current;
    if (value.length === 0) {
      NewTask.current.value = "";
    } else {
      addTasks(value);
      NewTask.current.value = "";
    }
  }

  return (
    <div>
      <h1>task</h1>
      <form>
        <label>
          <input type="text" ref={NewTask} name="taslList" id="tasks" />
        </label>
        <button type="button" onClick={() => addNewTasks()}>
          Add task
        </button>
      </form>
      {taskList.length > 0 ? (
        <ol>
          {taskList.map((element, index) => (
            <li key={`task_${index}`}>
              <div>
                <p>{element}</p>
                <button type="button" onClick={() => deleteTasks(index)}>
                  delete
                </button>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        ""
      )}
    </div>
  );
}

export default TaskList;
