import React, { Component } from "react";
//import { Calendar } from "primereact/calendar";

class PayeTaxe extends Component {
  state = {};
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
              />
            </div>
            <div className="form-group">
              <label>Terrain</label>
              <select
                className="form-control select2"
                style={{ width: "100%" }}
              >
                <option selected="selected">Terrain 1</option>
                <option>Terrain 2</option>
                <option>Terrain 3</option>
                <option>Terrain 4</option>
                <option>Terrain 5</option>
              </select>
            </div>

            <div className="form-group">
              <label>Last Year Payed</label>
              <input
                type="text"
                className="form-control"
                placeholder={2016}
                disabled
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Annee</label>
              <input
                type="numbre"
                className="form-control"
                id="inputAnnee"
                placeholder="Entre Annee To Paye Taxe"
              />
            </div>
            <div className="form-group">
              <label>Date Presentation:</label>
              <div
                className="input-group date"
                id="reservationdate"
                data-target-input="nearest"
              >
                <input
                  type="text"
                  className="form-control datetimepicker-input"
                  data-target="#reservationdate"
                />
                <div
                  className="input-group-append"
                  data-target="#reservationdate"
                  data-toggle="datetimepicker"
                >
                  <div className="input-group-text">
                    <i className="fa fa-calendar" />
                  </div>
                </div>
              </div>
            </div>
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
