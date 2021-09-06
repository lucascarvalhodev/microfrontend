import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const Page1 = lazy(() => import("./pages/Page1"));
const Page2 = lazy(() => import("./pages/Page2"));

const Routes = () => (
  <BrowserRouter basename="/app2">
    <Suspense fallback="carregando...">
      <Switch>
        <Route path="/page1" exact component={Page1} />
        <Route path="/page2" exact component={Page2} />
        <Redirect to="/page1" />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
