import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { cartReducer, fetchCartUser } from "../redux/cart.reducer";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { message } from "antd";
import { fetchCkeckOutBill } from "../redux/bill.reducer";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cart } = useSelector((state: RootState) => state.carts);
  const navigate = useNavigate();
  const [cartId, setCartId] = useState({} as any);
  const [cartComfirm, setCartComfirm] = useState([])
  const fetchCarts = async (_id: string) => {
    try {
      const data = await dispatch(fetchCartUser(_id)).unwrap();
      // console.log(data);
      setCartId(data);
    } catch (error) {}
  };

  let totalAll = 0;
  for (let i = 0; i < cart.length; i++) {
    totalAll += cart[i].quantity * cart[i].productId?.price;
  }
  useEffect(() => {
    fetchCarts();
  }, []);

  // Thanh toán
  const { register, handleSubmit, setValue } = useForm({});
  const onSubmitBill = async (data: any) => {
    try {
      if (data.name == "" || data.phone == "" || data.location == "") {
        message.warning("Bạn phải Nhập đầy đủ các Trường !!");
        return;
      }
      // if (data.totalPrice == 0) {
      //   message.warning("Giá trị tổng tiền phải lớn hơn 0");
      //   return;
      // }

      console.log(data);
      await dispatch(fetchCkeckOutBill(data));
      message.success("Bạn đã đặt hàng thành công!!");
      // console.log(data);
      navigate("/bill");
      setCartComfirm([])
      return cartComfirm
    } catch ({ response }: any) {}
  };
  useEffect(() => {
    setValue("cartId", cartId._id); // Đặt giá trị mặc định cho trường 'id'
  }, [cartId._id, setValue]);
  return (
    <>
      {/* catg header banner section */}
      <section id="aa-catg-head-banner">
        <img
          src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
          alt=""
          style={{ width: "100%", height: 300 }}
        />
        <div className="aa-catg-head-banner-area">
          <div className="container">
            <div className="aa-catg-head-banner-content">
              <h2>Checkout Page</h2>
              <ol className="breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">Checkout</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      {/* / catg header banner section */}
      {/* Cart view section */}
      <section id="checkout">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="checkout-area">
                <form onSubmit={handleSubmit(onSubmitBill)}>
                  <input type="hidden" {...register("cartId")} />
                  <input
                    type="hidden"
                    {...register("totalPrice")}
                    value={totalAll}
                  />
                  <div className="row">
                    <div className="col-md-8">
                      <div className="checkout-left">
                        <div className="panel-group" id="accordion">
                          {/* Billing Details */}
                          <div className="panel panel-default aa-checkout-billaddress">
                            <div className="panel-heading">
                              <h4 className="panel-title">
                                <a
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#collapseOne"
                                >
                                  Billing Details
                                </a>
                              </h4>
                            </div>
                            <div
                              id="collapseOne"
                              className="panel-collapse collapse in"
                            >
                              <div className="panel-body">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="text"
                                        placeholder="Tên khách hàng*"
                                        {...register("name")}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="aa-checkout-single-bill">
                                      <input
                                        type="number"
                                        placeholder="Số điện thoại*"
                                        {...register("phone")}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="aa-checkout-single-bill">
                                      <textarea
                                        placeholder="Address"
                                        {...register("location")}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="checkout-right">
                        <h4>Order Summary</h4>
                        <div className="aa-order-summary-area">
                          <table className="table table-responsive">
                            <thead>
                              <tr>
                                <th>Product</th>
                                <th>Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cart.map((item) => (
                                <tr>
                                  <td>
                                    {item?.productId?.name}
                                    <strong> x {item?.quantity}</strong>
                                  </td>
                                  <td>
                                    {item?.productId?.price * item?.quantity}
                                    .000 VNĐ
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                            <tfoot>
                              <tr>
                                <th>Total</th>
                                <td>{totalAll}.000 VNĐ</td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                        <h4>Payment Method</h4>
                        <div className="aa-payment-method">
                          <label htmlFor="cashdelivery">
                            <input
                              type="radio"
                              id="cashdelivery"
                              name="optionsRadios"
                            />{" "}
                            Thanh toán khi nhận hàng{" "}
                          </label>
                          <label htmlFor="paypal">
                            <input
                              type="radio"
                              id="paypal"
                              name="optionsRadios"
                            />{" "}
                            Chuyển khoản ngân hàng{" "}
                          </label>
                          <label htmlFor="paypal">
                            <input
                              type="radio"
                              id="paypal"
                              name="optionsRadios"
                            />{" "}
                            Thanh toán qua ví điện tử{" "}
                          </label>
                          <input
                            type="submit"
                            defaultValue="Place Order"
                            className="aa-browse-btn"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Cart view section */}
    </>
  );
};

export default CheckoutPage;
