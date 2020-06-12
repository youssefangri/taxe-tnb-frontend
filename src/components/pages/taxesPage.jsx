import React, { Component } from "react";

class taxesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      taxes: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8090/taxe-tnb/taxe/")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            taxes: result,
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
  }
  render() {
    const { error, isLoaded, taxes } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      return (
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card card-primary">
                  <div className="card-body table-responsive p-0">
                    <table className="table table-striped table-valign-middle">
                      <thead>
                        <tr>
                          <th>id</th>
                          <th>Terrain Reference</th>
                          <th>Redevable CIN</th>
                          <th>Annee</th>
                          <th>Montant</th>
                        </tr>
                      </thead>
                      <tbody>
                        {taxes.map((taxe) => (
                          <tr>
                            <td>{taxe.id}</td>
                            <td>{taxe.terrain.reference}</td>
                            <td>{taxe.redevable.cin}</td>
                            <td>{taxe.annee}</td>
                            <td>{taxe.montant}</td>
                            <td>
                              <button
                                className="btn btn-info btn-sm"
                                onClick=""
                              >
                                More
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default taxesPage;
