//importing assets 
import "../../../public/assets/Fonts/Fonts.css";

//importing components
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";

//import context
import { mealCategoryContext } from "../../context/mealContext";

import { useState } from "react";

const MenuApp = () => {
  const [category, setCategory] = useState('Breakfast'); //useState hooks to pass context through it in the page

  return (
    <>
      <mealCategoryContext.Provider value={{ category, setCategory }}>
        <FirstScreen />
        <SecondScreen />
        <ThirdScreen />
      </mealCategoryContext.Provider>
    </>
  );
};

export default MenuApp;
