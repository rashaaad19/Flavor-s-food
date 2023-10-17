import classes from "./SecondScreen.module.css";

//importing card component

import LabelCard from "../../../src/Cards/LabelCard";

//Importing motion and useInview for the animation

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const SecondScreen = () => {
  //adjusting animation for the component
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation only runs once
    threshold: 0.2, // Adjust the threshold as needed
  });

  return (
    <>
      <div className={classes.container} ref={ref}>
        <motion.img
          src="/public/assets/Photos/BookingStaff.jpg"
          alt="staff"
          initial={{ opacity: 0 }}
          animate={inView && { opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <LabelCard
          header="Reserve your table today and savor a delightful dining experience at our restaurant"
          showButton={false}
          className={["cardContainerBooking"]}
        />
      </div>
    </>
  );
};

export default SecondScreen;
