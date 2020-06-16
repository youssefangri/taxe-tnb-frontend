import React, { Component } from "react";

class PayeInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  render() {
    return (
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">Taxe Information</h3>
        </div>
        {/* /.card-header */}
        <div className="card-body">
          <strong>
            Taux par Metre carre : {this.props.data.tauxTnb.prixMetreCarre}
          </strong>
          <hr />
          <strong>Montant de Base: {this.props.data.montantBase}</strong>
          <hr />
          <strong>
            Montant de Retard: {this.props.data.montantRetard}
          </strong>{" "}
          <hr />
          <strong>Montant Totale: {this.props.data.montant}</strong>
        </div>
        <div className="card-footer">
          <button
            type="submit"
            className="btn btn-warning"
            onClick={this.props.doSave}
          >
            Save
          </button>
        </div>
        {/* /.card-body */}
      </div>
    );
  }
}

export default PayeInformation;
