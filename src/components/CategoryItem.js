import { json, NavLink } from "react-router-dom";
import classes from "./CategoryItem.module.css";

const CategoryItem = (prop) => {
  return (
    <div>
      <p
        className={
          prop.categoryitem.title.toUpperCase() === "APPLE"
            ? classes.title_apple
            : classes.title
        }
      >
        {prop.categoryitem.title}
      </p>
      <ul className={classes.categoryitems}>
        {prop.categoryitem.items.map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={item} relative="route">
                {item}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryItem;

export async function loader({ request, params }) {
  const categoryid = params.categoryid;

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
      if (
        prosducts.length <= 7 &&
        (resData[product].category === categoryid.toLowerCase() ||
          categoryid.toLowerCase() === "all")
      ) {
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
