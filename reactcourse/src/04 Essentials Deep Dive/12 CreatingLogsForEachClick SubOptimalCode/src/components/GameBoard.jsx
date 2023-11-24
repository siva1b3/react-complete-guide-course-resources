import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ changePlayerSymbol, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleGameBoardClick(rowIndex, columnIndex) {
    setGameBoard((latestStateOfGameBoard) => {
      const latestGameBoardCopy = [
        ...latestStateOfGameBoard.map((innerArray) => [...innerArray]),
      ];
      latestGameBoardCopy[rowIndex][columnIndex] = activePlayerSymbol;
      console.log(latestGameBoardCopy);
      return latestGameBoardCopy;
    });
    changePlayerSymbol(rowIndex, columnIndex);
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={uuid()}>
          <ol>
            {row.map((playerSymbol, columnIndex) => (
              <li key={uuid()}>
                <button
                  type="button"
                  onClick={() => handleGameBoardClick(rowIndex, columnIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
