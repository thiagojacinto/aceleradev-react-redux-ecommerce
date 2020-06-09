import React from 'react';
import { Route, Switch } from 'react-router-dom';

export const Routes = (props) => (
    <Switch>
      <Route path="/" />
      <Route path="/search" />
      <Route path="/cart" />
    </Switch>
);

export default Routes;