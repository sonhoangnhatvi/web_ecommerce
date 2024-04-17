import Modal from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { showProductDetailActions } from "../store/index";
import classes from "./Popup.module.css";
import { Link, useRouteLoaderData } from "react-router-dom";
import ShoppingCartFill from "./ShoppingCartFill";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.showProductDetail.product);
  const products = useRouteLoaderData("product-list");

  const relatedProduct = products.filter(
    (pd) => pd.category === product.category.toLowerCase()
  );

  dispatch(showProductDetailActions.setProductList(relatedProduct));

  const handleModalClick = () => {
    dispatch(showProductDetailActions.HIDE_POPUP());
  };

  return (
    <Modal onClose={handleModalClick}>
      <div className={classes.product_detail}>
        <img src={product.img1} alt="img product" className={classes.img}></img>
        <div className={classes.content}>
          <p className={classes.name}>{product.name}</p>
          <p className={classes.price}>{`${product.price} VND`} </p>
          <p className={classes.price}>{product.short_desc} </p>
          <div className={classes.view_detail}>
            <ShoppingCartFill />
            <Link
              to={`detail/${product._id["$oid"]}`}
              relative="path"
              onClick={handleModalClick}
            >
              View Detail
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetail;
