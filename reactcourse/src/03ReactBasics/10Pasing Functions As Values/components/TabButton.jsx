/* eslint-disable react/button-has-type */
import React from "react";

function TabButton(props) {
  const { children } = props;

  function clickHandler() {
    console.log(`hello world! From ${children}`);
  }

  return (
    <li>
      <button onClick={clickHandler}>{children}</button>
    </li>
  );
}

export default TabButton;
