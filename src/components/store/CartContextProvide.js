import CartContext from "./cartContextBP";
import { useReducer } from "react";

const defaultState = {
  cartItems: [],
  cartTotalCost: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedCartTotalCost =
      state.cartTotalCost + action.newItem.price * action.newItem.amount;

    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.newItem.id
    );
    const existingCartItem = state.cartItems[existingCartItemIndex];
    let updatedCartItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.newItem.amount,
      };
      updatedCartItems = [...state.cartItems];
      updatedCartItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedCartItems = state.cartItems.concat(action.newItem);
    }

    return { cartItems: updatedCartItems, cartTotalCost: updatedCartTotalCost };
  }
  if (action.type === "SUB") {
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.cartItems[existingCartItemIndex];
    const updatedCartTotalCost = state.cartTotalCost - existingCartItem.price;
    let updatedCartItems;
    if (existingCartItem.amount === 1) {
      updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.id
      );
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedCartItems = [...state.cartItems];
      updatedCartItems[existingCartItemIndex] = updatedItem;
    }

    return { cartItems: updatedCartItems, cartTotalCost: updatedCartTotalCost };
  }
  if (action.type === "RES") {
    return { ...state, cartTotalCost: action.totalCost };
  }
  return state;
};

const CartContextProvide = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);
  const addItemToCartHandler = (newItem) => {
    dispatchCartAction({ type: "ADD", newItem: newItem });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "SUB", id: id });
  };

  const resetCartHandler = () => {
    dispatchCartAction({ type: "RES", totalCost: 0 });
  };
  const cartContext = {
    cartItems: cartState.cartItems,
    cartTotalCost: cartState.cartTotalCost,
    addItemToCart: addItemToCartHandler,
    removeItemFromCart: removeItemFromCartHandler,
    resetCart: resetCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvide;
