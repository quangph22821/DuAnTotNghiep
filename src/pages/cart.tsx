import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchCartUser } from "../redux/cart.reducer";
import { useEffect, useState } from "react";
import { message } from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";

const CartPage = () => {
  const accessToken = localStorage.getItem("accessToken");
  const { _id } = useParams();
  console.log("idCart", _id);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { cart } = useSelector((state: RootState) => state.carts);
  const { bill } = useSelector((state: RootState) => state.bills);
  const [toalPrice, setToalPrice] = useState(0);
  const [cartComfirm, setCartComfirm] = useState([]);
  const status = bill?.bill?.status;
  useEffect(() => {
    if (!accessToken) {
      navigate("/signin");
      message.warning("Bạn phải đăng nhập để truy cập giỏ hàng");
    }
  }, [accessToken, navigate]);
  const fetchCarts = async (_id: string) => {
    try {
      const data = await dispatch(fetchCartUser(_id)).unwrap();
      console.log("cart", data);
    } catch (error) {}
  };

  const confirmDelete = async (id: string) => {
    try {
        await dispatch(fetchProductsRemove(id))
        await dispatch(fetchProductsAll())
        message.success('Sản phẩm đã được xóa thành công');

    } catch (error) {
        if (!error) {
            setTimeout(message.loading('đang sử lí ..'), 2000)
        } else {
            message.error(`Lỗi khi xóa sản phẩm này: ${error}`);
        }
    }
};
  console.log(cart);

  // TỔNG TIỀN
  let totalAll = 0;

  for (let i = 0; i < cart.length; i++) {
    totalAll += cart[i].quantity * cart[i].productId?.price;
  }
  console.log(`Tổng tiền của giỏ hàng là: ${totalAll}`);

  useEffect(() => {
    fetchCarts();
  }, []);

  if (accessToken && status === "Đã giao hàng") {
    setCartComfirm([]);
    return cartComfirm;
  }

  const onDelete = () => {
    for (let i = 0; i < cart.length; i++) {
     const id = cart[i]?._id;
     console.log(id);
    }
  };
  return (
    <>
      {/* catg header banner section */}
      <section id="aa-catg-head-banner">
        <img
          src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
          alt=""
          style={{ width: "100%", height: "300px" }}
        />
        <div className="aa-catg-head-banner-area">
          <div className="container">
            <div className="aa-catg-head-banner-content">
              <h2>Cart Page</h2>
              <ol className="breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">Cart</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      {/* / catg header banner section */}
      {/* Cart view section */}
      <section id="cart-view">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cart-view-area">
                <div className="cart-view-table">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th />
                          <th />
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr>
                            <td>
                              {item?.productId?._id}
                              <button
                                style={{
                                  backgroundColor: "none",
                                  border: "none",
                                }}
                                className="remove"
                                onClick={onDelete(  )}
                              >
                                <i className="fa fa-close" />
                              </button>
                            </td>
                            <td>
                              <a href="#">
                                <img src={item?.productId?.img[0]} alt="" />
                              </a>
                            </td>
                            <td>
                              <a className="aa-cart-title" href="#">
                                {item?.productId?.name}
                              </a>
                            </td>
                            <td>{item?.productId?.price}</td>
                            <td>
                              <input
                                className="aa-cart-quantity"
                                type="number"
                                value={item?.quantity}
                              />
                            </td>
                            <td>{item?.productId?.price * item?.quantity}</td>
                          </tr>
                        ))}
                        <tr>
                          <td colSpan={6} className="aa-cart-view-bottom">
                            <div className="aa-cart-coupon">
                              <input
                                className="aa-coupon-code"
                                type="text"
                                placeholder="Coupon"
                              />
                              <input
                                className="aa-cart-view-btn"
                                type="submit"
                                defaultValue="Apply Coupon"
                              />
                            </div>
                            <input
                              className="aa-cart-view-btn"
                              type="submit"
                              defaultValue="Update Cart"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Cart Total view */}
                  <div className="cart-view-total">
                    <h4>Cart Totals</h4>
                    <table className="aa-totals-table">
                      <tbody>
                        <tr>
                          <th>Subtotal</th>
                          <td>{totalAll}</td>
                        </tr>
                        <tr>
                          <th>Total</th>
                          <td>$450</td>
                        </tr>
                      </tbody>
                    </table>
                    <Link to="/checkout" className="aa-cart-view-btn">
                      Proced to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Cart view section */}
      {/* Subscribe section */}
      <section id="aa-subscribe">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-subscribe-area">
                <h3>Subscribe our newsletter </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                  velit!
                </p>
                <form action="" className="aa-subscribe-form">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter your Email"
                  />
                  <input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Subscribe section */}
    </>
  );
};

export default CartPage;
