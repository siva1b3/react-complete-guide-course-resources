import React from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import ListOfCoreConcepts from "./components/ListOfCoreConcepts/ListOfCoreConcepts";
import ExamplesFooter from "./components/ExamplesFooter/ExamplesFooter";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <ListOfCoreConcepts CORE_CONCEPTS={CORE_CONCEPTS} />
        <ExamplesFooter EXAMPLES={EXAMPLES} />
      </main>
    </>
  );
}

export default App;
