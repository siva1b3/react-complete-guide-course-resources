import React from "react";

export default function TabButton({ children, onSelect, isSelected }) {
  console.log("TABBUTTON COMPONENT EXECUTING");
  return (
    <li>
      <button
        className={isSelected ? "active" : undefined}
        type="button"
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
}
