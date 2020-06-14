import React from "react";

import ProductItem from "./ProductItem";

const ProductsList = ({ products, url }) => {
  return (
    <section className="product__list">
      <div className="container">
        {products &&
          products.map((item) => {
            return (
              <ProductItem
                key={item.code_color}
                id={item.code_color}
                url={url}
                imageUrl={item.image}
                description={item.name}
                regularPrice={item.regular_price}
                actualPrice={item.actual_price}
                discountPercentile={item.discount_percentage}
                installments={item.installments}
              />
            );
          })}
      </div>
    </section>
  );
};

export default ProductsList;
