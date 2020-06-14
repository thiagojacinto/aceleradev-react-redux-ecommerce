import React from "react";
import { ShoppingCart } from "@styled-icons/fa-solid";

export const CartIcon = ({ iconSize, colorBase, itemsCount }) => {
  return (
    <div className="cart__evolved">
      <span className="cart__counting">{itemsCount}</span>
      <ShoppingCart size={iconSize} color={colorBase} />
    </div>
  );
};

export default CartIcon;
