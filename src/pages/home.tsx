import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchProductsAll, fetchProductsOne } from "../redux/products.reducer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchCategoriesAll } from "../redux/categories.reducer";
import { useForm } from "react-hook-form";
import { IProducts } from "../models/products";
import { fetchAddToCard } from "../redux/cart.reducer";
import { message } from "antd";
import Banner from "../components/banner/banner";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useDispatch<AppDispatch>();
  const { product } = useSelector((state: RootState) => state.products);
  const { category } = useSelector((state: RootState) => state.categories);
  // lấy products
  const fetchProducts = async () => {
    try {
      await categories(fetchProductsAll()).unwrap();
    } catch (error) {}
  };
  //lấy categories
  const fetchCategories = async () => {
    try {
      await dispatch(fetchCategoriesAll()).unwrap();
    } catch (error) {}
  };
  console.log(product);
  console.log(category);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const navigate = useNavigate();
  const { _id }: any = useParams();
  const [quantity, setQuantity] = useState(1);
  const { handleSubmit, register, setValue } = useForm();

  const [products, setproducts] = useState<IProducts>({} as IProducts);
  const fetchProductById = async (_id: string) => {
    const { product } = await dispatch(fetchProductsOne(_id)).unwrap();
    //   console.log(product);

    setproducts(product);
    // console.log(products);
  };
  useEffect(() => {
    fetchProductById(_id);
  }, []);

  // nhấp ảnh nhỏ ra ảnh lớn bên trên, dùng onclick của trong img vừa đổ
  const disImages = (u) => {
    const mainImg = document.getElementById("Img");
    mainImg.src = u;
  };
  console.log(products);

  // // Tăng số lượng sản phẩm
  // useLayoutEffect(() => {
  //   if(quantity<1){
  //     setQuantity(1)
  //   }else if(quantity >= 7){
  //     setQuantity(1)
  //   }
  // })

  // const handlePlus = () => {
  //   setQuantity(quantity + 1)
  // }

  // const handleMinus = () => {
  //   setQuantity(quantity - 1)
  // }

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
      {/* Start slider */}
      <section id="aa-catg-head-banner">
        <img
          src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
          alt=""
          style={{ width: "100%", height: "300px" }}
        />
      </section>
      {/* / slider */}
      {/* Start Promo section */}
      <section id="aa-promo">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-promo-area">
                <div className="row">
                  {/* promo left */}
                  <div className="col-md-5 no-padding">
                    {category.slice(0, 1).map((item) => (
                      <div className="aa-promo-left">
                        <div className="aa-promo-banner">
                          <img src={item.img} alt="" />
                          <div className="aa-prom-content">
                            <h4>
                              <a href="#">{item.name}</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* promo right */}
                  <div className="col-md-7 no-padding">
                    <div className="aa-promo-right">
                      {category.slice(2,6).map((item) => (
                        <div className="aa-single-promo-right">
                          <div className="aa-promo-banner">
                            <img src={item.img} alt="" />
                            <div className="aa-prom-content">
                              <h4>
                                <a href="#">{item.name}</a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Promo section */}
      {/* Products section */}
      <section id="aa-product">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="aa-product-area">
                  <div className="aa-product-inner">
                    {/* start prduct navigation */}
                    <ul className="nav nav-tabs aa-products-tab">
                      <li className="active">
                        <a  data-toggle="tab">
                          SẢN PHẨM YÊU THÍCH
                        </a>
                      </li>
                      {/* <li>
                        <a href="#women" data-toggle="tab">
                          Women
                        </a>
                      </li>
                      <li>
                        <a href="#sports" data-toggle="tab">
                          Sports
                        </a>
                      </li>
                      <li>
                        <a href="#electronics" data-toggle="tab">
                          Electronics
                        </a>
                      </li> */}
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                      {/* Start men product category */}
                      <div className="tab-pane fade in active" id="men">
                        <ul className="aa-product-catg">
                          {/* start single product item */}
                          {product.slice(0, 8).map((item) => (
                            <li>
                              <figure>
                                <Link className="aa-product-img" to={`detail/${item._id}`}>
                                  <img
                                    src={item.img[0]}
                                    alt=""
                                    style={{ width: 250, height: 300 }}
                                  />
                                </Link>
                                <Link className="aa-add-card-btn" to={`detail/${item._id}`}>
                                  <span className="fa fa-search" />
                                  View Detail
                                </Link>
                                <figcaption>
                                  <h4 className="aa-product-title">
                                    <Link to={`detail/${item._id}`}>
                                      {item.name}
                                    </Link>
                                  </h4>
                                  <span className="aa-product-price">
                                    {item.price}.000 VNĐ
                                  </span>
                                  <span className="aa-product-price">
                                    {/* <del>{item.price}</del> */}
                                  </span>
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
                                <a
                                  // to={`detail/${item._id}`}
                                  // href="#"
                                  data-toggle2="tooltip"
                                  data-placement="top"
                                  title="Quick View"
                                  data-toggle="modal"
                                  data-target="#quick-view-modal"
                                >
                                  <span className="fa fa-search" />
                                </a>
                              </div>
                              {/* product badge */}
                              <span className="aa-badge aa-sale">SALE!</span>
                            </li>
                          ))}
                        </ul>
                        <Link to="/shop">
                          <button className="aa-browse-btn">
                            Browse all Product{" "}
                            <span className="fa fa-long-arrow-right" />
                          </button>
                        </Link>
                      </div>
                      {/* / men product category */}
                      {/* start women product category */}
                      <div className="tab-pane fade" id="women">
                        <ul className="aa-product-catg">
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/women/girl-1.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">This is Title</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sale">SALE!</span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/women/girl-2.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-hot">HOT!</span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/women/girl-3.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                  alt=""
                                  style={{ width: 250, height: 300 }}
                                 
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sold-out">
                              Sold Out!
                            </span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                  alt=""
                                  style={{ width: 250, height: 300 }}
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                  alt=""
                                  style={{ width: 250, height: 300 }}
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/women/girl-7.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sale">SALE!</span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/women/girl-1.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sold-out">
                              Sold Out!
                            </span>
                          </li>
                        </ul>
                        <a className="aa-browse-btn" href="#">
                          Browse all Product{" "}
                          <span className="fa fa-long-arrow-right" />
                        </a>
                      </div>
                      {/* / women product category */}
                      {/* start sports product category */}
                      <div className="tab-pane fade" id="sports">
                        <ul className="aa-product-catg">
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/sports/sport-1.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">This is Title</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sale">SALE!</span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/sports/sport-2.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sold-out">
                              Sold Out!
                            </span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/sports/sport-3.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/sports/sport-4.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-hot">HOT!</span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/sports/sport-5.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/sports/sport-6.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/sports/sport-7.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sale">SALE!</span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/sports/sport-8.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sold-out">
                              Sold Out!
                            </span>
                          </li>
                        </ul>
                      </div>
                      {/* / sports product category */}
                      {/* start electronic product category */}
                      <div className="tab-pane fade" id="electronics">
                        <ul className="aa-product-catg">
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/electronics/electronic-1.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">This is Title</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sale">SALE!</span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/electronics/electronic-2.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sold-out">
                              Sold Out!
                            </span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/electronics/electronic-3.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/electronics/electronic-4.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-hot">HOT!</span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/electronics/electronic-5.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/electronics/electronic-6.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/electronics/electronic-7.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sale">SALE!</span>
                          </li>
                          {/* start single product item */}
                          <li>
                            <figure>
                              <a
                                className="aa-product-img"
                                style={{ width: 250, height: 300 }}
                                href="#"
                              >
                                <img
                                  src="img/electronics/electronic-8.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart" />
                                Add To Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
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
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange" />
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search" />
                              </a>
                            </div>
                            {/* product badge */}
                            <span className="aa-badge aa-sold-out">
                              Sold Out!
                            </span>
                          </li>
                        </ul>
                        <a className="aa-browse-btn" href="#">
                          Browse all Product{" "}
                          <span className="fa fa-long-arrow-right" />
                        </a>
                      </div>
                      {/* / electronic product category */}
                    </div>
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
                                  <h3>{products.name}</h3>
                                  <div className="aa-price-block">
                                    <span className="aa-product-view-price">
                                      $34.99
                                    </span>
                                    <p className="aa-product-avilability">
                                      Avilability: <span>In stock</span>
                                    </p>
                                  </div>
                                  <p>{products.description}</p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Products section */}
      {/* banner section */}
      <section id="aa-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="aa-banner-area">
                  <a href="#">
                    <img
                      src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                      alt=""
                      style={{ width: "100%", height: "300px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* popular section */}
      <section id="aa-popular-category">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="aa-popular-category-area">
                  {/* start prduct navigation */}
                  <ul className="nav nav-tabs aa-products-tab">
                    <li className="active">
                      <a href="#popular" data-toggle="tab">
                        Popular
                      </a>
                    </li>
                    <li>
                      <a href="#featured" data-toggle="tab">
                        Featured
                      </a>
                    </li>
                    <li>
                      <a href="#latest" data-toggle="tab">
                        Latest
                      </a>
                    </li>
                  </ul>
                  {/* Tab panes */}
                  <div className="tab-content">
                    {/* Start men popular category */}
                    <div className="tab-pane fade in active" id="popular">
                      <ul className="aa-product-catg aa-popular-slider">
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                alt=""
                                style={{ width: 250, height: 300 }}
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Polo T-Shirt</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale">SALE!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                alt=""
                                style={{ width: 250, height: 300 }}
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Lorem ipsum doller</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sold-out">
                            Sold Out!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                alt=""
                                style={{ width: 250, height: 300 }}
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                          </figure>
                          <figcaption>
                            <h4 className="aa-product-title">
                              <a href="#">T-Shirt</a>
                            </h4>
                            <span className="aa-product-price">$45.50</span>
                          </figcaption>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sold-out">
                            Sold Out!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                alt=""
                                style={{ width: 250, height: 300 }}
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Lorem ipsum doller</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                alt=""
                                style={{ width: 250, height: 300 }}
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Polo T-Shirt</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                alt=""
                                style={{ width: 250, height: 300 }}
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Lorem ipsum doller</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-hot">HOT!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                alt=""
                                style={{ width: 250, height: 300 }}
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Polo T-Shirt</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-hot">HOT!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                alt=""
                                style={{ width: 250, height: 300 }}
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">This is Title</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale">SALE!</span>
                        </li>
                      </ul>
                      <a className="aa-browse-btn" href="#">
                        Browse all Product{" "}
                        <span className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                    {/* / popular product category */}
                    {/* start featured product category */}
                    <div className="tab-pane fade" id="featured">
                      <ul className="aa-product-catg aa-featured-slider">
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                alt=""
                                style={{ width: 250, height: 300 }}
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Polo T-Shirt</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale">SALE!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                alt=""
                                style={{ width: 250, height: 300 }}
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Lorem ipsum doller</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sold-out">
                            Sold Out!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                alt=""
                                style={{ width: 250, height: 300 }}
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                          </figure>
                          <figcaption>
                            <h4 className="aa-product-title">
                              <a href="#">T-Shirt</a>
                            </h4>
                            <span className="aa-product-price">$45.50</span>
                          </figcaption>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sold-out">
                            Sold Out!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                alt=""
                                style={{ width: 250, height: 300 }}
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Lorem ipsum doller</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                alt=""
                                style={{ width: 250, height: 300 }}
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Polo T-Shirt</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                alt=""
                                style={{ width: 250, height: 300 }}
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Lorem ipsum doller</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-hot">HOT!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                alt=""
                                style={{ width: 250, height: 300 }}
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Polo T-Shirt</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-hot">HOT!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                alt=""
                                style={{ width: 250, height: 300 }}
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">This is Title</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale">SALE!</span>
                        </li>
                      </ul>
                      <a className="aa-browse-btn" href="#">
                        Browse all Product{" "}
                        <span className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                    {/* / featured product category */}
                    {/* start latest product category */}
                    <div className="tab-pane fade" id="latest">
                      <ul className="aa-product-catg aa-latest-slider">
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/man/polo-shirt-2.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Polo T-Shirt</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale">SALE!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/women/girl-2.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Lorem ipsum doller</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sold-out">
                            Sold Out!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/man/t-shirt-1.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                          </figure>
                          <figcaption>
                            <h4 className="aa-product-title">
                              <a href="#">T-Shirt</a>
                            </h4>
                            <span className="aa-product-price">$45.50</span>
                          </figcaption>
                          <div className="aa-product-hvr-content">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to Wishlist"
                            >
                              <span className="fa fa-heart-o" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sold-out">
                            Sold Out!
                          </span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/women/girl-3.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Lorem ipsum doller</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/man/polo-shirt-1.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Polo T-Shirt</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="img/women/girl-4.png"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Lorem ipsum doller</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-hot">HOT!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                 src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                alt="polo shirt img"
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">Polo T-Shirt</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-hot">HOT!</span>
                        </li>
                        {/* start single product item */}
                        <li>
                          <figure>
                            <a className="aa-product-img" href="#">
                              <img
                                src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                                alt=""
                              />
                            </a>
                            <a className="aa-add-card-btn" href="#">
                              <span className="fa fa-shopping-cart" />
                              Add To Cart
                            </a>
                            <figcaption>
                              <h4 className="aa-product-title">
                                <a href="#">This is Title</a>
                              </h4>
                              <span className="aa-product-price">$45.50</span>
                              <span className="aa-product-price">
                                <del>$65.50</del>
                              </span>
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
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Compare"
                            >
                              <span className="fa fa-exchange" />
                            </a>
                            <a
                              href="#"
                              data-toggle2="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-toggle="modal"
                              data-target="#quick-view-modal"
                            >
                              <span className="fa fa-search" />
                            </a>
                          </div>
                          {/* product badge */}
                          <span className="aa-badge aa-sale">SALE!</span>
                        </li>
                      </ul>
                      <a className="aa-browse-btn" href="#">
                        Browse all Product{" "}
                        <span className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                    {/* / latest product category */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / popular section */}
      {/* Support section */}
      <section id="aa-support">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-support-area">
                {/* single support */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="aa-support-single">
                    <span className="fa fa-truck" />
                    <h4>FREE SHIPPING</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quam, nobis.
                    </p>
                  </div>
                </div>
                {/* single support */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="aa-support-single">
                    <span className="fa fa-clock-o" />
                    <h4>30 DAYS MONEY BACK</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quam, nobis.
                    </p>
                  </div>
                </div>
                {/* single support */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="aa-support-single">
                    <span className="fa fa-phone" />
                    <h4>SUPPORT 24/7</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quam, nobis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Support section */}
      {/* Testimonial */}
      <section id="aa-testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-testimonial-area">
                <ul className="aa-testimonial-slider">
                  {/* single slide */}
                  <li>
                    <div className="aa-testimonial-single">
                      <img
                        src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                        alt=""
                        className="aa-testimonial-img"
                      />
                      <span className="fa fa-quote-left aa-testimonial-quote" />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt distinctio omnis possimus, facere, quidem
                        qui!consectetur adipisicing elit. Sunt distinctio omnis
                        possimus, facere, quidem qui.
                      </p>
                      <div className="aa-testimonial-info">
                        <p>Allison</p>
                        <span>Designer</span>
                        <a href="#">Dribble.com</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Testimonial */}
      {/* Client Brand */}
      <section id="aa-client-brand">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-client-brand-area">
                <ul className="aa-client-brand-slider">
                  <li>
                    <a href="#">
                      <img
                        src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                        alt=""
                        style={{ width: 135, height: 33 }}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                        alt=""
                        style={{ width: 135, height: 33 }}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                        alt=""
                        style={{ width: 135, height: 33 }}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                        alt=""
                        style={{ width: 135, height: 33 }}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="../../src/assets/img/banner_dragon_ball_00000_05cb195981c248dd9de71a0e727e7b6a.jpg"
                        alt=""
                        style={{ width: 135, height: 33 }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / Client Brand */}
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

export default HomePage;
