/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import React, { useRef, useState } from "react";

// Player component
export default function PlayerComponent() {
  // Use useRef to create a mutable object to hold the input element reference
  const playerNameInputRef = useRef();
  const isPlayerNameChangedFromDefault = useRef(false);

  // State to manage the player name and track if a new name is entered
  const [playerName, setPlayerName] = useState("unknown entity");
  const [playerNameChangeMode, setPlayerNameChangeMode] = useState(false);

  // Event handler for setting the entered name as the player's name
  const handleSetName = () => {
    // Update the player name using the stored input field value
    if (
      isPlayerNameChangedFromDefault.current === true &&
      playerNameChangeMode === false
    ) {
      //
    } else {
      const updatedName =
        playerNameInputRef.current.value.trim().toUpperCase() === ""
          ? "Please, Enter Proper Name"
          : playerNameInputRef.current.value.trim().toUpperCase();
      setPlayerName(updatedName);
      // Manupulating Dom directly in React is
      // Not a good practice
      playerNameInputRef.current.value = "";
    }

    if (isPlayerNameChangedFromDefault.current === true) {
      setPlayerNameChangeMode((prevMode) => !prevMode);
    }
    console.log(playerNameChangeMode);
    isPlayerNameChangedFromDefault.current = true;
  };

  const InputField =
    (isPlayerNameChangedFromDefault.current && playerNameChangeMode) ||
    !isPlayerNameChangedFromDefault.current ? (
      <input type="text" ref={playerNameInputRef} />
    ) : (
      ""
    );

  const submitButton = isPlayerNameChangedFromDefault.current
    ? `${playerNameChangeMode ? "Type The" : "Change "} Player Name`
    : "Change the Default Name";

  return (
    <section id="player">
      <h2>
        Welcome &ldquo;
        {playerName}
        &rdquo;
      </h2>
      <p>
        {InputField}
        <button type="button" onClick={handleSetName}>
          {submitButton}
        </button>
      </p>
    </section>
  );
}
