/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import "./index.css";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: newValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInput
        userInput={userInput}
        onChange={(inputIdentifier, newValue) =>
          handleChange(inputIdentifier, newValue)
        }
      />
      <Results input={userInput} />
    </>
  );
}

export default App;
