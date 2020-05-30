import React, { Component } from "react";
import Terrain from "../Terrain";
import Redevable from "../Redevable";

class ContentBody extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <Terrain />
              {/* /.card */}
            </div>
            {/* /.col-md-6 */}
            <div className="col-lg-6">
              <Redevable />
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