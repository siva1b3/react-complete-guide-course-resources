import React from "react";
import Root from "./Root";

import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";
import "./index.css";

function App() {
  return (
    <Root>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </Root>
  );
}

export default App;
