/* eslint-disable react/prop-types */
import classes from "./GreenButton.module.css";
const GreenButton = (props) => {
  return (
    <>
    <div className={classes.anchorContainer}>
      <a className={classes.anchor}>{props.title}</a>
      </div>
    </>
  );
};
export default GreenButton;
