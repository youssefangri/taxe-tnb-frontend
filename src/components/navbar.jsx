import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light mb-5">
          <a className="navbar-brand" href="/">
            Navbar
            <span className="badge badge-pill badge-primary m-1"></span>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
