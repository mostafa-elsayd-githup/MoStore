import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home";
import CartPage from "../pages/CartPage";
import WishlistPage from "../pages/Wishlist";
import ManPage from "../pages/Man";
import AboutPage from "../pages/About";
import ProductPage from "../components/features/cart/ProductPage";
import NotFound from "../components/common/NotFoundRoute";
import ProductDetails from "../pages/ProductDetails";
function AppPouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "wishlist",
          element: <WishlistPage />,
        },
        {
          path: "man",
          element: <ManPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "Products/:category",
          element: <ProductPage />,
          handle: { cuumb: "المنتجات" },
        },
        {
          path: "/productdetails/:id",
          element: <ProductDetails />,
          handle: { cuumb: "المنتجات" },
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default AppPouter;
