import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../store";
import { fetchProductsOne } from "../redux/products.reducer";
import { useEffect, useLayoutEffect, useState } from "react";
import { IProducts } from "../models/products";
import { useForm } from "react-hook-form";
import { fetchAddToCard } from "../redux/cart.reducer";
<<<<<<< HEAD
import { message } from "antd";
const DetailPage = () => {
  const navigate = useNavigate();
  const { _id }: any = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { handleSubmit, register, setValue } = useForm();

  const [products, setproducts] = useState<IProducts>({} as IProducts);
=======
const DetailPage = () => {
  const [quantity, setQuantity] = useState(1)
  const { _id }: any = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const { handleSubmit, register, setValue } = useForm()
  const [products, setproducts] = useState<IProducts>({} as IProducts)
>>>>>>> 6908a60216319fdfdb5067261c813993bb8469c5
  const fetchProductById = async (_id: string) => {
    const { product } = await dispatch(fetchProductsOne(_id)).unwrap();
    //   console.log(product);

    setproducts(product);
    // console.log(products);
  };
  useEffect(() => {
<<<<<<< HEAD
    fetchProductById(_id);
  }, []);

  // nhấp ảnh nhỏ ra ảnh lớn bên trên, dùng onclick của trong img vừa đổ
  const disImages = (u) => {
    const mainImg = document.getElementById("Img");
    mainImg.src = u;
  };
  console.log(products);
=======
    fetchProductById(_id)

  }, [])

  //xu ly button
  // useLayoutEffect(() => {
  //   if (quantity < 1) {
  //     setQuantity(1)
  //   }
  // }, [quantity])
  // const handlePlush = () => {
  //   setQuantity(quantity + 1)
  // }
  // const handleMinus = () => {
  //   setQuantity(quantity - 1)
  // }
  // nhấp ảnh nhỏ ra ảnh lớn bên trên, dùng onclick của trong img vừa đổ
  const disImages = (u) => {
    const mainImg = document.getElementById('Img')
    mainImg.src = u
  }
  // console.log(products);
  useEffect(() => {
    setValue('productId', products._id); // Đặt giá trị mặc định cho trường 'id'
  }, [products._id, setValue]);

  const onSubmit = async (body: any) => {
    try {
      await dispatch(fetchAddToCard(body)).unwrap()
      console.log("cart", body);
    } catch (error) {
      console.log(error);

    }
  }

