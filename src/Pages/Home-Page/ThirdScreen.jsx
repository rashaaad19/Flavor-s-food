import { useState } from "react";
import classes from "./ThirdScreen.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const ThirdScreen = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation only runs once
    threshold: 0.3, // Adjust the threshold as needed
  });

  //States
  const [selectedMeal, setSelectedMeal] = useState("Breakfast");
  const [selectedMealTime, setSelectedMealTime] = useState("8AM - 12PM");
  const [selectedMealIntro, setSelectedMealIntro] = useState(
    "Indulge in the delightful flavors of our breakfast creations, meticulously crafted with the freshest ingredients to awaken your taste buds. Our cozy morning ambiance, bathed in soft natural light, sets the perfect stage for a memorable breakfast experience. We take pride in offering a simple yet delicious morning feast, allowing the flavors to shine and creating an atmosphere that feels like home"
  );

  // Component's functions

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
    handleMealIntro(meal);
  };

  const handleMealIntro = (meal) => {
    switch (meal) {
      case "Breakfast":
        setSelectedMealIntro(
          "Indulge in the delightful flavors of our breakfast creations, meticulously crafted with the freshest ingredients to awaken your taste buds. Our cozy morning ambiance, bathed in soft natural light, sets the perfect stage for a memorable breakfast experience. We take pride in offering a simple yet delicious morning feast, allowing the flavors to shine and creating an atmosphere that feels like home"
        );
        setSelectedMealTime("8AM - 12PM");
        break;
      case "Lunch":
        setSelectedMealIntro(
          "Immerse yourself in the rich and savory flavors of our lunchtime delights, thoughtfully prepared with the finest ingredients to tantalize your palate. Our inviting midday setting, adorned with warm natural accents, provides an ideal backdrop for a satisfying lunch experience. We take great care in presenting a straightforward yet delectable luncheon spread, allowing the tastes to take center stage and cultivating an ambiance that exudes comfort and satisfaction"
        );
        setSelectedMealTime("12PM - 4PM");

        break;
      case "Dinner":
        setSelectedMealIntro(
          "Savor the exquisite flavors of our dinner creations, meticulously crafted with the freshest and most flavorful ingredients to ignite your culinary senses. As the sun sets and our restaurant transforms into a haven of warm and inviting ambiance, we invite you to partake in a memorable dinner experience. We take great pride in offering a refined yet delightful evening feast, where every dish is a masterpiece, and our atmosphere envelops you in a sense of sophistication and relaxation, making your dinner truly exceptional."
        );
        setSelectedMealTime("4PM - 8PM");

        break;
    }
  };

  //JSX

  return (
    <motion.div
      className={classes.container}
      initial={{ opacity: 0 }}
      animate={inView && { opacity: 1 }}
      transition={{ duration: 0.5 }}
      ref={ref}
    >
      <motion.div
        className={classes.mealInfo}
        key={selectedMeal} // Change the key when the meal changes
      >
        <h1 className={classes.mealHeader}>{selectedMeal}</h1>
        <p className={classes.mealTime}>{selectedMealTime}</p>
        <p className={classes.mealIntro}>{selectedMealIntro}</p>
      </motion.div>
      <div className={classes.mealImg}>
        <motion.img
          key={selectedMeal} // Change the key when the meal changes
          initial={{ opacity: 0 }}
          animate={inView && { opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={`/assets/Photos/${selectedMeal}.jpg`}
          ref={ref}
        />
      </div>
      <motion.div
        className={classes.mealsContainer}
        initial={{ opacity: 0 }}
        animate={inView && { opacity: 1 }}
        transition={{ duration: 0.5 }}
        ref={ref}
      >
        <p
          className={`${
            selectedMeal === "Breakfast"
              ? `${classes.mealSwitchActive} ${classes.mealSwitch}`
              : classes.mealSwitch
          }`}
          onClick={() => handleMealClick("Breakfast")}
        >
          Breakfast
        </p>
        <p
          className={`${
            selectedMeal === "Lunch"
              ? `${classes.mealSwitchActive} ${classes.mealSwitch}`
              : classes.mealSwitch
          }`}
          onClick={() => handleMealClick("Lunch")}
        >
          Lunch
        </p>
        <p
          className={`${
            selectedMeal === "Dinner"
              ? `${classes.mealSwitchActive} ${classes.mealSwitch}`
              : classes.mealSwitch
          }`}
          onClick={() => handleMealClick("Dinner")}
        >
          Dinner
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ThirdScreen;
