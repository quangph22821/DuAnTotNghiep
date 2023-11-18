import { message } from "antd";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { useEffect } from "react";
import { fetchUserBill } from "../../redux/bill.reducer";

const Header = () => {
  const accessToken = localStorage.getItem("accessToken");
  const { bill } = useSelector((state: RootState) => state.bills);
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = bill?.bill?.status;
  console.log(status);
  const cart = bill?.bill?.cartId
  console.log(cart);
  

  const onLogout = async () => {
    try {
      if (accessToken) {
        await localStorage.clear();
        message.success({
          content: "Bạn đã đăng xuất xuất thành công",
        });
        navigate("/");
      } else {
        message.warning("Bạn phải đăng nhập !!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSignin = async () => {
    try {
      if (accessToken) {
        navigate("/profile");
      } else {
        navigate("/signin");
      }
    } catch (error) {}
  };

  const onCart = async () => {
    try {
      if (!accessToken) {
        message.warning({
          content: "Bạn cần đăng nhập để truy cập giỏ hàng",
        });
        navigate("/signin");
      }
       else if (accessToken && status === "Chờ xác nhận") {
        message.success({
          content: "Đơn hàng của bạn đang chờ xác nhận",
        });
        navigate("/bill");
      }
       else if (accessToken && status === "Đã xác nhận") {
        message.success({
          content: "Đơn hàng của bạn đang được chuẩn bị",
        });
        navigate("/comfirmed");
      }
       else if (accessToken && status === "Đang giao hàng") {
        message.success({
          content: "Đơn hàng đang được giao cho bạn ",
        });
        navigate("/deliverning");
      }
       else if (accessToken && status === "Đã giao hàng") {
        message.success({
          content: "Đơn hàng đã được giao cho bạn ",
        });
        navigate("/delivered");
      }
       else if (accessToken && status === "Hủy đơn hàng") {
        message.success({
          content: "Đơn hàng đã được giao cho bạn ",
        });
        navigate("/cancelled");
      }

      // SAU KHI ĐÃ NHẬN HÀNG
      // else if (accessToken && status === "Đã giao hàng") {
        
      // }
      else {
        
        navigate("/cart");
      }
    } catch (error) {}
  };

  useEffect(() => {
    dispatch(fetchUserBill());
  }, [dispatch]);
  return (
    <>
      {/* Start header section */}
      <header id="aa-header">
        {/* start header bottom  */}
        <div className="aa-header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aa-header-bottom-area">
                  {/* logo  */}
                  <div className="aa-logo">
                    {/* Text based logo */}
                    <Link to="/">
                      <span className="fa fa-shopping-cart" />
                      <p>
                        Anime<strong></strong> <span>Dragonball Shop</span>
                      </p>
                    </Link>
                    {/* img based logo */}
                    {/* <a href="index.html"><img src="img/logo.jpg" alt="logo img"></a> */}
                  </div>
                  {/* / logo  */}
                  {/* cart box */}
                  <div className="aa-cartbox">
                    <button
                      style={{ border: "none", background: "white" }}
                      onClick={handleSubmit(onCart)}
                      className="aa-cart-link"
                    >
                      <span className="fa fa-shopping-basket" />
                    </button>
                  </div>
                  <div className="aa-cartbox">
                    <button
                      style={{ border: "none", background: "white" }}
                      onClick={handleSubmit(onSignin)}
                      className="aa-cart-link"
                    >
                      <span className="fa fa-user" />
                    </button>
                  </div>
                  <div className="aa-cartbox">
                    <button
                      className="aa-cart-link"
                      style={{ border: "none", background: "white" }}
                      onClick={handleSubmit(onLogout)}
                    >
                      <span className="fa fa-power-off" />
                    </button>
                  </div>
                  {/* / cart box */}
                  {/* search box */}
                  <div className="aa-search-box">
                    <form action="">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Search here"
                      />
                      <button type="submit">
                        <span className="fa fa-search" />
                      </button>
                    </form>
                  </div>
                  {/* / search box */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* / header bottom  */}
      </header>
      {/* / header section */}
      {/* menu */}
      <section id="menu">
        <div className="container">
          <div className="menu-area">
            {/* Navbar */}
            <div className="navbar navbar-default" role="navigation">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="navbar-collapse collapse">
                {/* Left nav */}
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <div className="dropdown">
                      <Link
                        className="btn dropdown-toggle"
                        to=""
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        Category
                        <span className="caret" />
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu1"
                      >
                        <li>
                          <Link to="">FRENCH</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              {/*/.nav-collapse */}
            </div>
          </div>
        </div>
      </section>
      {/* / menu */}
    </>
  );
};

export default Header;
