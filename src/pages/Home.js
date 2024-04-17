import { json } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import OtherInformation from "../components/OtherInformation";
import Trending from "../components/Trending";
import { useDispatch, useSelector } from "react-redux";
import Popup from "../components/Popup";
import { showProductDetailActions } from "../store";

const HomePage = () => {
  const dispatch = useDispatch();

  const isShowProductDetail = useSelector(
    (state) => state.showProductDetail.isShowProductDetail
  );

  // Load listCart from localStorage to State cart.listCart
  const listCartData = localStorage.getItem("listCart");

  let listCart;

  if (listCartData !== null && listCartData.trim() !== "") {
    try {
      listCart = JSON.parse(listCartData);
    } catch (error) {
      // Handle the parsing error if needed
      console.error("Error parsing 'listCart' from localStorage:", error);
      // Set a default value or perform other error handling if required
      listCart = [];
    }
  } else {
    // If the value is empty or not present in localStorage, set a default value
    listCart = [];
  }

  dispatch(
    showProductDetailActions.GETLISTCARTFROMLOCALSTOTE_TO_CART_LISTCART(
      listCart
    )
  );

  return (
    <div>
      {isShowProductDetail && <Popup />}
      <Banner />
      <Categories />
      <Trending />
      <OtherInformation />
    </div>
  );
};

export default HomePage;

export async function loader() {
  const response = await fetch(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch products" },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();

    const prosducts = [];

    for (const product in resData) {
      if (prosducts.length <= 7) {
        prosducts.push({
          _id: resData[product]._id,
          name: resData[product].name,
          price: parseInt(resData[product].price).toLocaleString("en-US"),
          category: resData[product].category,
          short_desc: resData[product].short_desc,
          long_desc: resData[product].long_desc,
          img1: resData[product].img1,
          img2: resData[product].img2,
          img3: resData[product].img3,
          img4: resData[product].img4,
        });
      }
    }

    return prosducts;
  }
}
