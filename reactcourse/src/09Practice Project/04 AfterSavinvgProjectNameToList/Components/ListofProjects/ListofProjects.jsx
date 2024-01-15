import React from "react";
import "./listofProjects.css";

function ListofProjects({ projectList, projectButtonClickHandle }) {
  function handleProjectSelectClick(value) {
    projectButtonClickHandle(value);
  }

  return (
    <div className="listofProjects">
      {projectList.length > 0 ? (
        <ol type="1" className="projectList">
          {projectList.map((element) => (
            <li key={`project_${element.id}`}>
              <button
                type="button"
                onClick={() => handleProjectSelectClick(element.id)}
              >
                {element.projectName}
              </button>
            </li>
          ))}
        </ol>
      ) : (
        <p>No projects available.</p>
      )}
    </div>
  );
}

export default ListofProjects;
