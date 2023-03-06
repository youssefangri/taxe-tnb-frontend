import React, { Component } from "react";
import { Link } from "react-router-dom";

class RedevablesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      redevables: [],
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API}`+"/taxe-tnb/redevable/")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            redevables: result,
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
    const { error, isLoaded, redevables } = this.state;
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
                          <th>Cin</th>
                          <th>Nom</th>
                          <th>More</th>
                        </tr>
                      </thead>
                      <tbody>
                        {redevables.map((redevable) => (
                          <tr>
                            <td>{redevable.id}</td>
                            <td>{redevable.cin}</td>
                            <td>{redevable.nom}</td>
                            <td>
                              <Link
                                className="btn btn-info btn-sm"
                                to={"/redevable/cin/" + redevable.cin}
                              >
                                More
                              </Link>
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

export default RedevablesPage;
