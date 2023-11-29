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

  function changePlayerSymbol(rowIndex, columnIndex, PlayerSymbol) {
    setActivePlayerSymbol((latestStateOfSymbol) =>
      latestStateOfSymbol === "X" ? "O" : "X"
    );
    initailLog.push({
      row: rowIndex + 1,
      column: columnIndex + 1,
      player: PlayerSymbol,
    });
  }

  if (initailLog.length > 1 && typeof initailLog[0] === "string") {
    initailLog.shift();
  }

  // console.table(initailLog);

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
          changePlayerSymbol={(rowIndex, columnIndex, PlayerSymbol) =>
            changePlayerSymbol(rowIndex, columnIndex, PlayerSymbol)
          }
        />
      </div>
      <Log Logger={initailLog} />
    </main>
  );
}

export default App;
