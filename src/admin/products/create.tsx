import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useForm } from "react-hook-form";
import { fetchProductsAdd } from "../../redux/products.reducer";
import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchCategoriesAll } from "../../redux/categories.reducer";
import { fetchMaterialAll } from "../../redux/material.reducer";
import { fetchOriginAll } from "../../redux/origin.reducer";

const CreateProducts = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { material } = useSelector((state: RootState) => state.material)
  const { category } = useSelector((state: RootState) => state.categories)
  const { origin } = useSelector((state: RootState) => state.origin)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = async (body: any) => {
    try {
      const images = await uploadFiles(body.img);
      const newData = { ...body, img: images };
      await dispatch(fetchProductsAdd(newData)).unwrap()
      message.success({ content: "Thêm thành công", key: "add" });
      navigate("/admin/listPro")
      console.log(body);

    } catch (error) { /* empty */ }
  }

  useEffect(() => {
    //category
    const fetchCategories = async () => {
      try {
        await dispatch(fetchCategoriesAll()).unwrap();
      } catch (error) { }
    };
    //material
    const fetchMaterial = async () => {
      try {
        await dispatch(fetchMaterialAll()).unwrap()
      } catch (error) { /* empty */ }
    }
    //origin
    const fetchOrigin = async () => {
      try {
        await dispatch(fetchOriginAll()).unwrap()
      } catch (error) { /* empty */ }
    }

    fetchCategories()
    fetchMaterial()
    fetchOrigin()
  }, [])
  const uploadFiles = async (files: FileList): Promise<string[]> => {
    const CLOUD_NAME = "djhzlcf7o";
    const PRESET_NAME = "test-upload";
    const FOLDER_NAME = "DATN";
    const urls: string[] = [];
    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

    const formData = new FormData();
    formData.append("upload_preset", PRESET_NAME);
    formData.append("folder", FOLDER_NAME);

    for (const file of Array.from(files)) {
      formData.append("file", file);
      try {
        message.loading({ content: 'Đang tải ảnh lên', key: 'upload' });
        const response = await axios.post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        urls.push(response.data.secure_url);
      } catch (error) {
        console.log(error);
        message.error({ content: 'Lỗi khi tải ảnh lên', key: 'upload' });
      }
    }
    return urls;
  };

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
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputEmail5"
                              {...register("name")}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Price</label>
                            <input
                              type="number"
                              className="form-control"
                              id="inputPassword5"
                              min="0"
                              {...register('price')}
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
                            multiple
                            {...register("img")}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputAddress2">Description</label>
                          <textarea
                            className="form-control"
                            id="inputAddress6" placeholder="Description"
                            {...register("description")}
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
                              {...register("weight")}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Chiều cao</label>
                            <input
                              type="number"
                              className="form-control"
                              id="inputPassword5"
                              min="0"
                              {...register("height")}
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-4">
                            <label htmlFor="inputState">Chất liệu</label>
                            <select id="inputState5" className="form-control" {...register("materialId")}>
                              <option value="">Chọn Chất Liệu</option>
                              {material.map((item) => {
                                return (
                                  <option value={item._id}>{item.name}</option>
                                )

                              })}
                            </select>
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="inputState">Xuất xứ</label>
                            <select id="inputState5" className="form-control" {...register("originId")}>
                              <option value="">Chọn Xuất Xứ</option>
                              {origin.map((item) => {
                                return (
                                  <option value={item._id}>{item.name}</option>
                                )

                              })}
                            </select>
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="inputState">Danh mục</label>
                            <select id="inputState5" className="form-control" {...register('categoryId')}>
                              <option value="">Chọn Danh Mục</option>
                              {category.map((item) => {
                                return (
                                  <option value={item._id}>{item.name}</option>
                                )

                              })}


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
