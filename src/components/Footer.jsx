import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

const Footer = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#aa9176" }}>
      <footer className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 border-top">
        <div className="text-center text-md-left mb-3 mb-md-0">
          <p className="mb-0 text-white">© 2024 Belly's Corner</p>
        </div>

        <Link to="/" className="text-center mb-3 mb-md-0 text-decoration-none">
          <p
            className="mb-0 text-white poppins-font-bold"
            style={{ fontSize: "large" }}
          >
            Belly's
          </p>
        </Link>

        <ul className="nav justify-content-center justify-content-md-end">
          <li className="nav-item">
            <Link to={"/"} className="nav-link text-white">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/contact"} className="nav-link text-white">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/aboutus"} className="nav-link text-white">
              About Us
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
