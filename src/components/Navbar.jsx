import { Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

const Navbar = () => {
  return (
    <header className="container">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div
            className="container rounded-4 shadow-lg px-4 py-md-2"
            style={{ backgroundColor: "#3f2305" }}
          >
            <Link to="/" className="navbar-brand order-1">
              <p className="mb-0 text-white poppins-font-bold">Belly's</p>
            </Link>
            <div className="ml-auto order-3"></div>
            <div className="collapse navbar-collapse order-2" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/aboutUs"
                    className="nav-link text-white poppins-font-regular"
                  >
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="nav-link text-white poppins-font-regular"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
