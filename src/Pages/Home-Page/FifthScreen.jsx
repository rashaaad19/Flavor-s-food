import MenuButton from "../../Buttons/MenuButton";
import classes from "./FifthScreen.module.css";
import { mealData } from "../../data/mealData";
import GreenButton from "../../Buttons/GreenButton";
import { useState } from "react";
import { Link } from "react-router-dom";
function FifthScreen() {
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const mealNames = ["Breakfast", "Lunch", "Dinner", "Desserts", "Drinks"];
  const [activeButton, setActiveButton] = useState("Breakfast");

  //function to change the state of meals whenever one of the menu buttons is clicked
  const handleMenuClick = (meal) => {
    setSelectedMeal(meal);
    setActiveButton(meal);
  };
  console.log(selectedMeal);
  return (
    <>
      <div className={classes.container}>
        <h1>Our carefully crafted menu</h1>
        <div className={classes.btnContainer}>
          {/* Clickable buttons that change the category of meals */}

          {mealNames.map((meal, index) => (
            <MenuButton
              onClick={() => {
                handleMenuClick(meal);
              }}
              key={index}
              meal={meal}
              activeMeal={activeButton}
            />
          ))}
        </div>

        {/* conditionaly rendering menu items based on the category the user want to show */}

        <div className={classes.menuContainer}>
          {mealData
            .filter(
              (meal) =>
                meal.mealCategory.toLowerCase() === selectedMeal.toLowerCase()
            ).slice(0,6)
            .map((meal) => (
              <div key={meal.id} className={classes.menuItem}>
                <div className={classes.menuTop}>
                  <p className={classes.menuItemName}>{meal.mealName}</p>
                  <div className={classes.dottedLine}></div>
                  <p className={classes.menuItemPrice}>{meal.mealPrice}</p>
                </div>
                <p className={classes.itemInfo}>{meal.mealInfo}</p>
              </div>
            ))}
        </div>
        <div className={classes.buttonContainer}>
          <Link to={'/Menu'}>
            <GreenButton title="Full Menu" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default FifthScreen;
