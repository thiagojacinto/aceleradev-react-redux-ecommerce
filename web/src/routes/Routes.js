import React, { useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import catalogMock from "../__test__/mockups/catalog.json";

import endpoints from "../utils/endpoints";
import {
  getProductList,
  addProductToCart,
  removeProductFromCart,
} from "../redux/actions";
import { Catalog, ProductDetail } from "../containers";
import { Search } from "../containers";

const { getProducts } = endpoints;

const Routes = () => {
  const dispatch = useDispatch();
  const { path } = useRouteMatch();

  useEffect(() => {
    // axios(getProducts)
    //   .then((data) => data.data)
    //   .then((res) => dispatch(getProductList(res)));
    dispatch(getProductList(catalogMock));
  }, [dispatch]);

  const { cart } = useSelector((state) => state);

  const productDetail = `${path}product`;

  return (
    <Switch>
      <Route exact path="/">
        <Catalog url={productDetail} />
      </Route>

      <Route path={`/search`}>
        <Search url={productDetail} />
      </Route>

      <Route path={`${productDetail}/:productId`}>
        <ProductDetail />
      </Route>
    </Switch>
  );
};

export default Routes;
