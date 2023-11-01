/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const description = reactDescriptions[genRandomInt(2)];
  const [selectedTopic, setSelectedTopic] = useState();

  function selectHandler(selectedButton) {
    console.log(`hello world! ${selectedButton}`);
    setSelectedTopic(selectedButton.toLowerCase());
    console.log("selectedTopic", selectedTopic);
  }

  console.log("APP COMPOMENT RENDERING");

  let tabContent = <p>please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header description={description} />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((element) => (
              <CoreConcept key={element.title} {...element} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "Components".toLowerCase()}
              onSelect={() => selectHandler("Components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "JSX".toLowerCase()}
              onSelect={() => selectHandler("JSX")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "Props".toLowerCase()}
              onSelect={() => selectHandler("Props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "State".toLowerCase()}
              onSelect={() => selectHandler("State")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
