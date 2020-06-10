import React from "react";

import ProductItem from "./ProductItem";

export const ProductList = ({ products }) => {
  return (
    <section className="product__list">
      <div className="container">
        {products.map((item) => {
          return (
            <ProductItem
              key={item.id}
              imageUrl={item.imageUrl}
              description={item.description}
              regularPrice={item.price}
              discountPercentile={item.discount ? item.discount : 0}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
