import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const App1 = lazy(() => import("app1/App"));
const App2 = lazy(() => import("app2/App"));

const Routes = () => (
  <Suspense fallback="carregando...">
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/app1" component={App1} />
      <Route path="/app2" component={App2} />
      <Redirect to="/" />
    </Switch>
  </Suspense>
);

export default Routes;
