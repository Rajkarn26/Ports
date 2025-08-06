// import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Aboutme from './pages/Aboutme';
// import Navbar from './pages/Navbar';
// import Skill from './pages/Skill';
// import Project from './pages/project';
// import Contact from './pages/contact';

// function App() 
// {
//   return (
//     <>
//       <Navbar />
//       <section id="home"><Home /></section>
//       <section id="about"><Aboutme /></section>
//       <section id="skill"><Skill /></section>
//       <section id="project"><Project /></section>
//       <section id="contact"><Contact /></section>
//     </> 
//   );
// }

// export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Navbar from './pages/Navbar';
import Skill from './pages/Skill';
import Project from './pages/project';
import Contact from './pages/contact';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <section id="home"><Home /></section>
            <section id="about"><Aboutme /></section>
            <section id="skill"><Skill /></section>
            <section id="project"><Project /></section>
            <section id="contact"><Contact /></section>
          </>
        } />
        <Route path="/error" element={<Error />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
