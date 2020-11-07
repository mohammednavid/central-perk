import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateContext } from "./StateProvider";
import { AddTotal } from "./reducer";

function CartTotal() {
  const [{ cart }, dispatch] = useStateContext();
  return (
    <div className="cart__total">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="cart__totalC">
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={AddTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button>CHECKOUT</button>
    </div>
  );
}

export default CartTotal;
