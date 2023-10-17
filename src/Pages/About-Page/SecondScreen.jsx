import classes from "./SecondScreen.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SecondScreen = () => {
  //adjusting animation for the component
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation only runs once
    threshold: 0.5, // Adjust the threshold as needed
  });

  return (
    <>
      <div className={classes.container} ref={ref}>
        <motion.img
          className={classes.labelImg}
          src="/assets/Photos/AboutChef.jpg"
          alt="Food dish"
          initial={{ opacity: 0 }}
          animate={inView && { opacity: 1 }}
          transition={{ duration: 0.3 }}
        ></motion.img>
        <motion.div
          className={classes.contentContainer}
          initial={{ opacity: 0 }}
          animate={inView && { opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>How it all started</h2>
          <p>
            At Flavor&apos;s, our journey began with a simple idea: to infuse
            the timeless classics with a modern twist. Our passion for food
            innovation sets us apart, redefining culinary excellence
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default SecondScreen;
