import ImageCard from "../../Cards/ImageCard";
import LabelCard from "../../Cards/LabelCard";
import classes from "./SecondScreen.module.css";
const SecondScreen = () => {
  return (
    <>
      <div className={classes.container}>
        <LabelCard
          header="Fresh, Bright, Simple"
          data=" Experience the delight of our culinary creations, crafted with the
          freshest ingredients to tantalize your taste buds. Our inviting
          ambiance, filled with natural light, creates the perfect setting for a
          memorable dining experience. We take pride in keeping it simple,
          letting the flavors shine and the atmosphere feel like home."
          className={[
            "cardContainerAll",
            "secondScreenContainer",
            "secondScreenHeader",
            "secondScreenPar",
          ]}
        />
        <ImageCard imageSrc="/assets/Photos/Ordered Food.jpg" />
      </div>
    </>
  );
};
export default SecondScreen;
