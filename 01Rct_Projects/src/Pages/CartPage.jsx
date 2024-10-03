import React from "react";
import Item from "../components/Cart/Item";
import Cart from "../components/Cart/Cart";

function CartPage() {
  return (
    <div>
      <h1 className="text-4xl">Ecommerce App</h1>
      <Item name="Pendrive" price={1000} />
      <Item name="CPU" price={30000} />
      <Item name="Printer" price={8600} />
      <Item name="Watch" price={3600} />
      <Cart />
    </div>
  );
}

export default CartPage;
