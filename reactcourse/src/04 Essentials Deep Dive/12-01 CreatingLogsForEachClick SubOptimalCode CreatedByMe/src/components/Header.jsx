import React from "react";
import boardGameLogo from "../../public/game-logo.png";

function Header() {
  return (
    <header>
      <img src={boardGameLogo} alt="Hand drawn tic tac toe game board" />
      <h1>Tic Tac Toe</h1>
    </header>
  );
}

export default Header;
