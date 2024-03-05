import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Standings from './components/Pages/Standings';
import ComingSoon from './components/Pages/ComingSoon';
import Footer from './components/Footer';
import AboutUs from './components/Pages/AboutUs';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={ <Home />}></Route>
        <Route path='/standings' element={ <Standings />}></Route>
        <Route path='/about-us' element={ <AboutUs />}></Route>
        <Route path='/coming-soon' element={ <ComingSoon />}></Route>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;


