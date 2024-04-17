import { useDispatch, useSelector } from "react-redux";
import classes from "./CartTotal.module.css";
import { showProductDetailActions } from "../store";
import CouponIcon from "./CouponIcon";

const CartTotal = () => {
  const dispatch = useDispatch();

  // Cal subTotal before show
  dispatch(showProductDetailActions.CAL_CART_TOTAL());

  const cart = useSelector((state) => state.showProductDetail.cart);

  return (
    <div className={classes.container}>
      {cart.listCart.length > 0 && <p className={classes.title}>CART TOTAL</p>}
      {cart.listCart.length > 0 && (
        <div className={classes.body}>
          <p className={classes.item_title}>SUBTOTAL</p>
          <p className={classes.item_value}>
            {cart.subTotal.toLocaleString("en-US")}
          </p>
          <p className={classes.item_title}>TOTAL</p>
          <p className={classes.total_value}>
            {cart.total.toLocaleString("en-US")}
          </p>
          <input
            className={classes.input_coupon}
            type="text"
            placeholder="Enter your coupon"
          ></input>
          <button className={classes.btn_apply_coupon}>
            <CouponIcon /> Apply coupon
          </button>
        </div>
      )}
    </div>
  );
};

export default CartTotal;
