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
        <div className="about-grid">
          {/* Right side: About Me */}
          <div className="about-right">
            <div className="about-description">
              <div className="about-photo"></div> 
              <h2>About Me</h2>
              <p className='para'>
                As a Junior Backend Developer, I specialize in building scalable server-side applications using Node.js and Express.js, integrating PostgreSQL and MongoDB databases. I have hands-on experience in developing and maintaining robust RESTful APIs. Additionally, I have built end-to-end applications using the MERN stack—MongoDB, Express.js, React.js, and Node.js. My expertise includes manual product and API testing to ensure high-quality software delivery. I am committed to developing efficient and reliable web applications that meet user needs and business objectives.
              </p>
            </div>
          </div>

          {/* Left side: Experience & Education */}
          <div className="about-left">
            <h2 className="about-section">Experience & Education</h2>

            <article className="about-card">
              <div>
                <h3>Junior Backend Developer</h3>
                <p className="org">Magiva Technologies</p>
                <p className="date">Oct 2024 – Present</p>
                <p className="location">Erode, India</p>
              </div>
              <button
                className="view-btn"
                onClick={() =>
                  openModal(
                    "As a Junior Backend Developer at Magiva Technologies since October 2024, I have been instrumental in designing and implementing scalable server-side applications using Node.js and Express.js. My responsibilities encompass developing and maintaining robust RESTful APIs, ensuring seamless integration with PostgreSQL and MongoDB databases. I actively participate in manual product and API testing, identifying and resolving issues to enhance system performance and reliability. Collaborating closely with cross-functional teams, I contribute to optimizing backend processes, ensuring data integrity, and supporting the development of high-quality software solutions."
                  )
                }
              >
                View Description
              </button>
            </article>

            <article className="about-card">
              <div>
                <h3>Java Fullstack Developer</h3>
                <p className="org">Palle Technologies</p>
                <p className="date">Apr 2024 – Sept 2024</p>
                <p className="location">Bangalore, India</p>
              </div>
              <button
                className="view-btn"
                onClick={() =>
                  openModal(
                    "During my tenure at Palle Technologies, I honed my skills as a Java Full Stack Developer, gaining hands-on experience in both front-end and back-end development. I worked extensively with Java, leveraging frameworks like Spring Boot and Hibernate to build scalable and efficient server-side applications. On the front end, I utilized HTML, CSS, and JavaScript to create responsive and user-friendly interfaces. I also developed and integrated RESTful APIs, ensuring seamless communication between the client and server. Additionally, I worked with relational databases such as PostgreSQL and NoSQL databases like MongoDB, optimizing data storage and retrieval processes. This role significantly enhanced my proficiency in full-stack development, preparing me to tackle complex software development challenges."
                  )
                }
              >
                View Description
              </button>
            </article>

            <article className="about-card">
              <div>
                <h3>Nandha College of Technology</h3>
                <p className="org">B.Tech Information Technology</p>
                <p className="date">June 2020 – May 2024</p>
                <p className="location">Erode, India</p>
              </div>
              <button
                className="view-btn"
                onClick={() =>
                  openModal(
                    "Graduating with a B.Tech in Information Technology from Nandha College of Technology, I acquired a strong foundation in software development, data structures, and systems analysis. The curriculum emphasized practical learning, preparing students for industry challenges. I actively participated in workshops and training sessions, enhancing my technical skills and staying updated with emerging technologies. Engaging in various projects and internships further honed my problem-solving abilities and teamwork skills, equipping me for a successful career in technology."
                  )
                }
              >
                View Description
              </button>
            </article>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)}>
              ×
            </button>
            <h3 className="modal-title">Description</h3>
            <p className="modal-text">{modalContent}</p>
          </div>
        </div>
      )}
    </>
  );
  
};

export default About;
