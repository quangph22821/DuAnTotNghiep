import { Link } from "react-router-dom";

const ListUsersPage = () => {
  return (
    <main role="main" className="main-content">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="row">
              {/* Small table */}
              <div className="col-md-12 my-4">
                <h2 className="h4 mb-1">Users</h2>
                <p className="mb-3">
                  Additional table rendering with vertical border, rich content
                  formatting for cell
                </p>
                <div className="card shadow">
                  <div className="card-body">
                    <div className="toolbar">
                      <form className="form">
                        <div className="form-row">
                          <div className="form-group col-auto">
                            <label htmlFor="search" className="sr-only">
                              Search
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="search1"
                              defaultValue=""
                              placeholder="Search"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* table */}
                    <table className="table table-borderless table-hover">
                      <thead>
                        <tr>
                          <td>AVATAR</td>
                          <th>User</th>
                          <th>Email</th>
                          <th>Contact</th>
                          <th>Address</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="avatar avatar-md">
                              <img
                                src="../../assets/images/avatars/face-3.jpg"
                                alt="..."
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </td>
                          <td>
                            <p className="mb-0 text-muted">
                              <strong>Brown, Asher D.</strong>
                            </p>
                            <small className="mb-0 text-muted">2474</small>
                          </td>
                          <td>
                            <p className="mb-0 text-muted">
                              Accumsan Consulting
                            </p>
                            <small className="mb-0 text-muted">
                              Ap #331-7123 Lobortis Avenue
                            </small>
                          </td>
                          <td>
                            <p className="mb-0 text-muted">
                              <a href="#" className="text-muted">
                                (958) 421-0798
                              </a>
                            </p>
                            <small className="mb-0 text-muted">Nigeria</small>
                          </td>
                          <td className="w-25">
                            <small className="text-muted">
                              {" "}
                              Egestas integer eget aliquet nibh praesent. In hac
                              habitasse platea dictumst quisque sagittis purus.
                            </small>
                          </td>
                          <td className="text-muted">13/09/2020</td>
                          <td>
                              <Link to="/admin/updatePro"><span className="badge badge-warning">Update</span></Link>
                              <button><span className="badge badge-danger">Delete</span></button>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                    <nav aria-label="Table Paging" className="mb-0 text-muted">
                      <ul className="pagination justify-content-center mb-0">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Previous
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>{" "}
              {/* customized table */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ListUsersPage;
