import React from "react";
import { useDispatch } from "react-redux";

import {
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProductFromCart,
  getTotalItems,
} from "../../redux/actions";

export const QuantityControls = ({ productSKU, quantity }) => {
  const dispatch = useDispatch();

  const handleIncrease = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(increaseProductQuantity(productSKU));
  };
  const handleDecrease = (event) => {
    event.stopPropagation();
    event.preventDefault();

    dispatch(decreaseProductQuantity(productSKU));
  };

  const handleRemove = (event) => {
    event.stopPropagation();
    event.preventDefault();

    dispatch(removeProductFromCart(productSKU));
    dispatch(getTotalItems());
  };

  return (
    <>
      <div className="items__quantity__controls">
        <div className="container">
          <button
            className="increase__quantity"
            value="+"
            onClick={(e) => handleIncrease(e)}
          >
            +
          </button>

          <div className="display__quantity">
            <p className="item__quantity">{quantity}</p>
          </div>

          <button
            className="decrease__quantity"
            value="-"
            onClick={(e) => handleDecrease(e)}
          >
            -
          </button>

          <button className="remove__item" onClick={(e) => handleRemove(e)}>
            Remover
          </button>
        </div>
      </div>
    </>
  );
};

export default QuantityControls;
