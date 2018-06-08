import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
// import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/store/:storeID" component={App} />
      <Route component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
