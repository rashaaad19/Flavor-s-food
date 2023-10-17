/* eslint-disable react/prop-types */
import classes from "./MenuButton.module.css";

function MenuButton(props) {
  const isActive=props.meal===props.activeMeal
  console.log(isActive)
  return (
    <>
      <button
        onClick={() => {
          props.onClick();
        }}
        className={`${classes.btn} ${isActive ? classes.active : ""}`}
      >
        {props.meal}
      </button>
    </>
  );
}

export default MenuButton;
