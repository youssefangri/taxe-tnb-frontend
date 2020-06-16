import React, { Component } from "react";
import PayeTaxe from "../content/PayeTaxe";
import PayeInformation from "../PayeInformation";

class PaymentPage extends Component {
  constructor(props) {
    super(props);
    this.handleSimulate = this.handleSimulate.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      cin: "",
      selectedTerrainRef: "",
      YearToPaye: "",
      date: "",
      data: {
        annee: "",
        datePresentation: "",
        montant: "",
        montantBase: "",
        montantRetard: "",
        nombreMoisRetard: "",
        tauxTnb: { prixMetreCarre: "" },
      },
    };
  }

  handleSimulate(event) {
    const { cin, selectedTerrainRef, YearToPaye, date } = event.target;
    this.setState({
      cin: cin.value,
      selectedTerrainRef: selectedTerrainRef.value,
      YearToPaye: YearToPaye.value,
      date: date.value,
    });

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    };
    fetch(
      "http://localhost:8090/taxe-tnb/taxe/simuler/terrain/reference/" +
        selectedTerrainRef.value +
        "/annee/" +
        YearToPaye.value +
        "/cin/" +
        cin.value +
        "/date/" +
        date.value,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result[0] > 0) {
          this.setState({ data: result[1] });
        } else {
          alert("Erreur");
        }
      });

    event.preventDefault();
  }
  handleSave(event) {
    const { cin, selectedTerrainRef, YearToPaye, date } = this.state;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    };
    fetch(
      "http://localhost:8090/taxe-tnb/taxe/save/terrain/reference/" +
        selectedTerrainRef +
        "/annee/" +
        YearToPaye +
        "/cin/" +
        cin +
        "/date/" +
        date,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result[0] > 0) {
          console.log("succes: taxe Saved");
          alert("succes: taxe Saved");
        } else {
          alert("Erreur: Taxe not saved");
        }
      });

    //event.preventDefault();
  }

  handleData = () => {
    return this.state.data;
  };
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              {/* /.card */}
              <PayeTaxe doSimulate={this.handleSimulate} />
            </div>
            {/* /.col-md-6 */}

            <div className="col-lg-6">
              <PayeInformation
                data={this.handleData()}
                doSave={this.handleSave}
              />
              {/*
              <Redevable />
              <Terrain />*/}
            </div>
            {/* /.col-md-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
    );
  }
}

export default PaymentPage;
