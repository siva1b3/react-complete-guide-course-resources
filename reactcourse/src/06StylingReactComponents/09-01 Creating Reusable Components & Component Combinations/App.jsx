import React from "react";

import AuthInputs from "./components/AuthInputs";
import Header from "./components/Header";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
    </>
  );
}
