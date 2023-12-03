/* eslint-disable object-curly-newline */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from "react";

// The Player component represents a player in a game.
function Player({ initialName, symbol, isActive, getPlayerName }) {
  // State to manage the editing mode of the player's name.
  const [isEditing, setIsEditing] = useState(false);

  // State to track the current player's name during editing.
  const [currentPlayerName, setCurrentPlayerName] = useState(initialName);

  // Function to toggle between editing and non-editing modes.
  function toggleEdit() {
    setIsEditing((latestStateofIsEditing) => {
      if (latestStateofIsEditing === true) {
        getPlayerName(currentPlayerName, symbol);
      }
      return !latestStateofIsEditing;
    });

    // If not in editing mode, clear the name for new input.
    if (!isEditing) {
      setCurrentPlayerName((LatestStateOfcurrentPlayerName) =>
        LatestStateOfcurrentPlayerName === initialName
          ? ""
          : LatestStateOfcurrentPlayerName
      );
    } else {
      // If in editing mode, restore the original name if input is empty.
      setCurrentPlayerName((LatestStateOfcurrentPlayerName) =>
        LatestStateOfcurrentPlayerName
          ? LatestStateOfcurrentPlayerName
          : initialName
      );
    }
  }

  // Function to handle changes in the player's name input.
  function handleNameChange(event) {
    // Update the current player's name based on input.
    // if new state value is not depending on old state value
    // we will not pass the latest value in arrow function
    // this type of update the input tag based on the input value
    // is called two way binding in react
    setCurrentPlayerName(() => event.target.value);
  }

  // JSX for displaying the player's name based on the editing mode.
  const playerNameDisplay = isEditing ? (
    <span>
      <input
        className="player-name"
        type="text"
        name="playerName"
        id="playerNameInput"
        onChange={(event) => handleNameChange(event)}
        value={currentPlayerName}
      />
    </span>
  ) : (
    <span className="player-name">{currentPlayerName}</span>
  );

  // JSX for displaying the player's symbol.
  const playerSymbolDisplay = <span className="player-symbol">{symbol}</span>;

  // JSX for the "Edit" or "Save" button, based on the editing mode.
  const editSaveButton = (
    <button type="button" onClick={() => toggleEdit()}>
      {isEditing ? "Save" : "Edit"}
    </button>
  );

  // JSX for the overall player component.
  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {playerNameDisplay}
        {playerSymbolDisplay}
      </span>
      {editSaveButton}
    </li>
  );
}

export default Player;
