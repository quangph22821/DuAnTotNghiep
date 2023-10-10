import { Link } from "react-router-dom";

const HeaderAdmin = () => (
    <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6">
            <Link
                to="/admin"
                className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
            >
                Admin
            </Link>
            
            <Link to="/admin/create">
                <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                    <i className="fas fa-plus mr-3" /> New Report
                </button>
            </Link>
        </div>
        <nav className="text-white text-base font-semibold pt-3">
            <Link
                to="/admin"
                className="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
            >
                <i className="fas fa-tachometer-alt mr-3" />
                Dashboard
            </Link>
            <Link
                to="/admin/products"
                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
            >
                <i className="fas fa-sticky-note mr-3" />
                List Products
            </Link>
            <Link
                to="/admin/category"
                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
            >
                <i className="fas fa-table mr-3" />
                List Category
            </Link>
            <Link
                to="/admin/cart"
                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
            >
                <i className="fas fa-align-left mr-3" />
                List Cart
            </Link>
            <Link
                to="/admin/comment"
                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
            >
                <i className="fas fa-tablet-alt mr-3" />
                List Comment
            </Link>
            <Link
                to="/admin/user"
                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
            >
                <i className="fas fa-calendar mr-3" />
                List User
            </Link>
            <Link
                to="/admin/"
                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
            >
                <i className="fas fa-calendar mr-3" />
                History
            </Link>
        </nav>
        <Link
            to="#"
            className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4"
        >
            <i className="fas fa-arrow-circle-up mr-3" />
            Log out
        </Link>
    </aside>
);

export default HeaderAdmin;
