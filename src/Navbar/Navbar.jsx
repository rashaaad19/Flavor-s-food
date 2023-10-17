import GreenButton from "../Buttons/GreenButton";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className={classes.container}>
        <Link to={"/"}>
          <a className={classes.navHeader}>
            <h2>Flavor&apos;s</h2>
          </a>
        </Link>

        <ul className={classes.rightSide}>
          <li className={classes.navLinks}>
            <Link to={"/About-Us"}>
              <a>About</a>
            </Link>
          </li>
          <li className={classes.navLinks}>
            <Link to={"/Menu"}>
              <a>Menu</a>
            </Link>
          </li>
          <li>
            <Link to={"/Booking"}>
              <GreenButton title="Book Table" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
