import React, { useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import endpoints from "../utils/endpoints";
import {
  getProductList,
  addProductToCart,
  removeProductFromCart,
} from "../redux/actions";
import { Catalog } from "../containers";

const { getProducts } = endpoints;

export const Routes = () => {
  const dispatch = useDispatch();
  const { path, url } = useRouteMatch();

  useEffect(() => {
    axios(getProducts)
      .then((data) => data.data)
      .then((res) => dispatch(getProductList(res)));
  }, [dispatch]);

  const { cart, catalog } = useSelector((state) => state);

  return (
    <Switch>
      <Route exact path="/">
        <Catalog products={catalog.catalog} url={url} />
      </Route>

      <Route path={`${path}/search`} />
      <Route path={`${path}/:productId`} />
    </Switch>
  );
};

export default Routes;