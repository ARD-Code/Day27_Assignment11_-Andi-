import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Contact.css";

const Contact = () => {
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
      <div className="hero-section">
        <div className="container">
          <h1
            className="display-4 poppins-font-bold"
            style={{ marginTop: "80px" }}
          >
            Our Contact
          </h1>
          <p
            className="lead display-4 poppins-font-regular"
            style={{ fontSize: "30px" }}
          >
            Sweetest Connection to Belly's.
          </p>
        </div>
      </div>

      <div className="py-7 py-md-9 my-5" style={{ color: "#3f2305" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
              <h2 className="mb-2 poppins-font-bold">Let's Chat Desserts</h2>
              <p className="mb-6 poppins-font-light">
                Whether you have a craving that needs satisfying, want to
                discuss a custom dessert creation, or simply share your sweet
                thoughts with us, we're just a message away.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 order-md-2">
              <h4 className="mb-2 text-xs poppins-font-bold">Write to us</h4>
              <p className="mb-4 font-serif poppins-font-light">
                <a href="#" style={{ color: "#3f2305" }}>
                  info@bellys.com
                </a>
              </p>

              <h4 className="mb-2 text-xs poppins-font-bold">Call us</h4>
              <p className="mb-4 font-serif poppins-font-light">
                <a href="tel:+1234567890" style={{ color: "#3f2305" }}>
                  +1 234 567 890
                </a>
              </p>

              <h4 className="mb-2 text-xs poppins-font-bold">Visit us</h4>
              <p className="mb-4 font-serif poppins-font-light">
                Main St, anfield, State, 1018
              </p>

              <h4 className="mb-2 text-xs poppins-font-bold">Social links</h4>
              <div className="d-flex mb-4 font-serif">
                <a
                  className="d-block poppins-font-light me-3"
                  style={{ color: "#3f2305" }}
                  href="#"
                >
                  <i className="bi bi-twitter-x"></i> Twitter
                </a>
                <a
                  className="d-block poppins-font-light me-3"
                  style={{ color: "#3f2305" }}
                  href="#"
                >
                  <i className="bi bi-facebook"></i> Facebook
                </a>
                <a
                  className="d-block poppins-font-light"
                  style={{ color: "#3f2305" }}
                  href="#"
                >
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </div>

              <h4 className="mb-2 text-xs poppins-font-bold">
                Additional Information
              </h4>
              <p className="mb-4 font-serif poppins-font-regular">
                We are open Monday to Friday from 9 AM to 6 PM. Feel free to
                drop by for a sweet treat!
              </p>
            </div>

            <div className="col-md-9 order-md-1">
              <form className="block-decoration-2" id="contactForm">
                <input type="hidden" name="contact_number" />

                <div className="mb-3">
                  <label className="visually-hidden" htmlFor="user_name">
                    Full name
                  </label>
                  <input
                    className="form-control"
                    id="user_name"
                    name="user_name"
                    type="text"
                    placeholder="Full name"
                    required=""
                  />
                </div>

                <div className="mb-3">
                  <label className="visually-hidden" htmlFor="user_email">
                    E-mail address
                  </label>
                  <input
                    className="form-control"
                    id="user_email"
                    name="user_email"
                    type="email"
                    placeholder="E-mail address"
                    required=""
                  />
                </div>

                <div className="mb-3">
                  <label className="visually-hidden" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="9"
                    placeholder="Message"
                    required=""
                  ></textarea>
                </div>

                <button
                  className="btn"
                  type="submit"
                  style={{ backgroundColor: "#3f2305", color: "white" }}
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
