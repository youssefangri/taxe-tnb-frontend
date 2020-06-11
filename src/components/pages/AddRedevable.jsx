import React, { Component } from "react";

class AddRedevable extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = { redevable: [] };
  }

  handleSave(event) {
    event.preventDefault();
    console.log(event);
  }

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
              <label htmlFor="exampleInputEmail1">Redevable Name</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Enter CIN"
              />
            </div>
          </div>

          {/* /.card-body */}
          <div className="card-footer">
            <button onClick={this.handleSave} className="btn btn-primary">
              save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddRedevable;
