import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* header */}
      <header className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
          <a href="index.html">
            <img
              src="../../../src/assets/images/logo.svg"
              alt="Logo"
              className="w-32"
            />
          </a>
          <div className="w-full max-w-xl relative flex">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
              <i className="fa-solid fa-magnifying-glass" />
            </span>
            <input
              type="text"
              name="search"
              id="search"
              className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
              placeholder="search"
            />
            <button className="bg-primary border border-primary text-white px-8 pt-2.5 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex">
              Search
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <i className="fa-regular fa-heart" />
              </div>
              <div className="text-xs leading-3">Wishlist</div>
            </a>
            <Link
              to="/cart"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <i className="fa-solid fa-bag-shopping" />
              </div>
              <div className="text-xs leading-3">Cart</div>
            </Link>
            <Link
              to="/signin"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <i className="fa-regular fa-user" />
              </div>
              <div className="text-xs leading-3">Account</div>
            </Link>
          </div>
        </div>
      </header>
      {/* ./header */}

      {/* navbar */}
      <nav className="bg-gray-800">
        <div className="container flex">
          <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
            <div className="flex items-center space-x-6 capitalize">
              <Link
                to="/"
                className="text-gray-200 hover:text-white transition"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-gray-200 hover:text-white transition"
              >
                Shop
              </Link>
              <Link to="/about" className="text-gray-200 hover:text-white transition">
                About us
              </Link>
              <Link to="/contact" className="text-gray-200 hover:text-white transition">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* ./navbar */}
    </>
  );
};

export default Header;
