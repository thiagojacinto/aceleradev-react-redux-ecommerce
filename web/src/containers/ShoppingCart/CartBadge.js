import React from "react";
import { useSelector } from "react-redux";

import { CartIcon } from "../../components/Cart";

export const CartWithBadge = () => {
  let { count } = useSelector((state) => state.cart);

  return <CartIcon iconSize="30" itemsCount={count} />;
};

export default CartWithBadge;
