import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./CartSection.css";
import { ProductItem } from "../Products";
import BackButton from "../BackButton/BackButton";
import { useSelector, useDispatch } from "react-redux";
import searchByProductId from "../../utils/searchByProductId";
import QuantityControls from "../../containers/Quantity/QuantityControls";
import { setTotalPrice } from "../../redux/actions";
import { calculateCartTotalPrice } from "../../utils/calculateCartTotalPrice";

export const CartSection = () => {
  let history = useHistory();
  let dispatch = useDispatch();

  let cart = useSelector((state) => state.cart);
  let { catalog } = useSelector((state) => state.catalog);

  const handleBack = (event) => {
    event.stopPropagation();
    history.goBack();
  };

  useEffect(() => {
    let cartItems = cart.items;

    let total = calculateCartTotalPrice(cartItems);

    dispatch(
      setTotalPrice(
        total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
      )
    );
  }, [cart.items, dispatch]);

  return (
    <div className="cart__display" onClick={(e) => handleBack(e)}>
      <div className="cart__modal">
        {cart.items &&
          cart.items.length > 0 &&
          cart.items.map((item, index) => {
            let foundProduct = searchByProductId(catalog, item.id);
            return (
              <>
                <ProductItem
                  key={foundProduct[0].sku + Math.random() * 1000}
                  imageUrl={foundProduct[0].image}
                  description={foundProduct[0].name}
                  regularPrice={foundProduct[0].regular_price}
                  actualPrice={foundProduct[0].actual_price}
                  onSale={foundProduct[0].on_sale}
                />

                <QuantityControls
                  index={index}
                  productSKU={item.sku}
                  quantity={item.quantity}
                />
              </>
            );
          })}
        <strong>Total: {cart.totalCost}</strong>
        <BackButton />
      </div>
    </div>
  );
};

export default CartSection;
