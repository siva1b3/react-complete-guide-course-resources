/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

import "./index.css";

const initailLog = ["Palyer moves logged here"];

function App() {
  const [activePlayerSymbol, setActivePlayerSymbol] = useState("X");
  const [log, setLog] = useState(initailLog);

  function Logger(rowIndex, columnIndex) {
    setLog((latestStateOfLog) => {
      const logCopy = [...latestStateOfLog];
      logCopy.push(
        `Player ${activePlayerSymbol} selects row ${rowIndex} and column ${columnIndex}`
      );
      return logCopy;
    });
  }

  function changePlayerSymbol(rowIndex, columnIndex) {
    setActivePlayerSymbol((latestStateOfSymbol) =>
      latestStateOfSymbol === "X" ? "O" : "X"
    );
    Logger(rowIndex, columnIndex);
  }

  return (
    <main>
      <Header />
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayerSymbol === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayerSymbol === "O"}
          />
        </ol>
        <GameBoard
          activePlayerSymbol={activePlayerSymbol}
          changePlayerSymbol={(rowIndex, columnIndex) =>
            changePlayerSymbol(rowIndex, columnIndex)
          }
        />
      </div>
      <Log log={log} />
    </main>
  );
}

export default App;
