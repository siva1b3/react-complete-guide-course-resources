import React from "react";
import { v4 as uuid } from "uuid";

function Log({ turns }) {
  function LogAllMoves() {
    return turns.map((turn) => (
      <li key={uuid()}>
        {`${turn.player} 
          selected ${turn.square.row + 1}, ${turn.square.col + 1}`}
      </li>
    ));
  }

  return (
    <ol id="log">
      {turns.length === 0 ? "Player Moves Will be Logged Here" : LogAllMoves()}
    </ol>
  );
}

export default Log;