>>>>>>> 6908a60216319fdfdb5067261c813993bb8469c5

  useEffect(() => {
    setValue("productId", products._id); // Đặt giá trị mặc định cho trường 'id'
  }, [products._id, setValue]);

  const accessToken = localStorage.getItem("accessToken");

  const onSubmit = async (body: any) => {
    try {
      if (accessToken) {
        await dispatch(fetchAddToCard(body)).unwrap();
        message.success({
          content: "Bạn đã thêm vào giỏ hàng thành công",
          key: "add",
        });
        navigate("/cart");
      } else {
        message.warning("Bạn phải đăng Nhập !!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
<<<<<<< HEAD
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
              <h2>T-Shirt</h2>
              <ol className="breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
                <li className="active">{products.name}</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      {/* / catg header banner section */}
      {/* product category */}
      <section id="aa-product-details">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-product-details-area">
                <div className="aa-product-details-content">
                  <div className="row">
                    {/* Modal view slider */}
                    <div className="col-md-5 col-sm-5 col-xs-12">
                      <div className="aa-product-view-slider">
                        <div
                          id="demo-1"
                          className="simpleLens-gallery-container"
                        >
                          <div className="simpleLens-container">
                            <div className="simpleLens-big-image-container">
                              <a
                                data-lens-image={products.img?.[0]}
                                className="simpleLens-lens-image"
                              >
                                <img
                                  id="Img"
                                  src={products.img?.[0]}
                                  className="simpleLens-big-image"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="simpleLens-thumbnails-container">
                            <img
                              src={products.img?.[1]}
                              style={{ width: 50, height: 50 }}
                              alt="product2"
                              onClick={() => disImages(products.img?.[0])}
                            />
                            <img
                              src={products.img?.[1]}
                              style={{ width: 50, height: 50 }}
                              alt="product2"
                              onClick={() => disImages(products.img?.[1])}
                            />
                            <img
                              src={products.img?.[2]}
                              alt="product2"
                              style={{ width: 50, height: 50 }}
                              onClick={() => disImages(products.img?.[2])}
                            />
                            <img
                              src={products.img?.[3]}
                              alt="product2"
                              style={{ width: 50, height: 50 }}
                              className="w-full cursor-pointer border w-[100%]"
                              onClick={() => disImages(products.img?.[3])}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal view content */}
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                      <input type="hidden" {...register("productId")} />
                      <div className="col-md-7 col-sm-7 col-xs-12">
                        <div className="aa-product-view-content">
                          <h3>{products.name}</h3>
                          <div className="aa-price-block">
                            <span className="aa-product-view-price">
                              {products.price}.000 VNĐ
                            </span>
                            <p className="aa-product-avilability">
                              Chất liệu: <span>{products.originId?.name}</span>
                            </p>
                            <p className="aa-product-avilability">
                              Xuất xứ: <span>{products.materialId?.name}</span>
                            </p>
                          </div>
                          <p>{products.description}</p>
                          <div className="aa-prod-quantity">
                            <span>Quantity</span>
                            <br />
                            <button>-</button>
                            <input
                              style={{ width: 30, textAlign: "center" }}
                              type="number"
                              id="Quantity"
                              {...register("quantity")}
                              defaultValue={1}
                              min={1}
                              max={600}
                            />
                            <button>+</button>
                            <p className="aa-prod-category">
                              Category:{" "}
                              <a href="#">{products.categoryId?.name}</a>
                            </p>
                          </div>
                          <div className="aa-prod-view-bottom">
                            <button
                              className="aa-add-to-cart-btn"

                            >
                              Add To Cart
                            </button>
                            <a className="aa-add-to-cart-btn" href="#">
                              Wishlist
                            </a>
                            <a className="aa-add-to-cart-btn" href="#">
                              Compare
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="aa-product-details-bottom">
                  <ul className="nav nav-tabs" id="myTab2">
                    <li>
                      <a href="#description" data-toggle="tab">
                        Description
                      </a>
                    </li>
                    <li>
                      <a href="#review" data-toggle="tab">
                        Reviews
                      </a>
                    </li>
                  </ul>
                  {/* Tab panes */}
                  <div className="tab-content">
                    <div className="tab-pane fade in active" id="description">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Quod, culpa!
                        </li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dolor qui eius esse!
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Quibusdam, modi!
                        </li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Illum, iusto earum voluptates autem esse molestiae
                        ipsam, atque quam amet similique ducimus aliquid
                        voluptate perferendis, distinctio!
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Blanditiis ea, voluptas! Aliquam facere quas
                        cumque rerum dolore impedit, dicta ducimus repellat
                        dignissimos, fugiat, minima quaerat necessitatibus?
                        Optio adipisci ab, obcaecati, porro unde accusantium
                        facilis repudiandae.
                      </p>
                    </div>
                    <div className="tab-pane fade " id="review">
                      <div className="aa-product-review-area">
                        <h4>2 Reviews for T-Shirt</h4>
                        <ul className="aa-review-nav">
                          <li>
                            <div className="media">
                              <div className="media-left">
                                <a href="#">
                                  <img
                                    className="media-object"
                                    src="img/testimonial-img-3.jpg"
                                    alt="girl image"
                                  />
                                </a>
                              </div>
                              <div className="media-body">
                                <h4 className="media-heading">
                                  <strong>Marla Jobs</strong> -{" "}
                                  <span>March 26, 2016</span>
                                </h4>
                                <div className="aa-product-rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star-o" />
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="media">
                              <div className="media-left">
                                <a href="#">
                                  <img
                                    className="media-object"
                                    src="img/testimonial-img-3.jpg"
                                    alt="girl image"
                                  />
                                </a>
                              </div>
                              <div className="media-body">
                                <h4 className="media-heading">
                                  <strong>Marla Jobs</strong> -{" "}
                                  <span>March 26, 2016</span>
                                </h4>
                                <div className="aa-product-rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star-o" />
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit.
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <h4>Add a review</h4>
                        <div className="aa-your-rating">
                          <p>Your Rating</p>
                          <a href="#">
                            <span className="fa fa-star-o" />
                          </a>
                          <a href="#">
                            <span className="fa fa-star-o" />
                          </a>
                          <a href="#">
                            <span className="fa fa-star-o" />
                          </a>
                          <a href="#">
                            <span className="fa fa-star-o" />
                          </a>
                          <a href="#">
                            <span className="fa fa-star-o" />
                          </a>
                        </div>
                        {/* review form */}
                        <form action="" className="aa-review-form">
                          <div className="form-group">
                            <label htmlFor="message">Your Review</label>
                            <textarea
                              className="form-control"
                              rows={3}
                              id="message"
                              defaultValue={""}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="example@gmail.com"
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-default aa-review-submit"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Related product */}
                
=======
      {/* breadcrumb */}
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house" />
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right" />
        </span>
        <p className="text-gray-600 font-medium">Detail</p>
      </div>
      {/* ./breadcrumb */}
      {/* product-detail */}
      <div className="container grid grid-cols-2 gap-6">
        <div>
          <img
            src={products.img?.[0]}
            alt="product"
            className="w-full"
            id="Img"
          />
          {/* img */}
          <div className="grid grid-cols-5 gap-4 mt-4">
            <img
              src={products.img?.[1]}
              alt="product2"
              className="w-full cursor-pointer border w-[100%]"
              onClick={() => disImages(products.img?.[1])}
            />
            <img
              src={products.img?.[2]}
              alt="product2"
              className="w-full cursor-pointer border w-[100%]"
              onClick={() => disImages(products.img?.[2])}
            />
            <img
              src={products.img?.[3]}
              alt="product2"
              className="w-full cursor-pointer border w-[100%]"
              onClick={() => disImages(products.img?.[3])}
            />
            <img
              src={products.img?.[4]}
              alt="product2"
              className="w-full cursor-pointer border w-[100%]"
              onClick={() => disImages(products.img?.[4])}
            />
          </div>
        </div>
        {/* detail */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="hidden"
            {...register("productId")}
          />
          <div>
            <h2 className="text-3xl font-medium uppercase mb-2">
              {products.name}
            </h2>
            <div className="flex items-center mb-4">
              <div className="flex gap-1 text-sm text-yellow-400">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span>
                  <i className="fa-solid fa-star" />
                </span>
              </div>
              <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-800 font-semibold space-x-2">
                <span>Availability: </span>
                <span className="text-green-600">In Stock</span>
              </p>
              <p className="space-x-2">
                <span className="text-gray-800 font-semibold">Brand: </span>
                <span className="text-gray-600">Apex</span>
              </p>
              <p className="space-x-2">
                <span className="text-gray-800 font-semibold">Category: </span>
                <span className="text-gray-600">{products.categoryId?.name}</span>
              </p>
              <p className="space-x-2">
                <span className="text-gray-800 font-semibold">SKU: </span>
                <span className="text-gray-600">BE45VGRT</span>
              </p>
            </div>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
              <p className="text-xl text-primary font-semibold">{products.price}K</p>
              {/* <p className="text-base text-gray-400 line-through">$55.00</p> */}
            </div>
            {/* <p className="mt-4 text-gray-600">
            {products.description}
          </p> */}

            <div className="mt-4">
              <h3><label htmlFor="Quantity" className=""> Quantity </label></h3>
              <div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                

                  >
                    &minus;
                  </button>

                  <input

                    type="number"
                    id="Quantity"
                    {...register("quantity")}
                    defaultValue={1} min={1} max={600} 
                    className="h-10 w-24 rounded border-gray-200 [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  />

                  <button
                    type="button"
                    className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                    
                  >
                    +
                  </button>
                </div>
>>>>>>> 6908a60216319fdfdb5067261c813993bb8469c5
              </div>

            </div>
            <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
              <button
                type="submit"
                className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
              >
                <i className="fa-solid fa-bag-shopping" /> Add to cart
              </button>
              <a
                href="#"
                className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
              >
                <i className="fa-solid fa-heart" /> Wishlist
              </a>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <i className="fa-brands fa-twitter" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </section>
      {/* / product category */}
      {/* Subscribe section */}
      <section id="aa-subscribe">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-subscribe-area">
                <h3>Subscribe our newsletter </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                  velit!
                </p>
                <form action="" className="aa-subscribe-form">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter your Email"
                  />
                  <input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Subscribe section */}
=======
        </form>

      </div>
      {/* ./product-detail */}
      {/* description */}
      <div className="container pb-16">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
          {products.name}
        </h3>
        <div className="w-3/5 pt-6">
          <div className="text-gray-600">
            <p>
              {products.description}
            </p>

          </div>
          <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
            <tbody>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                  Color
                </th>
                <th className="py-2 px-4 border border-gray-300 ">
                  Blank, Brown, Red
                </th>
              </tr>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                  height
                </th>
                <th className="py-2 px-4 border border-gray-300 ">{products.height}cm</th>
              </tr>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                  Weight
                </th>
                <th className="py-2 px-4 border border-gray-300 ">{products.weight} kg</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* ./description */}
>>>>>>> 6908a60216319fdfdb5067261c813993bb8469c5
    </>
  );
};

export default DetailPage;
