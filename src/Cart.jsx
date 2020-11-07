import React from "react";
import { useStateContext } from "./StateProvider";

function Cart({ id, img, title, ratings, price }) {
  return (
    <div  className="cart__content">
      <h5>{title}</h5>
      <p>{price}</p>
    </div>
  );
}

export default Cart;
