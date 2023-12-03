/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

function GameOver({
  winnerSymbol,
  hasWinner,
  isGametie,
  playerData,
  reMatchButtonClick,
}) {
  const playerWon = playerData.filter(
    (element) => element.symbol === winnerSymbol
  );
  console.log(playerWon);
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {hasWinner && <p>{playerWon[0].player} won !</p>}
      {isGametie && <p>The game is draw!</p>}
      <p>
        <button type="button" onClick={reMatchButtonClick}>
          Rematch !
        </button>
      </p>
    </div>
  );
}

export default GameOver;
