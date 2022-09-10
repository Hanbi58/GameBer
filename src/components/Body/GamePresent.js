import classes from "./GamePresent.module.css";

const GamePresent = (props) => {
  return (
    <div className={classes.box}>
      <h1>{props.game.name}</h1>
      <hr />
      <p>{props.game.publisher}</p>
      <p className={classes.price}>${props.game.price}</p>
    </div>
  );
};

export default GamePresent;
