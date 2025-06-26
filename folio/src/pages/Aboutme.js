import React, { useState } from 'react';
import './Aboutme.css';

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (description) => {
    setModalContent(description);
    setModalOpen(true);
  };

  return (
    <>
      <section className="about-page">
        <h1 className="about-main-heading">About Me</h1>
        <div className="about-grid">

          {/* Profile Card */}
          <div className="about-right">
            <div className="about-description">
              <div className="about-photo"></div>
              <h2 className="about-subheading">Who I Am</h2>
              <p className="para">
                As a Junior Backend Developer, I specialize in building scalable server-side applications using Node.js and Express.js, integrating PostgreSQL and MongoDB databases. I have hands-on experience developing robust RESTful APIs and full-stack MERN applications. With a focus on quality, I also test APIs and products manually to ensure reliability. I'm passionate about building efficient and user-centric web solutions.
              </p>
            </div>
          </div>

          {/* Experience & Education */}
          <div className="about-left">
            <h2 className="about-section">Experience & Education</h2>

            {[
              {
                title: 'Junior Backend Developer',
                org: 'Magiva Technologies',
                date: 'Oct 2024 – Present',
                location: 'Erode, India',
                desc: 'At Magiva Technologies, I develop scalable server-side apps using Node.js, Express.js, PostgreSQL, and MongoDB. I contribute to RESTful APIs, participate in testing, and collaborate across teams for backend optimization.'
              },
              {
                title: 'Java Fullstack',
                org: 'Palle Technologies',
                date: 'Apr 2024 – Sept 2024',
                location: 'Bangalore, India',
                desc: 'I worked on full-stack Java applications using Spring Boot, Hibernate, and front-end tech (HTML, CSS, JS). Gained solid hands-on experience in REST API integration and working with databases like PostgreSQL and MongoDB.'
              },
              {
                title: 'B.Tech Information Technology',
                org: 'Nandha College of Technology',
                date: 'June 2020 – May 2024',
                location: 'Erode, India',
                desc: 'I studied core programming, databases, and systems analysis. Participated in workshops, built academic projects, and gained a solid foundation in software development and problem-solving.'
              },
            ].map((item, idx) => (
              <article key={idx} className="about-card">
                <div>
                  <h3>{item.title}</h3>
                  <p className="org">{item.org}</p>
                  <p className="date">{item.date}</p>
                  <p className="location">{item.location}</p>
                </div>
                <button
                  className="view-btn"
                  onClick={() => openModal(item.desc)}
                >
                  View Description
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)}>×</button>
            <h3 className="modal-title">Description</h3>
            <p className="modal-text">{modalContent}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
