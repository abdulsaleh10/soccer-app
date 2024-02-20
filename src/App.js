import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={ <Home />}></Route>
        <Route path='/services' element={ <Services />}></Route>
        <Route path='/products' element={ <Products />}></Route>
        <Route path='/sign-up' element={ <SignUp />}></Route>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;


