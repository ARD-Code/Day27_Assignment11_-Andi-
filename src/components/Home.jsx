import React, { useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const buttonStyle = {
    backgroundColor: "#3f2305",
    color: "white",
    padding: "10px 30px",
    fontSize: "18px",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div>
      <header className="container">
        <div className="container-fluid">
          <Navbar expand="lg" fixed="top">
            <div
              className="container rounded-4 shadow-lg px-4 py-md-2"
              style={{ backgroundColor: "#3f2305" }}
            >
              <Navbar.Brand className="order-1" href="index.html">
                <p className="mb-0 text-white poppins-font-bold">Belly's</p>
              </Navbar.Brand>
              <div className="ml-auto order-3">
                <Navbar.Toggle
                  aria-controls="navbarNav"
                  style={{ backgroundColor: "white" }}
                />
              </div>
              <Navbar.Collapse id="navbarNav" className="order-2">
                <Nav className="navbar-nav">
                  <Nav.Link
                    className="text-white poppins-font-regular"
                    href="aboutUs.html"
                  >
                    About us
                  </Nav.Link>
                  <Nav.Link
                    className="text-white poppins-font-regular"
                    href="menu.html"
                  >
                    Menu
                  </Nav.Link>
                  <Nav.Link
                    className="text-white poppins-font-regular"
                    href="contact.html"
                  >
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <div className="order-4 ml-auto">
                <Button
                  variant="outline-white"
                  className="rounded-pill btn-sm"
                  type="submit"
                >
                  <a href="cart.html">
                    <i
                      className="bi bi-basket2-fill px-2"
                      style={{ color: "#3f2305" }}
                    ></i>
                  </a>
                </Button>
              </div>
            </div>
          </Navbar>
        </div>
      </header>
      <div className="container mt-1 pt-5">
        <div
          className="backgroundCarousel jumbotron row"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="3000"
        >
          <div data-aos="fade-up" data-aos-duration="3000" className="col-md-6">
            <h1 className="display-4 poppins-font-bold">
              Discover the Artistry Behind Perfectly Crafted Desserts
            </h1>
            <p className="lead poppins-font-regular">
              Uncover the meticulous artistry that goes into each dessert,
              showcasing a commitment to perfection in both taste and
              presentation.
            </p>
            <div className="row justify-content pt-5">
              <button
                className="col-3 rounded-pill border-1 btn btn-outline-secondary ms-2 me-4 poppins-font-bold active"
                data-bs-target="#carouselExample"
                data-bs-slide-to="0"
              >
                Croissant
              </button>
              <button
                className="col-3 rounded-pill border-1 btn btn-outline-secondary ms-2 me-4 poppins-font-bold"
                data-bs-target="#carouselExample"
                data-bs-slide-to="1"
              >
                Éclair
              </button>
              <button
                className="col-3 rounded-pill border-1 btn btn-outline-secondary ms-2 me-4 poppins-font-bold"
                data-bs-target="#carouselExample"
                data-bs-slide-to="2"
              >
                Palmier
              </button>
            </div>

            <div
              className="row"
              style={{ marginTop: "100px", paddingLeft: "180px" }}
            >
              <a
                className="btn rounded-4 poppins-font-bold"
                style={{
                  backgroundColor: "#3f2305",
                  color: "white",
                  width: "200px",
                }}
                href="menu.html"
              >
                Order Now
              </a>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="3000"
            className="col-md-6"
          >
            <div
              id="carouselExample"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="asset/FOOD-1.png"
                    className="d-block w-100"
                    alt="Image 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="asset/eclair new.png"
                    className="d-block w-100"
                    alt="Image 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="asset/palmier.png"
                    className="d-block w-100"
                    alt="Image 3"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5 aboutUs">
        <div className="container" style={{ paddingTop: "70px" }}>
          <div data-aos="fade-up" data-aos-duration="3000" className="row">
            <h2 className="poppins-font-bold">About us</h2>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="row">
            <div className="col-md-6">
              <img
                className="rounded-start-5"
                src="./asset/bg-about us.png"
                alt="About Us"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="3000"
              className="col-md-6"
            >
              <p className="about-us-1 col poppins-font-regular">
                In our cozy haven, every dessert tells a story of quality
                craftsmanship and a dedication to culinary artistry. From the
                flaky layers of our signature croissants to the decadence of our
                velvety chocolate creations, each treat is a celebration of
                flavors, textures, and creativity. We believe in the power of
                desserts to evoke joy, create memories, and add a touch of
                sweetness to life's special moments.
              </p>
              <p className="about-us-2 col poppins-font-regular">
                Each bite is a delightful journey for your taste buds. Whether
                you're savoring a classic pastry, exploring our innovative
                confections, or sipping on a meticulously crafted cup of coffee,
                our commitment to excellence is evident in every detail.
              </p>
              <div className="col">
                <a
                  type="button"
                  className="btn rounded-pill poppins-font-light"
                  href="aboutUs.html"
                  style={buttonStyle}
                >
                  Click For More
                  <i className="bi bi-arrow-right-short"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#aa9176" }}>
        <footer className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 border-top">
          <div className="text-center text-md-left mb-3 mb-md-0">
            <p className="mb-0 text-white">© 2024 Belly's Corner</p>
          </div>

          <a href="/" className="text-center mb-3 mb-md-0 text-decoration-none">
            <p
              className="mb-0 text-white poppins-font-bold"
              style={{ fontSize: "x-large" }}
            >
              Belly's
            </p>
          </a>

          <ul className="nav justify-content-center justify-content-md-end">
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                About Us
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Home;
