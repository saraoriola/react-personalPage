import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

import Header from './components/Header/Header';

import Home from './components/Home/Home'
import About from './components/About/About';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
