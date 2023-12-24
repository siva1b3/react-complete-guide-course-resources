/* eslint-disable react/jsx-one-expression-per-line */
// Import necessary modules from React
import React, { useRef, useState } from "react";

// Player component
export default function PlayerComponent() {
  // Use useRef to create a mutable object to hold the input element reference
  const playerNameInputRef = useRef();

  // State to manage the player name and track if a new name is entered
  const [playerName, setPlayerName] = useState("unknown entity");

  // Event handler for setting the entered name as the player's name
  const handleSetName = () => {
    // Update the player name using the stored input field value
    setPlayerName(playerNameInputRef.current.value);
    // Manupulating Dom directly in React is
    // Not a good practice
    playerNameInputRef.current.value = "";
  };

  // JSX rendering of the PlayerComponent
  return (
    <section id="player">
      {/* Display a welcome message with the current player name */}
      <h2>Welcome {playerName}</h2>

      <p>
        {/* Input field for entering the player name */}
        <input type="text" ref={playerNameInputRef} />

        {/* Button to set the entered name */}
        <button type="button" onClick={handleSetName}>
          Set Name
        </button>
      </p>
    </section>
  );
}
