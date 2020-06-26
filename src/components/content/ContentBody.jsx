import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";
import PaymentPage from "../pages/PaymentPage";
import RedevablePage from "../pages/RedevablePage";
import RedevablesPage from "../pages/RedevablesPage";
import AddRedevable from "../pages/AddRedevable";
import taxesPage from "../pages/taxesPage";
import terrainsPage from "../pages/terrainsPage";
import tauxPage from "../pages/tauxPage";
import BarChart from "../BarChart";
class ContentBody extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PaymentPage} />
        <Route exact path="/paye" component={PaymentPage} />
        <Route path="/redevable/cin/:cin" component={RedevablePage} />
        <Route exact path="/redevables" component={RedevablesPage} />
        <Route exact path="/redevables/save" component={AddRedevable} />
        <Route exact path="/taxes" component={taxesPage} />
        <Route exact path="/terrains" component={terrainsPage} />
        <Route exact path="/taux" component={tauxPage} />
        <Route exact path="/statistique" component={BarChart} />
        {/**
          <Route path="/posts/:slug" component={DynamicRouteComp} />
          <Route component={NotFound} />
           */}
      </Switch>
    );
  }
}

export default ContentBody;
