import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
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
