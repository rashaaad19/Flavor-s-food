import GreenButton from "../../Buttons/GreenButton";
import classes from "./FirstScreen.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const FirstScreen = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.heroContainer}>
        <div className={classes.headerContainer}>
          <h1 className={classes.header}>Delivering Flavor With Every Order</h1>
          <Link to={"/Menu"}></Link>
        </div>
        <div className={classes.introContainer}>
          <p className={classes.intro}>
            Welcome to Flavor&apos;s, where the flavors of the world come
            together. We offer a wide variety of food from different cultures,
            all made with fresh, high-quality ingredients.
          </p>
        </div>
        <div className={classes.buttonContainer}>
          <Link to={"/Menu"}>
            <GreenButton title="Explore Our Menu"></GreenButton>
          </Link>
        </div>
        </div>
        <div className={classes.timeContainer}>
          <div className={`${classes.leftSideContainer} ${classes.gridTime}`}>
            <p className={classes.timeHeader}>Opening&apos;s time</p>
            <p className={classes.timeData}>Mon-Sat ....... 8AM-7PM</p>
            <p className={classes.timeData}>Sunday ....... Closed</p>
          </div>
          <div className={`${classes.gridPasta}}`}>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className={`${classes.pastaImg}`}
              src="/assets/Photos/Pasta.png"
            ></motion.img>
          </div>
        </div>
      </div>
    </>
  );
};
export default FirstScreen;
