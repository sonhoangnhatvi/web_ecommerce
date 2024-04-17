import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import Person from "./Person";
import ShoppingCart from "./ShoppingCart";
import { showProductDetailActions } from "../store";

const MainNavigation = () => {
  // Get isLogged from Redux store
  const isLogged = useSelector((state) => state.showProductDetail.isLogged);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const dispatch = useDispatch();

  // Handle click Logout
  const handleClickLogout = () => {
    // Change isLogged to false
    dispatch(showProductDetailActions.ON_LOGOUT());
    // Remove current user from localStorage
    localStorage.removeItem("currentUser");
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.navlink_active : classes.navlink
              }
              end
            >
              Home
            </NavLink>
            <ShoppingCart isShowIcon={false} />
          </li>
          <li>
            <ShoppingCart isShowIcon={false} />
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? classes.navlink_active : classes.navlink
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/">BOUTIQUE</NavLink>
          </li>
          <li>
            <ShoppingCart isShowIcon={true} />
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? classes.navlink_active : classes.navlink
              }
            >
              Cart
            </NavLink>
          </li>
          <li>
            <Person />
            <NavLink
              to={isLogged && currentUser !== null ? "" : "/login?mode=login"}
              className={({ isActive }) =>
                isActive ? classes.navlink_active : classes.navlink
              }
            >
              {isLogged && currentUser !== null
                ? currentUser.fullName
                : "Login"}
            </NavLink>
            {isLogged && currentUser !== null && (
              <NavLink
                className={`
                ${({ isActive }) =>
                  isActive ? classes.navlink_active : classes.navlink} 
                  ${classes.logoutNavLink}`}
                onClick={handleClickLogout}
              >
                Logout
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
