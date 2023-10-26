import React from "react";
import "./index.css";
import Header from "./Header";

import imag1 from "./assets/components.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept(props) {
  const { image, title, description } = props;
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <div>
      <Header description={description} />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              title="componens"
              description="The core UI bulilding block"
              image={imag1}
            />
            <CoreConcept
              title="componens"
              description="The core UI bulilding block"
              image={imag1}
            />
            <CoreConcept
              title="componens"
              description="The core UI bulilding block"
              image={imag1}
            />
            <CoreConcept
              title="componens"
              description="The core UI bulilding block"
              image={imag1}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
