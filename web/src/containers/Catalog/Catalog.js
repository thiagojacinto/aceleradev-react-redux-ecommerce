import React from "react";

import ProductsList from "../../components/Products/ProductsList";
import "./Catalog.css";
import { useSelector } from "react-redux";

const Catalog = ({ url = "" }) => {
  const products = useSelector((store) => store.catalog.catalog);

  return (
    <main className="catalog" data-testid="catalog">
      <div className="container">
        <ProductsList products={products} url={url} />
      </div>
    </main>
  );
};

export default Catalog;
