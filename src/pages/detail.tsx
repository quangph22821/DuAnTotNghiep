import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../store";
import { fetchProductsOne } from "../redux/products.reducer";
import { useEffect, useLayoutEffect, useState } from "react";
import { IProducts } from "../models/products";
import { useForm } from "react-hook-form";
import { fetchAddToCard } from "../redux/cart.reducer";
const DetailPage = () => {
  const [quantity, setQuantity] = useState(1)
  const { _id }: any = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const { handleSubmit, register, setValue } = useForm()
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
    </>
  );
};

export default DetailPage;
