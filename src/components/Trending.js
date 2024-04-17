import { useDispatch } from "react-redux";
import { useRouteLoaderData } from "react-router-dom";
import classes from "./Trending.module.css";
import { showProductDetailActions } from "../store/index";

const Trending = () => {
  const products = useRouteLoaderData("product-list");
  const dispatch = useDispatch();

  const handleProductClick = (product) => {
    dispatch(showProductDetailActions.SHOW_POPUP());
    dispatch(showProductDetailActions.setProduct(product));
  };

  return (
    <div className={classes.trending}>
      <p className={classes.subtitle}>MAKE THE HARD WAY</p>
      <p className={classes.title}>TOP TRENDING PRODUCTS</p>
      <div>
        <ul className={classes.products}>
          {products.map((product) => {
            return (
              <li
                key={product._id.$oid}
                onClick={() => handleProductClick(product)}
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
    </div>
  );
};

export default Trending;
