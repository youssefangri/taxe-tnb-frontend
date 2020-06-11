import React, { Component } from "react";

import Terrain from "../Terrain";
import Redevable from "../Redevable";
class RedevablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      url: "http://localhost:8090/taxe-tnb/",
      redevable: [],
      terrains: [],
    };
  }
  componentDidMount() {
    const { cin } = this.props.match.params;
    const redevableUrl = this.state.url + "redevable/cin/" + cin;
    const terrainUrl = this.state.url + "terrain/redevable/cin/" + cin;

    Promise.all([fetch(redevableUrl), fetch(terrainUrl)])

      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) =>
        this.setState({
          redevable: data1,
          terrains: data2,
          isLoaded: true,
        })
      )
      .catch((reason) => {
        this.setState({
          isLoaded: true,
          error: reason,
        });
      });
  }
  render() {
    const { error, isLoaded, redevable, terrains } = this.state;
    console.log("in render: " + terrains);
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      return (
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                {/* /.card */}
                <Terrain terraisItem={terrains} />
              </div>
              {/* /.col-md-6 */}

              <div className="col-lg-6">
                <Redevable key={redevable.id} redevableItem={redevable} />
                {/*
                 */}
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
}

export default RedevablePage;
