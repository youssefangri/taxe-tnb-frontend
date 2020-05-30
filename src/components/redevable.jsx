import React, { Component } from "react";

class Redevable extends Component {
  state = {
    redevable: {
      id: 1,
      nom: "Ahmed",
      cin: "abc123",
      address: "Marrakech",
      email: "exemple@gmail.com",
    },
  };
  /**
   * <p>Redevable: {this.state.redevable.id} </p>
        <p>
          Nom : {this.state.redevable.nom}
          <tr>Cin : {this.state.redevable.cin}</tr>
        </p>

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

   */
  render() {
    return (
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">Redevable Information</h3>
        </div>
        {/* /.card-header */}
        <div className="card-body">
          <strong>
            <i className="fas fa-user mr-1" /> Name:{" "}
          </strong>
          Ahmed Benjaloun
          <hr />
          <strong>
            <i className="far fa-id-card mr-1" />
            CIN Identification
          </strong>{" "}
          AB123
          <hr />
          <strong>
            <i className="fas fa-map-marker-alt mr-1" /> Adresse:{" "}
          </strong>
          Marrakech
          <hr />
          <strong>
            <i className="fas fa-envelope mr-1" /> Mail:{" "}
          </strong>
          exemple@gmail.com
        </div>
        {/* /.card-body */}
      </div>
    );
  }
}

export default Redevable;
