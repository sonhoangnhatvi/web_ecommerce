import classes from "./Categories.module.css";
import ImgIphone from "../assets/images/product_1.png";
import ImgMac from "../assets/images/product_2.png";
import ImgIpad from "../assets/images/product_3.png";
import ImgWatch from "../assets/images/product_4.png";
import ImgAirPods from "../assets/images/product_5.png";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className={classes.categories}>
      <p className={classes.subtitle}>CAREFULLY CREATED COLLECTIONS</p>
      <p className={classes.title}>BROWSE OUR CATEGORIES</p>
      <div className={classes.iphone_and_mac}>
        <Link to="shop">
          <img src={ImgIphone} alt="iphone img"></img>
        </Link>
        <Link to="shop">
          <img src={ImgMac} alt="mac img"></img>
        </Link>
      </div>
      <div className={classes.others}>
        <Link to="shop">
          <img src={ImgIpad} alt="ipad img"></img>
        </Link>
        <Link to="shop">
          <img src={ImgWatch} alt="watch img"></img>
        </Link>
        <Link to="shop">
          <img src={ImgAirPods} alt="airpods img"></img>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
