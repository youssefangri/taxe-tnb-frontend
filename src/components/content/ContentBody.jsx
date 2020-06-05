import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import PaymentPage from "../pages/PaymentPage";
import RedevablePage from "../pages/RedevablePage";
import RedevablesPage from "../pages/RedevablesPage";
class ContentBody extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PaymentPage} />
          <Route exact path="/redevable" component={RedevablePage} />
          <Route exact path="/redevables" component={RedevablesPage} />
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
