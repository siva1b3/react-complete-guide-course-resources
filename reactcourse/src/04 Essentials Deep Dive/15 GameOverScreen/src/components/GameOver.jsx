/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner} won !</p>
      <p>
        <button type="button">Rematch !</button>
      </p>
    </div>
  );
}

export default GameOver;
