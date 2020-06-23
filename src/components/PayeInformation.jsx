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
          <strong>Redevable Name: {this.props.data.redevable.nom}</strong>
          <hr />
          <strong>Redevable cin: {this.props.data.redevable.cin}</strong>
          <hr />
          <strong>
            Terrain Reference : {this.props.data.terrain.reference}
          </strong>
          <hr />
          <strong>Terrain Surface : {this.props.data.terrain.surface}</strong>
          <hr />
          <strong>Montant de Base: {this.props.data.montantBase}</strong>
          <hr />
          <strong>
            Nombre Mois Retard: {this.props.data.nombreMoisRetard}
          </strong>
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
          {this.props.doSaved && (
            <button
              type="submit"
              className="btn btn-warning m-3"
              onClick={this.props.doDownladPdf}
            >
              Download Report pdf
            </button>
          )}
        </div>
        {/* /.card-body */}
      </div>
    );
  }
}

export default PayeInformation;
