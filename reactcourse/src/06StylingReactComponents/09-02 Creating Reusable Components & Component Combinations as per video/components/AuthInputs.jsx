import React, { useState } from "react";
import { styled } from "styled-components";
import StyledSignInButton from "./Button";
import CustomInput from "./Input";

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
    <CustomInput
      htmlFor="email"
      label="Email"
      type="email"
      id="email"
      isValid={emailNotValid}
      aria-labelledby="email"
      onChange={(event) => handleInputChange("email", event.target.value)}
    />
  );

  const passwordInputJSX = (
    <CustomInput
      label="Password"
      id="password"
      type="password"
      isValid={passwordNotValid}
      htmlFor="password"
      aria-labelledby="password"
      onChange={(event) => handleInputChange("password", event.target.value)}
    />
  );

  const createNewAccountJSX = (
    <button type="button" className="text-button">
      Create a new account
    </button>
  );

  const signInButtonJSX = (
    <StyledSignInButton type="button" onClick={() => handleLogin()}>
      Sign In
    </StyledSignInButton>
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
