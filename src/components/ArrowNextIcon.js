import classes from "./ArrowNextIcon.module.css";

const ArrowNextIcon = (prop) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      className={classes.arrow_next}
    >
      <path d="M686-450H160v-60h526L438-758l42-42 320 320-320 320-42-42 248-248Z" />
    </svg>
  );
};

export default ArrowNextIcon;
