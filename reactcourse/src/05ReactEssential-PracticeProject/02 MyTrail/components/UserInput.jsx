/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

function UserInput({ inputValues, handleInputChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <label htmlFor="initialInvestment">Initial Investment</label>
        <input
          tabIndex="1"
          type="number"
          name="initialInvestment"
          id="initialInvestment"
          min="10000"
          max="100000000"
          step="10000"
          value={
            inputValues.initialInvestment > 0
              ? inputValues.initialInvestment
              : ""
          }
          onChange={(event) => handleInputChange(event)}
        />
        <label htmlFor="annualInvestment">Annual Investment</label>
        <input
          tabIndex="2"
          type="number"
          name="annualInvestment"
          id="annualInvestment"
          min="1000"
          max="10000000"
          step="1000"
          value={
            inputValues.annualInvestment > 0 ? inputValues.annualInvestment : ""
          }
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="expectedReturn">Expected Return</label>
        <input
          tabIndex="3"
          type="number"
          name="expectedReturn"
          id="expectedReturn"
          min="0.005"
          max="100"
          step="0.005"
          value={
            inputValues.expectedReturn > 0 ? inputValues.expectedReturn : ""
          }
          onChange={(event) => handleInputChange(event)}
        />
        <label htmlFor="duration">Duration Months</label>
        <input
          tabIndex="4"
          type="number"
          name="duration"
          id="duration"
          min="0"
          max="1000"
          step="1"
          value={inputValues.duration > 0 ? inputValues.duration : ""}
          onChange={(event) => handleInputChange(event)}
        />
      </div>
    </div>
  );
}

export default UserInput;
