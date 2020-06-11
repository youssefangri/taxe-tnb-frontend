import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import PaymentPage from "../pages/PaymentPage";
import RedevablePage from "../pages/RedevablePage";
import RedevablesPage from "../pages/RedevablesPage";
import AddRedevable from "../pages/AddRedevable";
class ContentBody extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PaymentPage} />
          <Route path="/redevable/cin/:cin" component={RedevablePage} />
          <Route exact path="/redevables" component={RedevablesPage} />
          <Route exact path="/redevables/save" component={AddRedevable} />
          {/**
          <Route path="/posts/:slug" component={DynamicRouteComp} />
          <Route component={NotFound} />
           */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default ContentBody;
