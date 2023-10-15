import { Link } from "react-router-dom";

const ListCategoryPage = () => {
  return (
    <>
      <main role="main" className="main-content">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="row">
                {/* Striped rows */}
                <div className="col-md-12 my-4">
                  <h2 className="h4 mb-1">Category</h2>
                  <p className="mb-4">
                    Customized table based on Bootstrap with additional elements
                    and more functions
                  </p>
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="toolbar row mb-3">
                        <div className="col">
                          <form className="form-inline">
                            <div className="form-row">
                              <div className="form-group col-auto">
                                <label className="sr-only">Search</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue=""
                                  placeholder="Search"
                                />
                              </div>
                              <div className="form-group col-auto ml-3">
                                <label className="my-1 mr-2 sr-only">
                                  Status
                                </label>
                                <select className="custom-select my-1 mr-sm-2">
                                  <option>Choose...</option>
                                  <option value={1}>Processing</option>
                                  <option value={2}>Success</option>
                                  <option value={3}>Pending</option>
                                  <option value={3}>Hold</option>
                                </select>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="col ml-auto">
                          <div className="dropdown float-right">
                            <Link
                              to="/admin/createCate"
                              className="btn btn-primary float-right ml-3"
                            >
                              Add more +
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* table */}
                      <table className="table table-bordered">
                        <thead>
                          <tr role="row">
                            <th>STT</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>4574</td>
                            <td>
                              <img src="" alt="avatar" />
                            </td>
                            <td>
                              <Link to="/admin/updateCate">
                                <span className="badge badge-warning mx-2">
                                  Update
                                </span>
                              </Link>
                              <button>
                                <span className="badge badge-danger">
                                  Delete
                                </span>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>4574</td>
                            <td>
                              <img src="" alt="avatar" />
                            </td>
                            <td>
                              <Link to="">
                                <span className="badge badge-warning mx-2">
                                  Update
                                </span>
                              </Link>
                              <button>
                                <span className="badge badge-danger">
                                  Delete
                                </span>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>4574</td>
                            <td>
                              <img src="" alt="avatar" />
                            </td>
                            <td>
                              <Link to="">
                                <span className="badge badge-warning mx-2">
                                  Update
                                </span>
                              </Link>
                              <button>
                                <span className="badge badge-danger">
                                  Delete
                                </span>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>4574</td>
                            <td>
                              <img src="" alt="avatar" />
                            </td>
                            <td>
                              <Link to="">
                                <span className="badge badge-warning mx-2">
                                  Update
                                </span>
                              </Link>
                              <button>
                                <span className="badge badge-danger">
                                  Delete
                                </span>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <nav
                        aria-label="Table Paging"
                        className="mb-0 text-muted"
                      >
                        <ul className="pagination justify-content-end mb-0">
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
                          <li className="page-item">
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
                {/* simple table */}
              </div>{" "}
              {/* end section */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ListCategoryPage;