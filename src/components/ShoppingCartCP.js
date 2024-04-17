import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowBackIcon from "./ArrowBackIcon";
import ArrowNextIcon from "./ArrowNextIcon";
import BackIcon from "./BackIcon";
import DeleteIcon from "./DeleteIcon";
import NextIcon from "./NextIcon";
import classes from "./ShoppingCartCP.module.css";
const ShoppingCartCP = () => {
  const listCart = useSelector(
    (state) => state.showProductDetail.cart.listCart
  );

  return (
    <div className={classes.container}>
      {listCart.length > 0 && (
        <table className={classes.shopping_cart_tb}>
          <tr>
            <th>IMAGE</th>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
            <th>REMOVE</th>
          </tr>
          {listCart.map((productInCart) => {
            return (
              <tr
                key={productInCart.product._id.$oid}
                className={classes.product}
              >
                <td>
                  <img
                    src={productInCart.product.img1}
                    alt="img product"
                    className={classes.img}
                  ></img>
                </td>
                <td>
                  <p className={classes.name}>{productInCart.product.name}</p>
                </td>
                <td>
                  <p className={classes.price}>
                    {`${productInCart.product.price} VND`}{" "}
                  </p>
                </td>
                <td>
                  <div className={classes.quantity}>
                    <BackIcon product={productInCart} from={"cartPage"} />
                    <p>{productInCart.quantity}</p>
                    <NextIcon product={productInCart} from={"cartPage"} />
                  </div>
                </td>
                <td>
                  <p>
                    {(
                      parseFloat(
                        productInCart.product.price.replace(/,/g, "")
                      ) * parseInt(productInCart.quantity)
                    ).toLocaleString("en-US")}
                  </p>
                </td>
                <td>
                  <div className={classes.quantity}>
                    <DeleteIcon product={productInCart} />
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      )}
      {listCart.length > 0 && (
        <div className={classes.navigate}>
          <Link className={classes.continue_shopping} to={"/"}>
            <ArrowBackIcon />
            <p> Continue shopping</p>
          </Link>
          <Link className={classes.proceed_checkout} to="/cart/checkout">
            <p>Proceed to checkout</p>
            <ArrowNextIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartCP;
