import classes from "./NextIcon.module.css";
import { showProductDetailActions } from "../store";
import { useDispatch, useSelector } from "react-redux";

const NextIcon = (prop) => {
  const dispatch = useDispatch();

  // Get listCart from redux Store
  const listCart = useSelector(
    (state) => state.showProductDetail.cart.listCart
  );

  const handleAddQuantity = () => {
    // if action in listCart in CartPage,
    if (prop.from === "cartPage" && prop.product !== undefined) {
      //Find the index of the product with ID === action.payload._id in the listCart array
      const indexToUpdate = listCart.findIndex(
        (item) => item.product._id === prop.product.product._id
      );
      //Increase Quantity product in listCart in cart in redux Store
      dispatch(
        showProductDetailActions.ADD_QUANTITY_PRODUCTINCART(indexToUpdate)
      );
    }
    // Increase Quantity
    else {
      dispatch(showProductDetailActions.ADD_QUANTITY());
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40"
      viewBox="0 -960 960 960"
      width="40"
      className={classes.nexticon}
      onClick={handleAddQuantity}
    >
      <path d="m375.333-233.623-53.71-53.71 193.334-193.334L321.623-674l53.71-53.71 247.044 247.043-247.044 247.044Z" />
    </svg>
  );
};

export default NextIcon;
