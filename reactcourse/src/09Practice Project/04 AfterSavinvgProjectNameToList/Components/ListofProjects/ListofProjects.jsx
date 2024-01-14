/* eslint-disable array-callback-return */
import React from "react";
import { v4 as uuid } from "uuid";
import "./listofProjects.css";

function ListofProjects({ projectList }) {
  return (
    <div className="listofProjects">
      {projectList.length > 0 ? (
        <ul className="projectList">
          {projectList.map((element) => (
            <li key={uuid()}>
              <button type="button">{element.projectName}</button>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default ListofProjects;
