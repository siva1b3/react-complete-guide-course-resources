/* eslint-disable react/button-has-type */
import React from "react";

function TabButton(props) {
  const { children } = props;
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}

export default TabButton;
