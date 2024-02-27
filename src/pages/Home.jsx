import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Home.css";
import FOOD1 from "../asset_photos/FOOD-1.png";
import FOOD2 from "../asset_photos/eclair new.png";
import FOOD3 from "../asset_photos/palmier.png";
import aboutusbg from "../asset_photos/bg-about us.png";

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
      <Navbar />
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
              <Link
                className="btn rounded-4 poppins-font-bold"
                style={{
                  backgroundColor: "#3f2305",
                  color: "white",
                  width: "200px",
                }}
                to="/menu"
              >
                Order Now
              </Link>
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
                  <img src={FOOD1} className="d-block w-100" alt="Image 1" />
                </div>
                <div className="carousel-item">
                  <img src={FOOD2} className="d-block w-100" alt="Image 2" />
                </div>
                <div className="carousel-item">
                  <img src={FOOD3} className="d-block w-100" alt="Image 3" />
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
      {/* jumbtron */}
      <div
        className="container-fluid mt-5"
        style={{
          background: "url(asset/bg-besar-about-us.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="container" style={{ paddingTop: "70px" }}>
          <div data-aos="fade-up" data-aos-duration="3000" className="row">
            <h2 className="poppins-font-bold">About us</h2>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="row">
            <div className="col-md-6">
              <img
                className="rounded-start-5"
                src={aboutusbg}
                alt="About Us Background"
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
                <Link
                  to="/aboutUs"
                  className="btn rounded-pill poppins-font-light"
                  style={{
                    backgroundColor: "#3f2305",
                    color: "white",
                    padding: "10px 30px",
                    fontSize: "18px",
                    border: "none",
                    borderRadius: "25px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  Click For More
                  <i className="bi bi-arrow-right-short"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
