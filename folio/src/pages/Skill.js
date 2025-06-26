import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaGitAlt, FaDocker,
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostgresql, SiMysql, SiJavascript, SiBootstrap, SiTailwindcss, SiFigma, SiAwslambda } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { MdDevices, MdStorage, MdBuild } from 'react-icons/md';
import './Skill.css';

const Skills = () => {
  const categories = [
    {
      title: 'Frontend Technologies',
      icon: <MdDevices className="category-icon" />,
      type: 'frontend',
      skills: [
        { name: 'HTML', percent: 90, icon: <FaHtml5 />, level: 'Advanced' },
        { name: 'CSS', percent: 87, icon: <FaCss3Alt />, level: 'Advanced' },
        { name: 'JavaScript', percent: 70, icon: <FaJs />, level: 'Intermediate' },
        { name: 'React', percent: 80, icon: <FaReact />, level: 'Intermediate' },
        { name: 'Bootstrap', percent: 85, icon: <SiBootstrap />, level: 'Advanced' },
        { name: 'Tailwind', percent: 75, icon: <SiTailwindcss />, level: 'Intermediate' },
      ]
    },
    {
      title: 'Backend Technologies',
      icon: <MdStorage className="category-icon" />,
      type: 'backend',
      skills: [
        { name: 'Node.js', percent: 90, icon: <FaNodeJs />, level: 'Advanced' },
        { name: 'Express.js', percent: 85, icon: <SiExpress />, level: 'Intermediate' },
        { name: 'MongoDB', percent: 75, icon: <SiMongodb />, level: 'Intermediate' },
        { name: 'PostgreSQL', percent: 90, icon: <SiPostgresql />, level: 'Advanced' },
        { name: 'Database Handling', percent: 85, icon: <SiMysql />, level: 'Intermediate' },
        { name: 'Backend Javascript', percent: 90, icon: <SiJavascript />, level: 'Advanced' },
      ]
    },
    {
      title: 'Other Technologies',
      icon: <MdBuild className="category-icon" />,
      type: 'other',
      skills: [
        { name: 'Git', percent: 85, icon: <FaGitAlt />, level: 'Advanced' },
        { name: 'REST API', percent: 90, icon: <TbApi />, level: 'Advanced' },
        { name: 'Docker', percent: 60, icon: <FaDocker />, level: 'Beginner' },
        { name: 'AWS', percent: 65, icon: <SiAwslambda />, level: 'Beginner' },
        { name: 'Figma', percent: 80, icon: <SiFigma />, level: 'Intermediate' },
      ]
    }
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-grid">
        {categories.map((cat, index) => (
          <div className="skills-card" key={index}>
            <div className="skills-card-header">
              {cat.icon}
              <h3>{cat.title}</h3>
            </div>
            {cat.skills.map((skill, i) => (
              <div className="skill-item" key={i}>
                <div className="skill-label">
                  <span className="skill-name">
                    {skill.icon} {skill.name}
                  </span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className={`skill-bar-fill ${cat.type}`}
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
                <div className="skill-level">{skill.level}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
