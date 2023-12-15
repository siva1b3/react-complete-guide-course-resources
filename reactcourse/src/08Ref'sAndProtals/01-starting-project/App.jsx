import React from "react";
import Root from "./Root";

import Player from "./components/Player";
import "./index.css";

function App() {
  return (
    <Root>
      <Player />
      <div id="challenges" />
    </Root>
  );
}

export default App;
