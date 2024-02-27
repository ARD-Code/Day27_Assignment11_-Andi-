import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./AboutUs.css";
import img1 from "../asset_photos/About us/male-cook-adding-flour-bowl-mixture_23-2148485371.jpg";
import img2 from "../asset_photos/About us/decorating-delicious-homemade-eclairs-with-chocolate-peanuts_155003-4396.jpg";
import img3 from "../asset_photos/About us/pastry-chef-preparing-chocolate-cake_23-2148696200.jpg";
import img4 from "../asset_photos/About us/end.jpg";

const AboutUs = () => {
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
      <div
        className="hero-section"
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="3000"
      >
        <div className="container">
          <h1
            className="display-4 poppins-font-bold"
            style={{ marginTop: "80px" }}
          >
            Our Story
          </h1>
          <p
            className="lead display-4 poppins-font-light"
            style={{ fontSize: "30px" }}
          >
            The telltale of our journey.
          </p>
        </div>
      </div>

      <div
        className="py-7 py-md-9"
        style={{ backgroundColor: "#3f2305", color: "white" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <hr className="hr-sm bg-primary" />
              <p className="fs-lg lh-lg mb-5 mb-md-0 poppins-font-light">
                Skilled craftsmanship, And the joy of savoring.
              </p>
            </div>
            <div className="col-md-4">
              <div className="media-decoration media-decoration-1 mb-5 mb-md-0">
                <div
                  className="media-decoration-border"
                  data-jarallax-element="-40"
                  style={{ transform: "translate3d(0px, -103.382px, 0px)" }}
                >
                  <div
                    id="jarallax-container-1"
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      zIndex: "-100",
                    }}
                  >
                    <div
                      style={{
                        pointerEvents: "none",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        willChange: "transform, opacity",
                        position: "fixed",
                      }}
                    ></div>
                  </div>
                </div>
                <img
                  className="media-decoration-img img-fluid"
                  src={img1}
                  alt="..."
                />
              </div>
            </div>
            <div className="col-md-5 align-self-center mx-auto">
              <h2 className="mb-2 poppins-font-bold">
                <em>Our</em> Sweet Journey
              </h2>
              <p className="mb-0 poppins-font-regular">
                Welcome to the heart of sweetness, where every indulgence is a
                celebration! At Belly's, our journey is a delightful tale of
                passion for desserts and an unwavering commitment to crafting
                memorable moments for our customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-7 py-md-9 my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5 align-self-center mx-auto order-md-1">
              <h2 className="mb-2 poppins-font-bold">
                <em>Served</em> with Love and Warmth
              </h2>
              <p className="mb-0 poppins-font-regular">
                More than a cafe, we are a home for those with a sweet tooth and
                a craving for warmth. Our team is fueled by a love for creating
                not just desserts but also a welcoming atmosphere. Whether
                you're indulging in a comforting cup of coffee or savoring our
                decadent cakes, every bite is served with a side of love and a
                dash of our genuine hospitality.
              </p>
            </div>
            <div className="col-md-4 order-md-2">
              <div className="media-decoration media-decoration-1 mb-5 mb-md-0">
                <div
                  className="media-decoration-border"
                  data-jarallax-element="-40"
                  style={{ transform: "translate3d(0px, -103.382px, 0px)" }}
                >
                  <div
                    id="jarallax-container-1"
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      zIndex: "-100",
                    }}
                  >
                    <div
                      style={{
                        pointerEvents: "none",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        willChange: "transform, opacity",
                        position: "fixed",
                      }}
                    ></div>
                  </div>
                </div>
                <img
                  className="media-decoration-img img-fluid"
                  src={img2}
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-7 py-md-9"
        style={{ backgroundColor: "#3f2305", color: "white" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <hr className="hr-sm bg-primary" />
              <p className="fs-lg lh-lg mb-5 mb-md-0 poppins-font-light">
                Every bite is served with a side of love.
              </p>
            </div>
            <div className="col-md-4">
              <div className="media-decoration media-decoration-1 mb-5 mb-md-0">
                <div
                  className="media-decoration-border"
                  data-jarallax-element="-40"
                  style={{ transform: "translate3d(0px, -103.382px, 0px)" }}
                >
                  <div
                    id="jarallax-container-1"
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      zIndex: "-100",
                    }}
                  >
                    <div
                      style={{
                        pointerEvents: "none",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        willChange: "transform, opacity",
                        position: "fixed",
                      }}
                    ></div>
                  </div>
                </div>
                <img
                  className="media-decoration-img img-fluid"
                  src={img3}
                  alt="..."
                />
              </div>
            </div>
            <div className="col-md-5 align-self-center mx-auto">
              <h2 className="mb-2 poppins-font-bold">
                <em>Served</em> with Love and Warmth
              </h2>
              <p className="mb-0 poppins-font-regular">
                More than a cafe, we are a home for those with a sweet tooth and
                a craving for warmth. Our team is fueled by a love for creating
                not just desserts but also a welcoming atmosphere. Whether
                you're indulging in a comforting cup of coffee or savoring our
                decadent cakes, every bite is served with a side of love and a
                dash of our genuine hospitality.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-7 py-md-9">
        <div className="container">
          <div className="row align-items-center justify-content-between my-5">
            <div className="col-md-6 order-md-2">
              <img
                className="img-fluid mw-md-120 clip-top-start"
                src={img4}
                alt="..."
              />
            </div>
            <div className="col-md-5 order-md-1">
              <p className="lead text-black poppins-font-regular about-us-1">
                Dessert Dreams Unleashed: The Belly's Chef Chronicle" Lead:
                "Step into a realm where sugar and artistry dance in perfect
                harmony. At Belly's, we craft more than desserts
              </p>
              <p className="lead text-black poppins-font-regular about-us-2">
                Beyond Desserts: Discovering Belly's Chef Magic" Lead: "At
                Belly's Chef, we invite you to delve into a world where desserts
                are not just confections but portals to enchantment.
              </p>
              <p className="mb-md-0 poppins-font-bold">
                <a
                  className="btn rounded-4 px-4"
                  style={{ backgroundColor: "#3f2305", color: "white" }}
                  href="contact.html"
                >
                  Contact Us
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
