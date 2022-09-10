import classes from "./GameInput.module.css";
import { useContext, useRef } from "react";
import CartContext from "../store/cartContextBP";
const GameInput = (props) => {
  const id = props.game.id;
  const price = `$${props.game.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);
  const addNewItemToCartHandler = (e) => {
    e.preventDefault();
    const newItem = {
      name: props.game.name,
      id: id,
      price: props.game.price,
      amount: +inputRef.current.value,
    };
    cartCtx.addItemToCart(newItem);
    // console.log(newItem);
  };

  const inputRef = useRef();
  return (
    <form className={classes.frm}>
      <label htmlFor={id + price}>Amount</label>
      <input
        ref={inputRef}
        type="number"
        id={id}
        min="1"
        max="50"
        defaultValue="1"
      />
      <button onClick={addNewItemToCartHandler}>Add to Cart!</button>
    </form>
  );
};

export default GameInput;
