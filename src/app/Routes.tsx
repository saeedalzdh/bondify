import React, {Suspense, lazy} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {CircularProgress} from "@material-ui/core";

const MarketListing = lazy(() => import("./market-listing/MarketListing"));
const MarketDetails = lazy(() => import("./market-details/MarketDetails"));

const Routes = () => (
  <Router>
    <Suspense fallback={<CircularProgress />}>
      <Switch>
        <Route exact path="/" component={MarketListing} />
        <Route exact path="/:marketSymbolId" component={MarketDetails} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
