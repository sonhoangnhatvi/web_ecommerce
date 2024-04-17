import { useDispatch } from "react-redux";
import classes from "./SmsIcon.module.css";
import { showProductDetailActions } from "../store";

const SmsIcon = (prop) => {
  const dispatch = useDispatch();

  const handleLiveChat = () => {
    dispatch(showProductDetailActions.HANDLE_VIEW_LIVECHAT());
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      viewBox="0 -960 960 960"
      width="48"
      className={classes.smsicon}
      onClick={handleLiveChat}
    >
      <path d="M306-523q17 0 28.5-11.5T346-563q0-17-11.5-28.5T306-603q-17 0-28.5 11.5T266-563q0 17 11.5 28.5T306-523Zm177 0q17 0 28.5-11.5T523-563q0-17-11.5-28.5T483-603q-17 0-28.5 11.5T443-563q0 17 11.5 28.5T483-523Zm170 0q17 0 28.5-11.5T693-563q0-17-11.5-28.5T653-603q-17 0-28.5 11.5T613-563q0 17 11.5 28.5T653-523ZM80-80v-740q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H240L80-80Zm134-220h606v-520H140v600l74-80Zm-74 0v-520 520Z" />
    </svg>
  );
};

export default SmsIcon;
