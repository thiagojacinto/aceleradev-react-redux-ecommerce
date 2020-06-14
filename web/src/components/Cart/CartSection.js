import React from "react";
import { useHistory } from "react-router-dom";

import "./CartSection.css";
import { ProductItem } from "../Products";
import BackButton from "../BackButton/BackButton";
import { useSelector } from "react-redux";
import searchByProductId from "../../utils/searchByProductId";

export const CartSection = () => {
  let history = useHistory();
  let { items } = useSelector((state) => state.cart);
  let { catalog } = useSelector((state) => state.catalog);

  const handleBack = (event) => {
    event.stopPropagation();
    history.goBack();
  };

  return (
    <div className="cart__display" onClick={(e) => handleBack(e)}>
      <div className="cart__modal">
        {items &&
          items.length > 0 &&
          items.map((item) => {
            let foundProduct = searchByProductId(catalog, item.id);
            return (
              <ProductItem
                key={item.sku}
                imageUrl={foundProduct[0].image}
                description={foundProduct[0].name}
                regularPrice={foundProduct[0].regular_price}
                actualPrice={foundProduct[0].actual_price}
                onSale={foundProduct[0].on_sale}
              />
            );
          })}

        <BackButton />
      </div>
    </div>
  );
};

export default CartSection;
