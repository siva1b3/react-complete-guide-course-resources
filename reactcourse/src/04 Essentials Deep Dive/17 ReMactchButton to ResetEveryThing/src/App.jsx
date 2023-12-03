/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import { getActivePlayerSymbol, checkForWinner } from "./util";
import GameOver from "./components/GameOver";

import "./index.css";

const playerInitialData = [
  { symbol: "X", player: "Player 1" },
  { symbol: "O", player: "Player 2" },
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = getActivePlayerSymbol(gameTurns);

  const winnerData = checkForWinner(WINNING_COMBINATIONS, gameTurns);

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

  function addPlayerName(playerName, Symbol) {
    playerInitialData.forEach((element, index) => {
      if (element.symbol === Symbol) {
        playerInitialData[index].player = playerName;
      }
    });
  }

  const displayPlayersComponets = (
    <ol id="players" className="highlight-player">
      <Player
        initialName="Player 1"
        symbol="X"
        isActive={currentPlayer === "X"}
        getPlayerName={(playerName, Symbol) => {
          addPlayerName(playerName, Symbol);
        }}
      />
      <Player
        initialName="Player 2"
        symbol="O"
        isActive={currentPlayer === "O"}
        getPlayerName={(playerName, Symbol) => {
          addPlayerName(playerName, Symbol);
        }}
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

  const displayGameOverBoard = (
    <GameOver
      winnerSymbol={winnerData.winnerInfo.player}
      hasWinner={winnerData.hasWinner}
      playerData={playerInitialData}
      isGametie={winnerData.isGametie}
    />
  );

  return (
    <main>
      <Header />
      <div id="game-container">
        {displayPlayersComponets}
        {(winnerData.hasWinner === true || winnerData.isGametie === true) &&
          displayGameOverBoard}
        {diplayGameBoardComponent}
      </div>
      {displayLogsForEachMove}
    </main>
  );
}

export default App;
