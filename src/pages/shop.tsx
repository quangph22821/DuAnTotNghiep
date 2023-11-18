import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { fetchProductsAll, fetchProductsOne } from "../redux/products.reducer";
import { useEffect, useState } from "react";
import { fetchCategoriesAll } from "../redux/categories.reducer";
import { fetchAddToCard } from "../redux/cart.reducer";
import { message } from "antd";
import { useForm } from "react-hook-form";
import { IProducts } from "../models/products";

const ShopPage = () => {
  const { _id }: any = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { product } = useSelector((state: RootState) => state.products);
  const { category } = useSelector((state: RootState) => state.categories);
  const { handleSubmit, register, setValue } = useForm();

  const [products, setproducts] = useState<IProducts>({} as IProducts);
  const fetchProductById = async (_id: string) => {
    const { product } = await dispatch(fetchProductsOne(_id)).unwrap();
    //   console.log(product);

    setproducts(product);
    // console.log(products);
  };

  const fetchProducts = async () => {
    try {
      await dispatch(fetchProductsAll()).unwrap();
    } catch (error) {}
  };
  console.log(product);
  //lấy categories
  const fetchCategories = async () => {
    try {
      await dispatch(fetchCategoriesAll()).unwrap();
    } catch (error) {}
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchProductById(_id);
  }, []);

  // ADD TO CART
  useEffect(() => {
    setValue("productId", products._id); // Đặt giá trị mặc định cho trường 'id'
  }, [products._id, setValue]);

  const onSubmit = async (body: any) => {
    try {
      await dispatch(fetchAddToCard(body)).unwrap();
      message.success({
        content: "Bạn đã thêm vào giỏ hàng thành công",
        key: "add",
      });
      console.log("cart", body);
    } catch (error) {
      console.log(error);
    }
  };
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
              <h2>Fashion</h2>
              <ol className="breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">Women</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      {/* / catg header banner section */}
      {/* product category */}
      <section id="aa-product-category">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-8 col-md-push-3">
              <div className="aa-product-catg-content">
                <div className="aa-product-catg-head">
                  <div className="aa-product-catg-head-left">
                    <form action="" className="aa-sort-form">
                      <label htmlFor="">Sort by</label>
                      <select name="">
                        <option value={1}>Default</option>
                        <option value={2}>Name</option>
                        <option value={3}>Price</option>
                        <option value={4}>Date</option>
                      </select>
                    </form>
                    <form action="" className="aa-show-form">
                      <label htmlFor="">Show</label>
                      <select name="">
                        <option value={1}>12</option>
                        <option value={2}>24</option>
                        <option value={3}>36</option>
                      </select>
                    </form>
                  </div>
                  <div className="aa-product-catg-head-right">
                    <a id="grid-catg" href="#">
                      <span className="fa fa-th" />
                    </a>
                    <a id="list-catg" href="#">
                      <span className="fa fa-list" />
                    </a>
                  </div>
                </div>
                <div className="aa-product-catg-body">
                  <ul className="aa-product-catg row">
                    {/* start single product item */}
                    {product.map((item) => (
                      <li className="col">
                        <input type="hidden" {...register("productId")} />
                        <figure>
                          <a className="aa-product-img" href="#">
                            <img
                              src={item.img[0]}
                              alt=""
                              style={{ width: 250, height: 300 }}
                            />
                          </a>
                          <button
                            className="aa-add-card-btn"
                            onClick={handleSubmit(onSubmit)}
                          >
                            <span className="fa fa-shopping-cart" />
                            Add To Cart
                          </button>
                          <figcaption>
                            <h4 className="aa-product-title">
                            <Link to={`/detail/${item._id}`}>{item.name}</Link>
                            </h4>
                            <span className="aa-product-price">{item.price}</span>
                            <span className="aa-product-price">
                              <del>$65.50</del>
                            </span>
                            <p className="aa-product-descrip">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Numquam accusamus facere iusto,
                              autem soluta amet sapiente ratione inventore
                              nesciunt a, maxime quasi consectetur, rerum illum.
                            </p>
                          </figcaption>
                        </figure>
                        <div className="aa-product-hvr-content">
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Wishlist"
                          >
                            <span className="fa fa-heart-o" />
                          </a>
                          <Link
                            to={`/detail/${item._id}`}
                            data-toggle2="tooltip"
                            data-placement="top"
                            title="Quick View"
                            data-toggle="modal"
                            // data-target="#quick-view-modal"
                          >
                            <span className="fa fa-search" />
                          </Link>
                        </div>
                        {/* product badge */}
                        <span className="aa-badge aa-sale">SALE!</span>
                      </li>
                    ))}
                    {/* start single product item */}
                  </ul>
                  {/* quick view modal */}
                  <div
                    className="modal fade"
                    id="quick-view-modal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="myModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-hidden="true"
                          >
                            ×
                          </button>
                          <div className="row">
                            {/* Modal view slider */}
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="aa-product-view-slider">
                                <div
                                  className="simpleLens-gallery-container"
                                  id="demo-1"
                                >
                                  <div className="simpleLens-container">
                                    <div className="simpleLens-big-image-container">
                                      <a
                                        className="simpleLens-lens-image"
                                        data-lens-image="img/view-slider/large/polo-shirt-1.png"
                                      >
                                        <img
                                          src="img/view-slider/medium/polo-shirt-1.png"
                                          className="simpleLens-big-image"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="simpleLens-thumbnails-container">
                                    <a
                                      href="#"
                                      className="simpleLens-thumbnail-wrapper"
                                      data-lens-image="img/view-slider/large/polo-shirt-1.png"
                                      data-big-image="img/view-slider/medium/polo-shirt-1.png"
                                    >
                                      <img src="img/view-slider/thumbnail/polo-shirt-1.png" />
                                    </a>
                                    <a
                                      href="#"
                                      className="simpleLens-thumbnail-wrapper"
                                      data-lens-image="img/view-slider/large/polo-shirt-3.png"
                                      data-big-image="img/view-slider/medium/polo-shirt-3.png"
                                    >
                                      <img src="img/view-slider/thumbnail/polo-shirt-3.png" />
                                    </a>
                                    <a
                                      href="#"
                                      className="simpleLens-thumbnail-wrapper"
                                      data-lens-image="img/view-slider/large/polo-shirt-4.png"
                                      data-big-image="img/view-slider/medium/polo-shirt-4.png"
                                    >
                                      <img src="img/view-slider/thumbnail/polo-shirt-4.png" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Modal view content */}
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="aa-product-view-content">
                                <h3>T-Shirt</h3>
                                <div className="aa-price-block">
                                  <span className="aa-product-view-price">
                                    $34.99
                                  </span>
                                  <p className="aa-product-avilability">
                                    Avilability: <span>In stock</span>
                                  </p>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Officiis animi, veritatis
                                  quae repudiandae quod nulla porro quidem,
                                  itaque quis quaerat!
                                </p>
                                <h4>Size</h4>
                                <div className="aa-prod-view-size">
                                  <a href="#">S</a>
                                  <a href="#">M</a>
                                  <a href="#">L</a>
                                  <a href="#">XL</a>
                                </div>
                                <div className="aa-prod-quantity">
                                  <form action="">
                                    <select name="" id="">
                                      <option value={0}>1</option>
                                      <option value={1}>2</option>
                                      <option value={2}>3</option>
                                      <option value={3}>4</option>
                                      <option value={4}>5</option>
                                      <option value={5}>6</option>
                                    </select>
                                  </form>
                                  <p className="aa-prod-category">
                                    Category: <a href="#">Polo T-Shirt</a>
                                  </p>
                                </div>
                                <div className="aa-prod-view-bottom">
                                  <a href="#" className="aa-add-to-cart-btn">
                                    <span className="fa fa-shopping-cart" />
                                    Add To Cart
                                  </a>
                                  <a href="#" className="aa-add-to-cart-btn">
                                    View Details
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* / quick view modal */}
                </div>
                <div className="aa-product-catg-pagination">
                  <nav>
                    <ul className="pagination">
                      <li>
                        <a href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">5</a>
                      </li>
                      <li>
                        <a href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-md-pull-9">
              <aside className="aa-sidebar">
                {/* single sidebar */}
                <div className="aa-sidebar-widget">
                  <h3>Category</h3>
                  <ul className="aa-catg-nav">
                    {category.map((item) => (
                      <li>
                        <a href="#">{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* single sidebar */}
                <div className="aa-sidebar-widget">
                  <h3>Tags</h3>
                  <div className="tag-cloud">
                    <a href="#">Fashion</a>
                    <a href="#">Ecommerce</a>
                    <a href="#">Shop</a>
                    <a href="#">Hand Bag</a>
                    <a href="#">Laptop</a>
                    <a href="#">Head Phone</a>
                    <a href="#">Pen Drive</a>
                  </div>
                </div>
                {/* single sidebar */}
                <div className="aa-sidebar-widget">
                  <h3>Shop By Price</h3>
                  {/* price range */}
                  <div className="aa-sidebar-price-range">
                    <form action="">
                      <div
                        id="skipstep"
                        className="noUi-target noUi-ltr noUi-horizontal noUi-background"
                      ></div>
                      <span id="skip-value-lower" className="example-val">
                        30.00
                      </span>
                      <span id="skip-value-upper" className="example-val">
                        100.00
                      </span>
                      <button className="aa-filter-btn" type="submit">
                        Filter
                      </button>
                    </form>
                  </div>
                </div>
                {/* single sidebar */}
                <div className="aa-sidebar-widget">
                  <h3>Shop By Color</h3>
                  <div className="aa-color-tag">
                    <a className="aa-color-green" href="#" />
                    <a className="aa-color-yellow" href="#" />
                    <a className="aa-color-pink" href="#" />
                    <a className="aa-color-purple" href="#" />
                    <a className="aa-color-blue" href="#" />
                    <a className="aa-color-orange" href="#" />
                    <a className="aa-color-gray" href="#" />
                    <a className="aa-color-black" href="#" />
                    <a className="aa-color-white" href="#" />
                    <a className="aa-color-cyan" href="#" />
                    <a className="aa-color-olive" href="#" />
                    <a className="aa-color-orchid" href="#" />
                  </div>
                </div>
                {/* single sidebar */}
                <div className="aa-sidebar-widget">
                  <h3>Recently Views</h3>
                  <div className="aa-recently-views">
                    <ul>
                      <li>
                        <a href="#" className="aa-cartbox-img">
                          <img
                            src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                            alt=""
                          />
                        </a>
                        <div className="aa-cartbox-info">
                          <h4>
                            <a href="#">Product Name</a>
                          </h4>
                          <p>1 x $250</p>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="aa-cartbox-img">
                          <img
                            src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                            alt=""
                          />
                        </a>
                        <div className="aa-cartbox-info">
                          <h4>
                            <a href="#">Product Name</a>
                          </h4>
                          <p>1 x $250</p>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="aa-cartbox-img">
                          <img
                            src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                            alt=""
                          />
                        </a>
                        <div className="aa-cartbox-info">
                          <h4>
                            <a href="#">Product Name</a>
                          </h4>
                          <p>1 x $250</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* single sidebar */}
                <div className="aa-sidebar-widget">
                  <h3>Top Rated Products</h3>
                  <div className="aa-recently-views">
                    <ul>
                      <li>
                        <a href="#" className="aa-cartbox-img">
                          <img
                            src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                            alt=""
                          />
                        </a>
                        <div className="aa-cartbox-info">
                          <h4>
                            <a href="#">Product Name</a>
                          </h4>
                          <p>1 x $250</p>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="aa-cartbox-img">
                          <img
                            src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                            alt=""
                          />
                        </a>
                        <div className="aa-cartbox-info">
                          <h4>
                            <a href="#">Product Name</a>
                          </h4>
                          <p>1 x $250</p>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="aa-cartbox-img">
                          <img
                            src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                            alt=""
                          />
                        </a>
                        <div className="aa-cartbox-info">
                          <h4>
                            <a href="#">Product Name</a>
                          </h4>
                          <p>1 x $250</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
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
    </>
  );
};

export default ShopPage;
