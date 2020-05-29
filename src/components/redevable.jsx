import React, { Component } from "react";

class Redevable extends Component {
  state = {
    redevable: {
      id: 1,
      nom: "Ahmed",
      cin: "abc123",
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
            <i className="fas fa-book mr-1" /> Education
          </strong>
          <p className="text-muted">
            B.S. in Computer Science from the University of Tennessee at
            Knoxville
          </p>
          <hr />
          <strong>
            <i className="fas fa-map-marker-alt mr-1" /> Location
          </strong>
          <p className="text-muted">Malibu, California</p>
          <hr />
          <strong>
            <i className="fas fa-pencil-alt mr-1" /> Skills
          </strong>
          <p className="text-muted">
            <span className="tag tag-danger">UI Design</span>
            <span className="tag tag-success">Coding</span>
            <span className="tag tag-info">Javascript</span>
            <span className="tag tag-warning">PHP</span>
            <span className="tag tag-primary">Node.js</span>
          </p>
          <hr />
          <strong>
            <i className="far fa-file-alt mr-1" /> Identification
          </strong>{" "}
          AB123
        </div>
        {/* /.card-body */}
      </div>
    );
  }
}

export default Redevable;
