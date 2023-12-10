/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from "react";
import { styled } from "styled-components";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $isValid }) => ($isValid ? "#f87171" : "#6b7280")};
`;

// ${({ $isValid }) => isValid && "border-color: #f73f3f;"}

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({ $isValid }) => ($isValid ? "#fed2d2" : "#d1d5db")};
  color: ${({ $isValid }) => ($isValid ? "#ef4444" : "#374151")};
  border: 1px solid ${({ $isValid }) => ($isValid ? "#f73f3f" : "transparent")};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
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
    <button type="button" className="button" onClick={handleLogin}>
      Sign In
    </button>
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
