import React from "react";

import ProductsList from "../../components/Products/ProductsList";
import "./Catalog.css";

const Catalog = ({ products = [], url = "" }) => (
  <main className="catalog" data-testid="catalog">
    <div className="container">
      <ProductsList products={products} url={url} />
    </div>
  </main>
);

export default Catalog;
