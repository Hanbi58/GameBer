import Card from "./UI/Card";
import classes from "./Title.module.css";

const Title = () => {
  return (
    <div className={classes.title}>
      <Card>
        <p className={classes.para}>Killer Games. Deliver to YOU!</p>
      </Card>
      <aside className={classes.aside}>
        The ultimate instant gaming platform.Where streams are broadcast.
        Explore the evolution how the market has become so much more diverse
        than it used to be!
      </aside>
    </div>
  );
};

export default Title;
