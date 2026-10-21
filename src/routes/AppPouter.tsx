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
import CheckOutPage from "../pages/CheckOut";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
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
          handle: { title: "عربه التسوق" },
        },
        {
          path: "wishlist",
          element: <WishlistPage />,
          handle: { title: "المفضله" },
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
          handle: { title: "المنتجات" },
        },
        {
          path: "/productdetails/:id",
          element: <ProductDetails />,
          handle: { title: "المنتجات" },
        },
        {
          element: <ProtectedRoute />,
          children: [
            {
              path: "checkout",
              element: <CheckOutPage />,
              handle: {
                title: "اتمام الطلب والدفع",
                requiresAuth: true,
                Layout: "minimal",
                metaTitle: "MoStore",
              },
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
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
  return <RouterProvider router={router} />;
}

export default AppPouter;
