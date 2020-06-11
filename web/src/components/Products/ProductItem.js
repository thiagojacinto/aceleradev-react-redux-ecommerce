import React from "react";
import { Link } from "react-router-dom";

import "./Product.css";

export const Product = ({
  imageUrl,
  description,
  regularPrice,
  actualPrice,
  discountPercentile,
  id,
  url,
}) => {
  const price = regularPrice === actualPrice ? regularPrice : actualPrice;

  return (
    <article className="product__item">
      <figure className="product__item__figure">
        <img src={imageUrl} alt={`product id: ${id}`} />

        {discountPercentile > 0 && (
          <div className="discount">
            <span>{`-${discountPercentile}%`}</span>
          </div>
        )}

        <figcaption>{description}</figcaption>
      </figure>

      <Link to={`${url}/${id}`}>
        <h5 className="product__item__description">{description}</h5>
      </Link>

      <div className="product__item__price">
        {discountPercentile === "" && (
          <span className="regular__price">{regularPrice}</span>
        )}

        <p className="final__price">{price}</p>
      </div>
    </article>
  );
};

export default Product;