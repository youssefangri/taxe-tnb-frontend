import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <footer className="main-footer">
          <strong>
            Copyright © 2020 {"{"}" "{"}"}
            <a href="http://adminlte.io">Youssef Angri</a>.
          </strong>
          All rights reserved.
          <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 1.0.1
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
