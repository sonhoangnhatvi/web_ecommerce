import { useSelector } from "react-redux";
import AttachFileIcon from "./AttachFile";
import FaceIcon from "./FaceIcon";
import classes from "./LiveChat.module.css";
import Person from "./Person";
import SendIcon from "./SendIcon";

const LiveChat = () => {
  const isShowLiveChat = useSelector(
    (state) => state.showProductDetail.isShowLiveChat
  );

  return (
    <div>
      {isShowLiveChat && (
        <div className={classes.container}>
          <div className={classes.top}>
            <p className={classes.top_left}>Customer Support</p>
            <p className={classes.top_right}>Let's chat app</p>
          </div>
          <div className={classes.user_question}>
            <p className={classes.user_question_item}>Xin chao</p>
            <p className={classes.user_question_item}>
              Lam the nao de xem cac san pham
            </p>
          </div>
          <div className={classes.admin_reply}>
            <div className={classes.admin_item}>
              <Person />
              <p className={classes.admin_reply_item}>ADMIN : Chao ban</p>
            </div>

            <div className={classes.admin_item}>
              <Person />
              <p className={classes.admin_reply_item}>
                ADMIN: Ban co the vao muc Shop de xem cac san pham
              </p>
            </div>
          </div>
          <div className={classes.bottom}>
            <Person />
            <input
              type="text"
              placeholder="Enter Message!"
              className={classes.message}
            />
            <AttachFileIcon />
            <FaceIcon />
            <SendIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
