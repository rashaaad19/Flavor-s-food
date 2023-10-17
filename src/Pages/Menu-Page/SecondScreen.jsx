import classes from "./SecondScreen.module.css";
import { useContext, useState } from "react"; //importing hooks from react
import { mealData } from "../../data/mealData"; //importing meals data
import { mealCategoryContext } from "../../context/mealContext"; //importing meal context
const SecondScreen = () => {
  const { setCategory } = useContext(mealCategoryContext); //using meal context to set the category to the current one
  const mealOptions = ["Breakfast", "Lunch", "Dinner", "Desserts", "Drinks"]; //array of items to be displayed in buttons
  const [clickedMeal, setClickedMeal] = useState("Breakfast");

  //handling button clicks to change meal in context and state
  const clickHandler = (meal) => {
    if (clickedMeal != meal) {
      setClickedMeal(meal);
      setCategory(meal.toLowerCase());
    }
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.buttonContainer}>
          {/* displaying buttons for each meal */}
          {mealOptions.map((meal) => (
            <button
              key={meal}
              onClick={() => clickHandler(meal)}
              className={`${classes.menuButton} ${
                clickedMeal === meal && classes.active
              }`}
            >
              {meal}
            </button>
          ))}
        </div>
      </div>
      <div className={classes.menuContainer}>
        <h2>- {clickedMeal} Menu -</h2>
        <div className={classes.menuItemsContainer}>

          {/* filtering menu items based on the clicked category */}


          {mealData
            .filter((meal) => meal.mealCategory === clickedMeal)
            .map((meal) => (
              <div key={meal.mealId} className={classes.menuItem}>
                <div className={classes.menuTop}>
                  <p className={classes.menuItemName}>{meal.mealName}</p>
                  <div className={classes.dottedLine}></div>
                  <p className={classes.menuItemPrice}>$ {meal.mealPrice}</p>
                </div>
                <p className={classes.itemInfo}>{meal.mealInfo}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SecondScreen;
