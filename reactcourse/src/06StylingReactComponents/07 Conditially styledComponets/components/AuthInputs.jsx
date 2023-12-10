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
  color: #6b7280;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: #d1d5db;
  color: #374151;
  border: 1px solid transparent;
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
    <Label htmlFor="email">
      <p>Email:</p>
      <Input
        type="email"
        id="email"
        className={`${emailNotValid ? "invalid" : undefined}`}
        aria-labelledby="email"
        onChange={(event) => handleInputChange("email", event.target.value)}
      />
    </Label>
  );

  const passwordInputJSX = (
    <Label htmlFor="password">
      <p>Password</p>
      <Input
        id="password"
        type="password"
        className={`${passwordNotValid ? "invalid" : undefined}`}
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
