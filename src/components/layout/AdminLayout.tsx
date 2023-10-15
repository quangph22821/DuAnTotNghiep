import { Outlet } from "react-router-dom";
import HeaderAdmin from "../header/headerAdmin";

const AdminLayout = () => {
  return (
    <body className="vertical  light  ">
      <div className="wrapper">
        <HeaderAdmin />
        <Outlet />
      </div>
    </body>
  );
};

export default AdminLayout;
