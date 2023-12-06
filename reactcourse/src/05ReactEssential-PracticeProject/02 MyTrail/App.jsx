import React, { useState } from "react";
import Header from "./components/Header";
import { calculateInvestmentResults } from "./util/investment";
import Table from "./components/Table";

import UserInput from "./components/UserInput";
import "./index.css";

function App() {
  // State object to store user inputs
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 0.045,
    duration: 10,
  });

  // Function to handle changes in input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update the state dynamically based on the input field name
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: Number(value),
    }));
  };

  // console.log("Input Values:", inputValues);

  // console.log(calculateInvestmentResults(inputValues));

  const tableArray = calculateInvestmentResults(inputValues);

  return (
    <>
      <Header />
      <UserInput
        handleInputChange={(event) => handleInputChange(event)}
        inputValues={inputValues}
      />
      <Table tableArray={tableArray} />
    </>
  );
}

export default App;
