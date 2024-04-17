import { useDispatch, useSelector } from "react-redux";
import classes from "./ProductDetail.module.css";
import NextIcon from "./NextIcon";
import BackIcon from "./BackIcon";
import ProductList from "./ProductList";
import { showProductDetailActions } from "../store";
import { toast } from "react-toastify";
import { useEffect } from "react";

const ProductDetail = () => {
  const product = useSelector((state) => state.showProductDetail.product);
  const quantity = useSelector(
    (state) => state.showProductDetail.cart.tempQuantity
  );

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Get listCart from localStorage
    const listCart = JSON.parse(localStorage.getItem("listCart")) || [];

    console.log("listCart", listCart);
    // Save listCart to localStorage
    listCart.push({
      product: product,
      quantity: quantity,
    });

    localStorage.setItem("listCart", JSON.stringify(listCart));

    // Add product to cart (store Redux)
    dispatch(
      showProductDetailActions.ADD_CART({
        product: product,
        quantity: quantity,
      })
    );

    // Reset quantity cart
    dispatch(showProductDetailActions.RESET_QUANTITY());

    // Show notification after successful form submission
    toast.success("Add to cart successfully!", {
      position: "top-center",
      autoClose: 5000, // 5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.top_product_detail}>
        <div className={classes.catalog}>
          <img
            src={product.img1}
            alt="img product"
            className={classes.img1}
          ></img>
          <img
            src={product.img2}
            alt="img product"
            className={classes.img2}
          ></img>
          <img
            src={product.img3}
            alt="img product"
            className={classes.img3}
          ></img>
          <img
            src={product.img4}
            alt="img product"
            className={classes.img4}
          ></img>
        </div>
        <img
          src={product.img1}
          alt="img product"
          className={classes.img_main}
        ></img>
        <div className={classes.description}>
          <h1 className={classes.name}>{product.name}</h1>
          <p className={classes.price}>{`${product.price} VND`} </p>
          <p className={classes.short_desc}>{product.short_desc} </p>
          <div className={classes.category_area}>
            <p className={classes.category}>CATEGORY:</p>
            <p>{product.category}</p>
          </div>
          <div className={classes.cart}>
            <div className={classes.quantity}>
              <p className={classes.quantitytitle}>QUANTITY</p>
              <BackIcon />
              <p>{quantity}</p>
              <NextIcon />
            </div>
            <button className={classes.btnaddtocart} onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className={classes.middle_product_detail}>
        <p className={classes.middle_description}>DESCRIPTION</p>
        <h3 className={classes.middle_product_description}>
          PRODUCT DESCRIPTION
        </h3>
        <p className={classes.long_desc}>{`${product.long_desc}`}</p>
        <h3 className={classes.middle_product_description}>RELATED PRODUCTS</h3>
        <ProductList />
      </div>
    </div>
  );
};

export default ProductDetail;
