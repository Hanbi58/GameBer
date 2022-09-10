import classes from "./FooterPartners.module.css";
const FooterPartners = () => {
  return (
    <div className={classes.box}>
      <h3>Business Partners</h3>
      <div className={classes.container}>
        <div className={classes.steam}></div>
        <div className={classes.epic}></div>
        <div className={classes.nvidia}></div>
        <div className={classes.intel}></div>
      </div>
    </div>
  );
};

export default FooterPartners;
