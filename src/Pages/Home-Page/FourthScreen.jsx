import { motion } from "framer-motion";
import IntroCard from "../../Cards/IntroCard";
import IntroImage from "../../Cards/IntroImage";
import classes from "./FourthScreen.module.css";
import { useInView } from "react-intersection-observer";
function FourthScreen() {
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation only runs once
    threshold: 0.1, // Adjust the threshold as needed
  });

  return (
    <>
      <div className={classes.container}
      ref={ref}>
        <motion.div
          className={classes.item1}
          initial={{ opacity: 0 }}
          animate={inView && { opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <IntroCard
            header="Fresh Food Delivered Daily"
            data="Explore a symphony of flavors meticulously crafted in our menu. Each dish tells a unique story, and every bite is a culinary adventure waiting to be savored."
            buttonTitle="View Menu"
            path="/Menu"
          />
        </motion.div>
        <motion.div
          className={classes.item2}
          initial={{ opacity: 0 }}
          animate={ inView&&{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <IntroImage
            style={{ width: "100%", height: "100%" }}
            imageURL={"/assets/Photos/Kitchen Staff.jpg"}
            imageALT={"Kitchen Staff"}
          />
        </motion.div>
        <motion.div
          className={classes.item3}
          initial={{ opacity: 0 }}
          animate={inView&&{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <IntroCard
            header="Reserve a table"
            data="Secure your table now and prepare for an unforgettable culinary journey. We're here to make your reservation seamless and your meal memorable."
            buttonTitle="Book Table"
            path="/Booking"
          />
        </motion.div>
        <motion.div
          className={classes.item4}
          initial={{ opacity: 0 }}
          animate={inView && { opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <IntroImage
            style={{
              width: "100%",
              height: "100%",
              
            }}
            imageURL={"/assets/Photos/Decorating Dish.jpg"}
            imageALT={"Dish"}
          />
        </motion.div>
        <motion.div
          className={classes.item5}
          initial={{ opacity: 0 }}
          animate={inView && { opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <IntroCard
            header="Who are we ?"
            data="Discover the heart and soul behind Flavor's a culinary experience that reflects our passion for food, tradition, and community. Join us in celebrating the essence of flavor"
            buttonTitle="About Us"
            path="/About-Us"
          />
        </motion.div>
        <motion.div
          className={classes.item6}
          initial={{ opacity: 0 }}
          animate={inView && { opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <IntroImage
            style={{
              width: "100%",
              height: "100%",
            }}
            imageURL={"/assets/Photos/Book Table.jpg"}
            imageALT={"Dish"}
          />
        </motion.div>
        <motion.div
          className={classes.item7}
          initial={{ opacity: 0 }}
          animate={inView && { opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <IntroImage
            style={{
              width: "100%",
              height: "100%",
            }}
            imageURL={"/assets/Photos/Menu.jpg"}
            imageALT={"Menu Picture"}
          />
        </motion.div>
      </div>
    </>
  );
}

export default FourthScreen;
