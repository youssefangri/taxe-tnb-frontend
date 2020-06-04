import React, { Component } from "react";
import Terrain from "../Terrain";
import Redevable from "../Redevable";
import PayeTaxe from "./PayeTaxe";
import PayeInformation from "../PayeInformation";

class ContentBody extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              {/* /.card */}
              <PayeTaxe />
            </div>
            {/* /.col-md-6 */}

            <div className="col-lg-6">
              <PayeInformation />
              {/*
              <Redevable />
              <Terrain />*/}
            </div>
            {/* /.col-md-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
    );
  }
}

export default ContentBody;
