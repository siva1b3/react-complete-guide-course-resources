/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from "react";
import { v4 as uuid } from "uuid";

function GameBoard({
  changePlayerSymbol,
  initialGameBoard,
  turns,
  symbol: currentPlayer,
}) {
  const gameBoard = initialGameBoard;

  turns.forEach((turn) => {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  });

  function eachBoxOfGameBoard(columnIndex, rowIndex, elementInRow) {
    return (
      <li key={uuid()}>
        <button
          type="button"
          onClick={() =>
            changePlayerSymbol(rowIndex, columnIndex, currentPlayer)
          }
          disabled={typeof elementInRow === "string"}
        >
          {elementInRow}
        </button>
      </li>
    );
  }

  function eachLineOfGameBoard(row, rowIndex) {
    return (
      <ol>
        {row.map((elementInRow, columnIndex) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          eachBoxOfGameBoard(columnIndex, rowIndex, elementInRow)
        )}
      </ol>
    );
  }

  const displayGameBoard = gameBoard.map((row, rowIndex) => (
    <li key={uuid()}>{eachLineOfGameBoard(row, rowIndex)}</li>
  ));

  return <ol id="game-board">{displayGameBoard}</ol>;
}

export default GameBoard;
