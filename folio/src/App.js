import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Navbar from './pages/Navbar';

function App() 
{
  return (
    <>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><Aboutme /></section>
    </> 
  );
}

export default App;
