import React, { useEffect } from "react";
import { Route, Switch, useRouteMatch, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
// import axios from "axios";
import catalogMock from "../__test__/mockups/catalog.json";

import endpoints from "../utils/endpoints";
import { getProductList } from "../redux/actions";
import { Catalog, ProductDetail, ShoppingCart } from "../containers";
import { Search } from "../containers";
import { CartSection } from "../components/Cart";

const { getProducts } = endpoints; // FETCH NECESSARY

const Routes = () => {
  const dispatch = useDispatch();
  const { path } = useRouteMatch();
  let location = useLocation();

  useEffect(() => {
    // axios(getProducts)
    //   .then((data) => data.data)
    //   .then((res) => dispatch(getProductList(res)));
    dispatch(getProductList(catalogMock));
  }, [dispatch]);

  const productDetail = `${path}product`;
  let background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path="/">
          <Catalog url={productDetail} />
        </Route>

        <Route path={`/search`}>
          <Search url={productDetail} />
        </Route>

        <Route path={`${productDetail}/:productId`}>
          <ProductDetail />
        </Route>

        <Route path={`/cart`}>
          <ShoppingCart>
            <CartSection />
          </ShoppingCart>
        </Route>
      </Switch>

      {background && (
        <Route
          path={`/cart`}
          children={
            <ShoppingCart>
              <CartSection />
            </ShoppingCart>
          }
        />
      )}
    </>
  );
};

export default Routes;
