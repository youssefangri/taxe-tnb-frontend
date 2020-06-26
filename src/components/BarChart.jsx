import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
//import "../../index.css";

import React, { Component } from "react";
import { Chart } from "primereact/chart";
import { Link } from "react-router-dom";

class BarChart extends Component {
  render() {
    const data = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Total Montant de base",
          backgroundColor: "#42A5F5",
          data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "Total Montant de Retard",
          backgroundColor: "#9CCC65",
          data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };

    return (
      <div className="content">
        <div className="container-fluid">
          <div className="col">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Annee</label>
              <div className="input-group input-group">
                <input
                  name="annee"
                  type="number"
                  className="form-control"
                  id="inputAnnee"
                  placeholder="Ex. 2020"
                />
                <span class="input-group-append">
                  <Link className="btn btn-info btn-flat" type="button">
                    Chercher
                  </Link>
                </span>
              </div>
            </div>
            <Chart type="bar" data={data} />
          </div>
        </div>
      </div>
    );
  }
}
export default BarChart;
