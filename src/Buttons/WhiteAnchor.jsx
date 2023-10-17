/* eslint-disable react/prop-types */
import classes from "./WhiteAnchor.module.css";
import { Link } from "react-router-dom";
function WhiteAnchor(props) {
  // inserting classNames from probs
  let combinedClassNames;
  if (props.className) {
    combinedClassNames = props.className
      .map((className) => classes[className]) // Map class names using CSS Modules object
      .join(" ");
  }
  return (
    <>
    <div className={classes.container}>
=      <Link to={`${props.path}`}>
        <a className={combinedClassNames}>{props.title}</a>
      </Link>
      </div>
    </>
  );
}

export default WhiteAnchor;
