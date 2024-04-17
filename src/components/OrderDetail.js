import { useDispatch, useSelector } from "react-redux";
import classes from "./OrderDetail.module.css";
import { showProductDetailActions } from "../store";

const OrderDetail = () => {
  const dispatch = useDispatch();

  // Cal subTotal before show
  dispatch(showProductDetailActions.CAL_CART_TOTAL());

  const cart = useSelector((state) => state.showProductDetail.cart);

  const listCart = useSelector(
    (state) => state.showProductDetail.cart.listCart
  );

  console.log("listCart", listCart);

  return (
    <div className={classes.container}>
      {listCart.length > 0 && <p className={classes.title}>YOUR ORDER</p>}
      <ul className={classes.order_ul_list}>
        {listCart.map((product, index) => (
          <li key={index} className={classes.order_li_item}>
            <p className={classes.order_li_item_name}>{product.product.name}</p>
            <p className={classes.order_li_item_price}>
              {`${product.product.price.toLocaleString("en-US")} x ${
                product.quantity
              }`}
            </p>
          </li>
        ))}
      </ul>
      <div className={classes.total}>
        <p className={classes.total_title}>TOTAL</p>
        <p className={classes.total_value}>{`${cart.total.toLocaleString(
          "en-US"
        )} VND`}</p>
      </div>
    </div>
  );
};

export default OrderDetail;
