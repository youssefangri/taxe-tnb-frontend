import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Redevable from "./components/Redevable";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Content from "./components/Content";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Menu />
        <Content />
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
