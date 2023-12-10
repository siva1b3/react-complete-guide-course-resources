import React from "react";
import styles from "./header.module.css";

import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={`${styles.paragraph}`}>
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
