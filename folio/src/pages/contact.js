// File: src/pages/Contact.js
import React, { useState } from 'react';
import './contact.css';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/contact_api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      setResponseMsg(data.message || 'Message sent!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setResponseMsg('❌ Something went wrong. Please try again.');
    }
  };

  return (
    <div className="contact-page">
      <h2 className="contact-heading">Contact Me</h2>

      <div className="contact-main container">
        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-md-6">
            <div className="contact-details">
              <div className="detail-box">
                <FiMail className="icon" />
                <div>
                  <h4>Email</h4>
                  <p>s.rajkumar@gmail.com</p>
                </div>
              </div>
              <div className="detail-box">
                <FiPhone className="icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+91 6385364559</p>
                </div>
              </div>
              <div className="detail-box">
                <FiMapPin className="icon" />
                <div>
                  <h4>Location</h4>
                  <p>Coimbatore, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="form-control"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder="Tell me about your project..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  <FiSend /> Send Message
                </button>
              </form>

              {/* Response Message */}
              {responseMsg && <p className="response-message">{responseMsg}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-columns">
          <div className="about">
            <h3>Raju ❤</h3>
            <p>Creative Developer focused on building user-friendly, accessible, and responsive digital experiences.</p>
            <div className="social-icons">
              <a href="https://github.com/Rajkarn26" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/rajkumar-saravanan-a685b6275" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.instagram.com/itz_cute_dude_" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
          <div className="links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skill">Skills</a></li>
              <li><a href="#project">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="get-in-touch">
            <h4>Get In Touch</h4>
            <p>s.rajkumar@gmail.com</p>
            <p>Open for collaborations</p>
            <p>Typically replies within 1–2 days</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Raju. Made with <span className="heart">❤</span> and <span className="coffee">☕</span></p>
          <button className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top ↑
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
