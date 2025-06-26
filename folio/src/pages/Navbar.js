import React, { useState, useEffect } from 'react';
import './Home.css';
import { useTheme } from './ThemeContext';
import { FaLinkedin, FaGithub, FaInstagram, /*FaWhatsapp,*/ FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <header className={`custom-navbar d-none d-md-flex justify-content-between align-items-center px-4 ${theme}`}>
        <h3 className="logo">Portfolio</h3>
        <nav className="d-flex gap-4">
          <a href="#home" className="custom-link">Home</a>
          <a href="#about" className="custom-link">About Me</a>
          <a href="#skill" className="custom-link">Skills</a>
          <a href="#project" className="custom-link">Projects</a>
          <a href="#contact" className="custom-link">Contact Me</a>
        </nav>
        <div className="button-groups d-flex gap-2">
          <button
            className="btn-custom-navbar btn-outline"
            onClick={() => setModalOpen(true)}
          >
            Why HireMe
          </button>
          <button
            className="btn-custom-navbar btn-outline"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <div className={`mobile-nav d-md-none px-3 py-2 custom-mobile-bg ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="logo m-0">Portfolio</h4>
          <div className="d-flex gap-2 align-items-center">
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
            </button>
            <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle Menu">
              {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={sidebarOpen ? 'mobile-sidebar open' : 'mobile-sidebar'}>
        <a href="#home" className="custom-link" onClick={() => setSidebarOpen(false)}>Home</a>
        <a href="#about" className="custom-link" onClick={() => setSidebarOpen(false)}>About Me</a>
        <a href="#skill" className="custom-link" onClick={() => setSidebarOpen(false)}>Skills</a>
        <a href="#project" className="custom-link" onClick={() => setSidebarOpen(false)}>Projects</a>
        <a href="#contact" className="custom-link" onClick={() => setSidebarOpen(false)}>Contact Me</a>
        <button
          className="btn-custom-navbar btn-outline mt-2"
          onClick={() => {
            setSidebarOpen(false);
            setModalOpen(true);
          }}
        >
          Why Hire Me
        </button>

        <div className="footer-mobile-only mt-4">
          <p className="footer-copy">© 2025 Raju. All rights reserved.</p>
          <div className="footer-socials d-flex gap-3 justify-content-center mt-2">
            <a href="https://www.linkedin.com/in/rajkumar-saravanan-a685b6275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Rajkarn26" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/itz_cute_dude_?igsh=b2d5Y2xsY21tOW14&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            {/* <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a> */}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)}>×</button>
            <h2 className="modal-title">Why Hire Me?</h2>
            <p className="modal-text">
              I am a highly motivated backend developer with expertise in scalable server-side applications and RESTful APIs. 
              I bring strong problem-solving skills, dedication, and a proven track record of delivering efficient solutions using the MERN stack. 
              Collaborating with me means gaining a reliable, skilled developer ready to contribute to your team’s success.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
