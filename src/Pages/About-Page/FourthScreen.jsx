import classes from "./FourthScreen.module.css";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const FourthScreen = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation only runs once
    threshold: 0.5, // Adjust the threshold as needed
  });

  return (
    <>
      <div className={classes.container}>
        <motion.div
          className={classes.leftSide}
          initial={{ opacity: 0 }}
          animate={inView && { opacity: 1 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <img src="/assets/Photos/California.jpg" alt="California" />
        </motion.div>
        <motion.div
          className={classes.rightSide}
          initial={{ opacity: 0 }}
          animate={inView && { opacity: 1 }}
          transition={{ duration: 0.5,delay:0.3 }}
          ref={ref}
        >
          <h2>
            Based In <span className={classes.underLine}>Golden </span>
            California
          </h2>
          <div className={classes.rightSideContent}>
            <div>
              <span className={classes.iconText}>
                <BiSolidPhoneCall size="20px" />
              </span>
              <span className={classes.iconText}>(555) 123-4567 </span>
            </div>
            <div>
              <span className={classes.iconText}>
                <HiHome size="20px" />
              </span>
              <span className={classes.iconText}>
                123 Main Street Los Angeles, CA 90001 United States
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default FourthScreen;
