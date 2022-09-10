import CartButton from "./CartButton";
import classes from "./HeaderMain.module.css";
import Title from "./Title";

const HeaderMain = (props) => {
  return (
    <div className={classes.container}>
      <section className={classes.main}>
        <h3>&#9736; GameBer</h3>
        <CartButton toggleShowModal={props.toggleShowModal} />
      </section>
      <div className={classes.bgc}></div>
      <Title />
    </div>
  );
};

export default HeaderMain;
