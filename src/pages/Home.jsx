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
import bgnews2 from "../asset_photos/bg-news-2.png";
import news1 from "../asset_photos/news-1.jpg";
import news2 from "../asset_photos/a-photo-about-news-restaurant-bakery.jpg";
import news3 from "../asset_photos/news-2.jpg";
import news4 from "../asset_photos/news-3.jpg";
import chef1 from "../asset_photos/chef2.png";
import chef2 from "../asset_photos/chef1.png";
import chef3 from "../asset_photos/chef3.png";

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
                  to="/aboutus"
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
      {/* About Us*/}
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="container-fluid mt-5 newsSection"
        style={{
          paddingBottom: "100px",
          border: "none",
        }}
      >
        <div className="container" style={{ paddingTop: "180px" }}>
          <div className="row">
            <h2 className="news-h2 poppins-font-bold col-md-6">News</h2>
          </div>
          <div className="row">
            {/* News Item 1 */}
            <div className="col-md-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src={news1} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">
                    Belly's Bakery Wins Prestigious Award for Best Artisan Bread
                    2024!
                  </h5>
                  <p className="card-text">
                    Belly's Bakery is proud to announce that our artisan bread
                    has been recognized as the best in the industry, winning a
                    prestigious award for its outstanding quality and taste.
                  </p>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    className="button-news btn poppins-font-light"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="col-md-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src={news2} className="card-img-top" alt="News 2" />
                <div className="card-body">
                  <h5 className="card-title">
                    Grand Opening of Belly's New Location – A Sweet Treat
                    Extravaganza!
                  </h5>
                  <p className="card-text">
                    Join us in celebrating the grand opening of Belly's Bakery's
                    new location! Indulge in a day full of sweet treats,
                    giveaways, and special promotions as we expand our
                    community.
                  </p>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    className="button-news btn poppins-font-light"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="col-md-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src={news3} className="card-img-top" alt="News 3" />
                <div className="card-body">
                  <h5 className="card-title">
                    Belly's Launches Innovative Gluten-Free and Vegan Pastry
                    Line!
                  </h5>
                  <p className="card-text">
                    Catering to diverse dietary , Belly's Bakery introduces a
                    delectable line of gluten-free and vegan pastries. Now
                    everyone can enjoy our mouthwatering treats without
                    compromising on taste or quality.
                  </p>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    className="button-news btn poppins-font-light"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* News Item 4 */}
            <div className="col-md-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src={news4} className="card-img-top" alt="News 4" />
                <div className="card-body">
                  <h5 className="card-title">
                    Belly's Bakery Supports Local Community with Charity Bake
                    Sale
                  </h5>
                  <p className="card-text">
                    Giving back is at the heart of Belly's Bakery. Join us for a
                    charity bake sale event where a portion will go towards
                    supporting local community initiatives. Indulge in delicious
                    pastries.
                  </p>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    className="button-news btn poppins-font-light"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 text-center">
            <div className="col-md-12">
              <button
                type="button"
                className="btn rounded-pill poppins-font-light"
                data-toggle="modal"
                data-target="#exampleModal"
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
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Testi*/}

      <div
        className="container-fluid mt-0 testimonialSection"
        style={{
          height: "1000px",
          backgroundSize: "cover",
          border: "none",
        }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div
              className="col-md-10 col-xl-8 text-center"
              style={{ paddingTop: "60px" }}
            >
              <h2
                className="testimoni-h2 poppins-font-bold col-md-"
                style={{ marginLeft: "50px" }}
              >
                Testimoni
              </h2>
              <p
                className="mb-4 pb-2 mb-md-5 pb-md-0 poppins-font-light"
                style={{ color: "white", fontSize: "20px" }}
              >
                "Customers Switching and Leaving Positive Reviews! Explore
                Impressive Testimonials from Those Who Have Enjoyed an
                Outstanding Experience with Us."
              </p>
            </div>
          </div>

          <div
            className="row text-center d-flex align-items-stretch rounded-5"
            style={{ backgroundColor: "#3f2305", padding: "100px" }}
          >
            {/* Testimonial 1 */}
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch"
            >
              <div className="card testimonial-card">
                <div
                  className="card-up"
                  style={{ backgroundColor: "#b0a59a" }}
                ></div>
                <div className="avatar mx-auto">
                  <img
                    src={chef1}
                    className="rounded-circle img-fluid"
                    alt="Arnold Poernomo"
                  />
                </div>
                <div className="card-body">
                  <h4 className="mb-4">Arnold Poernomo</h4>
                  <hr />
                  <p className="dark-grey-text mt-4">
                    <i className="fas fa-quote-left pe-2"></i> "Delightful Bites
                    Bakery not only crafts delicious pastries but also offers a
                    cozy ambiance. The attention to detail in their creations
                    reflects a passion for baking. I'm hooked and can't get
                    enough!"
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch"
            >
              <div className="card testimonial-card">
                <div
                  className="card-up"
                  style={{ backgroundColor: "#b0a59a" }}
                ></div>
                <div className="avatar mx-auto bg-white">
                  <img
                    src={chef2}
                    className="rounded-circle img-fluid"
                    alt="Renatta Olivia Moeloek"
                  />
                </div>
                <div className="card-body">
                  <h4 className="mb-4">Renatta Olivia Moeloek</h4>
                  <hr />
                  <p className="dark-grey-text mt-4">
                    <i className="fas fa-quote-left pe-2"></i> "As a regular
                    customer, I can confidently say that Delightful Bites Bakery
                    is a slice of heaven. The warmth of the staff, coupled with
                    their delectable pastries, makes it my go-to spot for all
                    things sweet."
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="col-md-4 mb-0 d-flex align-items-stretch"
            >
              <div className="card testimonial-card">
                <div
                  className="card-up"
                  style={{ backgroundColor: "#b0a59a" }}
                ></div>
                <div className="avatar mx-auto bg-white">
                  <img
                    src={chef3}
                    className="rounded-circle img-fluid"
                    alt="Juna Rorimpandey"
                  />
                </div>
                <div className="card-body">
                  <h4 className="mb-4">Juna Rorimpandey</h4>
                  <hr />
                  <p className="dark-grey-text mt-4">
                    <i className="fas fa-quote-left pe-2"></i> "The aroma of
                    freshly baked goods at Delightful Bites Bakery is
                    irresistible! Every treat I've tried has been a taste of
                    perfection. A true gem for pastry lovers!"
                  </p>
                </div>
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
