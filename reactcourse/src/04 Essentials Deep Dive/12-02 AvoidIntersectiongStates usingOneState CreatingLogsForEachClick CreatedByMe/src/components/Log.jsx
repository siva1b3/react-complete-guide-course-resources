import React from "react";
import { v4 as uuid } from "uuid";

function Log({ Logger }) {
  const LoggerCopy = [...Logger];

  function printEachLog(element) {
    return `Player ${element.player} Selected row ${element.row} and column ${element.column}`;
  }

  const logdata = LoggerCopy.reverse().map((element) => (
    <li key={uuid()}>{printEachLog(element)}</li>
  ));

  return (
    <ol id="log">{typeof Logger[0] === "string" ? `${Logger[0]}` : logdata}</ol>
  );
}

export default Log;
