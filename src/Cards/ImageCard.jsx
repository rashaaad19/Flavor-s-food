/* eslint-disable react/prop-types */
import classes from "./ImageCard.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const ImageCard = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the animation only runs once
    threshold: 0.3, // Adjust the threshold as needed
  });

  return (
    <>
      <motion.img
        className={classes.image}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        src={props.imageSrc}
        ref={ref}
        style={props.style}
      ></motion.img>
    </>
  );
};
export default ImageCard;
