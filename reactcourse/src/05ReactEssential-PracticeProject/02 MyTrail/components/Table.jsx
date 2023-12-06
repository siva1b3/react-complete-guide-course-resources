import React from "react";
import { v4 as uuid } from "uuid";

function Table({ tableArray }) {
  if (tableArray.length === 0) {
    return <div id="center">Not Good</div>;
  }

  const headofTheTable = (
    <thead>
      <tr>
        {Object.keys(tableArray[0]).map((element) => (
          <th key={element}>{element}</th>
        ))}
      </tr>
    </thead>
  );

  function displayRow(element) {
    return (
      <tr key={uuid()}>
        {Object.values(element).map((value) => (
          <th key={uuid()}>{value}</th>
        ))}
      </tr>
    );
  }

  const bodyofTheTable = (
    <tbody>{tableArray.map((element) => displayRow(element))}</tbody>
  );

  return (
    <table id="result">
      {headofTheTable}
      {bodyofTheTable}
    </table>
  );
}

export default Table;
