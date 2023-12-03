/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

function GameOver({ winner, hasWinner, isGametie }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {hasWinner && <p>Player {winner} won !</p>}
      {isGametie && <p>The game is draw!</p>}
      <p>
        <button type="button">Rematch !</button>
      </p>
    </div>
  );
}

export default GameOver;
