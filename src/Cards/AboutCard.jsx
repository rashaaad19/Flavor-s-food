/* eslint-disable react/prop-types */
import classes from "./AboutCard.module.css";
const AboutCards = (props) => {
  return (
    <>
      <div className={classes.container}>
        <img src={props.imageSrc} alt={props.imageAlt} />
        <h2>{props.cardHeader}</h2>
        <p>
          {props.cardText}
        </p>
      </div>
    </>
  );
};

export default AboutCards;
