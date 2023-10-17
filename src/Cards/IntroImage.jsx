/* eslint-disable react/prop-types */
function IntroImage(props) {
  return (
    <>
      <img
        style={props.style}
        src={props.imageURL}
        alt={props.imageALT}
      ></img>
    </>
  );
}

export default IntroImage;
