import { Outlet } from "react-router-dom"
import HeaderAdmin from "../header/headerAdmin"


const AdminLayout = () => {
  return <>
  <div className="bg-gray-100 font-family-karla flex">
  <HeaderAdmin/>
    <Outlet/>
  </div>
  </>
}

export default AdminLayout
