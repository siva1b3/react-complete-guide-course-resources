/* eslint-disable */
import React from "react";
import { v4 as uuid } from "uuid";

function Log({ log, initailLog }) {
  if (log[0] === initailLog[0] && log.length > 1) {
    log.shift();
  }

  const logCopy = [...log];

  const displayLogs = logCopy
    .reverse()
    .map((logEntry, index) =>
      log[0] === initailLog[0] ? (
        <li key={uuid()}>{logEntry}</li>
      ) : (
        <li key={uuid()}>{`${logCopy.length - index} ${logEntry}`}</li>
      )
    );

  return <ol id="log">{displayLogs}</ol>;
}

export default Log;
