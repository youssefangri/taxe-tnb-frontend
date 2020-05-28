import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Redevable from "./components/redevable";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Menu />
      <Footer />
    </React.Fragment>
  );
}

export default App;
