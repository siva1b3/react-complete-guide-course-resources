/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

export default function TabButton({ children, isSelected, ...props }) {
  console.log("TABBUTTON COMPONENT EXECUTING");
  return (
    <li>
      <button
        className={isSelected ? "active" : undefined}
        type="button"
        {...props}
      >
        {children}
      </button>
    </li>
  );
}
