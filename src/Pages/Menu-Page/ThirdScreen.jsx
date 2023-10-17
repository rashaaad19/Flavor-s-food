import classes from "./ThirdScreen.module.css";
import { motion } from "framer-motion"; //motion comopnent to animate the elements
import { useInView } from "react-intersection-observer"; //useInView to run the animation when elements are in view
import { specialMeals } from "../../data/specialMeal"; //importing special meals data
import { useContext } from "react"; //importing context hook
import { mealCategoryContext } from "../../context/mealContext"; //importing meal context

const ThirdScreen = () => {
  const { category } = useContext(mealCategoryContext); //using the category passed from the context
  const [ref, inView] = useInView({
    triggerOnce: false, // This ensures the effect runs whenever the meal changes
    threshold: 0.3, // Adjust the threshold as needed
  });

  return (
    <>
      <div className={classes.container}>
        <h1>Flavor&apos;s Speciality</h1>

        {/* mapping through meal with returning meal data conditionally by comparing it to the context*/}

        {specialMeals.map(
          (meal) =>
            meal.mealCategory.toLowerCase() === category.toLowerCase() && 
              <div className={classes.specialItemContainer} key={meal.id}>
                <motion.img
                  src={meal.mealImg}
                  alt="Special Dish"
                  ref={ref}
                  initial={{ opacity: 0 }}
                  animate={inView && { opacity: 1 }}
                  transition={{ duration: 0.5 }}
                ></motion.img>
                <div className={classes.specialItemContent}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView && { opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h2>{meal.mealName}</h2>
                    <p>${meal.mealPrice}</p>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView && { opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {meal.mealInfo}
                  </motion.p>
                </div>
              </div>
            
        )}
      </div>
    </>
  );
};

export default ThirdScreen;
