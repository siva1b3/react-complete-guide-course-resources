/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from "react";

// Declare a variable to store the new player name
let newPlayerName;

// Player component
export default function PlayerComponent() {
  // State to manage the player name and track if a new name is entered
  const [playerName, setPlayerName] = useState("unknown entity");

  // Event handler for updating the player name as it's typed
  const handleNameChange = (event) => {
    newPlayerName = event.target.value; // Store the entered name in the variable
  };

  // Event handler for setting the entered name as the player's name
  const handleSetName = () => {
    setPlayerName(newPlayerName); // Update the player name using the stored name
  };

  // JSX rendering of the PlayerComponent
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        {/* Input field for entering the player name */}
        <input type="text" onChange={handleNameChange} />
        {/* Button to set the entered name */}
        <button type="button" onClick={handleSetName}>
          Set Name
        </button>
      </p>
    </section>
  );
}
