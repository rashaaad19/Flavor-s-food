/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import classes from "./IntroCard.module.css";
function IntroCard(props) {
  return (
    <>
      <div className={classes.container}>
        <p className={classes.header}>{props.header}</p>
        <p className={classes.par}>
          {props.data}
        </p>
        <Link to={`${props.path}`}>
        <a className={classes.anchor}>{props.buttonTitle}</a>
        </Link>
      </div>
    </>
  );
}

export default IntroCard;
