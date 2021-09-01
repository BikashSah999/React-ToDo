import classes from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className={classes.header}>
      <div className={classes.logo}>ToDo</div>
      <div className={classes.header_content}>
        <Link to="/" className={classes.profile}>
          My Profile
        </Link>
        <Link to="/signup" className={classes.sign_in}>
          Sign In
        </Link>
        <Link to="/login" className={classes.log_out}>
          Log Out
        </Link>
      </div>
    </section>
  );
}

export default Header;
