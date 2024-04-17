import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import classes from "./Root.module.css";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <main className={classes.content}>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
