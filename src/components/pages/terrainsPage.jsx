import React, { Component } from "react";

class terrainsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      terrains: [],
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API}`+"/taxe-tnb/terrain/")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            terrains: result,
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
    const { error, isLoaded, terrains } = this.state;
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
                          <th>photo</th>
                          <th>Nom Complete</th>
                          <th>Voir/Telecharger</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>photo</td>
                          <td>Angri Youusef</td>

                          <td>
                            <button className="btn btn-info btn-sm" onClick="">
                              Voir
                            </button>
                            <button className="btn btn-info btn-sm" onClick="">
                              Voir
                            </button>
                          </td>
                        </tr>
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

export default terrainsPage;
