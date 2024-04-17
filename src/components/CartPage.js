import { useDispatch } from "react-redux";
import { showProductDetailActions } from "../store";
import classes from "./CartPage.module.css";
import CartTotal from "./CartTotal";
import ShoppingCartCP from "./ShoppingCartCP";

const CartPage = () => {
  const dispatch = useDispatch();

  // Load listCart from localStorage to State cart.listCart
  const listCartData = localStorage.getItem("listCart");

  let listCart;

  if (listCartData !== null && listCartData.trim() !== "") {
    try {
      listCart = JSON.parse(listCartData);
    } catch (error) {
      // Handle the parsing error if needed
      console.error("Error parsing 'listCart' from localStorage:", error);
      // Set a default value or perform other error handling if required
      listCart = [];
    }
  } else {
    // If the value is empty or not present in localStorage, set a default value
    listCart = [];
  }

  dispatch(
    showProductDetailActions.GETLISTCARTFROMLOCALSTOTE_TO_CART_LISTCART(
      listCart
    )
  );
  return (
    <div className={classes.container}>
      <div className={classes.banner_top}>
        <h2>CART</h2>
        <p>CART</p>
      </div>
      <div className={classes.body}>
        <p className={classes.body_title}>SHOPPING CART</p>
        <div className={classes.body_content}>
          <ShoppingCartCP />
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
