const CancelledPage = () => {
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
                    <h2>Chào mừng bạn đến với Anime DragonBall Shop...</h2>
                    <p>
                      Đơn hàng này của bạn đã được hủy, nếu muốn mua xin hãy quay lại giỏ hàng !!!
                    </p>
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
                                  <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    placeholder="Email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    placeholder="Subject"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    placeholder="Company"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                            <button className="aa-secondary-btn">Send</button>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="aa-contact-address-right">
                          <address>
                            <h4>DailyShop</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing
                              elit. Rerum modi dolor facilis! Nihil error, eius.
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
  
  export default CancelledPage;
  