import React from "react";
import image from "./assets/react-core-concepts.png";

export default function Header(props) {
  const { description } = props;

  return (
    <header>
      <img src={image} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description}
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
