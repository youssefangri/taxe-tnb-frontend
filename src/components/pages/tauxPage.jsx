import React, { Component } from "react";

class tauxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      taux: [],
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API}`+"/taxe-tnb/taux/")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            taux: result,
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
    const { error, isLoaded, taux } = this.state;
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
                          <th>Surface Min</th>
                          <th>Surface Max</th>
                          <th>Prix Mettre Carre</th>
                        </tr>
                      </thead>
                      <tbody>
                        {taux.map((t) => (
                          <tr>
                            <td>{t.surfaceMin}</td>
                            <td>{t.surfaceMax}</td>
                            <td>{t.prixMetreCarre}</td>
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

export default tauxPage;
