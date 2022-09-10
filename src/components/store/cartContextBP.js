import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  cartTotalAmount: 0,
  addItemToCart: (item) => {},
  removeItemFromCart: (id) => {},
});

export default CartContext;
