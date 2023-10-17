import AboutCard from "../../Cards/AboutCard";
import classes from "./ThirdScreen.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ThirdScreen = () => {
  //adjusting animation for the component
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation only runs once
    threshold: 0.3, // Adjust the threshold as needed
  });

  return (
    <>
      <div className={classes.container}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView && { opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={classes.headerContainer}
          ref={ref}
        >
          <h2>What do we offer</h2>
          <p>
            we provide a complete sensory journey. we curate an experience that
            elevates your time with us. Discover the essence of fine dining at
            its best.
          </p>
        </motion.div>
        <div className={classes.cardsContainer}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView && { opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            ref={ref}
          >
            <AboutCard
              imageSrc="/assets/Photos/AboutDish.jpg"
              imageAlt="Dish"
              cardHeader="Well Crafted Dishes"
              cardText="Expertly prepared culinary masterpieces that captivate the senses and ignite your taste buds. Experience a symphony of flavors in every bite."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView && { opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            ref={ref}
          >
            <AboutCard
              imageSrc="/assets/Photos/AboutService.jpg"
              imageAlt="Service"
              cardHeader="Friendly Service"
              cardText="Impeccable, warm service that greets you with a smile. Our dedicated team ensures your dining experience is a welcoming and memorable one."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView && { opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            ref={ref}
          >
            <AboutCard
              imageSrc="/assets/Photos/AboutExperience.jpg"
              imageAlt="Community"
              cardHeader="Memorable Experience"
              cardText="Create lasting memories with friends and family. Relish great food, ambiance, and togetherness at Flavor's. Your unforgettable dining moments start here."
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ThirdScreen;
