import classes from "./Footer.module.css";
function Footer() {
  return (
    <>
    <footer className={classes.backGroundContainer}>
      <div className={classes.container}>
        <div className={classes.leftPart}>
          <h2>Flavor&apos;s</h2>
          <p>© Flavor&apos;s Template.All Rights Reserved.</p>
        </div>
        <div className={classes.rightPart}>
          <div className={classes.firstColumn}>
            <a>Menu</a>
            <a>About</a>
            <a>Hours & Location</a>
            <a>Contact</a>
            <a>Reservations</a>
          </div>

          <div className={classes.secColumn}>
            <a>Privacy Policy</a>
            <a>Licneses</a>
            <a>Instructions</a>
            <a>404</a>
            <a>Passwords</a>
            <a>Style Guide</a>
          </div>
          <div className={classes.thirdColumn}>
            <a>Facebook</a>
            <a>Instagram</a>
            <a>Twitter</a>
          </div>
        </div>
      </div>
      </footer>
    </>
  );
}

export default Footer;
