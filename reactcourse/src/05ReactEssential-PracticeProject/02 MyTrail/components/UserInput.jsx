/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <label htmlFor="initialinvestment">Initial Investment</label>
        <input
          tabIndex="1"
          type="number"
          name="initialinvestment"
          id="initialinvestment"
          min="10000"
          max="100000000"
          step="10000"
        />
        <label htmlFor="Annualinvestment">Annual Investment</label>
        <input
          tabIndex="2"
          type="number"
          name="Annualinvestment"
          id="Annualinvestment"
          min="1000"
          max="10000000"
          step="1000"
        />
      </div>
      <div className="input-group">
        <label htmlFor="ExpectedReturn">Expected Return</label>
        <input
          tabIndex="3"
          type="number"
          name="ExpectedReturn"
          id="ExpectedReturn"
          min="0.05"
          max="10000"
          step="0.05"
        />
        <label htmlFor="DurationMonths">Duration Months</label>
        <input
          tabIndex="4"
          type="number"
          name="DurationMonths"
          id="DurationMonths"
          min="0"
          max="1000"
          step="1"
        />
      </div>
    </div>
  );
}

export default UserInput;
