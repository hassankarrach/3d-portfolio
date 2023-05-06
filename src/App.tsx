import reactLogo from "./assets/react.svg";
import "./App.css";
import Skills from "./components/Skills/skills";
import Experiance from "./components/Experiance/Experiance";
import Main from "./components/Sections/Main";
import Loader from "./components/Loader/Loader";
import { Suspense, useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Main />
      </Suspense>
    </div>
  );
}

export default App;
