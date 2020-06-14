import React from "react";
import BackButton from "../BackButton/BackButton";

/*
- Pic
- Description
- Price
- Installments
- Pick a size
- Button "send to cart"
*/

const ProductView = ({
  imageUrl,
  description,
  regularPrice,
  actualPrice,
  installments,
  sizeOptions = [],
  onSaleFlag,
}) => {
  return (
    <div className="product">
      <article className="product__details">
        <figure className="product__image">
          <img src={imageUrl} alt={`${description}`} />
        </figure>
        <div className="product__details__text">
          <h3 className="product__title">{description}</h3>
          {onSaleFlag && (
            <div className="product__details__sale__flag">
              <strong>SALE</strong>
            </div>
          )}
          <div className="product__price">
            {onSaleFlag && <p className="regular__price">{regularPrice}</p>}
            <strong>{actualPrice}</strong>
          </div>

          <span className="installments">{installments}</span>
        </div>
      </article>

      <section className="cart__options">
        {sizeOptions.length > 0 ? (
          <>
            <div className="options__picker">
              {sizeOptions.map((item) => (
                <button
                  key={item.sku}
                  className="size__option"
                  data-sku={item.sku}
                >
                  {item.size}
                </button>
              ))}
            </div>

            <button className="add__to__cart">
              Adicionar ao carrinho de compras
            </button>
          </>
        ) : (
          <button className="add__to__cart-disabled">
            Desculpe, item não disponível. :(
          </button>
        )}
      </section>

      <BackButton />
    </div>
  );
};

export default ProductView;
