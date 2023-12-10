/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from "react";
import { styled } from "styled-components";
import { StyledSinInButton, Input, Label } from "./StyledComponets";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  const emailInputJSX = (
    <Label $isValid={emailNotValid} htmlFor="email">
      <p>Email:</p>
      <Input
        type="email"
        id="email"
        $isValid={emailNotValid}
        aria-labelledby="email"
        onChange={(event) => handleInputChange("email", event.target.value)}
      />
    </Label>
  );

  const passwordInputJSX = (
    <Label $isValid={passwordNotValid} htmlFor="password">
      <p>Password</p>
      <Input
        id="password"
        type="password"
        $isValid={passwordNotValid}
        onChange={(event) => handleInputChange("password", event.target.value)}
      />
    </Label>
  );

  const createNewAccountJSX = (
    <button type="button" className="text-button">
      Create a new account
    </button>
  );

  const signInButtonJSX = (
    <StyledSinInButton type="button" onClick={() => handleLogin()}>
      Sign In
    </StyledSinInButton>
  );

  return (
    <div id="auth-inputs">
      <ControlContainer>
        {emailInputJSX}
        {passwordInputJSX}
      </ControlContainer>
      <div className="actions">
        {createNewAccountJSX}
        {signInButtonJSX}
      </div>
    </div>
  );
}
