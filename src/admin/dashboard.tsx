import { message } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate()
  const accessRole = localStorage.getItem("accessRole");
  console.log("accessToken", accessRole);


  useEffect(() => {

    if (!accessRole) {
      message.warning("bạn cần phải đăng nhập !");
      navigate("/signin");
    }
    if (accessRole == "member") {
      message.warning("Bạn không có quyền truy cập !");
      navigate("/signin");
    }
    if (accessRole == "admin") {
      message.success("xin chào admin !");
      navigate("/admin");
      
    }
  },  [accessRole, navigate],);
  return (
    <div>
      Đây là giao diện admin
    </div>
  )
}

export default DashboardPage
