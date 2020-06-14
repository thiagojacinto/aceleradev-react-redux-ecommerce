import React, { useState } from "react";
import BackButton from "../BackButton/BackButton";
import { useDispatch } from "react-redux";

import { addProductToCart } from "../../redux/actions";

const ProductView = ({
  imageUrl,
  description,
  regularPrice,
  actualPrice,
  installments,
  sizeOptions = [],
  onSaleFlag,
  id,
}) => {
  let [selectedProductId, setSelectedProductId] = useState({ sku: "", id: id });
  const dispatch = useDispatch();

  const handleProductSelection = (event) => {
    event.stopPropagation();

    let sku = event.target.dataset.sku;
    if (selectedProductId.sku === sku) {
      setSelectedProductId({
        ...selectedProductId,
        sku: "",
      });
      event.target.classList.remove("selected");
      return;
    }
    setSelectedProductId({
      ...selectedProductId,
      sku: sku,
    });
    event.target.classList.add("selected");
  };

  const handleSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (selectedProductId.sku === "")
      return alert(
        "É preciso selecionar o tamanho de produto antes de colocar no carrinho. Tente novamente"
      );
    dispatch(addProductToCart(selectedProductId));
  };

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
                  key={id}
                  className="size__option"
                  data-sku={item.sku}
                  onClick={(e) => handleProductSelection(e)}
                >
                  {item.size}
                </button>
              ))}
            </div>

            <button className="add__to__cart" onClick={(e) => handleSubmit(e)}>
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
