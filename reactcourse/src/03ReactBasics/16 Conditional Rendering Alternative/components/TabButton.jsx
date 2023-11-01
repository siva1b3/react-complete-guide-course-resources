/* eslint-disable react/button-has-type */
import React from "react";

function TabButton(props) {
  const { children, onSelect: clickHandler } = props;

  console.log("TAB BUTTON RENDERING");

  return (
    <li>
      <button onClick={clickHandler}>{children}</button>
    </li>
  );
}

export default TabButton;
