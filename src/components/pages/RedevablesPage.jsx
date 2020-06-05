import React, { Component } from "react";

import Terrain from "../Terrain";
import Redevable from "../Redevable";

class RedevablesPage extends Component {
  constructor(props) {
    super(props);
    this.testApi = this.testApi.bind();
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  testApi(event) {
    console.log("event");
  }
  componentDidMount() {
    fetch("http://localhost:8090/taxe-tnb/redevable/")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result,
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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      return (
        <ul>
          {items.map((item) => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default RedevablesPage;
