import React from "react";

export default function Tabs({ children, buttons, buttonContainer = "menu" }) {
  const ButtonContainer = buttonContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
