import React from "react";

import './Product.css';

export const Product = ({
  imageUrl,
  description,
  regularPrice,
  discountPercentile = 0,
}) => {

  const price = (discountPercentile > 0
    ? (regularPrice * (100 - discountPercentile)) / 100
    : regularPrice
  ).toFixed(2);

  return (
    <article className="product__item">
      <figure className="product__item__figure">
        <img src={imageUrl} alt="" />

        {discountPercentile > 0 && (
          <div className="discount">
            <span>{`-${discountPercentile}%`}</span>
          </div>
        )}

        <figcaption>{description}</figcaption>
      </figure>

      <h5 className="product__item__description">{description}</h5>

      <div className="product__item__price">
        {discountPercentile > 0 && (
          <span className="regular__price">{regularPrice}</span>
        )}

        <p className="final__price">{price}</p>
      </div>
    </article>
  );
};

export default Product;