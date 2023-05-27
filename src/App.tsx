import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import PaymentComplete from './pages/PaymentComplete';
import Navbar from './components/NavBar';
import './fonts/Sarah-Script-Font.ttf'
import './fonts/Roboto-Regular.ttf'
import './fonts/Charlie.ttf'
import './fonts/Lauren-Regular.ttf'
import './fonts/Alexander-Regular.ttf'
import './App.css'
import Footer from './components/Footer';


const App: React.FC = () => {

  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/payment-complete/:id" element={<PaymentComplete />} />
        </Routes>
        <Footer/>
      </Router>
  );
};

export default App;