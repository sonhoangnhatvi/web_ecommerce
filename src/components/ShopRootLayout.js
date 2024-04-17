import { Outlet } from "react-router-dom";
import ShopNavigation from "./ShopNavigation";
import classes from "./ShopRootLayout.module.css";

const ShopRootLayout = () => {
  return (
    <div className={classes.container}>
      <ShopNavigation />
      <Outlet />
    </div>
  );
};

export default ShopRootLayout;
