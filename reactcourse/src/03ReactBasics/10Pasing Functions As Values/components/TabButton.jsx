/* eslint-disable react/button-has-type */
import React from "react";

function TabButton(props) {
  const { children, onClick: clickHandler } = props;

  return (
    <li>
      <button onClick={clickHandler}>{children}</button>
    </li>
  );
}

export default TabButton;
