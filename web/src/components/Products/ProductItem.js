import React from "react";
import { Link } from "react-router-dom";

import "./Product.css";
import { applyImagePlaceholderIfBlank } from "../../utils/placeholder";

const ProductItem = ({
  imageUrl,
  description,
  regularPrice,
  actualPrice,
  discountPercentile,
  id,
  url,
  onSale = false,
}) => {
  const price = regularPrice === actualPrice ? regularPrice : actualPrice;
  imageUrl = applyImagePlaceholderIfBlank(imageUrl);
  return (
    <article className="product__item">
      <figure className="product__item__figure">
        <img src={imageUrl} alt={`product id: ${id}`} />

        {onSale && (
          <div className="discount">
            <span>{`-${discountPercentile}`}</span>
          </div>
        )}

        <figcaption>{description}</figcaption>
      </figure>

      <Link to={`${url}/${id}`}>
        <h3 className="product__item__description">{description}</h3>
      </Link>

      <div className="product__item__price">
        {onSale && (
          <span className="regular__price">{` De: ${regularPrice}, por apenas:`}</span>
        )}

        <h3 className="final__price">{price}</h3>
      </div>
    </article>
  );
};

export default ProductItem;
