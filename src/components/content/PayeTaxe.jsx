import React, { Component } from "react";
import { Link } from "react-router-dom";

import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Calendar } from "primereact/calendar";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
//import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";
//import { Calendar } from "primereact/calendar";

class PayeTaxe extends Component {
  constructor(props) {
    super(props);
    this.handleGetTerrains = this.handleGetTerrains.bind(this);
    this.handleChangeCin = this.handleChangeCin.bind(this);
    this.handleSelectTerrain = this.handleSelectTerrain.bind(this);
    //this.handleChangeLYP = this.handleChangeLYP.bind(this);
    this.state = {
      isLoaded: false,
      cin: "",
      terrains: [],
      selectedTerrainRef: "",
      selectedTerrain: [],
      lastYearPayed: "",
      startDate: new Date(),
    };
  }

  handleChangeDate = (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleSelectTerrain(event) {
    console.log("selected: ");
    this.setState({ selectedTerrainRef: event.target.value });
    const url =
      "http://localhost:8090/taxe-tnb/terrain/reference/" + event.target.value;

    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            selectedTerrain: result,
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

  handleChangeCin(event) {
    this.setState({ cin: event.target.value });
  }
  handleGetTerrains(event) {
    const url =
      "http://localhost:8090/taxe-tnb/terrain/redevable/cin/" + this.state.cin;

    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            terrains: result,
            date: new Date(),
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
    return (
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">Paye Taxe</h3>
        </div>
        {/* /.card-header */}
        {/* form start */}
        <form role="form">
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Redevable CIN</label>
              <input
                type="text"
                className="form-control"
                id="inputCIN"
                placeholder="Enter CIN"
                value={this.state.cin}
                onChange={this.handleChangeCin}
              />
              <Link
                className="btn btn-info btn-sm m-2"
                onClick={this.handleGetTerrains}
              >
                Get
              </Link>
            </div>
            <div className="form-group">
              <label>Terrain</label>
              <select
                className="form-control select2"
                style={{ width: "100%" }}
                value={this.state.selectedTerrainRef}
                onChange={this.handleSelectTerrain}
              >
                <option>---Select Terrain---</option>
                {this.state.terrains.map((terrain) => (
                  <option>{terrain.reference}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Last Year Payed :</label>
              <input
                type="text"
                className="form-control"
                value={this.state.selectedTerrain.lastYearPayed}
                disabled
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Annee</label>
              <input
                type="numbre"
                className="form-control"
                id="inputAnnee"
                value={this.state.selectedTerrain.lastYearPayed + 1}
              />
            </div>
            <div className="form-group">
              <label>Date Presentation:</label>
              <div>
                <Calendar
                  showIcon={true}
                  value={this.state.date}
                  onChange={(e) => this.setState({ date: e.value })}
                  inputClassName="container"
                  style={{ width: "93%" }}
                ></Calendar>
              </div>
            </div>
            {/** 
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            */}
          </div>

          {/* /.card-body */}
          <div className="card-footer">
            <button type="submit" className="btn btn-primary">
              Simulate
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PayeTaxe;
