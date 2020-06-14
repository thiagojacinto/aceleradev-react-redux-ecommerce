import React from "react";
import { useSelector } from "react-redux";

import { CartIcon } from "../../components/Cart";

export const CartWithBadge = (props) => {
  const cartItems = useSelector((state) => state.cart);

  return <CartIcon iconSize="30" itemsCount={cartItems.length} />;
};

export default CartWithBadge;
