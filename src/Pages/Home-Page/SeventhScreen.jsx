import classes from "./SeventhScreen.module.css";
import WhiteAnchor from "../../Buttons/WhiteAnchor";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SeventhScreen() {
  //adjusting animation for the component
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation only runs once
    threshold: 0.3, // Adjust the threshold as needed
  });

  return (
    <>
      <div className={classes.container}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Table Reservations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          ref={ref}
        >
          Experience culinary excellence at its finest. Reserve your table now
          and immerse yourself in a world of exquisite flavors, impeccable
          service, and an ambiance that will leave a lasting impression.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          ref={ref}
        >
          <WhiteAnchor title="Book Table" className={["anchorStyle"]} path="Booking" />
        </motion.div>
      </div>
    </>
  );
}

export default SeventhScreen;
