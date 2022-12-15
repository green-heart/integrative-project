import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Navbar} from './components/statics/navbar/Navbar';
import { RegisterUser } from './pages/register/Register';
import { Footer } from './components/statics/footer/Footer';
import { Login } from './pages/login/Login';
import { Home } from './pages/home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Login  />} />

        <Route path="/login" element={<Login  />} />

        <Route path="/home" element={<Home />} />

        <Route path="/registeruser" element={<RegisterUser />} />
                 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
