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
        <TimerChallenge challengeTitle="Easy" targetTimeInSeconds={1} />
        <TimerChallenge challengeTitle="Not easy" targetTimeInSeconds={5} />
        <TimerChallenge
          challengeTitle="Getting tough"
          targetTimeInSeconds={10}
        />
        <TimerChallenge challengeTitle="Pros only" targetTimeInSeconds={15} />
      </div>
    </Root>
  );
}

export default App;
