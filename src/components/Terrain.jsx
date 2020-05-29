import React, { Component } from "react";

class Terrain extends Component {
  state = {
    terrain: [
      { id: 1, reference: "TER2058", surface: 20, lastYearPayed: 2020 },
      { id: 2, reference: "TER2180", surface: 100, lastYearPayed: 2016 },
      { id: 2, reference: "TER2240", surface: 120, lastYearPayed: 2016 },
      { id: 2, reference: "TER3020", surface: 1500, lastYearPayed: 2016 },
    ],
  };
  render() {
    return (
      <div className="card">
        <div className="card-header border-0">
          <h3 className="card-title">Terrain</h3>
          <div className="card-tools">
            <a href="#" className="btn btn-tool btn-sm">
              <i className="fas fa-download" />
            </a>
            <a href="#" className="btn btn-tool btn-sm">
              <i className="fas fa-bars" />
            </a>
          </div>
        </div>
        <div className="card-body table-responsive p-0">
          <table className="table table-striped table-valign-middle">
            <thead>
              <tr>
                <th>Reference</th>
                <th>Surface</th>
                <th>Last Paid Year</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
              {this.state.terrain.map((t) => (
                <tr>
                  <td>{t.reference}</td>
                  <td>{t.surface}m²</td>
                  <td>{t.lastYearPayed}</td>
                  <td>
                    <button className="btn btn-info btn-sm">Payer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Terrain;
