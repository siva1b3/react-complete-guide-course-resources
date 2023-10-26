import React from "react";
import "./index.css";
import Header from "./Header";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <div>
      <Header description={description} />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
