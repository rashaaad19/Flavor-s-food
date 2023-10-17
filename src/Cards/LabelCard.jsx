/* eslint-disable react/prop-types */
import classes from "./LabelCard.module.css";
import "./IntroCard.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WhiteAnchor from "../Buttons/WhiteAnchor";

const LabelCard = (props) => {
  //adjusting animation for the component
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation only runs once
    threshold: 0.3, // Adjust the threshold as needed
  });

  // inserting classNames from probs
  let combinedClassNames;
  if (props.className) {
    combinedClassNames = props.className.map((className) => classes[className]); // Map class names using CSS Modules object
  }

  return (
    <>
      <motion.div
        className={`${combinedClassNames[0]} ${combinedClassNames[1]}`}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.2, delay: 0.7 }}
        ref={ref}
      >
        <h1 className={combinedClassNames[2]}>{props.header}</h1>
        <p className={combinedClassNames[3]}>{props.data}</p>
        {props.showButton && (
            <WhiteAnchor
            path={`${props.path}`}
              title="More About Us"
              className={["anchorStyle", "aboutUsAnchor"]}
            />
        )}
      </motion.div>
    </>
  );
};
export default LabelCard;
