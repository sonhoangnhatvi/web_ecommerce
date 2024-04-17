import { useDispatch, useSelector } from "react-redux";
import classes from "./BackIcon.module.css";
import { showProductDetailActions } from "../store";

const BackIcon = (prop) => {
  const dispatch = useDispatch();

  // Get listCart from redux Store
  const listCart = useSelector(
    (state) => state.showProductDetail.cart.listCart
  );

  const handleSubQuantity = () => {
    // if action in listCart in CartPage,
    if (prop.from === "cartPage" && prop.product !== undefined) {
      //Find the index of the product with ID === action.payload._id in the listCart array
      const indexToUpdate = listCart.findIndex(
        (item) => item.product._id === prop.product.product._id
      );
      //Decrease Quantity product in listCart in cart in redux Store
      dispatch(
        showProductDetailActions.SUB_QUANTITY_PRODUCTINCART(indexToUpdate)
      );
    }
    // Decrease Quantity (if action in ProductDetail)
    else {
      dispatch(showProductDetailActions.SUB_QUANTITY());
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      className={classes.backicon}
      onClick={handleSubQuantity}
    >
      <path d="M407.652-72.348 0-480l407.652-407.652L486.305-809l-329 329 329 329-78.653 78.652Z" />
    </svg>
  );
};

export default BackIcon;
