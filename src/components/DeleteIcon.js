import { useDispatch } from "react-redux";
import classes from "./DeleteIcon.module.css";
import { showProductDetailActions } from "../store";

const DeleteIcon = (prop) => {
  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    // if action in listCart in CartPage,
    if (prop.product !== undefined) {
      //Delete Product In Cart
      dispatch(
        showProductDetailActions.DELETE_PRODUCTINCART(
          prop.product.product._id.$oid
        )
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
      className={classes.deleteicon}
      onClick={handleDeleteProduct}
    >
      <path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" />
    </svg>
  );
};

export default DeleteIcon;
