import React, { Component } from "react";
import ContentHeader from "./content/ContentHeader";
import ContentBody from "./content/ContentBody";

class Content extends Component {
  state = {};
  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <ContentHeader />
        {/* /.content-header */}
        {/* Main content */}
        <ContentBody />
        {/* /.content */}
      </div>
    );
  }
}

export default Content;
