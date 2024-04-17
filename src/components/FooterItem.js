import { Link } from "react-router-dom";
import classes from "./FooterItem.module.css";

const FooterItem = (props) => {
  return (
    <div>
      <h3 className={classes.title}>{props.data.title}</h3>
      <ul className={classes.footeritem}>
        {props.data.items.map((item, index) => {
          return (
            <li key={index}>
              <Link to="#" className={classes.item}>
                {item}
              </Link>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterItem;
