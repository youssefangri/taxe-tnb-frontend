import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Redevable from "./components/redevable";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Redevable />
      </main>
    </React.Fragment>
  );
}

export default App;
