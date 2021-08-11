import classes from "./Header.module.scss"

function Header(){
  return(
    <section className={classes.header}>
      <div className={classes.logo}>
        ToDo
      </div>
      <div className={classes.header_content}>
        <div className={classes.profile}>
          My Profile
        </div>
        <div className={classes.sign_in}>
          Sign In
        </div>
        <div className={classes.log_out}>
          Log Out
        </div>
      </div>
    </section>
  )
}

export default Header