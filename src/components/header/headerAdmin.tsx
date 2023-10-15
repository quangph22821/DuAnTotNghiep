import { Link } from "react-router-dom";

const HeaderAdmin = () => (
  <>
    <nav className="topnav navbar navbar-light">
      <button
        type="button"
        className="navbar-toggler text-muted mt-2 p-0 mr-3 collapseSidebar"
      >
        <i className="fe fe-menu navbar-toggler-icon" />
      </button>
      <form className="form-inline mr-auto searchform text-muted">
        <input
          className="form-control mr-sm-2 bg-transparent border-0 pl-4 text-muted"
          type="search"
          placeholder="Type something..."
          aria-label="Search"
        />
      </form>
      <ul className="nav">
        <li className="nav-item">
          <a
            className="nav-link text-muted my-2"
            href="#"
            id="modeSwitcher"
            data-mode="light"
          >
            <i className="fe fe-sun fe-16" />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-muted my-2"
            href="./#"
            data-toggle="modal"
            data-target=".modal-shortcut"
          >
            <span className="fe fe-grid fe-16" />
          </a>
        </li>
        <li className="nav-item nav-notif">
          <a
            className="nav-link text-muted my-2"
            href="./#"
            data-toggle="modal"
            data-target=".modal-notif"
          >
            <span className="fe fe-bell fe-16" />
            <span className="dot dot-md bg-success" />
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link text-muted pr-0"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="avatar avatar-sm mt-2">
              <img
                src="./assets/avatars/face-1.jpg"
                alt="..."
                className="avatar-img rounded-circle"
              />
            </span>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a className="dropdown-item" href="#">
              Profile
            </a>
            <a className="dropdown-item" href="#">
              Settings
            </a>
            <a className="dropdown-item" href="#">
              Activities
            </a>
          </div>
        </li>
      </ul>
    </nav>
    <aside
      className="sidebar-left border-right bg-white shadow"
      id="leftSidebar"
      data-simplebar=""
    >
      <a
        href="#"
        className="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3"
        data-toggle="toggle"
      >
        <i className="fe fe-x">
          <span className="sr-only" />
        </i>
      </a>
      <nav className="vertnav navbar navbar-light">
        {/* nav bar */}
        <div className="w-100 mb-4 d-flex">
          <a
            className="navbar-brand mx-auto mt-2 flex-fill text-center"
            href="./index.html"
          >
            <svg
              version="1.1"
              id="logo"
              className="navbar-brand-img brand-sm"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 120 120"
              xmlSpace="preserve"
            >
              <g>
                <polygon className="st0" points="78,105 15,105 24,87 87,87 	" />
                <polygon className="st0" points="96,69 33,69 42,51 105,51 	" />
                <polygon className="st0" points="78,33 15,33 24,15 87,15 	" />
              </g>
            </svg>
          </a>
        </div>
        <ul className="navbar-nav flex-fill w-100 mb-2">
          <Link
            to="/admin"
            data-toggle="collapse"
            aria-expanded="false"
            className="nav-link"
          >
            <i className="fe fe-home fe-16" />
            <span className="ml-3 item-text">Dashboard</span>
          </Link>
        </ul>
        <p className="text-muted nav-heading mt-4 mb-1">
          <span>Manager</span>
        </p>
        <ul className="navbar-nav flex-fill w-100 mb-2">
          <Link
            to="/admin/listPro"
            data-toggle="collapse"
            aria-expanded="false"
            className="nav-link"
          >
            <i className="fe fe-box fe-16" />
            <span className="ml-3 item-text">Products</span>
          </Link>
          <li className="nav-item w-100">
            <Link className="nav-link" to="/admin/listCate">
              <i className="fe fe-layers fe-16" />
              <span className="ml-3 item-text">Category</span>
            </Link>
          </li>
          <li className="nav-item w-100">
            <Link className="nav-link" to="/admin/listMate">
              <i className="fe fe-layers fe-16" />
              <span className="ml-3 item-text">Material</span>
            </Link>
          </li>
          <li className="nav-item w-100">
            <Link className="nav-link" to="/admin/listOri">
              <i className="fe fe-layers fe-16" />
              <span className="ml-3 item-text">Orgin</span>
            </Link>
          </li>
          <Link
            to="/admin/listUser"
            data-toggle="collapse"
            aria-expanded="false"
            className="nav-link"
          >
            <i className="fe fe-credit-card fe-16" />
            <span className="ml-3 item-text">Users</span>
          </Link>
          <Link
            to="/admin/listCart"
            data-toggle="collapse"
            aria-expanded="false"
            className="nav-link"
          >
            <i className="fe fe-grid fe-16" />
            <span className="ml-3 item-text">Cart</span>
          </Link>
          <Link
            to="/admin/listComment"
            data-toggle="collapse"
            aria-expanded="false"
            className="nav-link"
          >
            <i className="fe fe-pie-chart fe-16" />
            <span className="ml-3 item-text">Comment</span>
          </Link>
        </ul>
        <p className="text-muted nav-heading mt-4 mb-1">
          <span>Apps</span>
        </p>
        <ul className="navbar-nav flex-fill w-100 mb-2">
          <li className="nav-item w-100">
            <a className="nav-link" href="calendar.html">
              <i className="fe fe-calendar fe-16" />
              <span className="ml-3 item-text">Calendar</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              href="#contact"
              data-toggle="collapse"
              aria-expanded="false"
              className="nav-link"
            >
              <i className="fe fe-book fe-16" />
              <span className="ml-3 item-text">Contacts</span>
            </a>
            <ul className="collapse list-unstyled pl-4 w-100" id="contact">
              <a className="nav-link pl-3" href="./contacts-list.html">
                <span className="ml-1">Contact List</span>
              </a>
              <a className="nav-link pl-3" href="./contacts-grid.html">
                <span className="ml-1">Contact Grid</span>
              </a>
              <a className="nav-link pl-3" href="./contacts-new.html">
                <span className="ml-1">New Contact</span>
              </a>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              href="#profile"
              data-toggle="collapse"
              aria-expanded="false"
              className="nav-link"
            >
              <i className="fe fe-user fe-16" />
              <span className="ml-3 item-text">Profile</span>
            </a>
            <ul className="collapse list-unstyled pl-4 w-100" id="profile">
              <a className="nav-link pl-3" href="./profile.html">
                <span className="ml-1">Overview</span>
              </a>
              <a className="nav-link pl-3" href="./profile-settings.html">
                <span className="ml-1">Settings</span>
              </a>
              <a className="nav-link pl-3" href="./profile-security.html">
                <span className="ml-1">Security</span>
              </a>
              <a className="nav-link pl-3" href="./profile-notification.html">
                <span className="ml-1">Notifications</span>
              </a>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              href="#fileman"
              data-toggle="collapse"
              aria-expanded="false"
              className="nav-link"
            >
              <i className="fe fe-folder fe-16" />
              <span className="ml-3 item-text">File Manager</span>
            </a>
            <ul className="collapse list-unstyled pl-4 w-100" id="fileman">
              <a className="nav-link pl-3" href="./files-list.html">
                <span className="ml-1">Files List</span>
              </a>
              <a className="nav-link pl-3" href="./files-grid.html">
                <span className="ml-1">Files Grid</span>
              </a>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              href="#support"
              data-toggle="collapse"
              aria-expanded="false"
              className="nav-link"
            >
              <i className="fe fe-compass fe-16" />
              <span className="ml-3 item-text">Help Desk</span>
            </a>
            <ul className="collapse list-unstyled pl-4 w-100" id="support">
              <a className="nav-link pl-3" href="./support-center.html">
                <span className="ml-1">Home</span>
              </a>
              <a className="nav-link pl-3" href="./support-tickets.html">
                <span className="ml-1">Tickets</span>
              </a>
              <a className="nav-link pl-3" href="./support-ticket-detail.html">
                <span className="ml-1">Ticket Detail</span>
              </a>
              <a className="nav-link pl-3" href="./support-faqs.html">
                <span className="ml-1">FAQs</span>
              </a>
            </ul>
          </li>
        </ul>
        <p className="text-muted nav-heading mt-4 mb-1">
          <span>Extra</span>
        </p>
        <ul className="navbar-nav flex-fill w-100 mb-2">
          <li className="nav-item dropdown">
            <a
              href="#pages"
              data-toggle="collapse"
              aria-expanded="false"
              className="nav-link"
            >
              <i className="fe fe-file fe-16" />
              <span className="ml-3 item-text">Pages</span>
            </a>
            <ul className="collapse list-unstyled pl-4 w-100 w-100" id="pages">
              <li className="nav-item">
                <a className="nav-link pl-3" href="./page-orders.html">
                  <span className="ml-1 item-text">Orders</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pl-3" href="./page-timeline.html">
                  <span className="ml-1 item-text">Timeline</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pl-3" href="./page-invoice.html">
                  <span className="ml-1 item-text">Invoice</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pl-3" href="./page-404.html">
                  <span className="ml-1 item-text">Page 404</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pl-3" href="./page-500.html">
                  <span className="ml-1 item-text">Page 500</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pl-3" href="./page-blank.html">
                  <span className="ml-1 item-text">Blank</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              href="#auth"
              data-toggle="collapse"
              aria-expanded="false"
              className="nav-link"
            >
              <i className="fe fe-shield fe-16" />
              <span className="ml-3 item-text">Authentication</span>
            </a>
            <ul className="collapse list-unstyled pl-4 w-100" id="auth">
              <a className="nav-link pl-3" href="./auth-login.html">
                <span className="ml-1">Login 1</span>
              </a>
              <a className="nav-link pl-3" href="./auth-login-half.html">
                <span className="ml-1">Login 2</span>
              </a>
              <a className="nav-link pl-3" href="./auth-register.html">
                <span className="ml-1">Register</span>
              </a>
              <a className="nav-link pl-3" href="./auth-resetpw.html">
                <span className="ml-1">Reset Password</span>
              </a>
              <a className="nav-link pl-3" href="./auth-confirm.html">
                <span className="ml-1">Confirm Password</span>
              </a>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              href="#layouts"
              data-toggle="collapse"
              aria-expanded="false"
              className="nav-link"
            >
              <i className="fe fe-layout fe-16" />
              <span className="ml-3 item-text">Layout</span>
            </a>
            <ul className="collapse list-unstyled pl-4 w-100" id="layouts">
              <li className="nav-item">
                <a className="nav-link pl-3" href="./index.html">
                  <span className="ml-1 item-text">Default</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pl-3" href="./index-horizontal.html">
                  <span className="ml-1 item-text">Top Navigation</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pl-3" href="./index-boxed.html">
                  <span className="ml-1 item-text">Boxed</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <p className="text-muted nav-heading mt-4 mb-1">
          <span>Documentation</span>
        </p>
        <ul className="navbar-nav flex-fill w-100 mb-2">
          <li className="nav-item w-100">
            <a className="nav-link" href="../docs/index.html">
              <i className="fe fe-help-circle fe-16" />
              <span className="ml-3 item-text">Getting Start</span>
            </a>
          </li>
        </ul>
        <div className="btn-box w-100 mt-4 mb-1">
          <a
            href="https://themeforest.net/item/tinydash-bootstrap-html-admin-dashboard-template/27511269"
            target="_blank"
            className="btn mb-2 btn-primary btn-lg btn-block"
          >
            <i className="fe fe-shopping-cart fe-12 mx-2" />
            <span className="small">Buy now</span>
          </a>
        </div>
      </nav>
    </aside>
  </>
);

export default HeaderAdmin;
