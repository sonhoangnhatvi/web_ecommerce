import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";
import DetailPage from "./pages/Detail";
import HomePage, { loader as ProductLoader } from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import RootLayout from "./pages/Root";
import ShopPage from "./pages/Shop";
import ShopRootLayout from "./components/ShopRootLayout";
import ProductListPage from "./pages/ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "product-list",
    loader: ProductLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopRootLayout />,
        children: [
          { path: "", element: <ShopPage /> },
          {
            path: ":categoryid",
            element: <ProductListPage />,
          },
        ],
      },
      {
        path: "detail/:productId",
        element: <DetailPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "cart/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
