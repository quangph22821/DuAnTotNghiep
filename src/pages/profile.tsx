

const ProfilePage = () => {
  return (
    <>
    {/* Cart view section */}
    <section id="checkout">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="checkout-area">
              <form action="">
                <div className="row">
                  <div className="">
                    <div className="checkout-left">
                      <div className="panel-group" id="accordion">
                        {/* Shipping Address */}
                        <div className="panel panel-default aa-checkout-billaddress">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <a
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseFour"
                              >
                                Cập nhật người dùng
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseFour"
                            className="panel-collapse collapse in"
                          >
                            <div className="panel-body">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="aa-checkout-single-bill">
                                    <input
                                      type="text"
                                      placeholder="Họ*"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="aa-checkout-single-bill">
                                    <input type="text" placeholder="Tên*" />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="aa-checkout-single-bill">
                                    <input
                                      type="email"
                                      placeholder="Email*"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="aa-checkout-single-bill">
                                    <input type="tel" placeholder="Số điện thoại*" />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="aa-checkout-single-bill">
                                    <input
                                      type="text"
                                      placeholder="Tỉnh / Thành phố*"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="aa-checkout-single-bill">
                                    <input
                                      type="text"
                                      placeholder="Quận / Huyện*"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="aa-checkout-single-bill">
                                    <input type="text" placeholder="Xã / Phường*" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="aa-checkout-single-bill">
                                    <input
                                      type="text"
                                      placeholder="Địa chỉ cụ thể*"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="aa-checkout-single-bill">
                                    <input type="file"  />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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

export default ProfilePage;
