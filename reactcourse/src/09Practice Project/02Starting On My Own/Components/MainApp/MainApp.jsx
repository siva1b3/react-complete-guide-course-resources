import React from "react";
import DisplayProjectSection from "../DisplayProjectSection/DisplayProjectSection";
import ProjectViewSection from "../ProjectViewSection/ProjectViewSection";

import "./mainApp.css";

function MainApp() {
  return (
    <div className="app">
      <ProjectViewSection />
      <DisplayProjectSection />
    </div>
  );
}

export default MainApp;
