import TodoAdd from "./TodoAdd";
import classes from "./MainBody.module.scss";

function MainBody() {
  return (
    <section className={classes.mainBody}>
      <TodoAdd />
    </section>
  );
}

export default MainBody;
