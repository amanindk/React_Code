import React, { useContext } from "react";
import { CartContext, useCart } from "../../context/CartContext";

function Cart() {
  //   const cart = useContext(CartContext);
  const cart = useCart();
  const total = cart.items.reduce((a, b) => a + b.price, 0);
  return (
    <div>
      {cart &&
        cart.items.map((item) => {
          return (
            <li>
              {item.name} - {item.price}
            </li>
          );
        })}
      <h1 className="text-3xl">Total Bill</h1>
      <h2>Total : ${total}</h2>
    </div>
  );
}

export default Cart;
