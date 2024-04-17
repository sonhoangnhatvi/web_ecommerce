import { Link } from "react-router-dom";
import classes from "./Banner.module.css";
import ImgBanner from "../assets/images/banner1.jpg";

const Banner = () => {
  const banner = {
    backgroundImage: `url(${ImgBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={banner} className={classes.banner}>
      <p className={classes.title}>NEW INSPIRATION 2020</p>
      <p className={classes.content}>
        20% OFF ON NEW <br /> SEASON
      </p>
      <Link to="shop" className={classes.btn}>
        Browse collections
      </Link>
    </div>
  );
};

export default Banner;
