import classes from "./Checkout.module.css";
import CheckOutForm from "./CheckOutForm";
import OrderDetail from "./OrderDetail";

const Checkout = () => {
  return (
    <div className={classes.container}>
      <div className={classes.banner_top}>
        <h2>CHECKOUT</h2>
        <div className={classes.banner_top_right}>
          <p className={classes.banner_top_right_bold}>HOME / </p>
          <p className={classes.banner_top_right_bold}>CART / </p>
          <p>CHECKOUT</p>
        </div>
      </div>
      <div className={classes.billing_details}>
        <CheckOutForm />
        <OrderDetail />
      </div>
    </div>
  );
};

export default Checkout;
