import classes from "./Footer.module.css";
const FooterContent = (props) => {
  return (
    <div className={classes.content}>
      <h3>{props.sTitle}</h3>
      <p>{props.first && props.first}</p>
      <p>{props.second && props.second}</p>
      <p>{props.third && props.third}</p>
      <p>{props.forth && props.forth}</p>
      <p>{props.fifth && props.fifth}</p>
      <p>{props.sixth && props.sixth}</p>
      <p>{props.seventh && props.seventh}</p>
      <p>{props.eighth && props.eighth}</p>
    </div>
  );
};

export default FooterContent;
