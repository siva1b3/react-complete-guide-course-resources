/* eslint-disable react/button-has-type */
import React from "react";

function TabButton(props) {
  const { children, onSelect: clickHandler, isSelected } = props;

  console.log("TAB BUTTON RENDERING");
  console.log(isSelected);

  return (
    <li>
      <button
        className={isSelected ? "active" : undefined}
        onClick={clickHandler}
      >
        {children}
      </button>
    </li>
  );
}

export default TabButton;
