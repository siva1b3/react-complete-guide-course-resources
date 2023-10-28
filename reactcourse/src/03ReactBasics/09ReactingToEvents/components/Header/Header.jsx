/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import image from "../../assets/react-core-concepts.png";
import "./Header.css";

export default function Header(props) {
  const { description } = props;

  return (
    <header>
      <img src={image} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
