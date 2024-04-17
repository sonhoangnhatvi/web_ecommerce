import { json } from "react-router-dom";
import CategoryItem from "./CategoryItem";
import classes from "./ShopNavigation.module.css";

const ProductCategoryList = [
  {
    title: "APPLE",
    items: ["All"],
  },
  {
    title: "IPHONE & MAC",
    items: ["IPhone", "Ipod", "Macbook"],
  },
  {
    title: "WIRELESS",
    items: ["Airpod", "Watch"],
  },
  {
    title: "OTHER",
    items: ["Mouse", "Keyboard", "Other"],
  },
];

const ShopNavigation = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        {ProductCategoryList.map((category, index) => {
          return <CategoryItem categoryitem={category} key={index} />;
        })}
      </ul>
    </nav>
  );
};

export default ShopNavigation;

export async function loader({ request, params }) {
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
