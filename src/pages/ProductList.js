import { useParams, useRouteLoaderData } from "react-router-dom";
import ProductList from "../components/ProductList";
import { useDispatch } from "react-redux";
import { showProductDetailActions } from "../store/index";
import ShopFunction from "../components/ShopFunction";

const ProductListPage = () => {
  const products = useRouteLoaderData("product-list");
  const dispatch = useDispatch();
  const params = useParams();

  const { categoryid } = params;

  const productCategory = products.filter(
    (pd) =>
      pd.category === categoryid.toLowerCase() ||
      categoryid.toLowerCase() === "all"
  );

  dispatch(showProductDetailActions.setProductList(productCategory));

  return (
    <div>
      <ShopFunction />
      <ProductList />
    </div>
  );
};

export default ProductListPage;
