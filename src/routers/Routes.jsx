import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DefaultLayoutRouter from "./DefaultLayoutRouter";
import SignInRouter from "src/routers/SignInRouter";
import ProfileFormRouter from "src/routers/ProfileFormRouter";

export default () => (
  <Router>
    <main>
      <Switch>
        <Route path="/sign-in" exact component={SignInRouter} />
        <Route path="/profile-form" exact component={ProfileFormRouter} />
        <Route path="/" component={DefaultLayoutRouter} />
      </Switch>
    </main>
  </Router>
);
