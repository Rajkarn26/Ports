import React from 'react';
import './Home.css';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Home = () => {

  return (
    <>
      <section className="home-section container-fluid">
      <div className="row min-vh-100 align-items-center">
        <div className="col-md-6 d-flex flex-column align-items-center profile-container order-1 order-md-2">
          <div className="profile-wrapper"></div>
          <div className="profile-details text-center mt-3">
            <h3 className="profile-name mt-3">Rajkumar</h3>
            <div className="d-flex justify-content-center flex-wrap gap-3 mb-2 location-email">
              <span className="profile-location">
                <MdLocationOn /> Erode, India
              </span>
              <span className="profile-email">
                <MdEmail /> s.rajkumar@gmail.com
              </span>
            </div>
            <p className="profile-bio">Junior Backend Developer.</p>
            <div className="social-icons mt-3">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://indeed.com" target="_blank" rel="noreferrer">
                <FaWhatsapp className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-column order-2 order-md-1">
          <h1 className="intro-title">Hi, I'm Raju</h1>
          <h2 className="animated-text">
            I'm a <span className="role">Backend Developer</span>
          </h2>
          <p className="intro-desc">
            Backend developer focused on scalable server-side applications with efficient RESTful API integration. Proficient in the MERN stack with hands-on project experience.
          </p>
          <div className="button-group mt-5">
            <a href="#contact" className="btn-custom">Contact Me</a>
            <a href="/cv.pdf" download className="btn-custom btn-outline">Download CV</a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
