import React from "react";
import { MemoryRouter as Router, Switch, Route } from "react-router-dom";
import ChooseItem from "../../features/ChooseItem/components/ChooseItem";
import Details from "../../features/Details/components/Details";

export default function Root() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={ChooseItem} exact />
          <Route path="/details/:id" component={Details} exact />
        </Switch>
      </Router>
    </div>
  );
}
