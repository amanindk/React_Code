import React, { useContext } from "react";
import { CartContext, useCart } from "../../context/CartContext";

function Item(props) {
  //   const cart = useContext(CartContext);
  const cart = useCart();
  return (
    <div>
      <h5>{props.name}</h5>
      <h5> Price: ${props.price}</h5>
      <button
        className="bg-red-600"
        onClick={() =>
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ])
        }
      >
        Add Cart
      </button>
    </div>
  );
}

export default Item;
