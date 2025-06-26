// src/pages/Project.js
import React from 'react';
import './project.css';
import a from './mov.jpg';
import b from './ecom.jpg';
import c from './het.jpg';
import d from './qr.jpg';
import e from './port.jpg';
import f from './buiss.jpg';

const projects = [
  
  {
    title: "Movie Registration System",
    description:
      "This project is a RESTful API-based movie registration system where users can sign up, log in, recover passwords, and register movies. It prevents duplicate movie entries and allows filtering of the movie list by name or actor for easy access and management.",
    image: a,
    stack: ["Node.js", "Express", "MongoDB", "Nodemailer", "JWT", "React js", "Bootsrap"],
    type: "Backend",
    badgeClass: "badge-orange",
    codeLink: "",
    demoLink: "",
  },
  {
    title: "E-commerce Website",
    description:
      "This project is a front-end e-commerce website designed to visually showcase products with a user-friendly interface. It includes features like product listings, categories, and a modern layout to simulate a real online shopping experience.",
    image: b,
    stack: ["Node je","Express JS", "Postgresql", "React Js", "Tailwind", "Framer Motion"],
    type: "Full Stack",
    badgeClass: "badge-blue",
    codeLink: "",
    demoLink: "",
  },
  {
    title: "Hetrogeneous Data Storage Management System - (College) Final Year Project",
    description:
      "This system prevents duplicate file storage by detecting and linking identical files uploaded by different users, saving server space.",
    image: c,
    stack: ["Java", "Mysql", "Cloud server", "Spring boot", "Bootsrap"],
    type: "Frontend",
    badgeClass: "badge-pink",
    codeLink: "",
    demoLink: "",
  },
  {
    title: "QR Code Generator",
    description:
      "This project generates QR codes based on user input such as text, URLs, or contact details using a clean and responsive interface. It allows users to download or scan the QR code instantly, making data sharing fast and efficient.",
    image: d,
    stack: ["React", "Mysql", "Bootsrap"],
    type: "Full Stack",
    badgeClass: "badge-blue",
    codeLink: "",
    demoLink: "",
  },
  {
    title: "Portfolio Website Collection",
    description:
      "Designed and developed 3+ responsive portfolio websites to showcase skills, projects, and personal branding using modern web technologies. Each portfolio emphasizes clean UI/UX, mobile responsiveness, and tailored design for different audiences or themes.",
    image: e,
    stack: ["React", "Node js", "Express Js", "JWT", "Mongodb", "Bootsrap"],
    type: "Full Stack",
    badgeClass: "badge-blue",
    codeLink: "",
    demoLink: "",
  },
  {
    title: "Business Website",
    description:
      "This project is a professional business website designed to present company services, contact information, and brand identity. It features a clean layout, responsive design, and essential sections like About, Services, and Contact to enhance online presence.",
    image: f,
    stack: ["React", "Node js", "Express Js", "JWT", "Mongodb", "Bootsrap"],
    type: "Full Stack",
    badgeClass: "badge-blue",
    codeLink: "",
    demoLink: "",
  }
];

const Project = () => {
  return (
    <section className="project-section">
      <h2 className="project-heading">Projects</h2>
      <h6 className="project-note">📝 Note: The following projects are personal and not related to my current professional work.</h6>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img-container">
              <img src={project.image} alt={project.title} />
              <span className={`project-type ${project.badgeClass}`}>
                {project.type}
              </span>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.stack.map((tech, i) => (
                  <span className="tech-tag" key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.codeLink} className="project-btn">🛠 Code</a>
                <a href={project.demoLink} className="project-btn demo">🚀 Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
