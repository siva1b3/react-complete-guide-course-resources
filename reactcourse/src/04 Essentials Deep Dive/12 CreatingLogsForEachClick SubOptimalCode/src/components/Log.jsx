/* eslint-disable no-unused-vars */
import React from "react";
import { v4 as uuid } from "uuid";

function Log({ log }) {
  // let logCopy;
  // if (log[0] === initailLog) {
  //   log.shift();
  //   logCopy = [...log];
  // }
  return (
    <ol id="log">
      {log.map((logEntry) => (
        <li key={uuid()}>{logEntry}</li>
      ))}
    </ol>
  );
}

export default Log;
