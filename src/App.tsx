import React, { useEffect } from 'react';
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
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from 'axios';


const App: React.FC = () => {

  const wakeupJeff = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_API_URL}wakeupJeff`);
      console.log("awake")
    } catch (error) {
      console.log("error", error)
    }

  }
  useEffect(() => {
    wakeupJeff()
  },[])

  return (
      <Router>
        <Navbar />
        <div style={{width: '100%', height: '6vh'}}/>
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
