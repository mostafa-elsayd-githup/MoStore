import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home";
import CartPage from "../pages/Cart";
import WishlistPage from "../pages/Wishlist";
import ManPage from "../pages/Man";
import AboutPage from "../pages/About";
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default AppPouter;
