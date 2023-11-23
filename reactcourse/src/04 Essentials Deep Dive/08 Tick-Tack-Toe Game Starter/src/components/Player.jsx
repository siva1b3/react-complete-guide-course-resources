import React, { useState } from "react";

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [currentPlayerName, setCurrentPlayerName] = useState(name);

  function handleEditClick() {
    setIsEditing(!isEditing);
  }

  const playerNameDisplay = isEditing ? (
    <span>
      <input type="text" name="playerName" id="playerNameInput" />
    </span>
  ) : (
    <span className="player-name">{currentPlayerName}</span>
  );

  const playerSymbolDisplay = <span className="player-symbol">{symbol}</span>;

  const editSaveButton = (
    <button type="button" onClick={() => handleEditClick()}>
      {isEditing ? "Save" : "Edit"}
    </button>
  );

  return (
    <li>
      <span className="player">
        {playerNameDisplay}
        {playerSymbolDisplay}
      </span>
      {editSaveButton}
    </li>
  );
}

export default Player;
