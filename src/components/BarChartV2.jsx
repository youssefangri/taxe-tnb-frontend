import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
//import "../../index.css";

import React, { Component } from "react";
import { Chart } from "primereact/chart";
import { Link } from "react-router-dom";

class BarChartV2 extends Component {
  constructor(props) {
    super(props);
    this.handleChangeAnnee = this.handleChangeAnnee.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: null,
      isLoaded: true,
      url: `${process.env.REACT_APP_API}`+"/taxe-tnb/taxe/statistic/v2/annee/",
      totalMontantBase: [],
      totalMontantRetard: [],
      annee: "",
    };
  }

  handleChangeAnnee(event) {
    this.setState({ annee: event.target.value });
  }
  handleSubmit(event) {
    const { annee } = this.state;
    const url = this.state.url + annee;
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            totalMontantBase: result[0],
            totalMontantRetard: result[1],
          });
        },

        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        // des exceptions provenant de réels bugs du composant.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
    event.preventDefault();
  }

  render() {
    const { error, isLoaded } = this.state;
    const options = {
      animation: { duration: 0 },
    };
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
          data: this.state.totalMontantBase,
        },
        {
          label: "Total Montant de Retard",
          backgroundColor: "#9CCC65",
          data: this.state.totalMontantRetard,
        },
      ],
    };
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      return (
        <div className="content">
          <div className="container-fluid">
            <div className="col">
              <form role="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Annee</label>
                  <div className="input-group input-group">
                    <input
                      name="annee"
                      type="number"
                      className="form-control"
                      id="inputAnnee"
                      placeholder="Ex. 2020"
                      value={this.state.annee}
                      onChange={this.handleChangeAnnee}
                    />
                    <span class="input-group-append">
                      <button className="btn btn-info btn-flat" type="submet">
                        Chercher
                      </button>
                    </span>
                  </div>
                </div>
              </form>
              <Chart type="bar" data={data} options={options} />
            </div>
          </div>
        </div>
      );
    }
  }
}
export default BarChartV2;
