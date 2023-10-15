const DashboardPage = () => {
  return (
    <>
      <main role="main" className="main-content">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="row">
                <div className="col-md-6 col-xl-3 mb-4">
                  <div className="card shadow bg-primary text-white border-0">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-3 text-center">
                          <span className="circle circle-sm bg-primary-light">
                            <i className="fe fe-16 fe-shopping-bag text-white mb-0" />
                          </span>
                        </div>
                        <div className="col pr-0">
                          <p className="small text-muted mb-0">Monthly Sales</p>
                          <span className="h3 mb-0 text-white">$1250</span>
                          <span className="small text-muted">+5.5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-4">
                  <div className="card shadow border-0">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-3 text-center">
                          <span className="circle circle-sm bg-primary">
                            <i className="fe fe-16 fe-shopping-cart text-white mb-0" />
                          </span>
                        </div>
                        <div className="col pr-0">
                          <p className="small text-muted mb-0">Orders</p>
                          <span className="h3 mb-0">1,869</span>
                          <span className="small text-success">+16.5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-4">
                  <div className="card shadow border-0">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-3 text-center">
                          <span className="circle circle-sm bg-primary">
                            <i className="fe fe-16 fe-filter text-white mb-0" />
                          </span>
                        </div>
                        <div className="col">
                          <p className="small text-muted mb-0">Conversion</p>
                          <div className="row align-items-center no-gutters">
                            <div className="col-auto">
                              <span className="h3 mr-2 mb-0"> 86.6% </span>
                            </div>
                            <div className="col-md-12 col-lg">
                              <div
                                className="progress progress-sm mt-2"
                                style={{ height: 3 }}
                              >
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  style={{ width: "87%" }}
                                  aria-valuenow={87}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-4">
                  <div className="card shadow border-0">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-3 text-center">
                          <span className="circle circle-sm bg-primary">
                            <i className="fe fe-16 fe-activity text-white mb-0" />
                          </span>
                        </div>
                        <div className="col">
                          <p className="small text-muted mb-0">AVG Orders</p>
                          <span className="h3 mb-0">$80</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* end section */}
              <div className="row align-items-center my-2">
                <div className="col-auto ml-auto">
                  <form className="form-inline">
                    <div className="form-group">
                      <label htmlFor="reportrange" className="sr-only">
                        Date Ranges
                      </label>
                      <div id="reportrange" className="px-2 py-2 text-muted">
                        <i className="fe fe-calendar fe-16 mx-2" />
                        <span className="small" />
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="button" className="btn btn-sm">
                        <span className="fe fe-refresh-ccw fe-12 text-muted" />
                      </button>
                      <button type="button" className="btn btn-sm">
                        <span className="fe fe-filter fe-12 text-muted" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* charts*/}
              <div className="row my-4">
                <div className="col-md-12">
                  <div className="chart-box">
                    <div id="columnChart" />
                  </div>
                </div>{" "}
                {/* .col */}
              </div>{" "}
              {/* end section */}
              {/* info small box */}
              <div className="row">
                <div className="col-md-4">
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <div className="chart-widget">
                        <div id="gradientRadial" />
                      </div>
                      <div className="row">
                        <div className="col-6 text-center">
                          <p className="text-muted mb-0">Yesterday</p>
                          <h4 className="mb-1">126</h4>
                          <p className="text-muted mb-2">+5.5%</p>
                        </div>
                        <div className="col-6 text-center">
                          <p className="text-muted mb-0">Today</p>
                          <h4 className="mb-1">86</h4>
                          <p className="text-muted mb-2">-5.5%</p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* .card-body */}
                  </div>{" "}
                  {/* .card */}
                </div>{" "}
                {/* .col */}
                <div className="col-md-4">
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <div className="chart-widget mb-2">
                        <div id="radialbar" />
                      </div>
                      <div className="row items-align-center">
                        <div className="col-4 text-center">
                          <p className="text-muted mb-1">Cost</p>
                          <h6 className="mb-1">$1,823</h6>
                          <p className="text-muted mb-0">+12%</p>
                        </div>
                        <div className="col-4 text-center">
                          <p className="text-muted mb-1">Revenue</p>
                          <h6 className="mb-1">$6,830</h6>
                          <p className="text-muted mb-0">+8%</p>
                        </div>
                        <div className="col-4 text-center">
                          <p className="text-muted mb-1">Earning</p>
                          <h6 className="mb-1">$4,830</h6>
                          <p className="text-muted mb-0">+8%</p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* .card-body */}
                  </div>{" "}
                  {/* .card */}
                </div>{" "}
                {/* .col */}
                <div className="col-md-4">
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <p className="mb-0">
                        <strong className="mb-0 text-uppercase text-muted">
                          Today
                        </strong>
                      </p>
                      <h3 className="mb-0">$2,562.30</h3>
                      <p className="text-muted">+18.9% Last week</p>
                      <div className="chart-box mt-n5">
                        <div id="lineChartWidget" />
                      </div>
                      <div className="row">
                        <div className="col-4 text-center mt-3">
                          <p className="mb-1 text-muted">Completions</p>
                          <h6 className="mb-0">26</h6>
                          <span className="small text-muted">+20%</span>
                          <span className="fe fe-arrow-up text-success fe-12" />
                        </div>
                        <div className="col-4 text-center mt-3">
                          <p className="mb-1 text-muted">Goal Value</p>
                          <h6 className="mb-0">$260</h6>
                          <span className="small text-muted">+6%</span>
                          <span className="fe fe-arrow-up text-success fe-12" />
                        </div>
                        <div className="col-4 text-center mt-3">
                          <p className="mb-1 text-muted">Conversion</p>
                          <h6 className="mb-0">6%</h6>
                          <span className="small text-muted">-2%</span>
                          <span className="fe fe-arrow-down text-danger fe-12" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* .card-body */}
                  </div>{" "}
                  {/* .card */}
                </div>{" "}
                {/* .col-md */}
                <div className="col-md-6">
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <div className="card-title">
                        <strong>Products</strong>
                        <a className="float-right small text-muted" href="#!">
                          View all
                        </a>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div id="chart-box">
                            <div id="donutChartWidget" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="row align-items-center my-3">
                            <div className="col">
                              <strong>Cloud Server</strong>
                              <div className="my-0 text-muted small">
                                Global, Services
                              </div>
                            </div>
                            <div className="col-auto">
                              <strong>+85%</strong>
                            </div>
                            <div className="col-3">
                              <div className="progress" style={{ height: 4 }}>
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "85%" }}
                                  aria-valuenow={85}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center my-3">
                            <div className="col">
                              <strong>CDN</strong>
                              <div className="my-0 text-muted small">
                                Global, Services
                              </div>
                            </div>
                            <div className="col-auto">
                              <strong>+75%</strong>
                            </div>
                            <div className="col-3">
                              <div className="progress" style={{ height: 4 }}>
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "75%" }}
                                  aria-valuenow={75}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center my-3">
                            <div className="col">
                              <strong>Databases</strong>
                              <div className="my-0 text-muted small">
                                Local, DC
                              </div>
                            </div>
                            <div className="col-auto">
                              <strong>+62%</strong>
                            </div>
                            <div className="col-3">
                              <div className="progress" style={{ height: 4 }}>
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "62%" }}
                                  aria-valuenow={62}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        {/* .col-md-12 */}
                      </div>{" "}
                      {/* .row */}
                    </div>{" "}
                    {/* .card-body */}
                  </div>{" "}
                  {/* .card */}
                </div>{" "}
                {/* .col-md */}
                <div className="col-md-6">
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <div className="card-title">
                        <strong>Region</strong>
                        <a className="float-right small text-muted" href="#!">
                          View all
                        </a>
                      </div>
                      <div
                        className="map-box"
                        style={{
                          position: "relative",
                          width: 350,
                          minHeight: 130,
                          margin: "0 auto",
                        }}
                      >
                        <div id="dataMapUSA" />
                      </div>
                      <div className="row align-items-center h-100 my-2">
                        <div className="col">
                          <p className="mb-0">France</p>
                          <span className="my-0 text-muted small">+10%</span>
                        </div>
                        <div className="col-auto text-right">
                          <span>118</span>
                          <br />
                          <div className="progress mt-2" style={{ height: 4 }}>
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "85%" }}
                              aria-valuenow={85}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center my-2">
                        <div className="col">
                          <p className="mb-0">Netherlands</p>
                          <span className="my-0 text-muted small">+0.6%</span>
                        </div>
                        <div className="col-auto text-right">
                          <span>1008</span>
                          <br />
                          <div className="progress mt-2" style={{ height: 4 }}>
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "85%" }}
                              aria-valuenow={85}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center my-2">
                        <div className="col">
                          <p className="mb-0">Italy</p>
                          <span className="my-0 text-muted small">+1.6%</span>
                        </div>
                        <div className="col-auto text-right">
                          <span>67</span>
                          <br />
                          <div className="progress mt-2" style={{ height: 4 }}>
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "85%" }}
                              aria-valuenow={85}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center my-2">
                        <div className="col">
                          <p className="mb-0">Spain</p>
                          <span className="my-0 text-muted small">+118%</span>
                        </div>
                        <div className="col-auto text-right">
                          <span>186</span>
                          <br />
                          <div className="progress mt-2" style={{ height: 4 }}>
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "85%" }}
                              aria-valuenow={85}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* .col */}
              </div>{" "}
              {/* / .row */}
              <div className="row">
                {/* Recent orders */}
                <div className="col-md-12">
                  <h6 className="mb-3">Last orders</h6>
                  <table className="table table-borderless table-striped">
                    <thead>
                      <tr role="row">
                        <th>ID</th>
                        <th>Purchase Date</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Total</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="col">1331</th>
                        <td>2020-12-26 01:32:21</td>
                        <td>Kasimir Lindsey</td>
                        <td>(697) 486-2101</td>
                        <td>996-3523 Et Ave</td>
                        <td>$3.64</td>
                        <td> Paypal</td>
                        <td>Shipped</td>
                        <td>
                          <div className="dropdown">
                            <button
                              className="btn btn-sm dropdown-toggle more-vertical"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="text-muted sr-only">Action</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Remove
                              </a>
                              <a className="dropdown-item" href="#">
                                Assign
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="col">1156</th>
                        <td>2020-04-21 00:38:38</td>
                        <td>Melinda Levy</td>
                        <td>(748) 927-4423</td>
                        <td>Ap #516-8821 Vitae Street</td>
                        <td>$4.18</td>
                        <td> Paypal</td>
                        <td>Pending</td>
                        <td>
                          <div className="dropdown">
                            <button
                              className="btn btn-sm dropdown-toggle more-vertical"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="text-muted sr-only">Action</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Remove
                              </a>
                              <a className="dropdown-item" href="#">
                                Assign
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="col">1038</th>
                        <td>2019-06-25 19:13:36</td>
                        <td>Aubrey Sweeney</td>
                        <td>(422) 405-2736</td>
                        <td>Ap #598-7581 Tellus Av.</td>
                        <td>$4.98</td>
                        <td>Credit Card </td>
                        <td>Processing</td>
                        <td>
                          <div className="dropdown">
                            <button
                              className="btn btn-sm dropdown-toggle more-vertical"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="text-muted sr-only">Action</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Remove
                              </a>
                              <a className="dropdown-item" href="#">
                                Assign
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="col">1227</th>
                        <td>2021-01-22 13:28:00</td>
                        <td>Timon Bauer</td>
                        <td>(690) 965-1551</td>
                        <td>840-2188 Placerat, Rd.</td>
                        <td>$3.46</td>
                        <td> Paypal</td>
                        <td>Processing</td>
                        <td>
                          <div className="dropdown">
                            <button
                              className="btn btn-sm dropdown-toggle more-vertical"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="text-muted sr-only">Action</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Remove
                              </a>
                              <a className="dropdown-item" href="#">
                                Assign
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="col">1956</th>
                        <td>2019-11-11 16:23:17</td>
                        <td>Kelly Barrera</td>
                        <td>(117) 625-6737</td>
                        <td>816 Ornare, Street</td>
                        <td>$4.16</td>
                        <td>Credit Card </td>
                        <td>Shipped</td>
                        <td>
                          <div className="dropdown">
                            <button
                              className="btn btn-sm dropdown-toggle more-vertical"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="text-muted sr-only">Action</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Remove
                              </a>
                              <a className="dropdown-item" href="#">
                                Assign
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="col">1669</th>
                        <td>2021-04-12 07:07:13</td>
                        <td>Kellie Roach</td>
                        <td>(422) 748-1761</td>
                        <td>5432 A St.</td>
                        <td>$3.53</td>
                        <td> Paypal</td>
                        <td>Shipped</td>
                        <td>
                          <div className="dropdown">
                            <button
                              className="btn btn-sm dropdown-toggle more-vertical"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="text-muted sr-only">Action</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Remove
                              </a>
                              <a className="dropdown-item" href="#">
                                Assign
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="col">1909</th>
                        <td>2020-05-14 00:23:11</td>
                        <td>Lani Diaz</td>
                        <td>(767) 486-2253</td>
                        <td>3328 Ut Street</td>
                        <td>$4.29</td>
                        <td> Paypal</td>
                        <td>Pending</td>
                        <td>
                          <div className="dropdown">
                            <button
                              className="btn btn-sm dropdown-toggle more-vertical"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="text-muted sr-only">Action</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Remove
                              </a>
                              <a className="dropdown-item" href="#">
                                Assign
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>{" "}
                {/* / .col-md-3 */}
              </div>{" "}
              {/* end section */}
            </div>
          </div>{" "}
          {/* .row */}
        </div>{" "}
        {/* .container-fluid */}
        <div
          className="modal fade modal-notif modal-slide"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="defaultModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="defaultModalLabel">
                  Notifications
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="list-group list-group-flush my-n3">
                  <div className="list-group-item bg-transparent">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <span className="fe fe-box fe-24" />
                      </div>
                      <div className="col">
                        <small>
                          <strong>Package has uploaded successfull</strong>
                        </small>
                        <div className="my-0 text-muted small">
                          Package is zipped and uploaded
                        </div>
                        <small className="badge badge-pill badge-light text-muted">
                          1m ago
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item bg-transparent">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <span className="fe fe-download fe-24" />
                      </div>
                      <div className="col">
                        <small>
                          <strong>Widgets are updated successfull</strong>
                        </small>
                        <div className="my-0 text-muted small">
                          Just create new layout Index, form, table
                        </div>
                        <small className="badge badge-pill badge-light text-muted">
                          2m ago
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item bg-transparent">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <span className="fe fe-inbox fe-24" />
                      </div>
                      <div className="col">
                        <small>
                          <strong>Notifications have been sent</strong>
                        </small>
                        <div className="my-0 text-muted small">
                          Fusce dapibus, tellus ac cursus commodo
                        </div>
                        <small className="badge badge-pill badge-light text-muted">
                          30m ago
                        </small>
                      </div>
                    </div>{" "}
                    {/* / .row */}
                  </div>
                  <div className="list-group-item bg-transparent">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <span className="fe fe-link fe-24" />
                      </div>
                      <div className="col">
                        <small>
                          <strong>Link was attached to menu</strong>
                        </small>
                        <div className="my-0 text-muted small">
                          New layout has been attached to the menu
                        </div>
                        <small className="badge badge-pill badge-light text-muted">
                          1h ago
                        </small>
                      </div>
                    </div>
                  </div>{" "}
                  {/* / .row */}
                </div>{" "}
                {/* / .list-group */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary btn-block"
                  data-dismiss="modal"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade modal-shortcut modal-slide"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="defaultModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="defaultModalLabel">
                  Shortcuts
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body px-5">
                <div className="row align-items-center">
                  <div className="col-6 text-center">
                    <div className="squircle bg-success justify-content-center">
                      <i className="fe fe-cpu fe-32 align-self-center text-white" />
                    </div>
                    <p>Control area</p>
                  </div>
                  <div className="col-6 text-center">
                    <div className="squircle bg-primary justify-content-center">
                      <i className="fe fe-activity fe-32 align-self-center text-white" />
                    </div>
                    <p>Activity</p>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-6 text-center">
                    <div className="squircle bg-primary justify-content-center">
                      <i className="fe fe-droplet fe-32 align-self-center text-white" />
                    </div>
                    <p>Droplet</p>
                  </div>
                  <div className="col-6 text-center">
                    <div className="squircle bg-primary justify-content-center">
                      <i className="fe fe-upload-cloud fe-32 align-self-center text-white" />
                    </div>
                    <p>Upload</p>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-6 text-center">
                    <div className="squircle bg-primary justify-content-center">
                      <i className="fe fe-users fe-32 align-self-center text-white" />
                    </div>
                    <p>Users</p>
                  </div>
                  <div className="col-6 text-center">
                    <div className="squircle bg-primary justify-content-center">
                      <i className="fe fe-settings fe-32 align-self-center text-white" />
                    </div>
                    <p>Settings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>{" "}
      {/* main */}
    </>
  );
};

export default DashboardPage;
