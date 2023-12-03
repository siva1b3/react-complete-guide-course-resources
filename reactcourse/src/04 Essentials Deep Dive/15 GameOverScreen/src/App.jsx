/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import { getActivePlayerSymbol, checkForWinner } from "./util";

import "./index.css";

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = getActivePlayerSymbol(gameTurns);

  const winnerData = checkForWinner(WINNING_COMBINATIONS, gameTurns);
  console.dir(winnerData);

  function changePlayerSymbol(rowIndex, columnIndex) {
    setGameTurns((latestStateOfGameTurns) => {
      const playerSymbol = getActivePlayerSymbol(latestStateOfGameTurns);

      const UpdatedStateOfGameTurns = [
        { square: { row: rowIndex, col: columnIndex }, player: playerSymbol },
        ...latestStateOfGameTurns,
      ];

      return UpdatedStateOfGameTurns;
    });
  }

  const displayPlayersComponets = (
    <ol id="players" className="highlight-player">
      <Player
        initialName="Player 1"
        symbol="X"
        isActive={currentPlayer === "X"}
      />
      <Player
        initialName="Player 2"
        symbol="O"
        isActive={currentPlayer === "O"}
      />
    </ol>
  );

  const diplayGameBoardComponent = (
    <GameBoard
      changePlayerSymbol={(rowIndex, columnIndex) =>
        changePlayerSymbol(rowIndex, columnIndex)
      }
      turns={gameTurns}
    />
  );

  const displayLogsForEachMove = <Log turns={gameTurns} />;

  return (
    <main>
      <Header />
      <div id="game-container">
        {displayPlayersComponets}
        {diplayGameBoardComponent}
      </div>
      {displayLogsForEachMove}
    </main>
  );
}

export default App;
