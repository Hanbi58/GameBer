import classes from "./Cart.module.css";
import Modal from "./Modal";
import CartContext from "../store/cartContextBP";
import { useContext, useEffect } from "react";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  useEffect(() => {
    const identifier = setTimeout(() => {
      if (cartCtx.cartItems.length === 0) {
        cartCtx.resetCart();
      }
    }, 1);

    return () => {
      clearTimeout(identifier);
    };
  }, [cartCtx]);
  const addToCartArrow = (arrowItem) => {
    cartCtx.addItemToCart({ ...arrowItem, amount: 1 });
  };

  const removeFromCartArrow = (id) => {
    cartCtx.removeItemFromCart(id);
  };
  const cartItems = (
    <ul className={classes.cartitems}>
      {cartCtx.cartItems.map((item) => (
        <li key={item.id} className={classes.listItem}>
          <div>
            {item.name}---${item.price}
          </div>

          <div className={classes.priceAndButton}>
            <button
              onClick={removeFromCartArrow.bind(null, item.id)}
            >{`<`}</button>
            <span>{item.amount}</span>
            <button onClick={addToCartArrow.bind(null, item)}>{`>`}</button>
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <Modal toggleShowModal={props.toggleShowModal}>
      {cartItems}
      <div className={classes.total}>
        <span>
          {cartCtx.cartTotalCost > 0
            ? "Total Amount"
            : "Add games in mainpage!"}
        </span>
        <span>
          {cartCtx.cartTotalCost > 0 ? cartCtx.cartTotalCost.toFixed(2) : ""}
        </span>
      </div>
      <div className={classes.actions}>
        <button className={classes.buttonalt} onClick={props.toggleShowModal}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
