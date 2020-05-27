import React, { Component } from "react";

class Redevable extends Component {
  state = {
    redevable: {
      id: 1,
      nom: "Ahmed",
      cin: "abc123",
    },
    terrain: [
      { id: 1, reference: "terrain1", surface: 20, lastYearPayed: 2020 },
      { id: 2, reference: "terrain2", surface: 100, lastYearPayed: 2016 },
    ],
  };
  /**
   * <p>Redevable: {this.state.redevable.id} </p>
        <p>
          Nom : {this.state.redevable.nom}
          <tr>Cin : {this.state.redevable.cin}</tr>
        </p>

   */
  render() {
    return (
      <div>
        <div className="card" style={{ width: "fit-content" }}>
          <h5 className="card-header">{this.state.redevable.nom}</h5>
          <div className="card-body">
            <p className="card-text">Cin : {this.state.redevable.cin}</p>
          </div>
          <ul className="list-group list-group-flush">
            {this.state.terrain.map((t) => (
              <li className="list-group-item">
                Terrain Reference: {t.reference}
                <span style={{ marginLeft: "5em" }}>
                  Surface: {t.surface}m²
                </span>
                <span style={{ marginLeft: "5em" }}>
                  Last Year Payed:
                  <span className="badge badge-primary m-2">
                    {t.lastYearPayed}
                  </span>
                </span>
                <div style={{ float: "right", marginLeft: "5em" }}>
                  <button className="btn btn-info btn-sm">Payer</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Redevable;
