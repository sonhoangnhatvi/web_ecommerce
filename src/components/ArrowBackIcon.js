import classes from "./ArrowBackIcon.module.css";

const ArrowBackIcon = (prop) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      className={classes.arrow_back}
    >
      <path d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z" />
    </svg>
  );
};

export default ArrowBackIcon;
