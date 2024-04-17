import { useNavigate } from "react-router-dom";
import classes from "./ProductList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showProductDetailActions } from "../store/index";

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productList = useSelector(
    (state) => state.showProductDetail.productList
  );

  const handleViewDetailClick = (product) => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    navigate(`/detail/${product._id["$oid"]}`);
    dispatch(showProductDetailActions.setProduct(product));
  };

  return (
    <div>
      <ul className={classes.products}>
        {productList.map((product) => {
          return (
            <li
              key={product._id.$oid}
              onClick={() => handleViewDetailClick(product)}
            >
              <img
                src={product.img1}
                alt="img product"
                className={classes.img}
              ></img>
              <p className={classes.name}>{product.name}</p>
              <p className={classes.price}>{`${product.price} VND`} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
