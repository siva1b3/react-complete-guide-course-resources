/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import CoreConcept from "./CoreConcept";
import "./CoreConcepts.css";

function ListOfCoreConcepts(props) {
  console.log(props);
  const { CORE_CONCEPTS } = props;
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}

export default ListOfCoreConcepts;
