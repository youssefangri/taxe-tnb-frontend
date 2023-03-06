import React, { Component } from "react";

class AddRedevable extends Component {
  constructor(props) {
    super(props);
    this.handleChangeCin = this.handleChangeCin.bind(this);
    this.handleChangeNom = this.handleChangeNom.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { cin: "", nom: "" };
  }

  handleChangeCin(event) {
    this.setState({ cin: event.target.value });
  }
  handleChangeNom(event) {
    this.setState({ nom: event.target.value });
  }

  handleSubmit(event) {
    //alert("Le nom " + this.state.nom + "Le cin " + this.state.cin);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cin: this.state.cin,
        nom: this.state.nom,
      }),
    };
    fetch(`${process.env.REACT_APP_API}`+"/taxe-tnb/redevable/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data > 0) {
          alert("Redebale ajouter avec succes");
        } else {
          alert("Erreur");
        }
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Paye Taxe</h3>
                </div>
                {/* /.card-header */}
                {/* form start */}
                <form role="form" onSubmit={this.handleSubmit}>
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
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Redevable Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputNom"
                        placeholder="Enter Name"
                        value={this.state.nom}
                        onChange={this.handleChangeNom}
                      />
                    </div>
                  </div>

                  {/* /.card-body */}
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddRedevable;
