import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch } from "../store";
import { fetchProductsOne } from "../redux/products.reducer";
import { useEffect, useState } from "react";
import { IProducts } from "../models/products";
const DetailPage = () => {
  const navigate = useNavigate()
  const { _id }: any = useParams()
  console.log(_id);
  const dispatch = useDispatch<AppDispatch>()

  const [products, setproducts] = useState<IProducts>({} as IProducts)
  const fetchProductById = async (_id: string) => {
    const { product } = await dispatch(fetchProductsOne(_id)).unwrap()
    //   console.log(product);

    setproducts(product)
    // console.log(products);
  }
  useEffect(() => {
    fetchProductById(_id)
 
  }, [])


  // nhấp ảnh nhỏ ra ảnh lớn bên trên, dùng onclick của trong img vừa đổ
  const disImages=(u)=>{
    const mainImg= document.getElementById('Img')
    mainImg.src= u
  }
  console.log(products);

  return (
    <>
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
          <div className="grid grid-cols-5 gap-4 mt-4">
            <img
              src={products.img?.[1]}
              alt="product2"
              className="w-full cursor-pointer border w-[100%]"
              onClick={()=>disImages(products.img?.[1])}
            />
            <img
              src={products.img?.[2]}
              alt="product2"
              className="w-full cursor-pointer border w-[100%]"
              onClick={()=>disImages(products.img?.[2])}
            />
              <img
              src={products.img?.[3]}
              alt="product2"
              className="w-full cursor-pointer border w-[100%]"
              onClick={()=>disImages(products.img?.[3])}
            />
           <img
              src={products.img?.[4]}
              alt="product2"
              className="w-full cursor-pointer border w-[100%]"
              onClick={()=>disImages(products.img?.[4])}
            />
          </div>
        </div>
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
          <div className="pt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
            <div className="flex items-center gap-2">
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-xs"
                  className="hidden"
                />
                <label
                  htmlFor="size-xs"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XS
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-sm"
                  className="hidden"
                />
                <label
                  htmlFor="size-sm"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  S
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-m"
                  className="hidden"
                />
                <label
                  htmlFor="size-m"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  M
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-l"
                  className="hidden"
                />
                <label
                  htmlFor="size-l"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  L
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-xl"
                  className="hidden"
                />
                <label
                  htmlFor="size-xl"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XL
                </label>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                -
              </div>
              <div className="h-8 w-8 text-base flex items-center justify-center">
                4
              </div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                +
              </div>
            </div>
          </div>
          <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
            <a
              href="#"
              className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
            >
              <i className="fa-solid fa-bag-shopping" /> Add to cart
            </a>
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
    </>
  );
};

export default DetailPage;
