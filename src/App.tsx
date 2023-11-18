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
import AdminLayout from "./components/layout/AdminLayout";
import HistoryPage from "./admin/history";
import ListCategoryPage from "./admin/category/listCategory";
import ListUsersPage from "./admin/users/listUsers";
import ListProductsPage from "./admin/products/listProducts";
import ListCommentPage from "./admin/comment/listComment";
import DashboardPage from "./admin/dashboard";
import CreateCategory from "./admin/category/create";
import UpdateCategory from "./admin/category/update";
import CreateProducts from "./admin/products/create";
import UpdateProducts from "./admin/products/update";
import ListOriginPage from "./admin/origin/listOrigin";
import CreateOrigin from "./admin/origin/create";
import UpdateOrigin from "./admin/origin/update";
import ListMaterialPage from "./admin/material/listMaterial";
import CreateMaterial from "./admin/material/create";
import UpdateMaterial from "./admin/material/update";
import ProfilePage from "./pages/profile";
import ListBillPage from "./admin/bill/listBill";
import CheckoutPage from "./pages/checkout";
import BillPage from "./pages/bill/bill";
import UpdateBill from "./admin/bill/update";
import DeliverningPage from "./pages/bill/Delivering";
import DeliveredPage from "./pages/bill/Delivered";
import ComfirmedPage from "./pages/bill/comfirmed";
import CancelledPage from "./pages/bill/cancelled";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/detail/:_id", element: <DetailPage /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/bill", element: <BillPage /> },
      { path: "/delivered", element: <DeliveredPage /> },
      { path: "/deliverning", element: <DeliverningPage /> },
      { path: "/comfirmed", element: <ComfirmedPage /> },
      { path: "/cancelled", element: <CancelledPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/signin", element: <SigninPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "/admin", element: <DashboardPage /> },
      { path: "/admin/history", element: <HistoryPage /> },

      // Products
      { path: "/admin/listPro", element: <ListProductsPage /> },
      { path: "/admin/createPro", element: <CreateProducts /> },
      { path: "/admin/updatePro/:id", element: <UpdateProducts /> },

      // Category
      { path: "/admin/listCate", element: <ListCategoryPage /> },
      { path: "/admin/createCate", element: <CreateCategory /> },
      { path: "/admin/updateCate/:id", element: <UpdateCategory /> },

      // Origin
      { path: "/admin/listOri", element: <ListOriginPage /> },
      { path: "/admin/createOri", element: <CreateOrigin /> },
      { path: "/admin/updateOri/:id", element: <UpdateOrigin /> },

      // Material
      { path: "/admin/listMate", element: <ListMaterialPage /> },
      { path: "/admin/createMate", element: <CreateMaterial /> },
      { path: "/admin/updateMate/:id", element: <UpdateMaterial /> },

<<<<<<< HEAD
      // Bill
      { path: "/admin/listBill", element: <ListBillPage /> },
      { path: "/admin/updateBill/:id", element: <UpdateBill /> },
=======
      // Cart
      { path: "/admin/listCart", element: <ListCartPage /> },
>>>>>>> 6908a60216319fdfdb5067261c813993bb8469c5

      // Users
      { path: "/admin/listUser", element: <ListUsersPage /> },
      
      // Comment
      { path: "/admin/listComment", element: <ListCommentPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
