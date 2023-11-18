import { useSelector } from "react-redux";
import { RootState } from "../../store";

const ComfirmedPage = () => {
  const { bill } = useSelector((state: RootState) => state.bills);
  const name = bill?.bill?.userId?.name;
  const email = bill?.bill?.userId?.email;
  const phone = bill?.bill?.phone;
  const location = bill?.bill?.location;
  const totalPrice = bill?.bill?.totalPrice;
  const cartId = bill?.bill?.cartId?._id;

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
              <h2>Contact</h2>
              <ol className="breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">Delivering</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      {/* / catg header banner section */}
      {/* start contact section */}
      <section id="aa-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-contact-area">
                <div className="aa-contact-top">
                  <h2>
                    Đơn hàng của bạn đã được người bán xác nhận và đang trong
                    quá trình chuẩn bị !!!
                  </h2>
                </div>
                {/* Contact address */}
                <div className="aa-contact-address">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="aa-contact-address-left">
                        <form className="comments-form contact-form" action="">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="">Tên khách hàng</label>
                                <input
                                  value={name}
                                  className="form-control"
                                  readOnly
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input
                                  type="email"
                                  value={email}
                                  className="form-control"
                                  readOnly
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="">Số điện thoại</label>
                                <input
                                  type="tel"
                                  value={phone}
                                  className="form-control"
                                  readOnly
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="">Mã đơn hàng</label>
                                <input
                                  type="text"
                                  value={cartId}
                                  className="form-control"
                                  readOnly
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="">Tổng tiền thanh toán</label>
                                <input
                                  type="number"
                                  value={totalPrice}
                                  className="form-control"
                                  readOnly
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="">Địa chỉ nhận hàng</label>
                                <input
                                  type="text"
                                  value={location}
                                  className="form-control"
                                  readOnly
                                />
                              </div>
                            </div>
                          </div>
                          <button className="aa-secondary-btn">Home</button>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="aa-contact-address-right">
                        <address>
                          <h4>Anime Dragon Ball Shop</h4>
                          <p>
                            Đem ước mơ sưu tầm mô hình của bạn thành hiện thực
                            và biến căn phòng của bạn thành một thế giới Dragon
                            Ball thu nhỏ.
                          </p>
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComfirmedPage;
