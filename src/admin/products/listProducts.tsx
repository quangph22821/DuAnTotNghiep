import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";
import { fetchProductsAll, fetchProductsRemove } from "../../redux/products.reducer";
import { useEffect } from "react";



const ListProductsPage = () => {
 
  const dispatch = useDispatch<AppDispatch>()
  const { product } = useSelector((state: RootState) => state.products)
  const fetchProducts = async () => {
    try {
      await dispatch(fetchProductsAll()).unwrap()
    } catch (error) {

    }
  }
  console.log(product);

  useEffect(() => {
    fetchProducts()
  }, [])

  const checkDelete = async (id: string) => {

    const tb = window.confirm("Are you sure you want to delete")
    if (tb) {
      await dispatch(fetchProductsRemove(id)).unwrap()
      await dispatch(fetchProductsAll()).unwrap()
    }

  }

  return (
    <>
      <main role="main" className="main-content">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="row">
                {/* Striped rows */}
                <div className="col-md-12 my-4">
                  <h2 className="h4 mb-1">Products</h2>
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
                              to="/admin/createPro"
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
                            <th>Price</th>
                            <th>Height</th>
                            <th>Weight</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.map((item, index) => (
                            <tr>
                              <td>{index + 1}</td>
                              <td>{item.name}</td>
                              <td>{item.price}</td>
                              <td>{item.height} cm</td>
                              <td>{item.weight} kg</td>
                              <td>{item.description}</td>
                              <td><img src={item.img[0]} alt="" className="w-[150px] h-[200px]"/></td>
                              <td>
                                <Link to={`/admin/updatePro/${item._id}`}><span className="badge badge-warning">Update</span></Link>
                                <button><span className="badge badge-danger" onClick={()=>checkDelete(item._id)}>Delete</span></button>
                              </td>
                            </tr>
                          ))}

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

export default ListProductsPage;
