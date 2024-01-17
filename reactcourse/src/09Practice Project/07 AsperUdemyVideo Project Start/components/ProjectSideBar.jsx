import React from "react";
import "./projectSideBar.css";

function ProjectSideBar() {
  return (
    <aside className="projectSideBar">
      <h2>Your Projects</h2>
      <div>
        <button type="button">+ Add Project</button>
      </div>
      <ul>{}</ul>
    </aside>
  );
}

export default ProjectSideBar;
