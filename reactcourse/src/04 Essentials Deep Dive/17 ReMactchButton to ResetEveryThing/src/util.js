/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
function getActivePlayerSymbol(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

// Map moves to row and column
function mapMovesToRowAndColumn(moves) {
  const mapToRowAndColumn = (move) => ({
    row: move.square.row,
    column: move.square.col,
  });

  return moves.map(mapToRowAndColumn);
}

// Separate game turns by player
function separateMovesByPlayer(gameTurns) {
  return gameTurns.reduce(
    (accumulator, currentValue) => {
      const playerKey = currentValue.player === "X" ? "xMoves" : "oMoves";
      accumulator[playerKey].push(currentValue);
      return accumulator;
    },
    { xMoves: [], oMoves: [] }
  );
}

// Separate players' checks into X and O symbols
function separatePlayerMoves(gameTurns) {
  if (gameTurns.length === 0) {
    return { xMoves: [], oMoves: [] };
  }

  const separatedMoves = separateMovesByPlayer(gameTurns);

  separatedMoves.xMoves = mapMovesToRowAndColumn(separatedMoves.xMoves);
  separatedMoves.oMoves = mapMovesToRowAndColumn(separatedMoves.oMoves);

  return separatedMoves;
}

// A comparer used to determine if two entries are equal.
function areMovesEqual(left, right) {
  return left.row === right.row && left.column === right.column;
}

// Get items that only occur in the left array, using the compareFunction to determine equality.
function findItemsOnlyInLeft(left, right, compareFunction) {
  return left.filter(
    (leftValue) =>
      !right.some((rightValue) => compareFunction(leftValue, rightValue))
  );
}

// Check for a winner based on player moves and winning combinations
function getWinningCombinationsForPlayer(
  playerMoves,
  winningCombinations,
  playerSymbol
) {
  return winningCombinations
    .filter(
      (element) =>
        findItemsOnlyInLeft(element, playerMoves, areMovesEqual).length === 0
    )
    .map((element) => ({
      winningCombination: element,
      player: playerSymbol,
    }));
}

// Combine winning combinations for both players
function combineWinningCombinations(
  playerOWinningCombination,
  playerXWinningCombination
) {
  return [...playerOWinningCombination, ...playerXWinningCombination];
}

// Determine if there is a single winner
function determineSingleWinner(winningCombinations) {
  return winningCombinations.length === 1
    ? {
        hasWinner: true,
        isGametie: false,
        winnerInfo: winningCombinations[0],
      }
    : {
        hasWinner: false,
        isGametie: false,
        winnerInfo: { player: undefined, winningCombination: undefined },
      };
}

// Main function to check for a winner
function checkForWinner(winningCombinations, gameStateAtThatMoment) {
  let winnerResult = {
    hasWinner: false,
    isGametie: false,
    winnerInfo: { player: undefined, winningCombination: undefined },
  };

  const { xMoves: playerSymbolX, oMoves: playerSymbolO } = separatePlayerMoves(
    gameStateAtThatMoment
  );

  if (playerSymbolO.length >= 3 || playerSymbolX.length >= 3) {
    const playerOWinningCombination = getWinningCombinationsForPlayer(
      playerSymbolO,
      winningCombinations,
      "O"
    );

    const playerXWinningCombination = getWinningCombinationsForPlayer(
      playerSymbolX,
      winningCombinations,
      "X"
    );

    const combinedWinningCombinations = combineWinningCombinations(
      playerOWinningCombination,
      playerXWinningCombination
    );

    winnerResult = determineSingleWinner(combinedWinningCombinations);

    if (
      playerSymbolO.length + playerSymbolX.length === 9 &&
      winnerResult.hasWinner === false
    ) {
      winnerResult.isGametie = true;
      winnerResult.winnerInfo.player = "No One";
    }
  }

  return winnerResult;
}

export { getActivePlayerSymbol, checkForWinner };
