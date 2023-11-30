/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable no-shadow */
import React, { useState } from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

import "./index.css";

function getActivePlayerSymbol(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  // ! never UPDATE -- Never Never UPADTE
  // ^ Global Variable in Function Scope IN stateUpadte function
  // * we can use Global Variable IN stateUpadte function
  // ? but That's All we can use Global Variable IN stateUpadte function
  const currentPlayer = getActivePlayerSymbol(gameTurns);

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
