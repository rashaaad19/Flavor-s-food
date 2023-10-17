import ImageCard from "../../Cards/ImageCard";
import LabelCard from "../../Cards/LabelCard";
import classes from "./SixthScreen.module.css";



function SixthScreen() {
  return (
    <>
      {/* <div className={classes.container}>
        <ImageCard imageSrc="/public/assets/Photos/Waiters.jpg" />
        <LabelCard
        /> */}
      <div className={classes.container}>
        <ImageCard
          style={{ position: "relative", top: "15px" }}
          imageSrc="/assets/Photos/Waiters.jpg"
        />

        <LabelCard
          className={[
            "cardContainerAll",
            "sixthScreenContainer",
            "sixthScreenHeader",
            "sixthScreenPar"
          ]}
          showButton={true}
          path="About-Us"
          header="Who are we"
          data="At Flavor's, we are more than just a restaurant; we are a passionate team of culinary artists dedicated to creating unforgettable dining experiences. Our journey began with a shared love for food and a vision to bring exceptional flavors to the heart of our community"
        />
      </div>


    </>
  );
}

export default SixthScreen;
