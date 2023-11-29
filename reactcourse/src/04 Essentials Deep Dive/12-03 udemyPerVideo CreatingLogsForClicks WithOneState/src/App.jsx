/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

import "./index.css";

function App() {
  const [activePlayerSymbol, setActivePlayerSymbol] = useState("X");

  function changePlayerSymbol() {
    setActivePlayerSymbol((latestStateOfSymbol) =>
      latestStateOfSymbol === "X" ? "O" : "X"
    );
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
          changePlayerSymbol={() => changePlayerSymbol()}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
