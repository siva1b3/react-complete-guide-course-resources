/* eslint-disable indent */
import React, { useState } from "react";

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
    <label htmlFor="email">
      <p style={emailNotValid ? { color: "#f87171" } : undefined}>Email:</p>
      <input
        type="email"
        id="email"
        style={
          emailNotValid
            ? {
                color: "#ef4444",
                borderColor: "#f73f3f",
                backgroundColor: "#fed2d2",
              }
            : undefined
        }
        // className={emailNotValid ? "invalid" : undefined}
        aria-labelledby="email"
        onChange={(event) => handleInputChange("email", event.target.value)}
      />
    </label>
  );

  const passwordInputJSX = (
    <label htmlFor="password">
      <p style={passwordNotValid ? { color: "#f87171" } : undefined}>
        Password
      </p>
      <input
        id="password"
        type="password"
        style={
          passwordNotValid
            ? {
                color: "#ef4444",
                borderColor: "#f73f3f",
                backgroundColor: "#fed2d2",
              }
            : undefined
        }
        // className={passwordNotValid ? "invalid" : undefined}
        onChange={(event) => handleInputChange("password", event.target.value)}
      />
    </label>
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
      <div className="controls">
        {emailInputJSX}
        {passwordInputJSX}
      </div>
      <div className="actions">
        {createNewAccountJSX}
        {signInButtonJSX}
      </div>
    </div>
  );
}
