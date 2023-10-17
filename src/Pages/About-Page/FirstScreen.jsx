import classes from "./FirstScreen.module.css";

import { motion } from "framer-motion";
const FirstScreen = () => {
  return (
    <>
      <div className={classes.heroContainer}>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src="/assets/Photos/AboutHero.jpg"
          alt="Food"
        ></motion.img>
        <div className={classes.heroContent}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We&apos;re Flavor&apos;s.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Flavor&apos;s isn&apos;t just a restaurant; it&apos;s a culinary
            haven where the art of gastronomy meets your desires. We&apos; re
            passionate about crafting extraordinary, mouthwatering dishes that
            transport you to a world of taste and delight. Our commitment to
            excellence is your guarantee of an unforgettable dining experience.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default FirstScreen;
