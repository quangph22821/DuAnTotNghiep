const CreateProducts = () => {
  return (
    <>
      <main role="main" className="main-content">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="card shadow mb-4">
                    <div className="card-header">
                      <strong className="card-title">Create Products</strong>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputEmail5"

                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Price</label>
                            <input
                              type="number"
                              className="form-control"
                              id="inputPassword5"
                              min="0"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputAddress">Image</label>
                          <br />
                          <input
                            type="file"
                            id="inputAddress5"
                            placeholder="1234 Main St"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputAddress2">Description</label>
                          <textarea
                            className="form-control"
                            id="inputAddress6" placeholder="Description"
                          />
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Trọng lượng</label>
                            <input
                              type="number"
                              className="form-control"
                              id="inputEmail5"
                              min="0"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Chiều cao</label>
                            <input
                              type="number"
                              className="form-control"
                              id="inputPassword5"
                              min="0"
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-4">
                            <label htmlFor="inputState">Chất liệu</label>
                            <select id="inputState5" className="form-control">
                              <option>Choose...</option>
                              <option>Sắt</option>
                              <option>Sắt</option>
                              <option>Sắt</option>
                            </select>
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="inputState">Xuất xứ</label>
                            <select id="inputState5" className="form-control">
                              <option>Choose...</option>
                              <option>Sắt</option>
                              <option>Sắt</option>
                              <option>Sắt</option>
                            </select>
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="inputState">Danh mục</label>
                            <select id="inputState5" className="form-control">
                              <option>Choose...</option>
                              <option>Sắt</option>
                              <option>Sắt</option>
                              <option>Sắt</option>
                            </select>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-success bg-green-600 color-while mx-3">
                          Create
                        </button>
                        <button type="reset" className="btn btn-warning bg-yellow-600 ">
                          Reset
                        </button>
                      </form>
                    </div>{" "}
                    {/* /. card-body */}
                  </div>{" "}
                  {/* /. card */}
                </div>{" "}
                {/* /. col */}
              </div>{" "}
              {/* /. end-section */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateProducts;
