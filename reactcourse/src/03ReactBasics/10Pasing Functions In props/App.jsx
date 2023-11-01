/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import "./index.css";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

import CORE_CONCEPTS from "./data";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const description = reactDescriptions[genRandomInt(2)];

  function selectHandler() {
    console.log("hello world!");
  }

  return (
    <div>
      <Header description={description} />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={selectHandler}>Components</TabButton>
            <TabButton onSelect={selectHandler}>JSX</TabButton>
            <TabButton onSelect={selectHandler}>Props</TabButton>
            <TabButton onSelect={selectHandler}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;