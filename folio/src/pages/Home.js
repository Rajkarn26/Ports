import React from 'react';
import './Home.css';
import { FaLinkedin, FaGithub, FaInstagram, /*FaWhatsapp*/ } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import cv from './cv.pdf';

const Home = () => {
  return (
    <>
      <section className="home-section container-fluid">
        {/* 🔵 Animated Background */}
        <div className="animated-bg">
          <span>💻</span>
          <span>📁</span>
          <span>🧑‍💻</span>
          <span>⚙️</span>
          <span>🌐</span>
        </div>

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
                <a href="https://www.linkedin.com/in/rajkumar-saravanan-a685b6275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer">
                  <FaLinkedin className="social-icon" />
                </a>
                <a href="https://github.com/Rajkarn26" target="_blank" rel="noreferrer">
                  <FaGithub className="social-icon" />
                </a>
                <a href="https://www.instagram.com/itz_cute_dude_?igsh=b2d5Y2xsY21tOW14&utm_source=qr" target="_blank" rel="noreferrer">
                  <FaInstagram className="social-icon" />
                </a>
                {/* <a href="https://indeed.com" target="_blank" rel="noreferrer">
                  <FaWhatsapp className="social-icon" />
                </a> */}
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
              <a href={cv} className="btn-custom btn-outline" download>Download CV</a>
            </div>
            <div className="stats-wrapper">
              <div className="section-divider"></div>
              <div className="stats-container mt-3">
                <div className="stat-item">
                  <h3>1+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3>5+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h3>100%</h3>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
