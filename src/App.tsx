import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import DetailPage from "./pages/detail";
import ShopPage from "./pages/shop";
import CartPage from "./pages/cart";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import UserLayout from "./components/layout/UserLayout";
import CheckoutPage from "./pages/checkout";
import AdminLayout from "./components/layout/AdminLayout";
import DashboardPage from "./admin/dashboard";
import CreatePage from "./admin/create";
import UpdatePage from "./admin/update";
import HistoryPage from "./admin/history";
import ListCartPage from "./admin/listCart";
import ListCategoryPage from "./admin/listCategory";
import ListUsersPage from "./admin/listUsers";
import ListProductsPage from "./admin/listProducts";
import ListCommentPage from "./admin/listComment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/detail", element: <DetailPage /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/signin", element: <SigninPage /> },
      { path: "/signup", element: <SignupPage /> },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "/admin", element: <DashboardPage /> },
      { path: "/admin/create", element: <CreatePage /> },
      { path: "/admin/update", element: <UpdatePage /> },
      { path: "/admin/history", element: <HistoryPage /> },
      { path: "/admin/cart", element: <ListCartPage /> },
      { path: "/admin/category", element: <ListCategoryPage /> },
      { path: "/admin/user", element: <ListUsersPage /> },
      { path: "/admin/products", element: <ListProductsPage /> },
      { path: "/admin/comment", element: <ListCommentPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
